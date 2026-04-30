
const DATA = {
  descricao: "ID FW:",
  fw_id: "CL350[SUBFW]HW[2/3]BAL[0/1]V[versão]-[OPCOES].hex",

  descricaoPlaca: {
    titulo: "CL3500 - Classificadora de Peso Lenke",
    hardware: [
      { label: "Grau de Proteção:", valor: " IP 67 " },
      { label: "Construção:", valor: " Aço inoxidável - AISI 304 " },
      { label: "Conectividade:", valor: " Serial:RS-232 Ethernet:IEEE 802.3 " },
      { label: "Tensão:", valor: " 3x380 + N " },
      { label: "Consumo:", valor: " 0,75 Kw " },
      { label: "Capacidade:", valor: " até 160 peças por minuto " },
      { label: "Resolução:", valor: " de 1 g" },
    ],
  },

  tabs: [
    {
      label: "Visão Geral",
      image: "../img/CL3500.png",
      ordered: false,
      items: [
        "Realiza a pesagem dinâmica das peças durante o transporte",
        "Estrutura em aço inox (base e carenagem) para suporte e proteção",
        "Sistema projetado para operação contínua em linha de produção"
      ]
    },

     {
      label: "Esteira de entrada",
      image: "../img/EIn.png",
      ordered: false,
      items: [
        "Responsável pela alimentação contínua das peças na máquina",
        "Garante espaçamento adequado para entrada na pesagem"
      ]
    },

     {
      label: "Esteira de pesagem",
      image: "../img/EP.png",
      ordered: false,
      items: [
        "Transporta a peça durante o processo de medição",
        "Executa a pesagem dinâmica com precisão em movimento"
      ]
    },

   {
      label: "Sensores de leitura",
      image: "../img/sens.png",
      ordered: false,
      items: [
        "Sensores de presença e posição das peças",
        "Responsáveis pela detecção e sincronização da pesagem"
      ]
    },

     {
      label: "Esteira de saída",
      ordered: false,
      image: "../img/EOut.png",
      items: [
        "Transporta as peças após o processo de classificação",
        "Encaminha os produtos para a etapa seguinte da linha"
      ]
    },

   {
      label: "Braços",
      image: "../img/Braco.png",
      ordered: false,
      items: [
        "Atuadores responsáveis pela separação das peças",
        "Direcionam conforme critérios de classificação definidos"
      ]
    },

    {
      label: "Painel elétrico",
      image: "../img/Painel.png",
      ordered: false,
      items: [
        "Abriga os componentes elétricos de potência e controle do sistema",
        "Contém inversores de frequência, drivers, relés e bornes de conexão",
        "Inclui o PLC responsável pelo controle lógico da máquina"
      ]
    },

    {
      label: "Terminal",
      image: "../img/Controlador.png",
      ordered: false,
      items: [
        "Unidade responsável pelo processamento da pesagem",
        "Controla lógica de operação e tomada de decisão",
        "Interface de operação (HMI ou botões físicos)",
        "Permite controle, configuração e visualização de dados"
      ]
    },

    {
      label: "Painel pneumático",
      image: "../img/Pneumatico.png",
      ordered: false,
      items: [
        "Sistema de controle do ar comprimido",
        "Alimenta e regula os atuadores pneumáticos"
      ]
    },
  ]
};