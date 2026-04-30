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
        "Sequência básica para colocar a máquina em operação",
        "Abrange energização, ar comprimido e inicialização do sistema",
        "Não substitui o procedimento técnico completo de instalação"
      ]
    },

    {
      label: "Pré-requisitos",
      image: "../img/Painel.png",
      ordered: false,
      items: [
        "Alimentação elétrica disponível e dentro da especificação",
        "Ar comprimido conectado e regulado",
        "Máquina nivelada e posicionada corretamente",
        "Esteiras livres de obstruções",
        "Sensores limpos e alinhados"
      ]
    },

    {
      label: "Energização",
      image: "../img/Painel.png",
      ordered: true,
      items: [
        "Verificar tensão de entrada e conexões elétricas",
        "Ligar disjuntor geral do painel elétrico",
        "Aguardar inicialização do sistema",
        "Confirmar ausência de alarmes no controlador"
      ]
    },

    {
      label: "Ar comprimido",
      image: "../img/Pneumatico.png",
      ordered: true,
      items: [
        "Conectar linha de ar comprimido",
        "Ajustar pressão conforme especificação",
        "Verificar ausência de vazamentos",
        "Confirmar atuação dos dispositivos pneumáticos"
      ]
    },

    {
      label: "Inicialização",
      image: "../img/Controlador.png",
      ordered: true,
      items: [
        "Acessar o terminal de controle (HMI)",
        "Selecionar modo de operação",
        "Inicializar sistema de transporte (esteiras)",
        "Verificar leitura dos sensores",
        "Confirmar comunicação entre módulos"
      ]
    },

    {
      label: "Teste rápido",
      image: "../img/EP.png",
      ordered: true,
      items: [
        "Inserir peça de teste na esteira de entrada",
        "Verificar transporte contínuo",
        "Confirmar leitura de peso",
        "Validar atuação dos braços de classificação",
        "Observar saída correta do produto"
      ]
    },

    {
      label: "Validação",
      image: "../img/CL3500.png",
      ordered: false,
      items: [
        "Sistema operando sem alarmes",
        "Pesagem estável e consistente",
        "Classificação conforme esperado",
        "Fluxo contínuo sem falhas"
      ]
    }
  ]
};