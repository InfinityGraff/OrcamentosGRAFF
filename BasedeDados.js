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
    </svg>
    `
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
    </svg>
    `
  const IconSetair = `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <!-- Creator: CorelDRAW 2020 (64 Bit) -->
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="60.0848mm" height="78.3532mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
    viewBox="0 0 6007.42 7833.94"
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
      <path class="fil0" d="M4323.23 3916.97c-1352.66,-933.69 -2705.32,-1867.38 -4057.97,-2801.08 -656.9,-453.41 33.84,-1454.12 690.75,-1000.68 1563.15,1079.01 3124.27,2160.99 4689.75,3236.64 399.92,274.8 519.93,772.11 93.07,1065.46 -1594.27,1100.48 -3188.56,2200.94 -4782.84,3301.42 -656.9,453.44 -1347.64,-547.28 -690.74,-1000.68 1352.65,-933.7 2705.31,-1867.39 4057.97,-2801.08z"/>
    </g>
    </svg>
  `
  const IconSetaVolt = `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <!-- Creator: CorelDRAW 2020 (64 Bit) -->
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="60.0848mm" height="78.3532mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
    viewBox="0 0 6007.42 7833.94"
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
      <path class="fil0" d="M1684.19 3916.97c1352.66,-933.69 2705.32,-1867.38 4057.97,-2801.08 656.9,-453.41 -33.84,-1454.12 -690.75,-1000.68 -1563.15,1079.01 -3124.27,2160.99 -4689.75,3236.64 -399.92,274.8 -519.93,772.11 -93.07,1065.46 1594.27,1100.48 3188.56,2200.94 4782.84,3301.42 656.9,453.44 1347.64,-547.28 690.74,-1000.68 -1352.65,-933.7 -2705.31,-1867.39 -4057.97,-2801.08z"/>
    </g>
    </svg>
  `

  const IconXDesc = `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <!-- Creator: CorelDRAW 2020 (64 Bit) -->
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="124.796mm" height="19.3558mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
    viewBox="0 0 12465.36 1933.37"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
    <defs>
      <style type="text/css">
      <![CDATA[
        .fil0 {fill:red;fill-rule:nonzero}
      ]]>
      </style>
    </defs>
    <g id="Camada_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer"/>
      <polygon class="fil0" points="-0,1786.28 5709.84,966.68 -0,147.09 20.93,0 6232.67,891.63 12444.43,0 12465.36,147.09 6755.52,966.68 12465.36,1786.28 12444.43,1933.37 6232.68,1041.74 20.93,1933.37 "/>
    </g>
    </svg>
  
  `


const CopyPresset = {
  'Pix':`Chave: 81987265401
Nome: Alan Ferreira da Silva`
}