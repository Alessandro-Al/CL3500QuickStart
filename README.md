# CL3500 Quick Start Guide

Manual interativo de referência para a classificadora de peso CL3500.

## Estrutura

```
web_M/
├── index.html      # Página inicial com cards de navegação
├── content.html    # Página de conteúdo com tabs dinâmicas
├── functions.js    # Funções utilitárias
├── list.js         # Dados de navegação (LK_DATA)
├── base.css        # Estilos base
├── content.css     # Estilos de conteúdo
├── *.html          # Arquivos HTML
├── SYS/            # Dados do sistema
├── SET/            # Dados de setup
└── [OUTROS]/      # Outras pastas de dados
```

## Como usar

1. Abra `index.html` em um navegador
2. Clique em um card para navegar para a seção desejada
3. Use as tabs para navegar entre os conteúdos

## Formato dos dados

Os arquivos `data.js` em cada pasta seguem o formato:

```javascript
const DATA = {
  descricao: "ID FW:",
  fw_id: "CL350[...]",
  descricaoPlaca: { titulo: "...", hardware: [...] },
  tabs: [
    { label: "Nome da Tab", image: "./img/...", ordered: false, items: [...] }
  ]
};
```

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)