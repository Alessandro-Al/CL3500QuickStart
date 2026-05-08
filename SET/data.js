const DATA = {
  descricao: "ID FW:",
  fw_id: "CL350[SUBFW]HW[2/3]BAL[0/1]V[versão]-[OPCOES].hex",
  descricaoPlaca: {
    titulo: "Checklist CL3500 setup",
    hardware: [
      { label: "Alimentação elétrica conectada", valor: "" },
      { label: "Tensão correta (3x380V + N + Terra)", valor: "" },
      { label: "Aterramento conectado", valor: "" },
      { label: "Ar comprimido ligado (se aplicável)", valor: "" },
      { label: "Pressão de ar dentro do especificado", valor: "" },
      { label: "Cabos e conectores bem fixados", valor: "" },
      { label: "Comunicação (Ethernet/RS-232) conectada", valor: "" },
      { label: "Sensores posicionados corretamente", valor: "" },
      { label: "Esteira livre e alinhada", valor: "" },
      { label: "Sistema limpo (sem sujeira/objetos)", valor: "" },
      { label: "Proteções e carenagens fechadas", valor: "" },
      { label: "Emergência (E-Stop) testada", valor: "" },
      { label: "Botões e IHM respondendo", valor: "" },

      { label:  "Parâmetros básicos carregados", valor: "" },
      { label: "Peso calibrado", valor: "" },
      { label: "Teste com produto realizado", valor: "" },
      { label: "Rejeição funcionando (se houver)", valor: "" }
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
    }, {
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
    }, {
      label: "Energização",
      image: "../img/Painel.png",
      ordered: true,
      items: [
        "Verificar tensão de entrada e conexões elétricas",
        "Ligar disjuntor geral do painel elétrico",
        "Aguardar inicialização do sistema",
        "Confirmar ausência de alarmes no controlador",
      ]
    }, {
      label: "Ar comprimido",
      image: "../img/Pneumatico.png",
      ordered: true,
      items: [
        "Conectar linha de ar comprimido",
        "Ajustar pressão conforme especificação",
        "Verificar ausência de vazamentos",
        "Confirmar atuação dos dispositivos pneumáticos"
      ]
    }, {
      label: "Inicialização",
      image: "../img/Controlador.png",
      ordered: true,
      items: [
        { label: "Acessar o terminal de controle ", title: "HMI LK200 ou LK300" },
        "Selecionar modo de operação",
        "Inicializar sistema de transporte (esteiras)",
        "Verificar leitura dos sensores",
        "Confirmar comunicação entre módulos"
      ]
         }, {
      label: "Parâmetros básicos",
      image: "../img/Controlador.png",
      ordered: false,
      items: [
        { label:  "<a href='./PAR/set_par.html?file=dataCL.js&set=basico'>Configurar Parâmetros básicos</a>" }

      ]
    }, {
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
    }, {
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