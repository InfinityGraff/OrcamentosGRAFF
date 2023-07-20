// PreScript
  const User={
    '34$r4-34&-7eV79@7K':['(Baby)','Baby Massia','Img/Perfil_Baby.png'],
    '32$r2-32&-6eV69@6K':['(Alan)','Allan MacLovin','Img/Perfil_Allan.png'],
    '31$r1-31&-4eV49@4K':['(Lisa)','Lisa Caramelo','Img/Perfil_Lisa.png'],
    '36$r6-36&-9eV99@9K':['(Segu)','Segunda Hippie','Img/Perfil_Segunda.png']
  }

  const Cttlist = [
    ['Marcelo Max','(81) 98824-3496','NomeCompleto','Loja','CnttLoja','Categoria',0.3,'ID-001'],
    ['Edilson Skyllus','(88) 88888-8888','NomeCompleto','Loja','CnttLoja','Categoria',0.2,'ID-002']
  ]

  const cores = [
    "#FF0000","#FF0000","#FF4000","#FF8000","#FFBF00","#FFFF00","#BFFF00","#80FF00","#40FF00","#00FF00"
  ]

  var LinkDrive = 'https://drive.google.com/uc?export=download&id='  

  function Crecent(MM2){
    /*Crescente:*/ var M = MM2
      var D = {Min:0.06,Med:0.25,Max:1.00}
      var V = {Min:1.70,Med:0.70,Max:0.00}
        var crecent = M> D.Med? M>=D.Max? V.Max:
        M< D.Med? V.Med: V.Med-((V.Med-V.Max)*((M-0.001)/D.Max)):
        M<=D.Min? V.Min: V.Min-((V.Min-V.Med)*((M-0.001)/D.Med))

    return crecent
  }

  const Aplc = 10
  const Cort = 3

  const Adsv = 20
  const Lona = 20
  const Bane = 22
  const Trns = 28
  const Blck = 28
  const Perf = 38
  const Rcut = 32
  const VnlB = 14 // Vinil Branco

  function Cal(Vlr){return Vlr * (1 + (200 / 100))}

  const tabela = [
    ["Adesivo" ,"Brilho",     "","","", Cal(Adsv), Adsv ,"M2","14WG3395GvBw-iv-xYvJvClwHMCwFj0vU"],
    ["Adesivo" ,"Fosco",      "","","", Cal(Adsv), Adsv ,"M2","14WG3395GvBw-iv-xYvJvClwHMCwFj0vU"],
    ["Adesivo" ,"Blackout",   "","","", Cal(Blck)+1, Blck ,"M2","1BE7X8FTvHZ-Xxk3woPnLZ4FNqsE9MMOp"],
    ["Adesivo" ,"Transparente","","","", Cal(Trns)+1, Trns ,"M2","1AOgX7ikLCnnzLdIl2woi8UAO-w__7QwK"],
    ["Adesivo" ,"Perfurado",  "","","", Cal(Perf)-14, Perf ,"M2","15CcXpHNnGL03y6h5KT7QKZhfCTg30pE3"],
    ["Adesivo" ,"Espelhado",  "","","", Cal(Trns+VnlB+Aplc)-1, Trns+VnlB ,"M2","1f7bztRLLafmQNbV2C-vPrbB6oiluzNOs"],
    ["Etiqueta","Refilada"   ,"","","", Cal(Adsv+Cort), Adsv, "M2"],
    ["Etiqueta","Pesonalizada","","","",Cal(Rcut), Rcut, "M2","1NhZ62dg1T7LbY4YZskSKBCuG6UhLyUm1"],

    ["Recorte", "Outros","","","", 180, 0, "M2"],
    ["Recorte", "Nomes","","","", 2.50,0, "QNT"],
    ["Recorte", "KitBug_Principal","","","",13,0, "QNT"],
    ["Recorte", "KitBug_Detalhe","","","", 7,0, "QNT"],
    ["Recorte", "2 Cores","","","",180,0, "M2"],
    ["Recorte", "3 Cores","","","",180,0, "M2"],

    ["Lona", "Banner","","","", Cal(Bane)+4, Bane, "M2"],
    ["Lona", "Faixa", "Só Madeira","","", Cal(Bane)+4, Bane, "M2"],
    ["Lona", "Faixa", "Madeira e ilhós","","", Cal(Bane)+4, Bane, "M2"],
    ["Lona", "Lona com ilhós", "ilhós Completo","","", Cal(Bane)+4, Bane, "M2"],
    ["Lona", "Lona com ilhós", "ilhós nas Pontas","","", Cal(Bane)+4, Bane, "M2"],
    ["Lona", "Sem acabamento","","","", Cal(Lona), Lona, "M2"],

    ["Quadro", "PVC", "Refilado","","", 150, 0, "M2 C"],
    ["Quadro", "PS", "Acabamento","","", 200, 0, "M2 C"],
    ["ímã", "Geladeira", "Completo","","", 150, 0, "M2 C"],
    ["ímã", "Geladeira", "Taquinho de ímã","","", 120, 0, "M2 C"],
    ["ímã", "Geladeira", "ímã + Calendário","","", 250, 0, "M2 C"],
    ["ímã", "Carro","","","", 170, 0, "M2 C"],

    ["Placa", "Lona", "ilhós", "Frente", "-", 70, 0, "M2 F"],
    ["Placa", "Lona", "ilhós", "Frente Verso", "-", 140, 0, "M2 F"],
    ["Placa", "Lona", "Ribite", "Frente", "-", 70, 0, "M2 F"],
    ["Placa", "Lona", "Ribite", "Frente Verso", "-", 140, 0, "M2 F"],
    ["Placa", "Luminosa", "Retangular", "Frente", "-", 80, 0, "M2 F"],
    ["Placa", "Luminosa", "Circular", "Frente Verso", "-", 160, 0, "M2 F"],
    ["Placa", "ACM",  "", "-", "-", 70, 0, "M2 F"],
    ["Placa", "Obra", "", "-", "-", 70, 0, "M2 F"],

    ["Cavalete","1 Ferragem","-","ilhós", "-",70,0,"M2 F",'1AKBM4I76hrO-ik0JQalLqAzRRcAV2Xl7'],
    ["Cavalete","1 Ferragem","-","Ribite","-",70,0,"M2 F",'1lBiTY82pAUgkB5G3yoyAR8TuHMpEJCif'],
    ["Cavalete","2 Ferragem","-","ílhós", "-",70,0,"M2 F",'16EsmOiUmzlgXeolYB0FNNNS7IY8RQFzC'],
    ["Cavalete","2 Ferragem","-","Ribite","-",70,0,"M2 F",'1hh0m_XGStCPM-QVK9Idka6sbJME97Yry'],
    ["Toldo", "Polly Carbonato","-","-","-",170,0,"M2 F",''],
    ["Toldo", "Lona ", "-", "-", "-", 70, 0, "M2 F",''],
    ["Quebra Sol", "Manual", "-", "-", "-", 70, 0, "M2 F",''],
    ["Quebra Sol", "Automatico", "-", "-", "-", 70, 0, "M2 F",''],

    ["Cartão", "Frente", "Brilho", "250g", '500', 90, 31, "OFS"],
    ["Cartão", "Frente", "Brilho", "250g", '1.000', 135, 54, "OFS"],
    ["Cartão", "Frente Verso", "Brilho", "250g", '500', 115, 42, "OFS"],
    ["Cartão", "Frente Verso", "Brilho", "250g", '1.000', 145, 56, "OFS"],
    ["Cartão", "Frente", "Brilho", "300g", '500', 130, 49, "OFS"],    
    ["Cartão", "Frente", "Brilho", "300g", '1.000', 145, 56, "OFS"],
    ["Cartão", "Frente Verso", "Brilho", "300g", '500', 150, 58, "OFS"],
    ["Cartão", "Frente Verso", "Brilho", "300g", '1.000', 165, 65, "OFS"],
    ["Cartão", "Frente", "Brilho Local", "300g", '500', 155, 62, "OFS"],
    ["Cartão", "Frente", "Brilho Local", "300g", '1.000', 190, 80, "OFS"],
    ["Cartão", "Frente Verso", "Brilho Local", "300g", '500', 190, 78, "OFS"],
    ["Cartão", "Frente Verso", "Brilho Local", "300g", '1.000', 230, 99, "OFS"],

    ["Tag", "Frente Verso", "Brilho + Arredondado", "-", '500', 165, 70, "OFS"],
    ["Tag", "Frente Verso", "Brilho + Arredondado", "-", '1.000', 185, 80, "OFS"],
    ["Tag", "Frente Verso", "Brilho Local + Arred.", "-", '500', 263, 119, "OFS"],
    ["Tag", "Frente Verso", "Brilho Local + Arred.", "-", '1.000', 303, 139, "OFS"],

    ["Panfleto", "Frente", "0,10 x 0,15", "90g", '1.000', 140, 70, "OFS"],
    ["Panfleto", "Frente", "0,10 x 0,15", "90g", '2.500', 180, 90, "OFS"],
    ["Panfleto", "Frente", "0,10 x 0,15", "90g", '5.000', 330, 165, "OFS"],
    ["Panfleto", "Frente", "0,10 x 0,15", "90g", '10.000', 500, 250, "OFS"],
    ["Panfleto", "Frente Verso", "0,10 x 0,15", "90g", 2500, 250, 125, "OFS"],
    ["Panfleto", "Frente Verso", "0,10 x 0,15", "90g", 5000, 480, 240, "OFS"],
    ["Panfleto", "Frente Verso", "0,10 x 0,15", "90g", 10000, 720, 360, "OFS"],
    ["Panfleto", "Frente", "0,15 x 0,20", "90g", '1.000', 280, 140, "OFS"],
    ["Panfleto", "Frente", "0,15 x 0,20", "90g", '2500', 360, 180, "OFS"],
    ["Panfleto", "Frente", "0,15 x 0,20", "90g", '5.000', 660, 330, "OFS"],
    ["Panfleto", "Frente", "0,15 x 0,20", "90g", '10.000', 990, 495, "OFS"],
    ["Panfleto", "Frente Verso", "0,15 x 0,20", "90g", '2.500', 500, 250, "OFS"],
    ["Panfleto", "Frente Verso", "0,15 x 0,20", "90g", '5.000', 880, 440, "OFS"],
    ["Panfleto", "Frente Verso", "0,15 x 0,20", "90g", '10.000', 1320, 660, "OFS"],

    ["A4", "Papel Adesivo", "Folha Completa", "-", "-", 0, 6, "QNT"],
    ["A4", "Papel Adesivo", "Corte Quadrado", "-", "-", 0, 6, "QNT"],
    ["A4", "Papel Adesivo", "Corte Desenhado", "-", "-", 0, 6, "QNT"],
    ["A4", "Couchê", "-", "-", "-", 0, 6, "QNT"],
    ["A4", "Officil", "-", "-", "-", 0, 2, "QNT"],
    ["Cardápio", "Frente", "-", "-", "-", 20, 0, "QNT"],
    ["Cardápio", "Frente e Verso", "-", "-", "-", 25, 0, "QNT"],

    ["Camisa", "Serigrafia", "-","-","-",0,0,"QNT"],
    ["Camisa", "Serigrafia", "Frente", "1 Cor", "-", 25, 0, "QNT"],
    ["Camisa", "Serigrafia", "Frente e Costas", "1 Cor", "-", 30, 0, "QNT"],
    ["Camisa", "Serigrafia", "Frente", "2 Cores", "-", 0, 0, "QNT"],
    ["Camisa", "Serigrafia", "Frente e Costas", "2 Cores", "-", 0, 0, "QNT"],
    ["Camisa", "Serigrafia", "Frente", "3 Cores", "-", 0, 0, "QNT"],
    ["Camisa", "Serigrafia", "Frente e Costas", "3 Cores", "-", 0, 0, "QNT"],
    ["Camisa", "Serigrafia", "Frente", "Mais de 3 Cores", "-", 0, 0, "QNT"],
    ["Camisa", "Serigrafia", "Frente e Costas", "Mais de 3 Cores", "-", 0, 0, "QNT"],

    //["Camisa", "Transfere", "-", "-", "-", 0, 0, "QNT"],
    //["Camisa", "Sublimação", "Frente", "-", "-", 0, 0, "QNT"],
    //["Camisa", "Sublimação", "Frente e Costas", "-", "-", 0, 0, "QNT"],
    //["Camisa", "Sublimação Total", "Com Manga", "-", "-", 350, 0, "QNT"],
    //["Camisa", "Sublimação Total", "Sem Manga", "-", "-", 300, 0, "QNT"],
    //["Envelopamento", "Moto", "parte da moto", "-", "-", 0, 0, "QNT"],
    //["Envelopamento", "Carro", "partes do carro", "-", "-", 0, 0, "QNT"],
    //["Envelopamento", "Eletrodomestico", "itens da casa", "-", "-", 0, 0, "QNT"],

    ["Arte","","","","",50,0,"QNT"],
    ["Figurinha","","","","",1,0,"QNT"],
  ]

  const grupos = {
    Impressao: ['Adesivo','Etiqueta','Recorte','Lona','Quadro','ímã'],
    Placas: ['Placa','Cavalete','Toldo','Quebra Sol'],
    Offset: ['Cartão','Tag','Panfleto','A4','Cardápio'],
    Outros: ['Envelopamento','Camisa','Arte','Figurinha'],
  }

  const CopyPresset = {
    'Pix':`Chave: 81987265401
  Nome: Alan Ferreira da Silva`
  }

//SVG
  const IconEscList = `<svg xmlns="http://www.w3.org/2000/svg" width="135.189" height="135.189" viewBox="0 0 13504.66 13504.66">
      <path class="fill:#FFA725" d="M335.23 335.23c446.95,-446.96 1178.33,-446.96 1625.29,0l4791.82 4791.82 4791.82 -4791.82c446.96,-446.96 1178.34,-446.96 1625.29,0 446.96,446.95 446.96,1178.33 0,1625.29l-4791.82 4791.82 4791.82 4791.82c446.96,446.96 446.96,1178.34 0,1625.29 -446.95,446.96 -1178.33,446.96 -1625.29,0l-4791.82 -4791.82 -4791.82 4791.82c-446.96,446.96 -1178.34,446.96 -1625.29,0 -446.96,-446.95 -446.96,-1178.33 0,-1625.29l4791.82 -4791.82 -4791.82 -4791.82c-446.96,-446.96 -446.96,-1178.34 0,-1625.29z"/>
    </svg>
    `
  const IconSavList = `<svg xmlns="http://www.w3.org/2000/svg" width="136.251" height="100.53" viewBox="0 0 13610.83 10042.47">
      <path class="fill:#FFA725" d="M335.22 3585.85c446.95,-446.96 1178.34,-446.96 1625.3,0l3206.03 3206.02 6483.42 -6456.99c447.87,-446.05 1178.34,-446.95 1625.31,0 446.94,446.95 447.86,1179.27 0,1625.3l-6483.43 6456.99 -1625.3 1625.3 -1625.3 -1625.3 -3206.03 -3206.01c-446.95,-446.97 -446.96,-1178.36 0,-1625.31z"/>
    </svg>
    `
  const IconLaps = `<svg xmlns="http://www.w3.org/2000/svg" width="157.273" height="157.309" viewBox="0 0 15726.24 15729.88">
      <path class="fill:#FFA725" d="M831.05 14900.43l383.57 -1086.77c366.88,194.13 509.08,336.33 703.2,703.2 -203.75,73.82 -931.66,347.43 -1086.78,383.56zm607.32 -1726.04c0,-159.26 701.24,-1945.34 799.1,-2365.33 217.89,0 395.53,39.67 597.95,73.3 433.48,72.03 471.68,-4.56 492,179.24 37.18,336.35 -62.64,1052.04 113.92,1228.57 178.89,178.88 890.11,76.5 1228.56,113.92 156.53,17.3 119.7,33.92 183.31,487.94 29,206.95 69.24,383.69 69.24,602 -280.49,65.36 -1991.77,686.82 -2397.3,831.07 -163.08,-699.99 -1086.77,-1079.73 -1086.77,-1150.7zm4059.42 -159.82c0,-859.32 -376.25,-534.73 295.66,-1206.64 587.7,-587.69 5911.7,-5867.75 6033.19,-6049.18l487.19 471.74 -6816.03 6784.08zm-607.32 -1246.6l-831.06 0c-73.65,0 -95.88,-22.24 -95.88,-95.88l0 -831.07c0,-95.43 28.23,-58.67 80.79,-110.98l6407.87 -6377.68 934.56 951.33c-128.26,187.93 -5344.22,5360.18 -6056.77,6072.74 -79.8,79.79 -336.71,391.55 -439.51,391.55zm-2173.54 -1534.27l6784.29 -6800.38 464.33 446.8 -6026 6041.94c-437.24,438.4 -285.26,446.01 -825.55,362.08 -148.71,-23.1 -237.01,-50.44 -397.06,-50.44zm7247.87 -7247.86l622.68 -639.84 2813.34 2797.49c-89.11,129.12 -510.18,523.49 -647.22,615.25l-2788.8 -2772.9zm1086.77 -1086.78c104.11,-152.06 786.31,-799.89 1006.75,-1022.87 542.69,-548.95 947.52,-27.38 1262.64,287.75l1246.6 1246.6c365.59,365.58 676.59,713.68 340.61,1084.13l-1067.79 1177.31 -2788.8 -2772.91zm-11051.56 13480.83c0,494.96 418.21,345.98 643.93,260.36l4860.1 -1692.51 9590.93 -9587.42c411.17,-411.16 631.29,-557.31 631.29,-1254.59 0,-220.87 -94.02,-436.16 -180.57,-586.57 -63.72,-110.73 -2184.87,-2241.81 -2313.09,-2321.66 -451.52,-281.25 -1004.15,-259.92 -1451.47,49.89 -227.49,157.56 -8589.55,8568.75 -9535.65,9514.83 -736.11,736.11 -462.97,504.03 -907.59,1713.46 -440.78,1198.97 -923.11,2676.51 -1337.87,3904.21z"/>
    </svg>
    `
  const IconLixo = `<svg xmlns="http://www.w3.org/2000/svg" width="130.628" height="160.742" viewBox="0 0 13061.74 16072.9">
      <path class="fill:#FFA725" d="M2026.21 13939.32l0 -8918.15 9015.01 0 0 8918.15c0,615.13 -385.14,1086.79 -991.01,1086.79l-7032.99 0c-605.86,0 -991,-471.66 -991,-1086.79zm10101.93 -11922.84c-84.94,-53.89 -218.43,-32.14 -351.64,-31.96l-2717.3 0 0 -95.9c0,-657.58 149.95,-1342.37 -472.14,-1733.47 -299.24,-188.12 -509.12,-152.45 -966.42,-152.45l-2237.77 0c-461.16,0 -649.8,-22.17 -941.17,177.71 -545.15,373.97 -433.46,941.42 -433.46,1804.11 -660.68,0 -1321.35,0 -1982.02,0 -716.25,0 -1348.63,-77.19 -1719.39,294.58 -53.59,53.72 -164.39,218.21 -197.68,281.81 -159.1,303.82 -96.99,1006.01 -98.11,1438.58 -1.48,569.5 430.84,1021.68 992.2,1021.68 0,2759.62 0,5519.24 0,8278.85 0,903.93 -41.85,1718.89 753.03,2315.66 813.13,610.5 1572.37,433.31 2699.53,433.31 1105.62,0 5694.2,69.56 6134.91,-66.9 518.71,-160.64 935.97,-460.16 1184.88,-892.95 333.91,-580.58 288.62,-914.35 288.62,-1789.12 0,-2759.62 0,-5519.24 0,-8278.85 367.14,0 643.57,-195.43 804.94,-409.83 214.44,-284.91 186.09,-581.72 186.09,-1060.55 0,-468.75 53.55,-765.46 -146.05,-1068.62 -162.23,-246.41 -389.96,-465.68 -781.03,-465.68zm-3612.4 5593.83l0 5849.54c0,818.41 1022.98,716.79 1022.98,159.82l0 -6169.18c0,-532.77 -1022.98,-696.34 -1022.98,159.83zm-4987.03 -159.83l0 6169.18c0,528.1 1022.98,696.86 1022.98,-159.82l0 -5849.54c0,-847.3 -1022.98,-695.22 -1022.98,-159.83zm2493.51 63.93l0 6041.32c0,664.52 1022.99,664.52 1022.99,0l0 -6041.32c0,-673.83 -1022.99,-673.83 -1022.99,0zm-4987.03 -3995.59c0,-339.48 265.86,-511.44 607.39,-511.44l9782.25 0c844.44,0 745.86,990.9 95.9,990.9l-9974.06 0c-278.76,0 -511.49,-206.62 -511.49,-479.46zm3996.02 -1917.89c0,-336.46 180.78,-575.36 511.5,-575.36l1982.01 0c576.1,0 511.5,587.92 511.5,958.94l-3005.01 0 0 -383.58z"/>
    </svg>
    `
  const IconMais = `<svg xmlns="http://www.w3.org/2000/svg" width="133.611" height="133.611" viewBox="0 0 13346.86 13346.86">
      <path class="fill:white" d="M1324.7 5348.69l4024.06 0 0 -4023.99c0,-728.63 596.07,-1324.71 1324.71,-1324.71l0.06 0c728.63,0 1324.71,596.07 1324.71,1324.71l0 4023.99 4023.93 0c728.63,0 1324.71,596.07 1324.71,1324.71l0 0.06c0,728.63 -596.07,1324.71 -1324.71,1324.71l-4023.93 0 0 4024c0,728.62 -596.07,1324.7 -1324.71,1324.7l-0.06 0c-728.63,0 -1324.71,-596.07 -1324.71,-1324.7l0 -4024 -4024.06 0c-728.62,0 -1324.7,-596.07 -1324.7,-1324.71l0 -0.06c0,-728.63 596.07,-1324.71 1324.7,-1324.71z"/>
    </svg>
    `
  const IconSetair = `<svg xmlns="http://www.w3.org/2000/svg" width="60.0848" height="78.3532" viewBox="0 0 6007.42 7833.94">
      <path class="fill:white" d="M4323.23 3916.97c-1352.66,-933.69 -2705.32,-1867.38 -4057.97,-2801.08 -656.9,-453.41 33.84,-1454.12 690.75,-1000.68 1563.15,1079.01 3124.27,2160.99 4689.75,3236.64 399.92,274.8 519.93,772.11 93.07,1065.46 -1594.27,1100.48 -3188.56,2200.94 -4782.84,3301.42 -656.9,453.44 -1347.64,-547.28 -690.74,-1000.68 1352.65,-933.7 2705.31,-1867.39 4057.97,-2801.08z"/>
    </svg>
  `
  const IconSetaVolt = `<svg xmlns="http://www.w3.org/2000/svg" width="60.0848" height="78.3532" viewBox="0 0 6007.42 7833.94">
      <path class="fill:white" d="M1684.19 3916.97c1352.66,-933.69 2705.32,-1867.38 4057.97,-2801.08 656.9,-453.41 -33.84,-1454.12 -690.75,-1000.68 -1563.15,1079.01 -3124.27,2160.99 -4689.75,3236.64 -399.92,274.8 -519.93,772.11 -93.07,1065.46 1594.27,1100.48 3188.56,2200.94 4782.84,3301.42 656.9,453.44 1347.64,-547.28 690.74,-1000.68 -1352.65,-933.7 -2705.31,-1867.39 -4057.97,-2801.08z"/>
    </svg>
  `
  const IconXDesc = `<svg xmlns="http://www.w3.org/2000/svg" width="124.796" height="19.3558" viewBox="0 0 12465.36 1933.37">
      <polygon class="fill:red;fill-rule:nonzero" points="-0,1786.28 5709.84,966.68 -0,147.09 20.93,0 6232.67,891.63 12444.43,0 12465.36,147.09 6755.52,966.68 12465.36,1786.28 12444.43,1933.37 6232.68,1041.74 20.93,1933.37 "/>
    </svg>
  `
  const IconNota = `<svg xmlns="http://www.w3.org/2000/svg" width="183.333" height="183.333" viewBox="0 0 18319.01 18319.01">
    <path class="fill:white" d="M11085.03 14647.99c59.16,-253.85 129.13,-488.11 182.83,-752.89 78.09,-386.17 139.65,-379.9 321.01,-650.67l791.79 683.86c-192.82,364.19 -499.57,388.44 -923.72,587.92l-371.91 131.79zm-8961.62 -1223.68c0,281.43 238.79,575.92 503.83,575.92l5434.52 0c740.35,0 659.87,-1079.76 71.95,-1079.76l-5542.45 0c-239.59,0 -467.86,279.7 -467.86,503.84zm0 -9681.33c0,346.59 268.64,575.79 647.88,575.79l5254.49 0c793.93,0 711.71,-1115.6 71.95,-1115.6l-5398.53 0c-305.29,0 -575.79,247.85 -575.79,539.81zm0 3239.15c0,281.3 238.79,575.79 503.83,575.79l8709.65 0c621.37,0 621.37,-1079.63 0,-1079.63l-8673.66 0c-275.17,0 -539.81,226.13 -539.81,503.84zm0 3239.14c0,379.77 307.82,575.79 683.86,575.79l8349.73 0c883.87,0 822.97,-1115.73 107.94,-1115.73l-8637.69 0c-246.92,0 -503.83,286.9 -503.83,539.94zm8169.83 5974.33c258.65,0 2314.23,-966.23 2591.26,-1151.72 0,468.13 -1.33,936.38 0.8,1404.51 2.4,514.23 -137.38,790.86 -648.69,790.86l-10581.06 0c-325.28,0 -575.79,-250.53 -575.79,-575.79l0 -15007.91c0,-325.28 250.52,-575.79 575.79,-575.79l7989.8 0 0 2735.17c0,265.04 294.49,503.84 575.93,503.84l2663.22 0 0 5614.54c0,198.15 -620.44,819.78 -797.13,1038.45 -288.77,357.52 -1538.55,1765.35 -1698.99,2079.83 -89.68,175.62 -113.13,260.78 -160.05,451.87l-481.32 2038.78c-49.3,394.43 257.32,653.35 546.22,653.35zm2807.14 -3131.21l-791.66 -647.75 2951.18 -3491.13 791.79 647.89 -2951.31 3490.99zm3635.04 -4318.77l-755.81 -647.89c222.13,-331.53 625.22,-854.7 1054.7,-478.79 457.06,400.17 -32.9,948.51 -298.89,1126.67zm-5974.32 -7414.01l1943.38 1871.56 -1943.38 0 0 -1871.56zm-10761.09 180.03l0 15295.73c0,763.69 747.96,1511.64 1511.63,1511.64l10940.99 0c547,0 1054.3,-404.7 1262.32,-753.02 325.67,-545.55 249.32,-933.17 249.32,-1766.29 0,-307.82 -36.64,-1830.12 13.99,-2001.34l3559.76 -4250.15c390.57,-461.06 781,-805.12 781,-1522.43 0,-1557.08 -1910.2,-2187.78 -2904.55,-997.01l-1450.2 1716.85 0 -4570.76c0,-945.03 35.18,-1202.88 -495.17,-1808.26l-2156.45 -2018.4c-192.55,-157.64 -567.13,-348.19 -839.51,-348.19l-8961.49 0c-756.75,0 -1511.63,753.28 -1511.63,1511.63z"/>
  </svg>
  `
  const IconRoloTop = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="65.073mm" height="65.073mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
  viewBox="0 0 6493.07 6493.07">
    <style type="text/css">
      .fil0 {fill:black;opacity:0.3;}
      .fil1 {fill:#FF6600}
    </style>
   </defs>
    <path class="fil0" d="M3246.54 63.89c1757.73,0 3182.65,1424.92 3182.65,3182.65 0,1757.73 -1424.92,3182.65 -3182.65,3182.65 -1757.73,0 -3182.65,-1424.92 -3182.65,-3182.65 0,-1757.73 1424.92,-3182.65 3182.65,-3182.65z"/>
    <path class="fil1" d="M3246.54 0c1793.01,0 3246.54,1453.52 3246.54,3246.54 0,1793.01 -1453.52,3246.54 -3246.54,3246.54 -1793.01,0 -3246.54,-1453.52 -3246.54,-3246.54 0,-1793.01 1453.52,-3246.54 3246.54,-3246.54zm-1657.73 2746.62l1418.78 -1418.77 0 -0.01c2.06,-2.06 4.12,-4.07 6.22,-6.06l0.01 -0.01c2.1,-1.99 4.2,-3.93 6.34,-5.86l0 -0.01c2.14,-1.93 4.28,-3.8 6.46,-5.67l0 -0.01c2.17,-1.86 4.36,-3.68 6.57,-5.48l0 -0.01c2.21,-1.8 4.42,-3.55 6.67,-5.29l0.01 -0.01c2.24,-1.73 4.49,-3.42 6.77,-5.09l0.01 -0.01c2.28,-1.67 4.57,-3.29 6.87,-4.9l0 -0.01c2.31,-1.61 4.62,-3.17 6.96,-4.71l0.01 -0.01c2.33,-1.54 4.69,-3.03 7.05,-4.51l0 -0.01c2.37,-1.48 4.76,-2.91 7.15,-4.33 2.4,-1.41 4.81,-2.78 7.23,-4.13l0 -0.01c2.42,-1.35 4.86,-2.66 7.31,-3.94l0.01 -0.01c2.44,-1.29 4.91,-2.52 7.38,-3.74l0 -0.01c2.48,-1.22 4.96,-2.4 7.46,-3.55l0.01 -0.01c2.5,-1.16 5,-2.28 7.52,-3.36l0.01 0c2.52,-1.09 5.05,-2.15 7.59,-3.17l0 -0.01c2.54,-1.03 5.09,-2.01 7.65,-2.97l0.01 -0.01c2.56,-0.96 5.13,-1.89 7.71,-2.78 2.58,-0.91 5.18,-1.77 7.77,-2.6 2.6,-0.84 5.2,-1.64 7.81,-2.4l0.01 0c2.62,-0.77 5.23,-1.51 7.86,-2.22l0.01 0c2.62,-0.7 5.26,-1.38 7.9,-2.02l0 -0.01c2.64,-0.65 5.29,-1.25 7.94,-1.83l0.01 0c2.65,-0.58 5.31,-1.13 7.97,-1.64l0.01 0c2.66,-0.51 5.33,-0.99 8,-1.44l0.01 -0.01c2.67,-0.45 5.35,-0.86 8.03,-1.25 2.68,-0.38 5.37,-0.74 8.06,-1.06 2.69,-0.32 5.37,-0.61 8.07,-0.87l0.01 0c2.69,-0.26 5.39,-0.47 8.09,-0.67l0.01 0c2.7,-0.19 5.4,-0.36 8.1,-0.49 2.7,-0.13 5.41,-0.22 8.11,-0.28l0.01 0c2.7,-0.06 5.41,-0.1 8.11,-0.1 2.7,0 5.41,0.04 8.11,0.1l0.01 0c2.7,0.07 5.41,0.15 8.11,0.28 2.71,0.13 5.4,0.3 8.1,0.49l0.01 0c2.69,0.19 5.4,0.41 8.09,0.67l0.01 0 8.07 0.87c2.69,0.32 5.38,0.67 8.06,1.06 2.69,0.38 5.35,0.8 8.03,1.25l0.01 0.01c2.67,0.45 5.34,0.93 8,1.44l0.01 0c2.66,0.52 5.32,1.06 7.97,1.64l0.01 0c2.65,0.58 5.3,1.19 7.94,1.83l0 0.01c2.64,0.65 5.27,1.31 7.9,2.02l0.01 0c2.62,0.71 5.25,1.45 7.86,2.22l0.01 0c2.61,0.77 5.21,1.57 7.81,2.4 2.6,0.83 5.19,1.71 7.77,2.6 2.59,0.9 5.15,1.82 7.71,2.78l0.01 0.01c2.56,0.97 5.11,1.95 7.65,2.97l0 0.01c2.54,1.03 5.07,2.09 7.59,3.17l0.01 0 7.52 3.36 0.01 0.01c2.49,1.16 4.99,2.33 7.46,3.55l0 0.01 7.38 3.74 0.01 0.01c2.44,1.28 4.89,2.59 7.31,3.94l0 0.01c2.42,1.35 4.84,2.71 7.23,4.13 2.39,1.41 4.78,2.85 7.15,4.33l0 0.01c2.37,1.48 4.71,2.97 7.05,4.51l0.01 0.01c2.33,1.54 4.66,3.1 6.96,4.71l0 0.01c2.31,1.61 4.6,3.23 6.87,4.9l0.01 0.01c2.28,1.67 4.52,3.35 6.77,5.09l0.01 0.01c2.24,1.73 4.46,3.49 6.67,5.29l0 0.01c2.21,1.8 4.4,3.61 6.57,5.48l0 0.01c2.18,1.86 4.33,3.74 6.46,5.67l0 0.01c2.14,1.93 4.24,3.86 6.34,5.86l0.01 0.01c2.09,1.99 4.17,4.01 6.22,6.06l0 0.01 1418.78 1418.77c131.42,131.42 131.42,346.47 0,477.89l-0.01 0.01c-131.42,131.42 -346.47,131.42 -477.89,-0.01l-1179.82 -1179.82 -1179.82 1179.82c-131.42,131.43 -346.47,131.43 -477.89,0.01l-0.01 -0.01c-131.42,-131.42 -131.42,-346.47 0,-477.89zm0 1699.37l1418.78 -1418.77 0 -0.01c2.06,-2.06 4.12,-4.07 6.22,-6.06l0.01 -0.01c2.1,-1.99 4.2,-3.93 6.34,-5.86l0 -0.01c2.14,-1.93 4.28,-3.8 6.46,-5.67l0 -0.01c2.17,-1.86 4.36,-3.68 6.57,-5.48l0 -0.01c2.21,-1.8 4.42,-3.55 6.67,-5.29l0.01 -0.01c2.24,-1.73 4.49,-3.42 6.77,-5.09l0.01 -0.01c2.28,-1.67 4.57,-3.29 6.87,-4.9l0 -0.01c2.31,-1.61 4.62,-3.17 6.96,-4.71l0.01 -0.01c2.33,-1.54 4.69,-3.03 7.05,-4.51l0 -0.01c2.37,-1.48 4.76,-2.91 7.15,-4.33 2.4,-1.41 4.81,-2.78 7.23,-4.13l0 -0.01c2.42,-1.35 4.86,-2.66 7.31,-3.94l0.01 -0.01c2.44,-1.29 4.91,-2.52 7.38,-3.74l0 -0.01c2.48,-1.22 4.96,-2.4 7.46,-3.55l0.01 -0.01c2.5,-1.16 5,-2.28 7.52,-3.36l0.01 0c2.52,-1.09 5.05,-2.15 7.59,-3.17l0 -0.01c2.54,-1.03 5.09,-2.01 7.65,-2.97l0.01 -0.01c2.56,-0.96 5.13,-1.89 7.71,-2.78 2.58,-0.91 5.18,-1.77 7.77,-2.6 2.6,-0.84 5.2,-1.64 7.81,-2.4l0.01 0c2.62,-0.77 5.23,-1.51 7.86,-2.22l0.01 0c2.62,-0.7 5.26,-1.38 7.9,-2.02l0 -0.01c2.64,-0.65 5.29,-1.25 7.94,-1.83l0.01 0c2.65,-0.58 5.31,-1.13 7.97,-1.64l0.01 0c2.66,-0.51 5.33,-0.99 8,-1.44l0.01 -0.01c2.67,-0.45 5.35,-0.86 8.03,-1.25 2.68,-0.38 5.37,-0.74 8.06,-1.06 2.69,-0.32 5.37,-0.61 8.07,-0.87l0.01 0c2.69,-0.26 5.39,-0.47 8.09,-0.67l0.01 0c2.7,-0.19 5.4,-0.36 8.1,-0.49 2.7,-0.13 5.41,-0.22 8.11,-0.28l0.01 0c2.7,-0.06 5.41,-0.1 8.11,-0.1 2.7,0 5.41,0.04 8.11,0.1l0.01 0c2.7,0.07 5.41,0.15 8.11,0.28 2.71,0.13 5.4,0.3 8.1,0.49l0.01 0c2.69,0.19 5.4,0.41 8.09,0.67l0.01 0 8.07 0.87c2.69,0.32 5.38,0.67 8.06,1.06 2.69,0.38 5.35,0.8 8.03,1.25l0.01 0.01c2.67,0.45 5.34,0.93 8,1.44l0.01 0c2.66,0.52 5.32,1.06 7.97,1.64l0.01 0c2.65,0.58 5.3,1.19 7.94,1.83l0 0.01c2.64,0.65 5.27,1.31 7.9,2.02l0.01 0c2.62,0.71 5.25,1.45 7.86,2.22l0.01 0c2.61,0.77 5.21,1.57 7.81,2.4 2.6,0.83 5.19,1.71 7.77,2.6 2.59,0.9 5.15,1.82 7.71,2.78l0.01 0.01c2.56,0.97 5.11,1.95 7.65,2.97l0 0.01c2.54,1.03 5.07,2.09 7.59,3.17l0.01 0 7.52 3.36 0.01 0.01c2.49,1.16 4.99,2.33 7.46,3.55l0 0.01 7.38 3.74 0.01 0.01c2.44,1.28 4.89,2.59 7.31,3.94l0 0.01c2.42,1.35 4.84,2.71 7.23,4.13 2.39,1.41 4.78,2.85 7.15,4.33l0 0.01c2.37,1.48 4.71,2.97 7.05,4.51l0.01 0.01c2.33,1.54 4.66,3.1 6.96,4.71l0 0.01c2.31,1.61 4.6,3.23 6.87,4.9l0.01 0.01c2.28,1.67 4.52,3.35 6.77,5.09l0.01 0.01c2.24,1.73 4.46,3.49 6.67,5.29l0 0.01c2.21,1.8 4.4,3.61 6.57,5.48l0 0.01c2.18,1.86 4.33,3.74 6.46,5.67l0 0.01c2.14,1.93 4.24,3.86 6.34,5.86l0.01 0.01c2.09,1.99 4.17,4.01 6.22,6.06l0 0.01 1418.78 1418.77c131.42,131.42 131.42,346.47 0,477.89l-0.01 0.01c-131.42,131.42 -346.47,131.42 -477.89,-0.01l-1179.82 -1179.82 -1179.82 1179.82c-131.42,131.43 -346.47,131.43 -477.89,0.01l-0.01 -0.01c-131.42,-131.42 -131.42,-346.47 0,-477.89zm1657.73 -4244.86c1681.93,0 3045.41,1363.47 3045.41,3045.41 0,1681.93 -1363.47,3045.41 -3045.41,3045.41 -1681.93,0 -3045.41,-1363.47 -3045.41,-3045.41 0,-1681.93 1363.47,-3045.41 3045.41,-3045.41z"/>
  </svg>
  
`
