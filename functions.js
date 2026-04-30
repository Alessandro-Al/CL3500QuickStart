// Pega parâmetro da URL
function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

// Carrega o data.js dinamicamente via parâmetro dir
(function () {
  const dir = getParam("dir") || "."; // padrão é a mesma pasta
  const script = document.createElement("script");
  script.src = `${dir}/data.js`;
  script.onload = () => {
    loadFirmware(); // só carrega o firmware depois do script
  };
  script.onerror = () => {
    document.querySelector('.board-container').innerHTML = "<b>Falha ao carregar data.js</b>";
  };
  document.head.appendChild(script);
})();

// Abre aba clicada, segura contra erros
function openTab(evt, tabLabel) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  if (evt && evt.currentTarget) {
    evt.currentTarget.classList.add('active');
  }
  const tabContent = document.getElementById(tabLabel);
  if (tabContent) {
    tabContent.classList.add('active');
  } else {
    console.warn(`Aba '${tabLabel}' não encontrada no DOM`);
    return;
  }
  if (typeof updateBoardImage === "function") {
    updateBoardImage(tabLabel);
  }
}

// Atualiza imagem da placa conforme aba
function updateBoardImage(tabLabel) {
  const fw = DATA;
  const tabs = fw.tabs || [];
  const dir = getParam("dir") || ".";
  if (!fw) return;

  // Procura a tab pelo label
  const currentTab = tabs.find(t => t.label === tabLabel) || tabs[0];
  let img = currentTab?.image || "";

  // se a imagem não for URL completa, adiciona o caminho da pasta
  if (img && !img.startsWith("http") && !img.startsWith("/")) {
    img = `${dir}/${img}`;
  }
  document.getElementById("board-img").src = img;
  if (!fw.descricaoPlaca) return;

  const desc = fw.descricaoPlaca;
  const container = document.getElementById("board-description");

  let html = `<h3>${desc.titulo}</h3>`;

  // 🔹 Lista variável de parâmetros
  if ((desc.titulo.startsWith("Checklist"))) {
    html += desc.hardware.map(p =>
      `<p><label><input type="checkbox"> <strong>${p.label}:</strong> ${p.valor}</label></p>`
    ).join("");
  } else {
    html += desc.hardware.map(p =>
      `<p><strong>${p.label}</strong> ${p.valor}</p>`
    ).join("");

  }
  container.innerHTML = html;
}

const li = (item) => `<li>${item.label ?? item}${item.title ? `<span class="note">${item.title}</span>` : ""}</li>`;

// Renderiza listas de forma segura
function renderSerial(value) {
  if (!Array.isArray(value)) return "";
  return "<ol>" + value.map((s, i) =>
    `<li${i === 0 ? ' value="0"' : ''}>${s.label ?? s}${s.title ? ` <span class="note">${s.title}</span>` : ""}</li>`
  ).join("") + "</ol>";
}

function renderList(value, ordered = false) {
  if (!value) return "";
  if (Array.isArray(value)) {
    if (ordered) {
      const tag = "ol";
      return `<${tag}>${value.map(li).join("")}</${tag}>`;
    } else {
      const tag = "ul";
      return `<${tag}>${value.map(li).join("")}</${tag}>`;
    }
  }
  if (typeof value === "object") {
    return "<ul>" + Object.entries(value)
      .map(([k, v]) => `<li><b>${k}:</b> ${v}</li>`)
      .join("") + "</ul>";
  }
  return value;
}

// Carrega firmware
function loadFirmware() {
  const fw = DATA;
  const tabs = fw.tabs || [];
  if (!fw) {
    document.querySelector('.container').innerHTML = "<b>Firmware não encontrado.</b>";
    return;
  }
  document.getElementById('pageTitle').innerText = `${getParam("name") || ""}`.trim();;
  document.getElementById("fw-title").innerText =
    `${getParam("title") || ""} ${getParam("desc") || ""}`.trim();
  document.getElementById("fw-subtitle").innerText =
    `${fw.descricao || ""} | ${fw.fw_id || ""}`;
  const tabsContainer = document.getElementById("tabs");
  const contentContainer = document.getElementById("tab-contents");
  contentContainer.innerHTML = "";
  tabsContainer.innerHTML = "";

  // Itera sobre o array de tabs
  tabs.forEach(tab => {
    const label = tab.label;
    const ordered = tab.ordered || false;
    const value = tab.items || [];

    const isEmpty =
      value === undefined ||
      value === null ||
      (typeof value === "string" && value.trim() === "") ||
      (Array.isArray(value) && value.length === 0);
    if (isEmpty) return;

    const btn = document.createElement("div");
    btn.className = "tab";
    btn.innerText = label;
    btn.onclick = (e) => openTab(e, label);
    tabsContainer.appendChild(btn);
    const div = document.createElement("div");
    div.id = label;
    div.className = "tab-content";
    div.innerHTML = renderList(value, ordered);
    contentContainer.appendChild(div);
  });
  // Atualiza imagem inicial
  updateBoardImage(tabs[0]?.label || "Visão Geral");
  // Abre a primeira aba visível
  document.querySelector('.tab:not([style*="none"])')?.click();
}