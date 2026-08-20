/* ===== DATOS (ESPAÑOL) ===== */
const DATA = {
  descricao: "ID FW:",
  fw_id: "CL350[SUBFW]HW[2/3]BAL[0/1]V[versión]-[OPCIONES].hex",

  descricaoPlaca: {
    titulo: "CL3500 - Clasificadora de Peso Lenke",
    hardware: [
      { label: "Grado de Protección:", valor: " IP 67 " },
      { label: "Construcción:", valor: " Acero inoxidable - AISI 304 " },
      { label: "Conectividad:", valor: " Serie:RS-232 | Ethernet:IEEE | 802.3 " },
      { label: "Tensión:", valor: " 3x380 + N " },
      { label: "Consumo:", valor: " 0,75 kW " },
      { label: "Capacidad:", valor: " hasta 160 piezas por minuto " },
      { label: "Resolución:", valor: " desde 1 g" },
      { label: "Presión nominal:", valor: " 8 bar" }
    ],
  },

  tabs: [
    {
      label: "Visión General",
      image: "../img/CL3500.png",
      ordered: false,
      items: [
        "Realiza el pesaje dinámico de las piezas durante el transporte",
        "Estructura en acero inoxidable (base y chasis) para soporte y protección",
        "Sistema diseñado para operación continua en línea de producción"
      ]
    },

    {
      label: "Cinta de entrada",
      image: "../img/EIn.png",
      ordered: false,
      items: [
        "Responsable de la alimentación continua de piezas en la máquina",
        "Garantiza la separación adecuada antes de entrar a la sección de pesaje"
      ]
    },

    {
      label: "Cinta de pesaje",
      image: "../img/EP.png",
      ordered: false,
      items: [
        "Transporta la pieza durante el proceso de medición",
        "Ejecuta el pesaje dinámico con precisión en movimiento"
      ]
    },

    {
      label: "Sensores de lectura",
      image: "../img/sens.png",
      ordered: false,
      items: [
        "Sensores de presencia y posición de las piezas",
        "Responsables de la detección y sincronización del pesaje"
      ]
    },

    {
      label: "Cinta de salida",
      image: "../img/EOut.png",
      ordered: false,
      items: [
        "Transporta las piezas tras el proceso de clasificación",
        "Dirige los productos hacia la siguiente etapa de la línea"
      ]
    },

    {
      label: "Brazos desviadores",
      image: "../img/Braco.png",
      ordered: false,
      items: [
        "Actuadores responsables de la separación de las piezas",
        "Redirigen según los criterios de clasificación definidos"
      ]
    },

    {
      label: "Armario eléctrico",
      image: "../img/Painel.png",
      ordered: false,
      items: [
        "Alberga los componentes eléctricos de potencia y control del sistema",
        "Contiene variadores de frecuencia, drivers, relés y bornes de conexión",
        "Incluye el PLC responsable del control lógico de la máquina"
      ]
    },

    {
      label: "Terminal de control",
      image: "../img/Controlador.png",
      ordered: false,
      items: [
        "Unidad responsable del procesamiento de los datos de pesaje",
        "Controla la lógica de operación y la toma de decisiones",
        "Interfaz de operación (HMI o botones físicos)",
        "Permite el control, configuración y visualización de datos"
      ]
    },

    {
      label: "Armario neumático",
      image: "../img/Pneumatico.png",
      ordered: false,
      items: [
        "Sistema de control y distribución de aire comprimido",
        "Alimenta y regula los actuadores neumáticos (brazos)",
        "Requiere una línea de aire limpia y seca/lubricada",
        "Presión nominal de trabajo: mínimo 8 bar"
      ]
    }
  ]
};