const DATA = {
  descricao: "ID FW:",
  fw_id: "CL350[SUBFW]HW[2/3]BAL[0/1]V[versão]-[OPCOES].hex",
  descricaoPlaca: {
    titulo: "Checklist CL3500 setup",
    hardware: [
       { label:  "Parâmetros avançados carregados", valor: "" },
     ],
  },
  tabs: [
    {
      label: "Parâmetros avançados",
      image: "../img/Controlador.png",
      ordered: false,
      items: [
        { label:  "<a href='./PAR/set_par.html?set=avancado'>Configurar Parâmetros avançados</a>" }
      ]
    }, {
      label: "Parâmetros expert",
      image: "../img/Controlador.png",
      ordered: false,
      items: [
        { label:  "<a href='./PAR/set_par.html?set=expert'>Configurar Parâmetros expert</a>" }
      ]
    }
  ]
};