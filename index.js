// ==========================================
// 1. GERENCIAMENTO DE IDIOMA
// ==========================================

function getLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const langUrl = urlParams.get('lang');
  const langStorage = localStorage.getItem('cl3500_lang');
  
  const currentLang = langUrl || langStorage || 'pt';
  localStorage.setItem('cl3500_lang', currentLang);
  return currentLang;
}

function toggleLangMenu() {
  const curtain = document.getElementById('langCurtain');
  if (curtain) curtain.classList.toggle('open');
}

function selectLanguage(lang) {
  localStorage.setItem('cl3500_lang', lang);
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.location.href = url.toString();
}

function updateLangButtonLabel() {
  const lang = getLanguage();
  const labelMap = { pt: '🌐 PT', en: '🌐 EN', es: '🌐 ES' };
  const labelEl = document.getElementById('current-lang-text');
  if (labelEl) {
    labelEl.innerText = labelMap[lang] || '🌐 PT';
  }
}

// ==========================================
// 2. CARREGAMENTO DO SCRIPT E NAVEGAÇÃO
// ==========================================

function loadListScript() {
  const lang = getLanguage();
  const fileName = (lang === 'pt') ? 'list.js' : `list_${lang}.js`;

  const script = document.createElement('script');
  script.src = `./${fileName}`;

  // Ao carregar o script com sucesso, renderiza os cards
  script.onload = () => {
    buildCards();
  };

  // Fallback: Se o arquivo no idioma não existir, carrega o list.js padrão
  script.onerror = () => {
    console.warn(`Arquivo ${fileName} não encontrado. Carregando list.js padrão.`);
    const fallbackScript = document.createElement('script');
    fallbackScript.src = './list.js';
    fallbackScript.onload = () => {
      buildCards();
    };
    document.head.appendChild(fallbackScript);
  };

  document.head.appendChild(script);
}

// Sua lógica de navegação mantida (agora incluindo o &lang= na URL)
function openLK(key) {
  const lang = getLanguage();
  const dir = LK_DATA[key].dir;
  const name = LK_DATA[key].name;
  const desc = LK_DATA[key].desc;

  // Repassa dir, name, desc e lang para a content.html
  const url = `content.html?dir=${encodeURIComponent(dir)}&name=${encodeURIComponent(name)}&desc=${encodeURIComponent(desc)}&lang=${lang}`;
  location.href = url;
}

// Sua lógica de renderização mantida exatamente como era
function buildCards() {
  const container = document.getElementById("lkCards");
  if (!container || typeof LK_DATA === 'undefined') return;

  container.innerHTML = ""; // Limpa o container antes de renderizar
  const LK_KEYS = Object.keys(LK_DATA);

  LK_KEYS.forEach((key) => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => openLK(key);
    card.innerHTML = `
      <span class="title">${LK_DATA[key].name}</span>
      <div class="subtitle">${LK_DATA[key].desc}</div>`;
    container.appendChild(card);
  });
}

// ==========================================
// 3. INICIALIZAÇÃO
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  updateLangButtonLabel();
  loadListScript();

  // Fecha o menu de idioma ao clicar fora
  window.addEventListener('click', (e) => {
    if (!e.target.closest('.lang-dropdown')) {
      const curtain = document.getElementById('langCurtain');
      if (curtain) curtain.classList.remove('open');
    }
  });
});