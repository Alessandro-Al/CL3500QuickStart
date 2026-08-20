/* ===== DATA (ENGLISH) ===== */
const DATA = {
  descricao: "FW ID:",
  fw_id: "CL350[SUBFW]HW[2/3]BAL[0/1]V[version]-[OPTIONS].hex",

  descricaoPlaca: {
    titulo: "CL3500 - Lenke Weight Sorter",
    hardware: [
      { label: "Protection Rating:", valor: " IP 67 " },
      { label: "Construction:", valor: " Stainless steel - AISI 304 " },
      { label: "Connectivity:", valor: " Serial:RS-232 | Ethernet:IEEE | 802.3 " },
      { label: "Voltage:", valor: " 3x380 + N " },
      { label: "Power Consumption:", valor: " 0.75 kW " },
      { label: "Capacity:", valor: " up to 160 items per minute " },
      { label: "Resolution:", valor: " from 1 g" },
      { label: "Nominal Pressure:", valor: " 8 bar" }
    ],
  },

  tabs: [
    {
      label: "Overview",
      image: "../img/CL3500.png",
      ordered: false,
      items: [
        "Performs dynamic weighing of items during transport",
        "Stainless steel structure (base and frame) for support and protection",
        "System designed for continuous operation on production lines"
      ]
    },

    {
      label: "Infeed Conveyor",
      image: "../img/EIn.png",
      ordered: false,
      items: [
        "Responsible for feeding items continuously into the machine",
        "Ensures proper spacing before entering the weighing section"
      ]
    },

    {
      label: "Weighing Conveyor",
      image: "../img/EP.png",
      ordered: false,
      items: [
        "Transports items during the measurement process",
        "Executes precise dynamic weighing on the move"
      ]
    },

    {
      label: "Detection Sensors",
      image: "../img/sens.png",
      ordered: false,
      items: [
        "Presence and position detection sensors for items",
        "Responsible for detection and weighing synchronization"
      ]
    },

    {
      label: "Outfeed Conveyor",
      image: "../img/EOut.png",
      ordered: false,
      items: [
        "Transports items after the sorting process",
        "Routes products to the next stage of the production line"
      ]
    },

    {
      label: "Diverter Arms",
      image: "../img/Braco.png",
      ordered: false,
      items: [
        "Actuators responsible for separating the items",
        "Direct items according to predefined sorting criteria"
      ]
    },

    {
      label: "Electrical Cabinet",
      image: "../img/Painel.png",
      ordered: false,
      items: [
        "Houses system power and control electrical components",
        "Contains frequency inverters, drivers, relays, and terminal blocks",
        "Includes the PLC responsible for logical machine control"
      ]
    },

    {
      label: "Control Terminal",
      image: "../img/Controlador.png",
      ordered: false,
      items: [
        "Unit responsible for processing weight data",
        "Controls operation logic and decision-making",
        "Operating interface (HMI or physical buttons)",
        "Allows machine control, configuration, and data monitoring"
      ]
    },

    {
      label: "Pneumatic Cabinet",
      image: "../img/Pneumatico.png",
      ordered: false,
      items: [
        "Compressed air control and distribution system",
        "Powers and regulates pneumatic actuators (diverter arms)",
        "Requires a clean and dry/lubricated air supply line",
        "Nominal operating pressure: minimum 8 bar"
      ]
    }
  ]
};