//---------------------------------------main

const nomes = {
  basico: "Básico",
  avancado: "Avançado",
  expert: "Expert"
};

const setAtual = getSetFromURL();

let IDS = new Set(SETS[setAtual]);
const file = getFileName();

document.getElementById("tituloSet").innerText =
  `Parâmetros ${nomes[setAtual] || setAtual}`;

// cria script dinamicamente
const script = document.createElement("script");
script.src = file;
script.onload = () => {
  console.log("DATA carregado:", DATA);
  render(); // sua função
};
document.head.appendChild(script);

console.log("file:", file);

//--------------------------------------------function
function getFileName() {
  const params = new URLSearchParams(window.location.search);
  return params.get("file") || "data.js"; // ?? use .js, não .json
}

function getSetFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("set") || "basico";
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";
  Object.keys(DATA).forEach(secao => {
    const filtrados = DATA[secao].filter(p => IDS.has(p.id));
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
      if (IDS.has(p.id)) {
        p.value = p.def;
      }
    });
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
  IDS = new Set(SETS[nome]);
  render(); // 🔥 redesenha com novo filtro
}
