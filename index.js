// Gera uma lista de chaves do objeto LK_DATA
const LK_KEYS = Object.keys(LK_DATA);

function openLK(key) {
  const dir = LK_DATA[key].dir;
  const name = LK_DATA[key].name;
  const desc = LK_DATA[key].desc;
  // Vai direto para content.html usando apenas o dir
  const url = `content.html?dir=${encodeURIComponent(dir)}&name=${encodeURIComponent(name)}&desc=${encodeURIComponent(desc)}`;
  location.href = url;
}

// Cria os cards dinamicamente
const container = document.getElementById("lkCards");
LK_KEYS.forEach((key) => {
  const card = document.createElement("div");
  card.className = "card";
  card.onclick = () => openLK(key);
  card.innerHTML = `
    <span class="title">${LK_DATA[key].name}</span>
    <div class="subtitle">${LK_DATA[key].desc}</div>`;
  container.appendChild(card);
});