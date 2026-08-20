//---------------------------------------main
const PAR_BASIC = 0x00 << 2; // 0
const PAR_AVANC = 0x01 << 2; // 4
const PAR_EXPERT = 0x02 << 2; // 12
const PAR_MASK = 0x03 << 2; // 12

const MAPA_NIVEL = {
  basico: PAR_BASIC,
  avancado: PAR_AVANC,
  expert: PAR_EXPERT
};

const nomes = {
  basico: "Básico",
  avancado: "Avançado",
  expert: "Expert"
};

let setAtual = getSetFromURL();
let nivelAtualMask = MAPA_NIVEL[setAtual] ?? PAR_BASIC;



let file = null;
let fileURL = null;

async function iniciar() {



  file = await getFileName();

  if (!file) {
    console.log("Nenhum arquivo selecionado.");
    return;
  }

  document.getElementById("tituloSet").innerText =
    `Parâmetros ${nomes[setAtual] || setAtual}`;

  console.log("file:", file.name);

  // Cria uma URL temporária para o arquivo escolhido
  fileURL = URL.createObjectURL(file);

  // cria script dinamicamente
  const script = document.createElement("script");

  script.src = fileURL;

  script.onload = () => {
    console.log("DATA carregado:", DATA);
    render();

    // A URL não é mais necessária depois que o script foi carregado
    URL.revokeObjectURL(fileURL);
  };

  script.onerror = (err) => {
    console.error("Erro carregando arquivo:", err);
  };

  document.head.appendChild(script);
}

iniciar();


//-------------------------------------------- Funções de Apoio Bitwise
function temAcesso(paramBitmask, usuarioMask) {
  const idInt = parseInt(paramBitmask, 16) & PAR_MASK;
  console.log("ID convertido:", idInt, "  ", usuarioMask);
  return (idInt) <= usuarioMask;
}


function salvarArquivoNoDB(file) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("ParametrosDB", 1);
    
    request.onupgradeneeded = (e) => {
      e.target.result.createObjectStore("arquivos");
    };
    
    request.onsuccess = (e) => {
      const db = e.target.result;
      const tx = db.transaction("arquivos", "readwrite");
      tx.objectStore("arquivos").put(file, "arquivoAtual");
      tx.oncomplete = () => resolve();
    };
    
    request.onerror = (e) => reject(e);
  });
}

function obterArquivoDoDB() {
  return new Promise((resolve) => {
    const request = indexedDB.open("ParametrosDB", 1);
    
    request.onupgradeneeded = (e) => {
      e.target.result.createObjectStore("arquivos");
    };
    
    request.onsuccess = (e) => {
      const db = e.target.result;
      const tx = db.transaction("arquivos", "readonly");
      const req = tx.objectStore("arquivos").get("arquivoAtual");
      
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    };
    
    request.onerror = () => resolve(null);
  });
}

async function trocarArquivo() {
  // Limpa o banco e recarrega
  const request = indexedDB.open("ParametrosDB", 1);
  request.onsuccess = (e) => {
    const db = e.target.result;
    const tx = db.transaction("arquivos", "readwrite");
    tx.objectStore("arquivos").delete("arquivoAtual");
    tx.oncomplete = () => location.reload();
  };
}

//--------------------------------------------function
 async function getFileName() {
 // const params = new URLSearchParams(window.location.search);

// 1. Tenta buscar o arquivo salvo anteriormente
  const arquivoSalvo = await obterArquivoDoDB();
  if (arquivoSalvo) {
    console.log("Arquivo carregado do cache do navegador:", arquivoSalvo.name);
    return arquivoSalvo;
  }


return new Promise((resolve) => {
    const input = document.getElementById("fileInput");

    input.onchange = async () => {
      if (input.files.length > 0) {
        const selectedFile = input.files[0];

        await salvarArquivoNoDB(selectedFile);

        console.log("Arquivo selecionado:", selectedFile.name);

        resolve(selectedFile);
      } else {
        resolve(null);
      }
    };
  });
}


function getSetFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("set") || "basico";
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";
  Object.keys(DATA).forEach(secao => {
    const filtrados = DATA[secao].filter(p => temAcesso(p.id, nivelAtualMask));
    if (filtrados.length === 0) return;
    const h3 = document.createElement("h3");
    h3.textContent = secao;
    app.appendChild(h3);
    filtrados.forEach(p => {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `
        <div class="name" title="${p.help}">
          ${p.name}
        </div>
        <input type="number"
          value="${p.value}"
          min="${p.min}"
          max="${p.max}"
          oninput="update('${p.id}', this)">
        <small>${p.unit}</small>
        <small>[${p.min}-${p.max}]</small>
        <small class="def">def: ${p.def}</small>
         <small>${p.help}</small>
      `;
      app.appendChild(div);
    });
  });
}

function update(id, el) {
  const val = Number(el.value);
  for (const secao in DATA) {
    const p = DATA[secao].find(x => x.id === id);
    if (!p) continue;
    // valida range
    if (isNaN(val) || val < p.min || val > p.max) {
      el.classList.add("invalid");
    } else {
      el.classList.remove("invalid");
      p.value = val;
    }
    // 🔥 destaca se diferente do default
    if (val !== p.def) {
      el.classList.add("changed");
    } else {
      el.classList.remove("changed");
    }
    return;
  }
}

function resetVisible() {
  for (const secao in DATA) {
    DATA[secao].forEach(p => {
      if (temAcesso(p.id, nivelAtualMask))
        p.value = p.def;
    }
    );
  }
  render();
}

function resetAll() {
  if (setAtual !== "expert") return;
  for (const secao in DATA) {
    DATA[secao].forEach(p => {
      p.value = p.def;
    });
  }
  render(); // 🔥 atualiza tela inteira
}

let fileHandle = null;
async function salvarJS() {
  let conteudo =
    "const DATA = " +
    JSON.stringify(DATA, null, 2) +
    ";";
  conteudo = conteudo.replace(/    {\n/g, "    {");
  conteudo = conteudo.replace(/,\n/g, ",");
  conteudo = conteudo.replace(/\n    },/g, " },\n");
  conteudo = conteudo.replace(/\n    }\n/g, " }\n");
  conteudo = conteudo.replace(/],/g, "],\n");

  // primeira vez escolhe o arquivo original
  if (!fileHandle) {
    fileHandle = await window.showSaveFilePicker({
      suggestedName: file,
      types: [{
        description: "JavaScript",
        accept: {
          "application/javascript": [".js"]
        }
      }]
    });
  }
  const writable = await fileHandle.createWritable();
  await writable.write(conteudo);
  await writable.close();
  console.log("salvo:", file);
}

function trocarSet(nome) {
  setAtual = nome;
  nivelAtualMask = MAPA_NIVEL[nome] ?? PAR_BASIC;
  const tituloEl = document.getElementById("tituloSet");
  if (tituloEl) {
    tituloEl.innerText = `Parâmetros ${nomes[setAtual] || setAtual}`;
  }
  render();
}