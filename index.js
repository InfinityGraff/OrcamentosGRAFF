// PreScript
    const User={
      '34$r4-34&-7eV79@7K':['(Baby)','Baby Massia'],
      '32$r2-32&-6eV69@6K':['(Alan)','Allan MacLovin'],
      '31$r1-31&-4eV49@4K':['(Lisa)','Lisa Caramelo'],
      '36$r6-36&-9eV99@9K':['(Segu)','Segunda Hippie']}
  
    const Cttlist = [
      ['Marcelo Max','(81) 98824-3496','NomeCompleto','Loja','CnttLoja','Categoria',0.2,'ID-001'],
      ['Edilson Skyllus','(88) 88888-8888','NomeCompleto','Loja','CnttLoja','Categoria',0.2,'ID-002']
    ]

    const cores = ["#FF0000","#FF0000","#FF4000","#FF8000","#FFBF00","#FFFF00","#BFFF00","#80FF00","#40FF00","#00FF00"]

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

    ["Placa", "Placa Parede", "ilhós", "-", "-", 70, 0, "M2 F"],
    ["Placa", "Placa Parede", "Ribite", "-", "-", 70, 0, "M2 F"],
    ["Placa", "Placa Frente Verso", "ilhós", "-", "-", 140, 0, "M2 F"],
    ["Placa", "Placa Frente Verso", "Ribite", "-", "-", 140, 0, "M2 F"],
    ["Placa", "Placa de Obra", "ilhós", "Parede", "-", 70, 0, "M2 F C"],
    ["Placa", "Placa de Obra", "Ribite", "Parede", "-", 70, 0, "M2 F C"],
    ["Placa", "Placa de Obra", "ilhós", "No Chão", "-", 70, 0, "M2 F C",''],
    ["Placa", "Placa de Obra", "Ribite", "No Chão", "-", 70, 0, "M2 F C",''],
    ["Placa", "Luminosa", "Circular", "ilhós", "-", 80, 0, "M2 F",''],
    ["Placa", "Luminosa", "Circular", "Ribite", "-", 80, 0, "M2 F",''],
    ["Placa", "Luminosa", "ilhós", "Retangular", "-", 80, 0, "M2 F",''],
    ["Placa", "Luminosa", "Ribite", "Retangular", "-", 80, 0, "M2 F",''],
    ["Placa", "BackDrop", "ilhós", "-", "-", 70, 0, "M2 F",''],
    ["Placa", "BackDrop", "Ribite", "-", "-", 70, 0, "M2 F",''],
    ["Placa", "Fachada", "ilhós", "-", "-", 70, 0, "M2 F",''],
    ["Placa", "Fachada", "Ribite", "-", "-", 70, 0, "M2 F",''],
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

//SVG
  const IconEscList = `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <!-- Creator: CorelDRAW 2020 (64 Bit) -->
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="135.189mm" height="135.189mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
    viewBox="0 0 13504.66 13504.66"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
    <defs>
      <style type="text/css">
      <![CDATA[
        .fil0 {fill:#FFA725}
      ]]>
      </style>
    </defs>
    <g id="Camada_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer"/>
      <path class="fil0" d="M335.23 335.23c446.95,-446.96 1178.33,-446.96 1625.29,0l4791.82 4791.82 4791.82 -4791.82c446.96,-446.96 1178.34,-446.96 1625.29,0 446.96,446.95 446.96,1178.33 0,1625.29l-4791.82 4791.82 4791.82 4791.82c446.96,446.96 446.96,1178.34 0,1625.29 -446.95,446.96 -1178.33,446.96 -1625.29,0l-4791.82 -4791.82 -4791.82 4791.82c-446.96,446.96 -1178.34,446.96 -1625.29,0 -446.96,-446.95 -446.96,-1178.33 0,-1625.29l4791.82 -4791.82 -4791.82 -4791.82c-446.96,-446.96 -446.96,-1178.34 0,-1625.29z"/>
    </g>
    </svg>
    `
  const IconSavList = `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <!-- Creator: CorelDRAW 2020 (64 Bit) -->
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="136.251mm" height="100.53mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
    viewBox="0 0 13610.83 10042.47"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
    <defs>
      <style type="text/css">
      <![CDATA[
        .fil0 {fill:#FFA725}
      ]]>
      </style>
    </defs>
    <g id="Camada_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer"/>
      <path class="fil0" d="M335.22 3585.85c446.95,-446.96 1178.34,-446.96 1625.3,0l3206.03 3206.02 6483.42 -6456.99c447.87,-446.05 1178.34,-446.95 1625.31,0 446.94,446.95 447.86,1179.27 0,1625.3l-6483.43 6456.99 -1625.3 1625.3 -1625.3 -1625.3 -3206.03 -3206.01c-446.95,-446.97 -446.96,-1178.36 0,-1625.31z"/>
    </g>
    </svg>
    `
  const IconLaps = `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <!-- Creator: CorelDRAW 2020 (64 Bit) -->
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="157.273mm" height="157.309mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
    viewBox="0 0 15726.24 15729.88"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
    <defs>
      <style type="text/css">
      <![CDATA[
        .fil0 {fill:#FFA725}
      ]]>
      </style>
    </defs>
    <g id="Camada_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer"/>
      <path class="fil0" d="M831.05 14900.43l383.57 -1086.77c366.88,194.13 509.08,336.33 703.2,703.2 -203.75,73.82 -931.66,347.43 -1086.78,383.56zm607.32 -1726.04c0,-159.26 701.24,-1945.34 799.1,-2365.33 217.89,0 395.53,39.67 597.95,73.3 433.48,72.03 471.68,-4.56 492,179.24 37.18,336.35 -62.64,1052.04 113.92,1228.57 178.89,178.88 890.11,76.5 1228.56,113.92 156.53,17.3 119.7,33.92 183.31,487.94 29,206.95 69.24,383.69 69.24,602 -280.49,65.36 -1991.77,686.82 -2397.3,831.07 -163.08,-699.99 -1086.77,-1079.73 -1086.77,-1150.7zm4059.42 -159.82c0,-859.32 -376.25,-534.73 295.66,-1206.64 587.7,-587.69 5911.7,-5867.75 6033.19,-6049.18l487.19 471.74 -6816.03 6784.08zm-607.32 -1246.6l-831.06 0c-73.65,0 -95.88,-22.24 -95.88,-95.88l0 -831.07c0,-95.43 28.23,-58.67 80.79,-110.98l6407.87 -6377.68 934.56 951.33c-128.26,187.93 -5344.22,5360.18 -6056.77,6072.74 -79.8,79.79 -336.71,391.55 -439.51,391.55zm-2173.54 -1534.27l6784.29 -6800.38 464.33 446.8 -6026 6041.94c-437.24,438.4 -285.26,446.01 -825.55,362.08 -148.71,-23.1 -237.01,-50.44 -397.06,-50.44zm7247.87 -7247.86l622.68 -639.84 2813.34 2797.49c-89.11,129.12 -510.18,523.49 -647.22,615.25l-2788.8 -2772.9zm1086.77 -1086.78c104.11,-152.06 786.31,-799.89 1006.75,-1022.87 542.69,-548.95 947.52,-27.38 1262.64,287.75l1246.6 1246.6c365.59,365.58 676.59,713.68 340.61,1084.13l-1067.79 1177.31 -2788.8 -2772.91zm-11051.56 13480.83c0,494.96 418.21,345.98 643.93,260.36l4860.1 -1692.51 9590.93 -9587.42c411.17,-411.16 631.29,-557.31 631.29,-1254.59 0,-220.87 -94.02,-436.16 -180.57,-586.57 -63.72,-110.73 -2184.87,-2241.81 -2313.09,-2321.66 -451.52,-281.25 -1004.15,-259.92 -1451.47,49.89 -227.49,157.56 -8589.55,8568.75 -9535.65,9514.83 -736.11,736.11 -462.97,504.03 -907.59,1713.46 -440.78,1198.97 -923.11,2676.51 -1337.87,3904.21z"/>
    </g>
    </svg>
    `

  const IconLixo = `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <!-- Creator: CorelDRAW 2020 (64 Bit) -->
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="130.628mm" height="160.742mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
    viewBox="0 0 13061.74 16072.9"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
    <defs>
      <style type="text/css">
      <![CDATA[
        .fil0 {fill:#FFA725}
      ]]>
      </style>
    </defs>
    <g id="Camada_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer"/>
      <path class="fil0" d="M2026.21 13939.32l0 -8918.15 9015.01 0 0 8918.15c0,615.13 -385.14,1086.79 -991.01,1086.79l-7032.99 0c-605.86,0 -991,-471.66 -991,-1086.79zm10101.93 -11922.84c-84.94,-53.89 -218.43,-32.14 -351.64,-31.96l-2717.3 0 0 -95.9c0,-657.58 149.95,-1342.37 -472.14,-1733.47 -299.24,-188.12 -509.12,-152.45 -966.42,-152.45l-2237.77 0c-461.16,0 -649.8,-22.17 -941.17,177.71 -545.15,373.97 -433.46,941.42 -433.46,1804.11 -660.68,0 -1321.35,0 -1982.02,0 -716.25,0 -1348.63,-77.19 -1719.39,294.58 -53.59,53.72 -164.39,218.21 -197.68,281.81 -159.1,303.82 -96.99,1006.01 -98.11,1438.58 -1.48,569.5 430.84,1021.68 992.2,1021.68 0,2759.62 0,5519.24 0,8278.85 0,903.93 -41.85,1718.89 753.03,2315.66 813.13,610.5 1572.37,433.31 2699.53,433.31 1105.62,0 5694.2,69.56 6134.91,-66.9 518.71,-160.64 935.97,-460.16 1184.88,-892.95 333.91,-580.58 288.62,-914.35 288.62,-1789.12 0,-2759.62 0,-5519.24 0,-8278.85 367.14,0 643.57,-195.43 804.94,-409.83 214.44,-284.91 186.09,-581.72 186.09,-1060.55 0,-468.75 53.55,-765.46 -146.05,-1068.62 -162.23,-246.41 -389.96,-465.68 -781.03,-465.68zm-3612.4 5593.83l0 5849.54c0,818.41 1022.98,716.79 1022.98,159.82l0 -6169.18c0,-532.77 -1022.98,-696.34 -1022.98,159.83zm-4987.03 -159.83l0 6169.18c0,528.1 1022.98,696.86 1022.98,-159.82l0 -5849.54c0,-847.3 -1022.98,-695.22 -1022.98,-159.83zm2493.51 63.93l0 6041.32c0,664.52 1022.99,664.52 1022.99,0l0 -6041.32c0,-673.83 -1022.99,-673.83 -1022.99,0zm-4987.03 -3995.59c0,-339.48 265.86,-511.44 607.39,-511.44l9782.25 0c844.44,0 745.86,990.9 95.9,990.9l-9974.06 0c-278.76,0 -511.49,-206.62 -511.49,-479.46zm3996.02 -1917.89c0,-336.46 180.78,-575.36 511.5,-575.36l1982.01 0c576.1,0 511.5,587.92 511.5,958.94l-3005.01 0 0 -383.58z"/>
    </g>
    </svg>`

  const IconMais = `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <!-- Creator: CorelDRAW 2020 (64 Bit) -->
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="133.611mm" height="133.611mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
    viewBox="0 0 13346.86 13346.86"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
    <defs>
      <style type="text/css">
      <![CDATA[
        .fil0 {fill:white}
      ]]>
      </style>
    </defs>
    <g id="Camada_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer"/>
      <g id="_1912836889280">
      <path class="fil0" d="M1324.7 5348.69l4024.06 0 0 -4023.99c0,-728.63 596.07,-1324.71 1324.71,-1324.71l0.06 0c728.63,0 1324.71,596.07 1324.71,1324.71l0 4023.99 4023.93 0c728.63,0 1324.71,596.07 1324.71,1324.71l0 0.06c0,728.63 -596.07,1324.71 -1324.71,1324.71l-4023.93 0 0 4024c0,728.62 -596.07,1324.7 -1324.71,1324.7l-0.06 0c-728.63,0 -1324.71,-596.07 -1324.71,-1324.7l0 -4024 -4024.06 0c-728.62,0 -1324.7,-596.07 -1324.7,-1324.71l0 -0.06c0,-728.63 596.07,-1324.71 1324.7,-1324.71z"/>
      </g>
    </g>
    </svg>`
//
// Biblioteca
  // Básicas
    function QrySlt(e){
      return document.querySelector(e)}
    function QrySltAll(e){
      return document.querySelectorAll(e)}
    function CreateTag(e){
      return document.createElement(e)}
    function Reais(e){
      return e.toFixed(2).replace('.',',')}
    function None(e){
      const ee = Array.isArray(e) ? e : [e]
        ee.forEach(E => {E.style.display = 'none'})}

    function Show(e){
      const ee = Array.isArray(e) ? e : [e]
        ee.forEach(E => {E.style.display = 'flex'})}

    function Trogl(a,b){
      const aa = Array.isArray(a) ? a : [a]
      const bb = Array.isArray(b) ? b : [b]
        aa.forEach(E => {E.style.display = 'block'})
        bb.forEach(E => {E.style.display = 'none'})}
    const Rad0=(e)=>{
      e.style.borderRadius = '0px 0px 0px 0px'}
    const RadB=(e)=>{
      e.style.borderRadius = '25px 25px 0px 0px'}

    function delay(ms){
      return new Promise(resolve => setTimeout(resolve, ms))}

    function MouseXY(event){
      return [event.clientX, event.clientY]}
    function KeyEnter(e){
      return (e.code === 'Enter' || e.keyCode === 13)}

    function IptsDIV(String){
      return Array.from(document.querySelectorAll(String))}
    const GerarID=()=>
      `ID-${Math.floor(Math.random()*900)+100}`
    const GerarIT=()=>
      `IT-${Math.floor(Math.random()*900)+100}`

    var NewDate = new Date().toISOString().split('T')[0]
  // Avançadas
    function SairModal(Fundo){
      Fundo.addEventListener('keyup',e=>e.key === 'Escape' && None(Fundo))
      Fundo.addEventListener('click',e=>e.target === Fundo && None(Fundo))}

    function PrmssInnr(Tag) {
      return new Promise(resolve => {
      const observer = new MutationObserver((m, observer) => {
        if (Tag.innerHTML !== '') {observer.disconnect();resolve()}})
      observer.observe(Tag,{childList: true, subtree: true})})}
    
    function CrypPass(senha) {
      const Cryp = senha.split('').map((c,idx)=>{
        if(/[0-9]/.test(c)){let N=parseInt(c)
          N=N===9?0:N+(idx%2===1?4:1);return N.toString()}
        else if(/[A-Za-z]/.test(c)){
          let L=c.charCodeAt(0)+(idx%2===1?5:1)
          if(L>90&&L<97)L-=26
          else if(L>122)L-=26
          return String.fromCharCode(L)}else{return c}})
      var par = [] ; var imp = []
      Cryp.forEach((e,idx)=>{idx%2===0?par.push(e):imp.push(e)})
      const Par=par.reverse().flatMap(C=>[`3${C}$`,`r${C}-`,`3${C}&`])
      const Imp=imp.reverse().flatMap(C=>[`-${C}e`,`V${C}9`,`@${C}K`])
      return Par.concat(Imp).join('')}
    
    function MaskNum(input) {
      var Vlr = input.value.replace(/\D/g, '').replace(/^0+(?=[1-9])/, '')
      var Mask = '' ; const VLR = Vlr.length

      var Mask = VLR === 1 ? '0.0'+Vlr :
                VLR === 2 ? '0.'+Vlr :
                VLR === 3 ? Vlr.charAt(0)+'.'+Vlr.substring(1) :
                VLR === 4 ? Vlr.substring(0, 2)+'.'+Vlr.substring(2) :
                VLR > 4 ? Vlr.substring(0, 2)+'.'+Vlr.substring(2, 4) : ''
        if (VLR > 5) {Mask = Mask.substring(0, 5)}
        input.value = Mask}
    function TagSVG(Icon,Cls,Alt,On){
      return `<img class="${Cls}" src="data:image/svg+xml;base64,${btoa(Icon)}" alt="${Alt}" onclick="${On}">`}

  // Testando
    function Red(e){
      e.style.color = 'red'}
    function Bak(e){
      e.style.color = 'black'}
    
    var W400 = window.matchMedia("(max-width: 500px)")
    MediaQuere(W400)
    W400.addListener(MediaQuere)

    function MediaQuere(W400){
      var C = document.querySelector('.Cabecalho')
      var R = document.querySelector('#DivResult')
      
      if(W400.matches){
      C.classList.remove("Bt")
      R.classList.remove("Cl")
      }else{
      C.classList.add("Bt")
      R.classList.add("Cl")}
    }
// Declarações
  // Const's Fundos
    const FundoInfo = QrySlt('#Fundo-Info')
    const FundoModais = QrySlt('#Fundo-Minisenha')
    const FormOrcamento = QrySlt('#FormOrcamento')
    const ResultFilTable = QrySlt('#resultfilter1')
    const FundoItem = QrySlt('#Fundo-Item')

  // Const's Login
    const LgTop = QrySlt('#Login-Top')
    const Login = QrySlt('#Login-Cod')
    const LoginAba = QrySlt('#ModalLogin')
    const LoginSpn = QrySlt('#Span-Login')
    const I_Senha = QrySlt('#Inpt-Senha')

  // Const's Clientes
    const Bandeja = QrySlt("#Bandeija")
    const GrupClnt = QrySlt('#Grupo-Cliente')
    const GrupClntSv = QrySlt('#GrupoClntSave')

    const DivClntForm = QrySlt('#Div-Inpt-Clnt')
    const I_Clnt = QrySlt('#Div-Inpt-Clnt input')
      const DivClntInfo = QrySlt("#DivClntInfo")
      const ClntInfo = QrySlt("#ClntInfo")
      const IInnClnt = QrySlt('#InfoInnerClnt')
        const InnClnt = QrySlt('#Inner-Clnt')

    const DivCnttForm = QrySlt('#Div-Inpt-Cntt')
    const I_Cntt =  QrySlt('#Div-Inpt-Cntt input')
      const DivCnttInfo = QrySlt("#DivCnttInfo")
      const CnttInfo = QrySlt("#CnttInfo")
      const IInnCntt = QrySlt('#InfoInnerCntt')
        const InnCntt = QrySlt('#Inner-Cntt')

    const btncadastro = QrySlt('#cadastrar')
    const ModalCadastro = QrySlt('#ModalCadastro')

  // Const's Form
    const I_Serv = QrySlt("#Div-Inpt-Serv select")
    const I_Tipo = QrySlt("#Div-Inpt-Tipo select")
    const I_Cbmt = QrySlt("#Div-Inpt-Cbmt select")
    const I_Gram = QrySlt('#Div-Inpt-Gram select')
    const I_QFix = QrySlt('#Div-Inpt-QFix select')
    const I_Etc = QrySlt("#Div-Inpt-Etc input")
    const I_Lcal = QrySlt("#Div-Inpt-Lcal input")
    const I_Larg = QrySlt('#Div-Inpt-Larg input')
    const I_Alt = QrySlt('#Div-Inpt-Alt input')
    const I_Qnt = QrySlt('#Div-Inpt-Qnt input')
    const DivEtc = QrySlt("#Div-Inpt-Etc")

    const InptForm = QrySltAll('form input')
    const Selects = QrySltAll('select')
    const DivServ = QrySlt('#Div-Inpt-Serv')
    const DivTipo = QrySlt('#Div-Inpt-Tipo')
    const DivCbmt = QrySlt('#Div-Inpt-Cbmt')
    const DivLarg = QrySlt('#Div-Inpt-Larg')
    const DivAlt = QrySlt('#Div-Inpt-Alt')
    const DivQnt = QrySlt('#Div-Inpt-Qnt')

    const Grupo_Tipos = QrySlt('#Grupo-Tipos')
    const Grupo_Medidas = QrySlt('#Grupo-Medidas')
    let ArryMdds=['#Div-Inpt-Larg input','#Div-Inpt-Alt input','#Div-Inpt-Qnt input']

  // Const's Info
    const EditNoneInfo = QrySlt('#RestaNome button')
    const BtnInfo1 = QrySlt('#btnINFO1')
    const BtnInfo2 = QrySlt('#btnINFO2')

    const FormPg = QrySltAll('input[type="radio"][name="pag"]')
      const divpag = QrySlt('#divpaginfo')
        const In_ValrPag = QrySlt('#vlrPagInfo')
        const In_DataPag = QrySlt('#dataPagInfo')
    const I_Arte = QrySlt('#ArteInfo')
      const divdesig = QrySlt('#divdesigner')
        const I_Desig = QrySltAll('input[type="radio"][name="Desig"]')
    const I_Frete = QrySltAll('input[type="radio"][name="Frete"]')
      const divEndrc = QrySlt('#DivEndereco')
    const Endereco = QrySlt('#Endereco')
      const RsutFrete = QrySlt('#RsutFrete')
        const InnLcal = QrySlt('#Inner-Lcal')

    const titleinfo2 = QrySlt('#titleinfo2')
    const Prazo = QrySlt('#Prazo')

// Declarações dos Arrays
  let IDPdd = 'ID-001'
  let ITitem = 'ID-001'
  let ArryUni = ['','','',''] // Art,Dsgn,Fret,VlrFret
  let ArryClnt = ['','','','','','','',''] // Clnt,Cntt
  let ArryItem = []
  let ArryPag = ['','',''] // //Form,Vlr,Data
  let ArryPDD = {
    IDPdd:{'Clnt':ArryClnt,ITitem:ArryItem,'UNI':ArryUni,'Pag':ArryPag}}
// OnLoad's
  document.querySelector('#Mais-Input').innerHTML = TagSVG(IconMais,'w50','Mais','')

// Funções Gerais
  

  function NewOrcamento(btn){
    // Cria Novo ID
    Show(FormOrcamento)
    None(btn.parentNode)

  }
  function SemLogin(){
    return LgTop.innerHTML === 'Login'}

  function AbrirLogin(){
    Show(LoginAba) ; LoginSpn.innerHTML='' ; I_Senha.focus() ; SairModal(fundo)}

  function TesteLogin(input,fundo){
    const Spn = 'Senha Inválida'
    const Cryp = CrypPass(input.value) ; if(User[Cryp]){None(fundo)
    LgTop.innerHTML=User[Cryp][1];Login.innerHTML=User[Cryp][0]}//*Reload()*/}
    else{LoginSpn.innerHTML=Spn ; input.placeholder=Spn}
    input.value='' ; input.focus() ; SairModal(fundo)}
  function MiniInput(tipo,btn){
    let palce = tipo === 'Senha' ? 'Insira a Senha' :
                tipo === 'Clnt' ? 'Nome do Cliente' : '' 
    FundoModais.innerHTML = 
    `<input class="MiniSenha" placeholder="${palce}"
      onkeyup="KyEntrMiniInpt(event,this,this.parentNode,'${tipo}')">`
    // pegar valor do botão // btn.offsetLeft ; btn.offsetTop
    const inpt = FundoModais.children[0]
    inpt.style.left = `${MouseXY(event)}px`
    inpt.style.top = `${MouseXY(event)}px`

    Show(FundoModais);SairModal(FundoModais);inpt.focus()}
  
  function KyEntrMiniInpt(e,input,fundo,tipo){
    if(KeyEnter(e)){
      if(tipo==='Senha'){console.log(TesteLogin(input,fundo))}
      if(tipo==='Clnt'){InnClnt.innerHTML = input.value
      None(fundo)}}}

  function BandejaFit(inpt,indx){
    Rad0(inpt); Bandeja.innerHTML = ""
    let value = inpt.value.toLowerCase()
    if (!value)return

    Bandeja.style.top = `${inpt.getBoundingClientRect().bottom}px`
    Bandeja.style.left = `${inpt.getBoundingClientRect().left}px`
    Bandeja.style.width = `${inpt.offsetWidth}px`

    Cttlist.map((e,idx) => [e[indx],idx])
    .filter(([opt])=>opt.toLowerCase().includes(value))
    .forEach(([opt,Idex])=>{RadB(inpt)
      const li = CreateTag('div')
      li.innerHTML = `<div>${opt}</div>`
      if (indx === 1) {li.innerHTML += `<div>${Cttlist[Idex][0]}</div>`}
        li.addEventListener("click",()=>{
          ArryClnt = [...Cttlist[Idex]]
          Rad0(inpt) ; ReadArray()
          Bandeja.innerHTML = ""
          console.log(ArryClnt)
        });Bandeja.appendChild(li)})}
//
// os EventListEner
  // Eventos Cliente
    I_Clnt.addEventListener('input',()=>{
      BandejaFit(I_Clnt,0)
      handleInput('Clnt',I_Clnt,ClntInfo,DivClntInfo,EditNoneInfo,IInnClnt)
      cadastrar()
      console.log(ArryClnt)
      })
    I_Cntt.addEventListener('input',()=>{BandejaFit(I_Cntt,1)
      handleInput('Cntt',I_Cntt,CnttInfo,DivCnttInfo,EditNoneInfo,IInnCntt)})
    ClntInfo.addEventListener('input',()=>{BandejaFit(ClntInfo,0)
        ClntInfo.addEventListener('keyup',e=>{
            if (KeyEnter(e)){CnttInfo.focus()}})
        ArryClnt[0] = ClntInfo.value;RequedInfo('1')})

    CnttInfo.addEventListener('input',()=>{BandejaFit(CnttInfo,1)
        ArryClnt[1] = CnttInfo.value;RequedInfo('1')})
  // Eventos Info 1
    I_Arte.addEventListener('change',()=>{
          I_Arte.value.match(/^_/) ? None(divdesig):Show(divdesig)
          ArryUni[0] = I_Arte.value ; RequedInfo('1')})

    I_Desig.forEach(R=>{R.addEventListener('change',()=>{
          ArryUni[1] = R.value ; RequedInfo('1')})})

    I_Frete.forEach(R=>{R.addEventListener('click',()=>{
      if(R.value==='Graff'){None([divEndrc,RsutFrete,RsutFrete.parentNode])
      }else{Show(divEndrc)}
      Endereco.focus();ArryUni[2] = R.value;RequedInfo('1')})})

    Endereco.addEventListener('keyup',async(e)=>{
      if(KeyEnter(e)){
        PesquisaKM(Endereco.value)
        await new Promise((r)=>{
          new MutationObserver(r).observe(RsutFrete,{childList:true})})
        ArryUni[2]=Endereco.value ; ArryUni[3]=RsutFrete.innerHTML
        RequedInfo('1')}})
  
  // Eventos Info 2
    FormPg.forEach(R=>{R.addEventListener('click',()=>{
      if(R.value === 'NPag'){None(divpag);ArryPag[0]='NPag'}
      else{Show(divpag);ArryPag[0]=R.value}
      In_ValrPag.focus() ; RequedInfo('2')})})

    In_ValrPag.addEventListener('input',()=>{
      ArryPag[1] = In_ValrPag.value ; RequedInfo('2')})
    In_DataPag.addEventListener('input',()=>{
      ArryPag[2] = In_DataPag.value ; RequedInfo('2')})
    Prazo.addEventListener('input',()=>{
      DescPrazo()})
  Selects.forEach(e=>{e.addEventListener('change',ShowTipo)})
//
// Funções do Formulário (Form, Info)
  function cadastrar(){
    if(ArryClnt[7]===''){Show(btncadastro)}else{None(btncadastro)}}

  function modalCadastro(){
    Show(ModalCadastro)
    ModalCadastro.children[1].value = I_Clnt.value
    ModalCadastro.children[2].value = I_Cntt.value}

  function ReadArray(){
    Trogl(GrupClntSv,GrupClnt);GrupClntSv.innerHTML = 
    `<div>${ArryClnt[0]}</div><div>${ArryClnt[1]}</div>
    <button onclick="EditaClienteForm(
      '${ArryClnt[0]}','${ArryClnt[1]}')">Editar</button>`
    Trogl([IInnCntt,IInnClnt],[ClntInfo,CnttInfo])
      IInnClnt.innerHTML = ArryClnt[0]
      IInnCntt.innerHTML = ArryClnt[1]
      InnClnt.innerHTML = ArryClnt[0]
      InnCntt.innerHTML = ArryClnt[1]
      I_Clnt.value = ArryClnt[0]
      I_Cntt.value = ArryClnt[1]
      }

  function EditaClienteForm(nome,cntt){
    Trogl(GrupClnt,GrupClntSv);
    ArryClnt.fill('')
    console.log(ArryClnt)}

  async function PesquisaKM(inpt){
    const listaLugares = {'Camaragibe':20,'São Lourenço':10,'Recife':40}
    Show([RsutFrete,RsutFrete.parentNode])
    if(inpt in listaLugares){await delay(2000)
    RsutFrete.innerHTML = listaLugares[inpt]
    }else{RsutFrete.innerHTML = 'Lugar não Encontrado'}}

  function handleInput(type,inpt,inptIf,DivInpt,Btn,Inner){
    inptIf.value = inpt.value
    if(inpt.value!==''){
      Trogl([Btn,Inner],DivInpt) ; Inner.innerHTML = inpt.value
    }else{Trogl(DivInpt,[Btn,Inner])}
    if(type=='Clnt'){ArryClnt[0]=I_Clnt.value}else{ArryClnt[1]=I_Cntt.value}
      Btn.addEventListener('click',()=>{
        Trogl([DivClntInfo,DivCnttInfo],[Btn,IInnCntt,IInnClnt])})
        RequedInfo()}

  function AbreInfo(id,Total){
    Show(FundoInfo) ; SairModal(FundoInfo)
    
    BtnInfo1.addEventListener('click',()=>{
    Trogl(QrySlt('#Modal-Info2'),QrySlt('#Modal-Info1'))})
    
    BtnInfo2.addEventListener('click',()=>{
      None(FundoInfo);BtnInfo2.innerHTML = 'entrada'
    })
    QrySlt('#Title-Info').innerHTML=`${id}: ${'Nome'}, ${Total}`
    }
  function hojeInfo(){
      ArryPag[2] = In_DataPag.value = NewDate;RequedInfo('2')}

  function DescPrazo(){
    let valor = 40.00
    let prazo = new Date(Prazo.value)
    let hoje = new Date()

    let diffTime = Math.abs(prazo - hoje)
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    let desconto = 2.00 * diffDays
    let valorFinal = valor - desconto

    QrySlt('#innerdesc').innerHTML = 'Desconto: '+valorFinal}

  let unddback=""; function ShowTipo(){
    let undd = tabela.find(e=>e.includes(I_Serv.value))?.[7] ?? null
    if (undd !== unddback){
      if (undd.match(/M2/)){None(Grupo_Tipos)
        Show([DivTipo,DivCbmt,Grupo_Medidas,DivAlt,DivLarg])}
      if (undd.match(/OFS/)){None(Grupo_Medidas)
        Show([DivTipo,DivCbmt,Grupo_Tipos])}
      if (undd.match(/QNT/)){
        Show([DivTipo,DivCbmt,Grupo_Medidas])
        None([DivAlt,DivLarg,Grupo_Tipos])}}
    unddback = undd}

  
  
  function RequedInfo(etapa) {
    None(BtnInfo1,BtnInfo2)
    if(etapa==='1'){
      if((ArryClnt[0] !== '') && (ArryUni[0] !== '_Nada') && (
        (ArryUni[2] === 'Graff' || 
        (ArryUni[2] !== 'Graff' && RsutFrete.innerHTML !== '...'))))
        {Show(BtnInfo1)}}
    if(etapa==='2'){
      if(ArryPag[0] === 'NPag' ||(ArryPag[0] !== 'NPag' &&
        (ArryPag[1] !== '' && ArryPag[2] !== '')))
        {Show(BtnInfo2)}
    }
        if(ArryClnt[0]===''){Red(DivClntInfo)}else{Bak(DivClntInfo)}
      if(ArryPag[1]===''){Red(In_ValrPag.parentNode)}else{Bak(In_ValrPag.parentNode)}
      if(ArryPag[2]===''){Red(In_DataPag.parentNode)
        }else{Bak(In_DataPag.parentNode)}
      if(ArryUni[0]===''){Red(I_Arte)}else{Bak(I_Arte)}
      if(ArryUni[2]===''){Red(QrySlt('#DivFrete'))}else{Bak(QrySlt('#DivFrete'))}
      if(ArryUni[3]===''){
        Red(Endereco.parentNode)}else{Bak(Endereco.parentNode)}
    
    //console.log(ArryClnt)
    //console.log(ArryUni)
    //console.log(ArryPag)
    //console.log(ArryItem)
    //console.log(Cttlist)
    }
//

async function SavePdd(arry,Stts,orig,Ttal,btn){
  //consts
    const semNome=(InnClnt.innerHTML===''||InnClnt.innerHTML==='Nome')
    const semClnt = I_Clnt.value === ''
    const oCRUD = orig === 'CRUD'
    const oFILT = orig === 'Filter'
    const oINFO = orig === 'Info'
    const Bloco = Stts === 'Bloco'
    const Entra = Stts === 'Entrada'
  
  if(SemLogin()){MiniInput('Senha',btn) ; await PrmssInnr(Login)}

  if(ArryClnt[7]!==''){ArryPDD.IDPdd.Clnt = ArryClnt}
  if(Bloco&&((oCRUD&&semNome)||(oFILT&&semClnt))){
    MiniInput('Clnt',btn) ; await PrmssInnr(InnClnt)
    ArryClnt[0]=InnClnt.innerHTML}
  if(Entra&&oFILT){
    if(Ttal==='0,00'){
      ArryMdds.forEach(e=>IptsDIV(e).forEach(E=>{
      E.classList.toggle('error',E.value==='')})) ; return
    }else{
      AbreInfo('ID',Ttal);await PrmssInnr(BtnInfo2)}}
  if(Entra&&oCRUD){AbreInfo('ID',Ttal) ; await PrmssInnr(BtnInfo2)}
  
  const ARRAY = arry.split('/')
  ARRAY[6] = ARRAY[6].split(',').map(e => e.split('|'))
  ARRAY[1] = Stts
  ArryItem.push(ARRAY)
  console.log(ArryPDD)
}

window.onload = Reload
  
function Reload(){
    //LoadBlocos()
}

QrySltAll('form input').forEach(input => {
  input.addEventListener('input',()=>{
    InnClnt.innerHTML = I_Clnt.value;
    InnCntt.innerHTML = I_Cntt.value;
    InnLcal.innerHTML = I_Lcal.value;})}
)

//
  // $(document).ready(() =>{$('#Div-Inpt-Cntt input').mask('(99) 99999-9999')})

  // ao fechar ModalInfo, salvar de onde Parou
  // fica uma notificação, avizando que o antigo modal ta ali

  // Data Máxima, o q seria equivalente ao Valor Mínimo
  // Data não pode andar de ré

  // tipo arte não ta mais obrigatório
  // Opção para editar todos os Modais antes de concluir
  // Opções para indivudualizar (Entrega,Aplicação,Arte)

  // Aolicação Baixo ou Alto? Superficie: Plana ou Irregular
  // Aplicar Onde? (IA Responde se dá ou não.)
  // a unica coisa que preciso da biblioteca antiga, é só o mediaquere

  // persistir o que já ta selecionado
  // Selecionar quando só tiver 1
//

  function AddMedidas() { 
    ["#Div-Inpt-Mais","#Div-Inpt-Larg","#Div-Inpt-Alt","#Div-Inpt-Qnt"].forEach(Inpt => {
      var clone
        if(Inpt === "Div-Inpt-Mais"){
          clone = CreateTag('div') ; clone.classList.add('Ct')
          clone.innerHTML = TagSVG(IconEscList,'','','EscMedidas(this)')}
        else{clone = QrySlt(Inpt).querySelector("input").cloneNode(true) ; clone.value = ""}
      QrySlt(Inpt).appendChild(clone)})

    Array.from(Selects).concat(Array.from(QrySltAll("form input"))).forEach(E=>{
    E.addEventListener("change",FilTable) ; E.addEventListener("input",FilTable)})
  }
  function EscMedidas(Btn) {
    var parentDiv = Btn.parentNode
    const index = parseInt(Array.from(parentDiv.parentNode.children).indexOf(parentDiv))
    
    ["#Div-Inpt-Larg","#Div-Inpt-Alt","#Div-Inpt-Qnt"].forEach(DivId=>{
      var inputs = QrySlt(DivId).getElementsByTagName('input')
      if (inputs.length >= index){QrySlt(DivId).removeChild(inputs[index - 2])}})
    parentDiv.parentNode.removeChild(parentDiv)
    FilTable()
  }


  function InnerOptions(e){
    if(e==='Serv'){
      I_Tipo.innerHTML = OptFilter('Tipo',1)
      I_Cbmt.innerHTML = OptFilter('CBMT',2)
    }
    if(e==='Tipo'){
      I_Cbmt.innerHTML = OptFilter('Cbmt',2)}
    if(e==='Cbmt'){
      if(I_Tipo.value !== 'Todos'){return}
      I_Tipo.innerHTML = OptFilter('TipoUP',1)}

    I_Gram.innerHTML = OptFilter('Gram',3)
    I_QFix.innerHTML = OptFilter('QFix',4)
    }

  function OptFilter(Stng,Coll){ // cria as listas Options

    function Fill(R){
      //
        const Serv1 = (R)=> {return R[0]===I_Serv.value}
        const Tipo1 = (R)=> {return R[1]===I_Tipo.value}
          const Tipo2 = ()=> {return I_Tipo.value === 'Todos'}
        const Cbmt1 = (R)=> {return R[2]===I_Cbmt.value}
          const Cbmt2 = ()=> {return I_Cbmt.value === 'Todos'}
        const Gram1 = (R)=> {return R[3]===I_Gram.value}
          const Gram2 = ()=> {return I_Gram.value === 'Todos'}
      //
      if(Stng==='Tipo'||Stng==='CBMT'||(Stng==='Cbmt'&&Tipo2())){return Serv1(R)}
      if(Stng==='Cbmt'){return Serv1(R)&&Tipo1(R)}
      if(Stng==='TipoUP'){return Serv1(R)&&Cbmt1(R)}

      if(Gram2()){ return Serv1(R) && (Tipo2()||Tipo1(R)) && (Cbmt2()||Cbmt1(R))
      }else{       return Serv1(R) && (Tipo2()||Tipo1(R)) && Cbmt1(R)&&Gram1(R)}
    }

    return ['Todos',...new Set(tabela.filter(R=>Fill(R)).map(R=>R[Coll]))]
    .map(e=>{return `<option value='${e}'>${e}</option>`}).join("")}
//

  Array.from(Selects).concat(Array.from(QrySltAll("form input"))).forEach(E=>{
  E.addEventListener("change",FilTable) ; E.addEventListener("input",FilTable)})
  //
  
  function FilTable() {
    ResultFilTable.innerHTML = ''
    const Arry = tabela.filter(T=>{
      return (I_Serv.value === "Todos" || T[0] === I_Serv.value) &&
            (I_Tipo.value === "Todos" || T[1] === I_Tipo.value) &&
            (I_Cbmt.value === "Todos" || T[2] === I_Cbmt.value) &&
            (I_Gram.value === "Todos" || T[3] === I_Gram.value) &&
            (I_QFix.value === "Todos" || T[4] === I_QFix.value)})
    //
    const items = Arry.map(([Serv,Tipo,Cbmt,Gram,QFix,Vlr,Cust,Calc,Foto],indx)=>{
      const Totais = Orcamento(Arry[indx])
      const VlrFinal = Reais(Totais[1])
      const VlrM2 = Reais(Vlr)
      const Desc = (i=Cttlist.findIndex(I=>I.includes(ArryClnt[0])))=>i+1?Cttlist[i][6]:0
      const TotalDesc = Reais(Totais[1]*(1-Desc()))
      const CBMT = `${Cbmt} (${Gram})`.replace(/\s\(\)/,'')
      const QNT = QFix !== 'Todos' ? QFix : I_Qnt.value
      const IMG = `${LinkDrive}${Foto}`
      const Etc = I_Etc.value
      const Mdds  =Totais[0].map(I=>`${I[0]}|${I[1]}|${I[2]}|${I[3]}`).join(',')
      const Mdds2 =Totais[0].map(I=>`${I[0]} - ${Serv} (${I[1]} x ${I[2]}) R$ ${Reais(I[3])}`).join('/')

      let NewItem=[GerarIT(),'Stts',Serv,Tipo,CBMT,QNT,Mdds,Desc(),TotalDesc,VlrM2,Cust,Calc,IMG,Etc]
        let FuncIMG = `MdalItem('${NewItem.join('/')}','${VlrM2}','${Mdds2}')`
        let FuncAdd = `AddLista('${NewItem.join('/')}','Lista')`
        let FuncSav = `SavePdd( '${NewItem.join('/')}','Bloco'  ,'Filter','${TotalDesc}','this')`
        let FuncEnt = `SavePdd( '${NewItem.join('/')}','Entrada','Filter','${TotalDesc}','this')`
      
      const item = CreateTag('div')
      item.innerHTML =
        `<div class="itemfilter Ct Cl w100 Rdd">
          <div class="RstTitle w100 Pddn-XY Ct Bt">
            <div class="RstServ">${Serv} ${Tipo}</div>
            <div class="RstGram">${Gram}</div></div>
          <div class="Ct Bt Pddn-XY">
            <div id="FotoFilter"><img src="${IMG}" onclick="${FuncIMG}"></div>
            <div class="Ct Cl"><div class="Descricao">
                  <div class="RstCbmt"><strong>Acbmnt: </strong>${Cbmt}</div>
                  <div class="RstQnt"><strong>Qnt: </strong>${QFix} Und</div>
                </div><hr><div class="valores Ct Cl w100">
                  <div class="RstValrM2">R$ ${VlrM2} m²</div>
                  <div class="RstValrDesc">R$ ${VlrFinal} m²</div>
                  <div class="RstValrFinal Ct"><div>R$</div> ${TotalDesc}</div>
             </div></div>
            <div class="Ct Cl">
              <button class"RD Mg" onclick="${FuncAdd}">Adicionar</button>
              <button class"RD Mg" onclick="${FuncSav}">Salvar</button>
              <button class"RD Mg" onclick="${FuncEnt}">Entrada</button></div>
          </div>
        </div>`
      return item
    })
    items.forEach(I=>ResultFilTable.appendChild(I))}

  function Orcamento(arrays){
    const [Serv,Tipo,Cbmt,Gram,QFix,Vlr,Cust,Calc,Foto] = arrays

    const ArryLag = IptsDIV('#Div-Inpt-Larg input').map(I=>I.value)
    const ArryAlt = IptsDIV('#Div-Inpt-Alt input').map(I=>I.value)
    const ArryQnt = IptsDIV('#Div-Inpt-Qnt input').map(I=>I.value)

    let MedidasList = []
    
    ArryQnt.forEach((e,x)=>{

        const Ferro = 20, Alumn = 5, Chapa = 0, I_Ferr = "20x20"
        const Larg_ = ArryLag[x] ; const Alt_ = ArryAlt[x]
        const Qnt_ = Tipo.match(/[2]/) ? ArryQnt[x] * 2 : ArryQnt[x] * 1
        const desc = I_Ferr.match(/..$/)/1000*2
        const PE   = Serv.match(/Cav/) ? 0.15*2 : 0
        const CkCstl = Tipo.match(/Lumi|Back/)
        const CkLarg = Larg_ > Alt_

        const F_L = CkLarg ? Larg_+PE : Larg_-desc
        const F_A = CkLarg ? Alt_-desc : Alt_+PE
        const C_L = CkCstl ? 2 : CkLarg ? 2 : Math.round(Larg_+1) // Costelas
        const C_A = CkCstl ? 2 : CkLarg ? Math.round(Alt_+1) : 2  // Costelas

        const FM1 = Calc.match(/\sF/)  ? Qnt_ * Ferro * (F_L*C_L + F_A*C_A) : 0
        const AM1 = Calc.match(/A/)    ? Qnt_ * Alumn * 2 * (F_L+F_A) : 0
        const MM2 = Calc.match(/M2|C/) ? Qnt_ * Larg_ * Alt_ : 0
        const QNT = Calc.match(/QNT/)  ? Qnt_ * Vlr: 0
        const OFS = Calc.match(/OFS/)  ? Vlr : 0

      const Total = Math.round(MM2*(Vlr+Vlr*Crecent(MM2))) + FM1 + AM1 + QNT + OFS

      MedidasList.push([ArryQnt[x],ArryLag[x],ArryAlt[x],Total])
    })
    let Totall = 0 ; MedidasList.forEach(I => {Totall += I[3]})
    
    return [MedidasList,Totall]}


  function MdalItem(Arry,Mdd){ 
    Show(FundoItem) ; SairModal(FundoItem) ; const NwArry = Arry.split('/')
    FundoItem.innerHTML = 
      `<div id="Modal-Item" class="ModalItem Modalzinho">
        <div class="itemfilter Ct Cl w100 Rdd">
          <div class="RstServ">${NwArry[2]} ${NwArry[3]}</div>
          <div id="FotoFilter"><img src="${NwArry[12]}"></div>
          <div>${Mdd.split('/').map(i=>`<div>${i}</div>`).join("")}</div>
        </div>
      </div>`}

//


  for(const grupo in grupos){
      const options = grupos[grupo].map(Serv =>
      `<option value='${Serv}'>${Serv}</option>`).join("")
      I_Serv.insertAdjacentHTML('beforeend',
      `<optgroup label='${grupo}'>${options}</optgroup>`)
  }