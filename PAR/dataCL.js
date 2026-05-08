const DATA = {
  "Parâmetros de Sistema": [
    {      "id": "2C026001",      "name": "Idioma               :",      "value": 0,      "min": 0,      "max": 2,      "def": 0,      "unit": "  ",      "help": "0=Português 1=Inglês 2=Espanhol" },
    {      "id": "2C038001",      "name": "Modo Operação        :",      "value": 0,      "min": 0,      "max": 2,      "def": 0,      "unit": "  ",      "help": "0=Normal 1=Debug 2=Aferição equipamento" },
    {      "id": "2402A002",      "name": "Instante Pesagem     :",      "value": 2000,      "min": 0,      "max": 5000,      "def": 2000,      "unit": "ms",      "help": "Tempo para iniciar pesagem após acionamento do sensor." },
    {      "id": "2C04A001",      "name": "Unidade              :",      "value": 0,      "min": 0,      "max": 3,      "def": 0,      "unit": "  ",      "help": "Escolhe unidade 0=g 1=kg 2=lb 3=oz" },
    {      "id": "2C046001",      "name": "Separador            :",      "value": 0,      "min": 0,      "max": 1,      "def": 0,      "unit": "  ",      "help": "0=, 1=." },
    {      "id": "2C012001",      "name": "Casas decimais       :",      "value": 0,      "min": 0,      "max": 3,      "def": 0,      "unit": "  ",      "help": "3=x.xxx 2=xx.xx 1=xx.x 0=xxxx" },
    {      "id": "3C006001",      "name": "Usa PLC LK100        :",      "value": 0,      "min": 0,      "max": 2,      "def": 0,      "unit": "  ",      "help": "0:Desativar 1:Ativar 2:especial PLC para aplicador (restart)" },
    {      "id": "3D652001",      "name": "Saidas Pulsadas PLC  :",      "value": 2,      "min": 0,      "max": 24,      "def": 2,      "unit": "  ",      "help": "2 para aplicador; numero saidas pulsadas" },
    {      "id": "3D650001",      "name": "Saidas continuas PLC :",      "value": 2,      "min": 0,      "max": 24,      "def": 2,      "unit": "  ",      "help": "2 para aplicador; número de saídas contínuas" },
    {      "id": "32038001",      "name": "OP Mode              :",      "value": 0,      "min": 0,      "max": 1,      "def": 0,      "unit": "  ",      "help": "OP from visor" },
    {      "id": "25236002",      "name": "Menor Peso Faixa M   :",      "value": 0,      "min": 0,      "max": 500000,      "def": 0,      "unit": "g ",      "help": "Peso mínimo da faixa media" },
    {      "id": "25232002",      "name": "Maior Peso Faixa M   :",      "value": 0,      "min": 0,      "max": 500000,      "def": 0,      "unit": "g ",      "help": "Peso Maximo da faixa media" }
  ],
  "Parâmetros de Produção": [
    {      "id": "0E006000",      "name": "Data de produção     :",      "value": 1,      "min": 0,      "max": 1,      "def": 1,      "unit": "  ",      "help": "0 = Desabilita" },
    {      "id": "12006000",      "name": "Lote                 :",      "value": 1,      "min": 0,      "max": 1,      "def": 1,      "unit": "  ",      "help": "0 = Desabilita" },
    {      "id": "34006002",      "name": "Turno                :",      "value": 1,      "min": 0,      "max": 1,      "def": 1,      "unit": "  ",      "help": "0 = Desabilita" },
    {      "id": "30006002",      "name": "Subturno             :",      "value": 1,      "min": 0,      "max": 1,      "def": 1,      "unit": "  ",      "help": "0 = Desabilita" },
    {      "id": "38006000",      "name": "Martelo              :",      "value": 0,      "min": 0,      "max": 1,      "def": 0,      "unit": "  ",      "help": "1 = Habilita / 0 = Desabilita / 2 = Valida" },
    {      "id": "10006000",      "name": "Data de rendimento   :",      "value": 0,      "min": 0,      "max": 1,      "def": 0,      "unit": "  ",      "help": "Data para cálculo de rendimento 1=Habilita / 0= Desabilita" },
    {      "id": "32006002",      "name": "Ordem de produção    :",      "value": 0,      "min": 0,      "max": 1,      "def": 0,      "unit": "  ",      "help": "1=Habilita / 0=Desabilita / 2=Valida / 3=2 + Produto fixo" },
    {      "id": "3A006000",      "name": "Produto              :",      "value": 0,      "min": 0,      "max": 1,      "def": 0,      "unit": "  ",      "help": "1=Digitar código produto; 0=Detectar barcode automaticamente" },
    {      "id": "0E036002",      "name": "Data  produção mínima:",      "value": 1,      "min": 0,      "max": 180,      "def": 1,      "unit": "d ",      "help": "0 = Não / ou informar quantidade de dias." },
    {      "id": "0E032002",      "name": "Data  produção máxima:",      "value": 0,      "min": 0,      "max": 5,      "def": 0,      "unit": "d ",      "help": "0 = Não / ou informar quantidade de dias." },
    {      "id": "34032002",      "name": "Turno máximo         :",      "value": 4,      "min": 1,      "max": 9,      "def": 4,      "unit": "  ",      "help": "Define o número máximo de turnos permitidos." },
    {      "id": "22006002",      "name": "Validação            :",      "value": 0,      "min": 0,      "max": 1,      "def": 0,      "unit": "  ",      "help": "Ativa ou desativa a validação dos parâmetros." }
  ],
  "Parâmetros de Calibração": [
    {      "id": "24036002",      "name": "Menor Peso           :",      "value": 200,      "min": 1,      "max": 50000,      "def": 200,      "unit": "g ",      "help": "Menor peso considerado para uma pesagem válida." },
    {      "id": "2400C002",      "name": "Peso Calib Balança   :",      "value": 10000,      "min": 1000,      "max": 200000,      "def": 10000,      "unit": "g ",      "help": "Peso de calibração deve estar entre 20% e 120% peso máximo." },
    {      "id": "1C022002",      "name": "Filtro ampli.        :",      "value": 8,      "min": 0,      "max": 10,      "def": 8,      "unit": "  ",      "help": "filtro aceito 0..10 Padrão: 7" },
    {      "id": "2404E002",      "name": "Velocidade Pesagem   :",      "value": 1,      "min": 0,      "max": 7,      "def": 1,      "unit": "  ",      "help": "Velocidade de Pesagem." },
    {      "id": "24032002",      "name": "Peso Máximo Balança  :",      "value": 50000,      "min": 5000,      "max": 500000,      "def": 50000,      "unit": "g ",      "help": "Peso máximo suportado pela balança." },
    {      "id": "1C038002",      "name": "Modo do Filtro       :",      "value": 1,      "min": 0,      "max": 2,      "def": 1,      "unit": "  ",      "help": "0=filtro padrão 1=filtro rápido" },
    {      "id": "2403C001",      "name": "Resolução Gramas     :",      "value": 10,      "min": 1,      "max": 100,      "def": 10,      "unit": "  ",      "help": "valor padrão: 1 valor aceito: 1, 2, 5, 10, 20, 50, 100" }
  ],
  "Parâmetros de Pesagem": [
    {      "id": "2E006000",      "name": "Zero Automático      :",      "value": 1,      "min": 0,      "max": 2,      "def": 1,      "unit": "  ",      "help": "Habilita busca de zero 0=Não / 1=Sim" },
    {      "id": "1C044000",      "name": "Filtro SW            :",      "value": 0,      "min": 0,      "max": 1,      "def": 0,      "unit": "  ",      "help": "Habilita filtro SW 0=Não 1=Sim" },
    {      "id": "2C03C001",      "name": "Resolução Gramas     :",      "value": 10,      "min": 1,      "max": 100,      "def": 10,      "unit": "  ",      "help": "valor padrão: 1 valor aceito: 1, 2, 5, 10, 20, 50, 100" },
    {      "id": "24010002",      "name": "Valor Delta          :",      "value": 20,      "min": 1,      "max": 250,      "def": 20,      "unit": "g ",      "help": "Descarta pesos fora do limite para realizar a média." },
    {      "id": "0D31E002",      "name": "Fator Correção fx P  :",      "value": 10000,      "min": 9000,      "max": 11000,      "def": 10000,      "unit": "  ",      "help": "Ajuste fino de calibração Valor Padrão 10000=100.00%" },
    {      "id": "0D21E002",      "name": "Fator Correção fx. M :",      "value": 10000,      "min": 9000,      "max": 11000,      "def": 10000,      "unit": "  ",      "help": "Ajuste fino de calibração Valor Padrão 10000=100.00%" },
    {      "id": "0D11E002",      "name": "Fator Correção fx. G :",      "value": 10000,      "min": 9000,      "max": 11000,      "def": 10000,      "unit": "  ",      "help": "Ajuste fino de calibração Valor Padrão 10000=100.00%" },
    {      "id": "2E010002",      "name": "Delta Zero           :",      "value": 5,      "min": 1,      "max": 50,      "def": 5,      "unit": "g ",      "help": "É usado para descartar pesos com variação superior." },
    {      "id": "2E034002",      "name": "Qtd Pesos Média Zero :",      "value": 50,      "min": 10,      "max": 500,      "def": 50,      "unit": "  ",      "help": "Número de amostras considerada para média." },
    {      "id": "2E012002",      "name": "Passo Envelope       :",      "value": 5,      "min": 1,      "max": 100,      "def": 5,      "unit": "  ",      "help": "Quantidade de amostra para o passo." },
    {      "id": "2E016002",      "name": "Gap de envelope      :",      "value": 10,      "min": 2,      "max": 100,      "def": 10,      "unit": "g ",      "help": "Abertura da área de atuação." }
  ],
  "Parâmetros Classificadora": [
    {      "id": "3E032002",      "name": "Pecas Maximo Batch   :",      "value": 5000,      "min": 50,      "max": 5000,      "def": 5000,      "unit": "pc",      "help": "Numero de peças para forçar Batch." },
    {      "id": "3E034002",      "name": "Max Media Buffer     :",      "value": 1000,      "min": 100,      "max": 1000,      "def": 1000,      "unit": "  ",      "help": "" },
    {      "id": "0604E002",      "name": "Velocidade da Esteira:",      "value": 500,      "min": 1,      "max": 2000,      "def": 500,      "unit": "v ",      "help": "Em milimetros/segundo" },
    {      "id": "3E008002",      "name": "Tempo Espera Fecha B.:",      "value": 1000,      "min": 10,      "max": 2000,      "def": 1000,      "unit": "ms",      "help": "Tempo de espera pra fechar batch depois da ultima peça" },
    {      "id": "3E002002",      "name": "Buffer ON            :",      "value": 1,      "min": 0,      "max": 2,      "def": 1,      "unit": "  ",      "help": "1=Habilita buffer; 2 conv belt on" },
    {      "id": "40012002",      "name": "Numeros de Braco     :",      "value": 8,      "min": 1,      "max": 24,      "def": 8,      "unit": "  ",      "help": "Quantidade de braços que a classificadora possui" },
    {      "id": "40000002",      "name": "Bracos em 2 Linhas   :",      "value": 0,      "min": 0,      "max": 1,      "def": 0,      "unit": "  ",      "help": "0= braços em uma linha 1= braços em 2 linhas" },
    {      "id": "40108002",      "name": "Tempo Espera Braco 1 :",      "value": 110,      "min": 0,      "max": 5000,      "def": 0,      "unit": "ms",      "help": "Tempo espera primeiro Braço" },
    {      "id": "40014002",      "name": "Tempo Entre Bracos   :",      "value": 110,      "min": 0,      "max": 5000,      "def": 0,      "unit": "ms",      "help": "Tempo em ms Atraso entre braços" },
    {      "id": "06008002",      "name": "Tempo Atraso Esteira  :",      "value": 0,      "min": 0,      "max": 10000,      "def": 0,      "unit": "ms",      "help": "Tempo de atraso da esteira, antes de abrir." },
    {      "id": "06042002",      "name": "Direção Esteira       :",      "value": 0,      "min": 0,      "max": 1,      "def": 0,      "unit": "  ",      "help": "0=mesma direção classificadora 1=o contrario" }
  ]
};