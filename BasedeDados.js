// PreScript

  const APIPlan = 'https://sheetdb.io/api/v1/q6emc5opx7q4m'
  const APIPlanClnt = 'https://sheetdb.io/api/v1/ocjr3nj9u9efm'
  const APIPlanOS = 'https://sheetdb.io/api/v1/85asjwy2bjtm8'

  const User={
    '34$r4-34&-7eV79@7K':['(Baby)','Baby Massia','Img/Perfil_Baby.png'],
    '32$r2-32&-6eV69@6K':['(Alan)','Allan MacLovin','Img/Perfil_Allan.png'],
    '31$r1-31&-4eV49@4K':['(Lisa)','Lisa Caramelo','Img/Perfil_Lisa.png'],
    '36$r6-36&-9eV99@9K':['(Segu)','Segunda Hippie','Img/Perfil_Segunda.png']
  }

  const Ferro = 20, Alumn = 5, Chapa = 0, I_Ferr = "20x20"

  let Cttlist = [
    ['CT-006','G','Marcelo Max','','','(81) 98824-3496','','Sorvete Max','','Fábrica de Sorvete','','','',0.3],
    ['CT-007','G','Edilson Skyllus','','','(81) 98716-2359','','Skyllus Sorvete','','Fábrica de Sorvete','','','',0.2]
  ]

  const cores = [
    "#FF0000","#FF0000","#FF4000","#FF8000","#FFBF00","#FFFF00","#BFFF00","#80FF00","#40FF00","#00FF00"
  ]

  const Topic = [{'+ParalamaP':46},{'0ParalamaP':46},{'+TampaTanque':8},{'&ParalamaP':46},{'@Status':13},{'9WindBanner':6},{'+PersonagemP':3},{'1GeladeiraP':6}]

  const StockjVinil = ["#ff0000","#6b6b6b","#ffa6ed","#000000","#ffffff"]

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

  function Crecent2(MM2){
    /*Crescente:*/ var M = MM2
      var D = {Min:0.05,Med:0.20,Max:0.50}
      var V = {Min:2.10,Med:0.70,Max:0.00}
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
    ["Adesivo" ,"Brilho",     "","","", Cal(Adsv), Adsv ,"M2","TabelaProdutos/Adesivo.png",'Itm1','aiuclt'],
    ["Adesivo" ,"Fosco",      "","","", Cal(Adsv), Adsv ,"M2","TabelaProdutos/Adesivo.png",'Itm2','aiuclt'],
    ["Adesivo" ,"Blackout",   "","","", Cal(Blck)+1, Blck ,"M2","TabelaProdutos/Blackout.png",'Itm3','aiuclt'],
    ["Adesivo" ,"Transparente","","","", Cal(Trns)+1, Trns ,"M2","TabelaProdutos/Transparente.png",'Itm4','aiuclt'],
    ["Adesivo" ,"Perfurado",  "","","", Cal(Perf)-13, Perf ,"M2","TabelaProdutos/Perfurado.png",'Itm5','aiuclt'],
    ["Adesivo" ,"Laminado",  "","","", Cal(Trns)+10, Trns ,"M2",'','Itm6','aiuclt'],
    ["Adesivo" ,"Espelhado",  "","","", Cal(Trns+VnlB+Aplc)-15, Trns+VnlB ,"M2","TabelaProdutos/Espelhado.png",'Itm7','aiuclt'],
  
    ["Etiqueta","Refilada"   ,"","","", Cal(Adsv+Cort), Adsv, "M2",'','Itm8','aiucm'],
    ["Etiqueta","Pesonalizada","","","",Cal(Rcut), Rcut, "M2","TabelaProdutos/Etiqueta.png",'Itm9','aiucm'],
  
    ["Recorte", "Normal","Simples","","", 70, 0, "M2 W",'','Itm10','aoucl'], // W quer dizer Cor
    ["Recorte", "Normal","Complexo","","", 100, 0, "M2 W",'','Itm10a','aoucl'], // W quer dizer Cor
    ["Recorte", "Contorno","Simples","","",110,0, "M2 W",'','Itm11','aoucl'],
    ["Recorte", "Contorno","Complexo","","",140,0, "M2 W",'','Itm11a','aoucl'],
  //  ["Recorte", "Nomes","","","", 2.50,0, "QNT W",'','Itm12','aoucl'],
    ["Recorte", "KitBug_Principal","","","",13,0, "QNT W",'','Itm13','aoucl'],
    ["Recorte", "KitBug_Detalhe","","","", 7,0, "QNT W",'','Itm14','aoucl'],
    ["Figurinha","","","","",1,0,"QNT",'','Itm15','aiuc'],
  
    ["Lona", "Banner","","","", Cal(Bane)+4, Bane, "M2",'','Itm16','aiucmt'],
    ["Lona", "Faixa", "Só Madeira","","", Cal(Bane)+4, Bane, "M2",'','Itm17','aiucmt'],
    ["Lona", "Faixa", "Madeira e ilhós","","", Cal(Bane)+4, Bane, "M2",'','Itm18',,'aiucmt'],
    ["Lona", "Lona com ilhós", "ilhós Completo","","", Cal(Bane)+4, Bane, "M2",'','Itm19','aiucmt'],
    ["Lona", "Lona com ilhós", "ilhós nas Pontas","","", Cal(Bane)+4, Bane, "M2",'','Itm20','aiucmt'],
    ["Lona", "Sem acabamento","","","", Cal(Lona), Lona, "M2",'','Itm21','aiucmt'],
  
    ["Quadro", "PVC", "Refilado","","", 150, 0, "M2 C",'','Itm22',''],
    ["Quadro", "PS", "Acabamento","","", 200, 0, "M2 C",'','Itm23',''],
    ["ímã", "Geladeira", "Completo","","", 140, 0, "M2 C",'','Itm24',''],
    //["ímã", "Geladeira", "Taquinho de ímã","","", 120, 0, "M2 C",'','Itm25',''],
    //["ímã", "Geladeira", "ímã + Calendário","","", 250, 0, "M2 C",'','Itm26',''],
    ["ímã", "Carro","","","", 170, 0, "M2 C",'','Itm27',''],
  
    ["Placa", "Lona", "ilhós", "Frente", "-", 70, 0, "M2 F",'','Itm28',''],
    ["Placa", "Lona", "ilhós", "Frente Verso", "-", 140, 0, "M2 F",'','Itm29',''],
    ["Placa", "Lona", "Ribite", "Frente", "-", 70, 0, "M2 F A",'','Itm30',''],
    ["Placa", "Lona", "Ribite", "Frente Verso", "-", 140, 0, "M2 F A",'','Itm31',''],
    ["Placa", "Luminosa", "Retangular", "Frente", "-", 80, 0, "M2 F A",'','Itm32',''],
    ["Placa", "Luminosa", "Circular", "Frente Verso", "-", 160, 0, "M2 F A",'','Itm33',''],
    ["Placa", "ACM",  "", "-", "-", 70, 0, "M2 F W",'','Itm34',''],
    ["Placa", "Obra", "", "-", "-", 70, 0, "M2 F",'','Itm35',''],
    ["Cavalete","1 Ferragem","-","ilhós", "-",70,0,"M2 F",'TabelaProdutos/Cav1ihs.png','Itm36',''],
    ["Cavalete","1 Ferragem","-","Ribite","-",70,0,"M2 F",'TabelaProdutos/Cav1Rib.png','Itm37',''],
    ["Cavalete","2 Ferragem","-","ílhós", "-",70,0,"M2 F",'TabelaProdutos/Cav2ihs.png','Itm38',''],
    ["Cavalete","2 Ferragem","-","Ribite","-",70,0,"M2 F",'TabelaProdutos/Cav2Rib.png','Itm39',''],
    ["Toldo", "Polly Carbonato","-","-","-",170,0,"M2 F",'','Itm40',''],
    ["Toldo", "Lona ", "-", "-", "-", 70, 0, "M2 F",'','Itm41',''],
    ["Quebra Sol", "Manual", "-", "-", "-", 70, 0, "M2 F",'','Itm42',''],
    ["Quebra Sol", "Automatico", "-", "-", "-", 70, 0, "M2 F",'','Itm43',''],
  
    ["Cartão", "Frente", "Brilho", "250g", '500', 90, 31, "OFS",'','Itm44',''],
    ["Cartão", "Frente", "Brilho", "250g", '1.000', 135, 54, "OFS",'','Itm45',''],
    ["Cartão", "Frente Verso", "Brilho", "250g", '500', 115, 42, "OFS",'','Itm46',''],
    ["Cartão", "Frente Verso", "Brilho", "250g", '1.000', 145, 56, "OFS",'','Itm47',''],
    ["Cartão", "Frente", "Brilho", "300g", '500', 130, 49, "OFS",'','Itm48',''],
    ["Cartão", "Frente", "Brilho", "300g", '1.000', 145, 56, "OFS",'','Itm49',''],
    ["Cartão", "Frente Verso", "Brilho", "300g", '500', 150, 58, "OFS",'','Itm50',''],
    ["Cartão", "Frente Verso", "Brilho", "300g", '1.000', 165, 65, "OFS",'','Itm51',''],
    ["Cartão", "Frente", "Brilho Local", "300g", '500', 155, 62, "OFS",'','Itm52',''],
    ["Cartão", "Frente", "Brilho Local", "300g", '1.000', 190, 80, "OFS",'','Itm53',''],
    ["Cartão", "Frente Verso", "Brilho Local", "300g", '500', 190, 78, "OFS",'','Itm54',''],
    ["Cartão", "Frente Verso", "Brilho Local", "300g", '1.000', 230, 99, "OFS",'','Itm55',''],
  
    ["Tag", "Frente Verso", "Brilho + Arredondado", "-", '500', 165, 70, "OFS",'','Itm56',''],
    ["Tag", "Frente Verso", "Brilho + Arredondado", "-", '1.000', 185, 80, "OFS",'','Itm57',''],
    ["Tag", "Frente Verso", "Brilho Local + Arred.", "-", '500', 263, 119, "OFS",'','Itm58',''],
    ["Tag", "Frente Verso", "Brilho Local + Arred.", "-", '1.000', 303, 139, "OFS",'','Itm59',''],
  
    ["Panfleto", "Frente", "0,10 x 0,15", "90g", '1.000', 140, 70, "OFS",'','Itm60',''],
    ["Panfleto", "Frente", "0,10 x 0,15", "90g", '2.500', 180, 90, "OFS",'','Itm61',''],
    ["Panfleto", "Frente", "0,10 x 0,15", "90g", '5.000', 330, 165, "OFS",'','Itm62',''],
    ["Panfleto", "Frente", "0,10 x 0,15", "90g", '10.000', 500, 250, "OFS",'','Itm63',''],
    ["Panfleto", "Frente Verso", "0,10 x 0,15", "90g", 2500, 250, 125, "OFS",'','Itm64',''],
    ["Panfleto", "Frente Verso", "0,10 x 0,15", "90g", 5000, 480, 240, "OFS",'','Itm65',''],
    ["Panfleto", "Frente Verso", "0,10 x 0,15", "90g", 10000, 720, 360, "OFS",'','Itm66',''],
    ["Panfleto", "Frente", "0,15 x 0,20", "90g", '1.000', 280, 140, "OFS",'','Itm67',''],
    ["Panfleto", "Frente", "0,15 x 0,20", "90g", '2500', 360, 180, "OFS",'','Itm68',''],
    ["Panfleto", "Frente", "0,15 x 0,20", "90g", '5.000', 660, 330, "OFS",'','Itm69',''],
    ["Panfleto", "Frente", "0,15 x 0,20", "90g", '10.000', 990, 495, "OFS",'','Itm70',''],
    ["Panfleto", "Frente Verso", "0,15 x 0,20", "90g", '2.500', 500, 250, "OFS",'','Itm71',''],
    ["Panfleto", "Frente Verso", "0,15 x 0,20", "90g", '5.000', 880, 440, "OFS",'','Itm72',''],
    ["Panfleto", "Frente Verso", "0,15 x 0,20", "90g", '10.000', 1320, 660, "OFS",'','Itm73',''],
  
    ['Talão','1 Via','10 x 14','Preto e Branco','4',35,20,'OFS','','Itm74',''],
    ['Talão','1 Via','10 x 14','Preto e Branco','8',60,35,'OFS','','Itm75',''],
    ['Talão','1 Via','10 x 14','Preto e Branco','12',85,50,'OFS','','Itm76',''],
    ['Talão','1 Via','10 x 14','Preto e Branco','20',120,70,'OFS','','Itm77',''],
    ['Talão','2 Via','10 x 14','Preto e Branco','4',45,25,'OFS','','Itm78',''],
    ['Talão','2 Via','10 x 14','Preto e Branco','8',75,45,'OFS','','Itm79',''],
    ['Talão','2 Via','10 x 14','Preto e Branco','12',100,60,'OFS','','Itm80',''],
    ['Talão','2 Via','10 x 14','Preto e Branco','20',135,80,'OFS','','Itm81',''],
    ['Talão','1 Via','10 x 14','Colorido','4',60,35,'OFS','','Itm82',''],
    ['Talão','1 Via','10 x 14','Colorido','8',85,50,'OFS','','Itm83',''],
    ['Talão','1 Via','10 x 14','Colorido','12',120,70,'OFS','','Itm84',''],
    ['Talão','1 Via','10 x 14','Colorido','20',145,85,'OFS','','Itm85',''],
    ['Talão','2 Via','10 x 14','Colorido','4',70,40,'OFS','','Itm86',''],
    ['Talão','2 Via','10 x 14','Colorido','8',100,60,'OFS','','Itm87',''],
    ['Talão','2 Via','10 x 14','Colorido','12',135,80,'OFS','','Itm88',''],
    ['Talão','2 Via','10 x 14','Colorido','20',170,100,'OFS','','Itm89'],
    ['Talão','1 Via','14 x 20','Preto e Branco','2',35,20,'OFS','','Itm90'],//
    ['Talão','1 Via','14 x 20','Preto e Branco','4',60,35,'OFS','','Itm91'],
    ['Talão','1 Via','14 x 20','Preto e Branco','10',120,70,'OFS','','Itm92'],
    ['Talão','1 Via','14 x 20','Preto e Branco','20',220,130,'OFS','','Itm93'],
    ['Talão','2 Via','14 x 20','Preto e Branco','2',45,25,'OFS','','Itm94'],
    ['Talão','2 Via','14 x 20','Preto e Branco','4',75,45,'OFS','','Itm95'],
    ['Talão','2 Via','14 x 20','Preto e Branco','10',135,80,'OFS','','Itm96'],
    ['Talão','2 Via','14 x 20','Preto e Branco','20',245,145,'OFS','','Itm97'],
    ['Talão','1 Via','14 x 20','Colorido','2',60,35,'OFS','','Itm98'],
    ['Talão','1 Via','14 x 20','Colorido','4',85,50,'OFS','','Itm99'],
    ['Talão','1 Via','14 x 20','Colorido','10',145,85,'OFS','','Itm100'],
    ['Talão','1 Via','14 x 20','Colorido','20',270,160,'OFS','','Itm101'],
    ['Talão','2 Via','14 x 20','Colorido','2',70,40,'OFS','','Itm102'],
    ['Talão','2 Via','14 x 20','Colorido','4',100,60,'OFS','','Itm103'],
    ['Talão','2 Via','14 x 20','Colorido','10',170,100,'OFS','','Itm104'],
    ['Talão','2 Via','14 x 20','Colorido','20',300,175,'OFS','','Itm105'],
    ['Talão','1 Via','9 x 21','Preto e Branco','3',35,20,'OFS','','Itm106'],
    ['Talão','1 Via','9 x 21','Preto e Branco','6',60,35,'OFS','','Itm107'],
    ['Talão','1 Via','9 x 21','Preto e Branco','9',85,50,'OFS','','Itm108'],
    ['Talão','1 Via','9 x 21','Preto e Branco','12',100,60,'OFS','','Itm109'],
    ['Talão','2 Via','9 x 21','Preto e Branco','3',40,25,'OFS','','Itm110'],
    ['Talão','2 Via','9 x 21','Preto e Branco','6',75,45,'OFS','','Itm111'],
    ['Talão','2 Via','9 x 21','Preto e Branco','9',100,60,'OFS','','Itm112'],
    ['Talão','2 Via','9 x 21','Preto e Branco','12',120,70,'OFS','','Itm113'],
    ['Talão','1 Via','9 x 21','Colorido','3',60,35,'OFS','','Itm114'],
    ['Talão','1 Via','9 x 21','Colorido','6',85,50,'OFS','','Itm115'],
    ['Talão','1 Via','9 x 21','Colorido','9',120,70,'OFS','','Itm116'],
    ['Talão','1 Via','9 x 21','Colorido','12',135,80,'OFS','','Itm117'],
    ['Talão','2 Via','9 x 21','Colorido','3',70,40,'OFS','','Itm118'],
    ['Talão','2 Via','9 x 21','Colorido','6',110,65,'OFS','','Itm119'],
    ['Talão','2 Via','9 x 21','Colorido','9',135,80,'OFS','','Itm120'],
    ['Talão','2 Via','9 x 21','Colorido','12',155,90,'OFS','','Itm121'],
  
    ["A4", "Papel Adesivo", "Folha Completa", "-", "-", 0, 6, "QNT",'','Itm122'],//
    ["A4", "Papel Adesivo", "Corte Quadrado", "-", "-", 0, 6, "QNT",'','Itm123'],
    ["A4", "Papel Adesivo", "Corte Desenhado", "-", "-", 0, 6, "QNT",'','Itm124'],
    ["A4", "Couchê", "-", "-", "-", 0, 6, "QNT",'','Itm125'],
    ["A4", "Officil", "-", "-", "-", 0, 2, "QNT",'','Itm126'],
    ["Cardápio", "Frente", "-", "-", "-", 20, 0, "QNT",'','Itm127'],
    ["Cardápio", "Frente e Verso", "-", "-", "-", 25, 0, "QNT",'','Itm128'],
  
    /*
    ["Camisa", "Serigrafia", "-","-","-",0,0,"QNT",'','Itm100'],//
    ["Camisa", "Serigrafia", "Frente", "1 Cor", "-", 25, 0, "QNT",'','Itm100'],
    ["Camisa", "Serigrafia", "Frente e Costas", "1 Cor", "-", 30, 0, "QNT",'','Itm100'],
    ["Camisa", "Serigrafia", "Frente", "2 Cores", "-", 0, 0, "QNT",'','Itm100'],
    ["Camisa", "Serigrafia", "Frente e Costas", "2 Cores", "-", 0, 0, "QNT",'','Itm100'],
    ["Camisa", "Serigrafia", "Frente", "3 Cores", "-", 0, 0, "QNT",'','Itm100'],
    ["Camisa", "Serigrafia", "Frente e Costas", "3 Cores", "-", 0, 0, "QNT",'','Itm100'],
    ["Camisa", "Serigrafia", "Frente", "Mais de 3 Cores", "-", 0, 0, "QNT",'','Itm100'],
    ["Camisa", "Serigrafia", "Frente e Costas", "Mais de 3 Cores", "-", 0, 0, "QNT",'','Itm100'],
  
    ["Camisa", "Transfere", "-", "-", "-", 0, 0, "QNT"],
    ["Camisa", "Sublimação", "Frente", "-", "-", 0, 0, "QNT"],
    ["Camisa", "Sublimação", "Frente e Costas", "-", "-", 0, 0, "QNT"],
    ["Camisa", "Sublimação Total", "Com Manga", "-", "-", 350, 0, "QNT"],
    ["Camisa", "Sublimação Total", "Sem Manga", "-", "-", 300, 0, "QNT"],
    ["Envelopamento", "Moto", "parte da moto", "-", "-", 0, 0, "QNT"],
    ["Envelopamento", "Carro", "partes do carro", "-", "-", 0, 0, "QNT"],
    */
    
    ["Envelopamento", "Geladeira", "2 Portas", "-", "-", 220, 0, "QNT","TabelaProdutos/Geladeira 2 Portas.jpg",'Itm100'],
    ["Envelopamento", "Geladeira", "1 Porta", "-", "-", 150, 0, "QNT","TabelaProdutos/Geladeira 1 Porta.jpg",'Itm100'],
  
    ["Arte","","","","",50,0,"QNT",'','Itm100'],
    
  ]

  const grupos = {
    Impressao: ['Adesivo','Etiqueta','Recorte','Figurinha','Lona','Quadro','ímã'],
    Placas: ['Placa','Cavalete','Toldo','Quebra Sol'],
    Offset: ['Cartão','Tag','Panfleto','Talão','A4','Cardápio'],
    Outros: ['Envelopamento','Camisa','Arte'],
  }

  const MateriaPrima = {
    'Recorte':'Adesivo Vinil',
    'Envelopamento':'Adesivo Vinil',
    'Quadro':'PVC',
    'Ímã':'Ímã',
    'Placa':'Ferro',
    'Cavalete':'Ferro',
    'Camisa':'Camisa',
  }

  const ArryTarefasList = {
    'Lona':'A I U C M T',
    'Quadro':'A O I U C L M T',
    'ímã':'A O I U C L M',

    'Cartão':'A I U',
    'Tag':'A I U',
    'Panfleto':'A I U',
    'A4':'A I C',
    'Cardápio':'A I C P',
    
    'Placa':'A O I U S M T',
    'Cavalhete':'A O I U S M T',

    'Camisa':'A O R U E',
    'Arte':'A',
    'Envelopamento':'O I U C L',
  }



  const CopyPresset = {
    'Pix':`Chave: 81987265401
  Nome: Alan Ferreira da Silva`
  }
  const Ramos = [
    ['Alimentos e Bebidas','Comércio','Padaria'],
    ['Alimentos e Bebidas','Comércio','Depósito de Bebidas'],
    ['Alimentos e Bebidas','Comércio','Depósito de Água e Gás'],
    ['Alimentos e Bebidas','Comércio','Mercadinho'],
    ['Alimentos e Bebidas','Comércio','Frigorifico & Peixe'],
    ['Alimentos e Bebidas','Comércio','Frutas & Verduras'],
    ['Alimentos e Bebidas','Comércio','Empório'],
    ['Alimentos e Bebidas','Comércio','Ração'],
    ['Alimentos e Bebidas','Comércio/Serviço','Churrascaria'],
    ['Alimentos e Bebidas','Comércio/Serviço','Restaurante'],
    ['Alimentos e Bebidas','Comércio/Serviço','Lanchonete'],
    ['Alimentos e Bebidas','Comércio/Serviço','Bar'],
    ['Alimentos e Bebidas','Comércio/Serviço','Bistrô & Café'],
    ['Alimentos e Bebidas','Comércio/Serviço','Buffet'],
    ['Alimentos e Bebidas','Comércio/Serviço','Sorveteria'],
    ['Alimentos e Bebidas','Comércio/Serviço','Barraca Lanche'],
    ['Alimentos e Bebidas','Comércio/Serviço','Conveniência'],
    ['Alimentos e Bebidas','Comércio/Serviço','Açaíteria'],
    ['Alimentos e Bebidas','Comércio/Serviço','Tapiocaria'],
    ['Alimentos e Bebidas','Comércio/Serviço','Pizzaria'],
    ['Alimentos e Bebidas','Comércio/Serviço','Temakeria'],
    ['Alimentos e Bebidas','Comércio/Serviço','Casa de Bolo'],
    ['Alimentos e Bebidas','Comércio/Serviço','Confeiteiro'],
    ['Alimentos e Bebidas','Fábrica','Fábrica de Sorvete'],
    ['Vendas e Objetos','Comércio','Arte e Antiguidades'],
    ['Vendas e Objetos','Comércio','Artigos Religiosos'],
    ['Vendas e Objetos','Comércio','Bebês e Cia'],
    ['Vendas e Objetos','Comércio','Brinquedos e Games'],
    ['Vendas e Objetos','Comércio','Casa e Decoração'],
    ['Vendas e Objetos','Comércio','Colecionáveis'],
    ['Vendas e Objetos','Comércio','Cosméticos e Perfumaria'],
    ['Vendas e Objetos','Comércio','Eletrodomésticos'],
    ['Vendas e Objetos','Comércio','Fotografia'],
    ['Vendas e Objetos','Comércio','Flores, Cestas e Presentes'],
    ['Vendas e Objetos','Comércio','Instrumentos Musicais'],
    ['Vendas e Objetos','Comércio','Joalheria'],
    ['Vendas e Objetos','Comércio','Livros'],
    ['Vendas e Objetos','Comércio','Funerários'],
    ['Vendas e Objetos','Comércio','Variedades'],
    ['Vendas e Objetos','Comércio','Gráfica'],
    ['Vendas e Objetos','Comércio','Papelaria e Escritório'],
    ['Vendas e Objetos','Comércio','Místicos'],
    ['Estétia e Moda','Comércio','Sapatos'],
    ['Estétia e Moda','Comércio','Roupas e Acessórios'],
    ['Estétia e Moda','Serviço','Salão Cabeleireiro'],
    ['Estétia e Moda','Serviço','Sobrancelha'],
    ['Estétia e Moda','Serviço','Unha em Gel'],
    ['Estétia e Moda','Serviço','Barbearia'],
    ['Estétia e Moda','Serviço','Tatuagem'],
    ['Estétia e Moda','Comércio','Sex Shop'],
    ['Técnologia','Comércio','Informática'],
    ['Técnologia','Serviço','Internet'],
    ['Técnologia','Comércio','Assesórios Celular'],
    ['Técnologia','Comércio/Serviço','Equipadora Som'],
    ['Técnologia','Comércio','Eletrônica'],
    ['Técnologia','Comércio/Serviço','Assistência Téc. PC'],
    ['Técnologia','Comércio/Serviço','Assistência Téc. Celular'],
    ['Técnologia','Serviço','Téc. Refrigeração'],
    ['Saúde e Medicamento','Serviço','Nutrição'],
    ['Saúde e Medicamento','Serviço','Pscicologia'],
    ['Saúde e Medicamento','Serviço','Laboratório e Exame'],
    ['Saúde e Medicamento','Serviço','Odontologia'],
    ['Saúde e Medicamento','Comércio','Farmácia'],
    ['Saúde e Medicamento','Comércio/Serviço','Vetrinário'],
    ['Construção e Ferramentas','Serviço','Serralharia'],
    ['Construção e Ferramentas','Serviço','Marcenaria'],
    ['Construção e Ferramentas','Comércio/Serviço','Gesso'],
    ['Construção e Ferramentas','Comércio','Armazém'],
    ['Construção e Ferramentas','Serviço','Pedreiro'],
    ['Construção e Ferramentas','Serviço','Engenharia'],
    ['Construção e Ferramentas','Serviço','Eletricista'],
    ['Construção e Ferramentas','Serviço','Encanação'],
    ['Serviços Pessoais','Serviço','Seguradora'],
    ['Serviços Pessoais','Serviço','Segurança'],
    ['Serviços Pessoais','Serviço','Transporte'],
    ['Serviços Pessoais','Serviço','Turismo'],
    ['Serviços Pessoais','Serviço','Motéis'],
    ['Serviços Pessoais','Serviço','Aluguel e Locações'],
    ['Instituições','Serviço','Associações'],
    ['Instituições','Serviço','Advocacia'],
    ['Instituições','Serviço','Cartórios'],
    ['Instituições','Serviço','Bibliotecas'],
    ['Instituições','Serviço','Casas Lotéricas'],
    ['Instituições','Serviço','Consórcios'],
    ['Instituições','Serviço','Cooperativas'],
    ['Instituições','Serviço','Emissoras de Rádio'],
    ['Instituições','Serviço','Emissoras de Televisão'],
    ['Instituições','Serviço','Instituições Religiosas'],
    ['Instituições','Serviço','Prefeitura'],
    ['Educação','Serviço','Escola'],
    ['Educação','Serviço','Curso'],
    ['Serviço','Serviço','Estacionamentos'],
    ['Serviço','Serviço','limpeza'],
    ['Serviço','Serviço','Ecologia'],
    ['Serviço','Serviço','Agricultura'],
    ['Serviço','Serviço','Festas & Eventos'],
    ['Serviço','Serviço','Mecânico'],
    ['Serviço','Serviço','Costureira'],
    ['Serviço','Serviço','Serviços Gráficos'],
    ['Serviço','Serviço','Pet Shop'],
  ]
  const ClientesGrafit = [
    'TH Digital - Agência de Mídia Publicitária <thdigitalorobo@outlook.com>,',
    'Clube da Gráfica <atendimentoclubedagrafica@gmail.com>,',
    'Agiliza Gráfica e Informática <agilizagraficaeinformatica@gmail.com>,',
    'Art Foto ViP <artefotovip@gmail.com>,',
    'Ateliê Gráfico <ateliegrafico6@gmail.com>,',
    'Alberto Gráfica Rápida <albertograficarapida@gmail.com>,',
    'artprint artprint <ArtPrint2016@hotmail.com>,',
    'tahilza artes <tahilzaartesebrindes@gmail.com>,',
    'Claudio Borges <copi9recife@gmail.com>,',
    'pedro mont <peu.beca@hotmail.com>,',
    'bartolomeu junior <bj.grafica@hotmail.com>,',
    '"Gráfica IGP (81) 3484.4202 | www.igp.ind.br" <emmanuel@igp.ind.br>,',
    'Marivaldo Bento <marivaldobento.silva@gmail.com>,',
    'Yago Barbosa <yagoadesivos3@gmail.com>,',
    'Armazem Brasileiro <armazembrasileiro@armazembrasileiro.com.br>,',
    'The MacLovins <cleto.louco@gmail.com>,',
    'Defina Grafica <contatodefina@gmail.com>,',
    'Gleisson - Gráfica Magic Color <graficamagiccolor@gmail.com>,',
    'Copyflex Gráfica <copyflexcopiadora@gmail.com>,',
    'Rivaldo Cavalcante <rivaldografica@hotmail.com.br>,',
    'CAMARÁ GRÁFICA <camaragraficape@gmail.com>,',
    'PRINT DESTAK <graficaprintdestak@gmail.com>,',
    'FJR DESIGNE GRÁFICO <fjrdesignegrafico@hotmail.com>,',
    'Gráfica Difference Digital <graficadifferencedigital@gmail.com>,',
    'DM Gráfica <dmgraficabrindesloja2@gmail.com>,',
    'Everaldo Jamesson DATO <grafserv2@hotmail.com>,',
    'Elenice Silva <elenicesn7@gmail.com>,',
    'Link Gráfica e Estamparia <linkgraficaestamparia@gmail.com>,',
    'Print e Cia <contatoprintecia@gmail.com>,',
    'Execopy <execopy2023@gmail.com>,',
    'Emmanuel Morais <emmanuel_candido@hotmail.com>,',
    'Edilson junior <deltagrafica10@gmail.com>,',
    'F5GRAFICA RAPIDA <f5graficarapida823@gmail.com>,',
    'Francisco Azevedo <chicovejartes@gmail.com>,',
    'Flaviano Gomes <flaviano.75@gmail.com>,',
    '"c.foxmichael roupas" <c.foxroupas@gmail.com>,',
    'Augusto Fonseca <updigital1@gmail.com>,',
    'Grafica Saxe <graficaecopiadorasaxe@gmail.com>,',
    'Márcio henrique <marciohenriquehds2017@gmail.com>,',
    'hiperdesign.graf@gmail.com,',
    'hyperdesign.graf@gmail.com,',
    'helouyse@lideri.com.br,',
    'Photoshop Imagem <lojaphotoshop@yahoo.com.br>,',
    'Star Net <starnet.infolan@gmail.com>,',
    'ART IMPRESSOS <criacaoartimpressos@gmail.com>,',
    '"I.N Gráfica" <in.grafica.rapida2020@gmail.com>,',
    'Ilan Silva <is.servicoscamaragibe@gmail.com>,',
    'IDEAL GRAFICA & VARIEDADES <idealgraficaevariedades@gmail.com>,',
    'Jeniffer Oliveira <jeny.anjos@hotmail.com>,',
    'Júnior Portela <juniorportela@agrgrafica.com>,',
    'jr grafica <jrgraficaa26@gmail.com>,',
    'JG Serviços Gráficos <jgservicosgraficosonline@gmail.com>,',
    'JAIRO ALVES <lojajs1974@gmail.com>,',
    'jose neto <cenafotos@hotmail.com>,',
    'Kairos Grafica <Kairosgrafica@hotmail.com>,',
    'krieartedesign@gmail.com,',
    'Lidi SGB <contato.lidisgb@gmail.com>,',
    'williyan daniel gamer <maria.leticia271@gmail.com>,',
    'Lucio Lino <lucio.artfinalista@gmail.com>,',
    'Alecsandra Lins <graficaalfa2010@gmail.com>,',
    'MacroCopy Ltda <macrocopy@yahoo.com.br>,',
    'Matheus Guilherme <matheusdamascen@gmail.com>,',
    'mundo personalizados <mundodospersonalizadoos1@gmail.com>,',
    'Clelio montarroyos <perfectart49@gmail.com>,',
    'Sandro Maciel <sandrodiamante@gmail.com>,',
    'Nordeste Gráfica <contato@nordestegrafica.com.br>,',
    'Tec Graphic Nj <tecgraphicnj@gmail.com>,',
    'Comercial N2O <comercial.n2o@gmail.com>,',
    'NC GRAF <alexsandro.ninho90@hotmail.com>,',
    'Omar Souza <omar.alpha@hotmail.com>,',
    'OCN Art & Design <ocn.artdesign@gmail.com>,',
    'Joelson silva <Red-offgrafica@outlook.com>,',
    'Clube da gráfica Olinda <clubedagraficaolinda@gmail.com>,',
    'Pitta Oliveira Coyote <lionspitta22@hotmail.com>,',
    'origem.mkt2@gmail.com,',
    'Vivah Poster Shop <vivahpostershop@gmail.com>,',
    'CÓPIA RÁPIDA PRODUÇÃO <producaocopiarapida@gmail.com>,',
    'Quality Gráfica <qualitygrafica21@gmail.com>,',
    'qartpersonalizacaoegrafica@gmail.com,',
    'Israel Queiroz <rhall.queiroz@gmail.com>,',
    'renan salomão <renan.spublicidade@gmail.com>,',
    'Rodrigo Adesivos <rodrigograficadigital@gmail.com>,',
    'Colorpel Recife <colorpel.recife@gmail.com>,',
    'Grafica Rápida <graficarapida2001@hotmail.com>,',
    'selma simoes <graficabetelsl@gmail.com>,',
    'TJ Grafica <tjgraficapro@gmail.com>,',
    'renovart trabalho <trabalhorenovart@gmail.com>,',
    'TOP GRAFICA DIGITAL <topgrafica.contato@gmail.com>,',
    'Up Digital <updigital@hotmail.com.br>,',
    'unigraphies@gmail.com,',
    'VISION Grafic <comercialvisiongrafic@gmail.com>,',
    'a Comunicação Visual <artplack60@gmail.com>,',
    'Vejartes Digital <vejartes.digital@gmail.com>,',
    'xavier.robertooh@gmail.com,',
    'Xsolution Digital <xsolutiondigital@gmail.com>,',
    'Zoom Gráfica <zoomgrafica23@gmail.com>,',
    'Web Agência AD <aquimeusite@gmail.com>',
  ]

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
  const IconClean = `<svg xmlns="http://www.w3.org/2000/svg" width="109.437mm" height="143.014mm" viewBox="0 0 9209.8 12035.48">
  <path class="fill:black" d="M4641.06 5401.8l4558.84 1008.37c64.07,-787.69 -188.48,-1202.64 -591.23,-1451.2 -460.1,-283.93 -2455.62,-745.19 -2958.48,-628.93 -519.23,120.07 -994,636.58 -1009.12,1071.76zm-3171.57 4383.88c1171.54,-474.93 2522.19,-1290.21 3249.68,-2322.39 140.6,-199.49 461.31,-817.56 522.15,-1100.14 -180.33,-61.12 -668,-227.79 -873.1,-243.89 -128.09,581.16 -768.85,1378.55 -1341.98,1792.17 -1521.96,1098.36 -2720.7,1094.34 -2940.45,1345.19 -120.71,137.82 -117.92,411.27 33.06,590.07 755.29,894.56 2974.74,1714.18 4212.39,1949.7 1368.42,260.4 3174.7,418.29 3500.57,-124.46 413.11,-687.99 1218.57,-3434.41 1214.46,-4477.1l-839.01 -192.12c-147.15,1708.37 -502.61,2795.33 -1074.19,4055.95 -324.3,68.49 -1042.27,68.81 -1350.39,28.59 175.94,-482.83 522.11,-1100.22 578.48,-1684.01 -244.06,219.91 -357.97,397.05 -582.87,649.05 -1184.53,1327.34 -1648.11,731.71 -2408.77,628.21 216.15,-299.33 380.02,-621.48 452.68,-1056.52 -1308.38,1137.94 -1116.93,712.26 -2352.71,161.7zm5185.5 -6046.21l1416.95 355.21c98.47,-231.13 451.12,-2677.29 537.58,-3252.23 69.95,-465.08 119.78,-769.96 -387.27,-834.42 -559.29,-71.1 -529.73,344.06 -655.47,709.8l-911.8 3021.64z"/>
  </svg>
  `
  const IconLogo = `<?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <!-- Creator: CorelDRAW 2020 (64 Bit) -->
  <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="94.3516mm" height="94.3516mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
  viewBox="0 0 1498.05 1498.05"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
   <defs>
    <style type="text/css">
     <![CDATA[
      .str0 {stroke:#373435;stroke-width:3.18;stroke-miterlimit:22.9256}
      .str1 {stroke:black;stroke-width:3.18;stroke-miterlimit:22.9256}
      .fil0 {fill:black}
      .fil1 {fill:white}
     ]]>
    </style>
   </defs>
   <g id="Camada_x0020_1">
    <metadata id="CorelCorpID_0Corel-Layer"/>
    <circle class="fil0 str0" cx="749.03" cy="749.03" r="747.44"/>
    <path class="fil1" d="M918.78 506.96l1.29 0 -1.07 -1.51 -0.21 1.51c-26.5,0.59 -212.75,56.8 -236.23,56.8l0 1.29c19.48,0 164.06,-34.93 193.63,-41.31 -3.19,4.77 -21.54,18.14 -25.82,24.53 22.63,-0.5 251.42,-59.61 317.55,-69.71l0 -1.29c-18.98,0 -238.64,46.12 -287.86,55.51l38.73 -25.82zm-698.36 32.27l-8 7.49c6.19,-1.08 15.43,-28.35 63.03,-45.41 21.33,-7.65 47.43,-16.3 75.36,-16.3l0 1.29c-18.48,0 -39.18,6.92 -49.05,7.74 10.55,9.17 8.99,5.27 23.1,2.45 62.1,-12.4 121.54,-0.79 176.93,27.29 8.93,5.02 7.07,3.16 9.09,7.56 5.55,-0.95 46.45,28.51 40.02,35.33l30.74 34.69c3.59,1.22 0.52,1.32 5.41,-1.46 1.28,4.79 1.3,1.67 2.58,6.45 -3.49,-0.29 -3.51,-0.6 -6.46,-1.29 2.55,9.56 26.22,32.98 4.84,37.44 -25.67,8.24 -81.48,39.88 -104.24,45.18 -57.34,-85.63 -144.54,-15.05 -134.25,-2.73 4.6,3.43 3.87,1.99 3.87,9.19 -8.2,1.91 -4.12,0.62 -11.62,0 -0.14,6.16 -1.79,7.46 -2.78,14 -1.44,9.54 1.16,11.82 -8.84,11.82 0,52.1 56.96,89.76 106.45,77.45 3.62,-0.67 4.2,-1.27 8.44,-1.05 9.66,-16.2 12.84,-27.25 28.82,-34.67 26.02,-11.66 108.56,-50.63 133.82,-55.93 23.12,-4.85 18.98,25.67 16.23,38.18 -11.01,50.06 -19.09,103.29 -34.3,152.08 -0.67,6.69 -5.18,7.55 -2.86,12.41 10.82,0.83 5.29,23.85 3.07,43.46l-4.07 1.3 3.85 -0.88c-0.58,11.15 2.88,21.6 -7.72,25.74l-1.31 5.38 -3.85 -0.77c-14.72,29.02 -94.78,29.84 -126,37.29 -8.94,2.13 -14.11,3.86 -18.57,-1.79 -15.09,0.89 -0.26,-26.59 0,-28.41 -6.7,-2.49 -54.65,4.14 -65.83,3.77 -3.61,11.22 0.55,15.96 -14.2,15.69 -35.13,-0.64 -70.25,-15.98 -99.41,-31.05 -31.65,-16.36 -56.37,-43.73 -81.31,-68.43 3.16,11.84 21.86,31.54 30.01,39.7 60.58,60.58 137.45,60.39 141.67,66.15l-12.91 0c3.56,5.31 0.62,2.58 14.2,2.58l0 2.58c-15.73,0 -23.17,-2.58 -37.43,-2.58 -0.74,-6.78 1.73,-2.27 -3.58,-4.16 -4.93,-1.76 -37.55,-3.24 -45.47,-8.75 9.47,0 40.63,7.03 43.89,2.58 -24.36,-2.02 -69.94,-27.96 -87.99,-42.39 -24.02,-19.21 -45.8,-45.34 -56.88,-73.79 -18.23,-46.8 -41.02,-51.39 -41.02,-142.77 0,-7.92 -0.19,-2.33 1.29,-3.11 1.59,-8.86 10.33,-2.44 10.33,-10.08 -1.78,-0.03 -0.81,1.24 -2.58,-0.24 0,-15.52 7.78,-20.89 21.95,-20.05 0.13,-6.14 1.29,-6.72 1.29,-13.82 -23.43,0.41 -23.65,-31.09 6.45,-26.27 1,-5.11 2.24,-7.64 2.58,-13.44 4.83,0.99 16.26,3.54 16.6,8.31 -0.5,0.55 -0.28,0.92 -0.36,3.36 -20.16,-14.47 -33.52,-15.71 -29.47,-27.33 4.23,-12.11 14.34,-10.16 24.84,-10.16 4.21,-7.95 1.32,-5.81 6.45,-9.04 -3.1,-2.21 -17.04,-7.69 -11.39,-19.04 6.38,-12.82 20.42,0.27 27.56,-8.63 10.31,-12.86 -11.27,-11.19 -0.46,-23.72 12.43,-14.39 12.67,11.95 29.48,-13.16 -10.18,-15.21 1.35,-17.79 16.78,-14.2 5.44,-3.64 3.56,-4.09 12.91,-9.04 -2.8,-5.84 -0.67,-9.43 1.29,-12.91 18.77,-4.37 8.5,3.76 27.11,-5.16 -1.26,-5.4 -2.43,-3.55 -2.58,-10.33 16.88,-3.94 14.31,-3.67 19.36,-14.2 -32.9,7.67 -49.9,25.88 -74.87,42.6zm684.16 18.07c-0.66,7.91 -7.54,26.99 -7.74,36.14l-2.58 0c-1.26,-5.4 -13.37,-25.89 -16.78,-30.98 -8.78,0 -15.03,2.58 -23.23,2.58l-15.05 63.89c-1.71,7.27 -2.73,5.92 0.85,7.11 1.4,3.48 -2.27,3.71 13.91,1.01 10.01,-1.67 6.95,-0.85 12.68,-26.05 1.4,-6.16 3.09,-9.44 3.09,-16.27l20.65 36.14c29.97,0 23.5,-12.52 37.43,-73.58 -3.35,-0.89 -1.44,0.48 -2.58,-2.58 -7.34,0.17 -12.21,2.58 -20.65,2.58zm-198.79 65.83l-18.07 -32.27c-6.21,0.14 -18.87,2.55 -24.53,3.87 -0.17,7.78 -12.77,54.86 -14.63,65.51 -1.16,9.97 0.68,-1.42 1.72,8.07 2.95,-1.41 16.13,-2.82 20.65,-3.87l9.04 -40.02 21.95 36.14c10.36,-4.97 17.84,1.91 20.44,-7.96 3.88,-15.99 16.57,-55.43 11.83,-69.49 -20.82,9.99 -15.14,-16.89 -28.4,40.02zm218.16 0c5.64,2.75 18.97,1.53 22.55,-0.69 4.14,-2.56 17.27,-61.18 17.47,-70.31 -30.9,-11.19 -26.94,13.7 -40.02,71zm-120.05 21.94c2.45,-1.17 18.1,-3.55 21.95,-3.87 0.15,-6.85 12.89,-54.89 14.81,-65.33 1.37,-10.18 -0.86,1.3 -1.9,-8.25 -30.23,2.51 -20.08,0.17 -35.72,66.4 -2.99,12.51 -0.11,2.11 0.87,11.05zm-187.18 27.11l18.05 -1.55 12.67 -54.23c3.61,-15.24 5.79,-15.11 1.56,-16.51 -2.28,-5.66 -14.35,-0.63 -21.94,0 -0.96,11.48 -13.48,55.75 -14.63,65.51 -1.16,9.97 0.68,-1.43 1.72,8.07l2.58 -1.29zm-2.58 250.67c-15.78,72.23 -16.23,60.85 47.87,47.63 8.11,-1.67 28.99,-6.02 25.72,-19.47 2.69,-1.46 3.86,1.5 1.29,-3.87 8.54,-5.36 7.74,-28.9 7.74,-38.73 3.95,1.43 23.85,45.89 31.95,55.83 17.54,21.52 39.44,3.01 60.93,-4.19 5.89,-1.34 8.69,-4.88 12.97,-7.74 -2.76,-33.05 -50.45,-53.47 -63.25,-108.43 30.42,-14.6 56.59,-35.31 68.42,-70.96 37.18,-112.05 -155.04,-90.11 -149.75,-71.04 -3.65,2.42 -3.97,4.23 -2.58,7.74 -2.37,1.87 -6.08,14.94 -3.87,20.65 -5.64,4.45 -21.01,114.33 -25.93,132.83l-11.5 59.74zm513.52 -213.23c1.03,-1.36 18.14,-64.25 18.32,-72.29 -48.72,6.63 -188.57,25.77 -222.03,33.56 -11.63,48.64 3.5,229.07 6.44,295.62 0.27,6.14 2.22,13.13 3.33,19.91 3.62,22.01 2.43,20.1 26.79,20.1 15.41,0 21.71,2.05 30.56,-3.87l-2.58 -149.74c16.58,-7.95 98.33,-5.6 106.79,-18.07 5.23,-7.5 9.37,-36.96 14.55,-47.76 -24.28,0 -91.02,11.57 -122.63,14.2l-1.29 -25.82c23.92,0 47.69,-4.2 70.99,-5.17 25.99,-1.08 42.57,-17.53 54.23,-20.9 11.15,-4.94 17.16,-28.04 16.53,-39.76zm-13.21 296.9c41.25,0 22.68,1.37 47.02,-89.78 2.48,-8.17 14.86,-56.79 13.18,-62.55l0.78 -0.18 -0.35 -0.02c24.7,-10.93 85.54,-3.52 106.92,-15.3 10.78,-5.94 21.43,-33.16 22.75,-49.05 -18.29,0 -104.37,9.14 -114.89,12.28 0,-8.92 2.04,-22.09 6.28,-29.06 38.73,0 72.23,-2.95 107.31,-16.78 5.42,-2.14 9.73,-2.53 12.91,-5.85 30.11,0.69 41.8,-52.98 52.96,-79.31 2.93,-6.69 12.3,-25.37 12.87,-32.31 -31.98,2.66 -68.12,9.53 -99.62,13.98l-121.13 17c-4.97,2.07 -3.68,-0.51 -2.58,3.87 -22.53,14.16 -36.79,120.74 -44.19,154.59l-27.31 121.14c-4.18,18.45 -4.14,34.74 0.51,54.73l26.56 2.58zm-212.44 -308.97c0,-9.22 -0.86,-25.71 -2.58,-33.11 -10.99,-2.56 -17.6,0.72 -27.47,2.22 -36.89,5.63 -27.15,13.78 -44.82,86.26 -8.19,33.58 -19.26,68.13 -28.97,102 -12.06,42.08 -15.37,47.12 13.58,79.14 3.9,4.31 -1.61,0.96 4.75,4.04 0.24,1.33 7.14,12.57 13.22,14.2 7.19,-4.81 17.82,-43.45 17.82,-46.47l1.55 0c1.84,4.78 2.58,33.06 2.55,40.05 -0.07,12.61 4.51,41.04 6.4,55.56 2.29,17.57 1.78,15.12 24.43,11.36 10.06,-1.68 24.52,-1.38 33.74,-7.56 0,-18.12 -9.18,-225.62 -11.62,-232.8l-2.58 -74.87zm-166.13 -43.44c9.47,0 19.67,-0.15 21.67,-6.33 8.54,-26.39 -2.38,-20.74 32.16,-24.64 3.27,-0.37 16.55,-9.69 7.74,-21.95 -9.49,0.21 -18.92,3.87 -29.69,3.87l0 -5.16c7.91,-1.84 27.34,-5.16 36.14,-5.16 0.39,-4.63 1.71,-7.49 2.72,-11.67 2.78,-11.47 -0.46,-1.37 -1.43,-10.27l-56.8 9.04 -14.35 62.02c-2.21,8.31 -0.38,6.96 1.44,7.69 0.53,6.26 0.27,2.8 0.39,2.58zm324.91 -48.61c6.61,-0.88 9.82,-1.73 16.78,-1.73 7.26,-31.19 4.29,-23.21 24.74,-48.84 3.46,-4.34 17.94,-21.48 19.15,-26.03l-2.39 0 1.3 -3.81c-19.78,1.29 -21.76,1.15 -36.34,20.59 -2.34,3.12 -6.69,7.68 -7.75,11.62 -3.55,-2.6 -9.47,-17.31 -11.62,-23.24l-91.34 13.22c-4.89,1.23 -6.37,14.35 -6.76,19.05 3.36,0.89 1.44,-0.48 2.58,2.58 6.82,-0.15 13.42,-2.58 20.65,-2.58l-11.62 46.47 2.58 1.31 0 3.86c6.91,-1.61 15.02,-2.26 21.94,-3.87l11.62 -51.63c28.2,-6.57 27,-0.92 28.4,-21.33 31.67,70.55 4.32,35.86 14.2,65.22l3.87 -0.85zm25.82 16.34l7.74 0 0 -1.29 -7.74 0 0 1.29zm-451.8 52.92l-6.45 0 0 1.29 109.73 -6.45c58.64,-5.35 307.86,-46.47 347.24,-46.47 -150.22,16.02 -300.83,31.01 -450.51,51.63zm463.42 -165.23l5.16 0 0 -1.29c-19.59,0 -150.16,25.17 -176.85,29.69 14.72,0 35.84,1.89 48.06,-0.99l123.62 -27.41zm72.29 -32.27c1.33,1.33 4.67,-1.86 1.5,-0.7 -0.03,0.01 -3.66,-1.47 -1.5,0.7z"/>
    <path class="fil0 str1" d="M452.11 833.16c0.84,5.32 1.68,10.64 6.3,12.88 4.62,2.24 13.02,1.4 20.02,-0.56 7,-1.96 12.6,-5.04 14.28,-1.54 1.68,3.5 -0.56,13.58 -5.88,30.67 -5.32,17.08 -13.72,41.17 -22.12,65.25 -28.85,1.68 -57.69,3.36 -90.04,-2.66 -32.35,-6.02 -68.19,-19.74 -90.74,-34.31 -22.54,-14.56 -31.79,-29.97 -38.79,-44.95 -7,-14.98 -11.76,-29.55 -14.56,-43.41 -2.8,-13.86 -3.64,-27.03 -4.48,-40.19 8.4,25.21 16.8,50.41 30.39,71.14 13.58,20.72 32.35,36.97 55.73,46.91 23.39,9.94 51.39,13.58 70.3,15.4 18.91,1.82 28.71,1.82 34.59,-1.54 5.88,-3.36 7.84,-10.08 9.8,-16.8 -25.77,-3.36 -51.53,-6.72 -73.8,-15.12 -22.26,-8.4 -41.03,-21.84 -58.53,-39.63 -17.5,-17.78 -33.75,-39.91 -41.87,-57.69 -8.12,-17.78 -8.12,-31.23 -6.72,-49.29 1.4,-18.06 4.2,-40.75 9.1,-54.33 4.9,-13.58 11.9,-18.07 18.9,-22.55 -3.64,14.28 -7.28,28.57 -8.4,39.77 -1.12,11.2 0.28,19.33 1.96,20.03 1.68,0.7 3.64,-6.02 6.44,-16.94 2.8,-10.92 6.44,-26.05 9.8,-31.79 3.36,-5.74 6.44,-2.1 9.52,1.54 -3.08,13.16 -6.16,26.33 -7,46.07 -0.84,19.75 0.56,46.07 6.02,65.25 5.46,19.18 14.99,31.23 33.33,41.17 18.34,9.94 45.51,17.78 67.21,24.51 21.71,6.72 37.95,12.32 46.91,10.92 8.96,-1.4 10.64,-9.8 12.32,-18.2z"/>
   </g>
  </svg>
  
  `
  const IconAddPedido = `<svg xmlns="http://www.w3.org/2000/svg" width="39.3845mm" height="39.3381mm" viewBox="0 0 712.5 711.66">
  <path class="fill:black" d="M556.31 457.63c56.86,-10.55 101.41,29.69 109.83,75.82 10.22,55.97 -29.19,100.32 -73.71,109.44 -57.65,11.8 -103.82,-29.1 -112.25,-75.33 -10.45,-57.26 29.27,-101.23 76.14,-109.92zm-5.56 70.49c-20.12,0 -38.58,0.43 -38.68,22.07 -0.12,25.08 27.28,22.43 38.35,22.43 0.91,7.93 -3.95,38.37 22.4,38.82 26.53,0.45 22.25,-30.09 22.87,-38.48 9.69,-0.83 19.15,1.27 27.33,-3.33 15.21,-8.56 14.88,-29.84 -0.47,-38.69 -7.8,-4.49 -17.6,-2.15 -27.04,-3.35 -0.48,-19.56 -0.95,-38.58 -22.69,-38.27 -21.87,0.31 -21.38,18.57 -22.07,38.8zm-216.08 66.29c3.05,14.55 23.35,23.17 36.28,11.27 11.11,-10.22 7.56,-32.5 7.56,-50.48 0,-24.05 3.19,-96.92 -0.69,-115.43 -3.16,-15.07 -22.9,-23.52 -36.18,-11.7 -11.05,9.83 -7.6,32.74 -7.6,50.42 0,23.88 -3.19,97.68 0.63,115.93zm-145.04 -146.61c1.22,16.43 5.97,38.64 8.57,55.78 2.75,18.22 5.57,36.23 8.39,54.6 2.56,16.7 2.13,41.02 15.14,49.72 16.39,10.96 35.48,-2.24 34.14,-21.94 -2.2,-32.59 -11.96,-77.44 -17.02,-111.08 -2.87,-19.07 -2.69,-40.8 -15.76,-49.08 -16.09,-10.19 -34.85,3.31 -33.46,22zm252.6 149.3c9.87,27.22 20.23,38.89 37.74,56.03 5.44,5.33 12.49,9.39 16.03,14.02l-264.18 0.03c-88.86,0 -78.58,7.89 -95.66,-79.41 -12.32,-63 -35.8,-166.76 -43.19,-220.95l527.47 0.05 -7.92 49.61c-45.18,-7.14 -67.14,-8.18 -105.46,11.64 -27.39,14.17 -45.92,35.05 -60.2,64.27 -14.59,29.87 -16.61,71.7 -4.64,104.71zm-388.08 -329.06c5.57,-2.22 505.56,-2.4 593.73,-1.34 17.19,0.21 19.88,5.84 19.88,22.48 0.01,13.79 2.26,27.86 -8.73,31.84 -12.91,4.68 -299.11,1.34 -338.56,1.34 -82,0 -174.75,1.43 -255.8,0.08 -17.87,-0.3 -19.9,-5.65 -19.89,-22.87 0.01,-14.55 -2.52,-26.79 9.37,-31.52zm118.01 -45.8c2.2,-5.3 28.3,-35.38 35.05,-42.85 33.18,-36.67 75.03,-90.91 107.24,-126.3 5.31,-5.84 7.08,-8.23 12.65,-14.59 16.72,-19.07 -0.12,-43.85 -22.16,-37.47 -8.42,2.44 -21.62,19.58 -26.69,26.08 -7.08,9.09 -16,19.59 -23.44,27.73 -28.27,30.95 -66.98,79.47 -95.48,112.53 -16.25,18.85 -31.54,36.6 -47.07,54.87 -19.79,0.03 -56.51,-2.35 -73.19,3.87 -17.24,6.43 -30.84,19.64 -36.34,38.72 -4.45,15.44 -3.37,52.52 2.6,66.79 12.12,28.97 37.91,29.45 41.01,35.53 3.26,6.39 4.24,15.48 7.65,33.48l48.38 246.45c5.23,26.33 16.96,41.15 33.13,52.19 22.06,15.07 41.58,12.16 70.75,12.16l335.88 0.02c13.08,-0.02 24.5,-1.67 35.09,-6.91 11.06,-5.47 15.74,-11.03 24.48,-16.43 7,-4.33 22.17,-8.07 30.6,-12.01 44.43,-20.77 80.65,-66.83 79.64,-129.49 -0.41,-25.26 -7.77,-46.6 -17.88,-64.97 -8.34,-15.15 -27.01,-37.2 -40.08,-43.32 1.14,-11.32 9.02,-66.47 13.04,-71.8 3.85,-3.48 8.73,-3.89 13.84,-6.66 11.85,-6.42 21.5,-15.69 26.83,-29.45 5.55,-14.34 6.55,-51.52 1.72,-66.88 -15.8,-50.21 -67.86,-41.28 -109.13,-41.28 -15.44,-18.72 -31.81,-36.35 -47.82,-55.84 -38.95,-47.37 -80.68,-93.63 -119.66,-141.24 -5.88,-7.18 -16.98,-22.22 -26.28,-24.48 -19.76,-4.79 -39.83,17.65 -19.4,39.53l153.28 182.02 -368.22 -0.01z"/>
</svg>`
const IconSemFoto = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="36.6053mm" height="36.6038mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
viewBox="0 0 421.93 421.91">
  <path class="fill:black" d="M89.01 351.04l261.84 -262.25c9.36,6.44 27.28,39.19 32.47,51.99 36.83,90.78 -2.83,193.38 -89.67,236.9 -47.37,23.74 -111.9,26.97 -164.26,0.55 -9.31,-4.7 -35.08,-19.97 -40.37,-27.2zm125.05 -90.85c22.98,0.5 46.35,-23.4 46.35,-45.94l-46.35 45.94zm-52.53 -52.53l46.35 -45.94c-23.28,-0.65 -46.35,22.98 -46.35,45.94zm119.49 3.3c0,31.42 -22.85,60.67 -54.05,67.91 -20.04,4.65 -26.96,-0.45 -31.43,0.66 -2.62,0.65 -25.43,24.45 -26.6,26.2 35.43,0 70.87,0 106.3,0 16.43,0 38.95,2.35 50.29,-3.28 10.49,-5.2 21.4,-16.61 21.4,-32.16l0 -118.66c0,-10.73 -3.84,-13.4 -4.94,-18.13 -3.52,0.94 -6.71,5.48 -9.27,8.03l-52.98 53.38c-0.86,2.23 1.28,12.53 1.28,16.04zm-119.49 -94.76l-51.09 0c-18.44,0 -35.43,16.92 -35.43,35.43l0 118.66c0,10.73 3.84,13.4 4.94,18.13 3.7,-0.99 61.77,-60.16 62.25,-61.42 0.79,-2.06 -12.29,-53.59 39.91,-79.51 25.62,-12.72 41.19,-2.03 46.42,-6.3l20.96 -21.09c9.79,-9.79 13.75,-9.23 5.95,-22.85 -5.3,-9.24 -17.3,-18.15 -30.47,-18.15 -25.54,0 -38.04,-3.48 -52.95,11.33 -6.29,6.25 -10.5,13.47 -10.5,25.76zm43.32 -116.19l16.34 0c27.77,1.04 55.04,7.39 79.05,19.5 36.22,18.26 59.46,36.91 83.42,69.85 21.26,29.22 38.25,74.04 38.25,114.19l0 14.83c0,28.77 -10.11,63.26 -19.77,82.41 -17.95,35.54 -37.11,59.4 -69.57,82.88 -29.43,21.29 -73.77,38.25 -114.19,38.25l-14.83 0c-28.87,0 -63.18,-10.07 -82.41,-19.77 -21.69,-10.95 -51.37,-29.83 -66.27,-49.1 -18.08,-23.38 -18.93,-19.94 -35.65,-53.35 -25.77,-51.51 -25.61,-126.65 0.28,-178.01 18.25,-36.21 36.91,-59.45 69.85,-83.42 32.29,-23.5 73.86,-36.72 115.49,-38.25zm-133.76 333.12c-3.37,-2.33 -15.25,-19.16 -17.99,-23.63 -57.59,-93.98 -23.55,-216.01 74.64,-264.99 57.65,-28.76 129.35,-26.32 185.74,11.2 4.08,2.71 17.4,12.11 19.44,15.17l-261.84 262.25z"/>
</svg>`
const IconSearch = `<svg xmlns="http://www.w3.org/2000/svg" width="35.7996mm" height="35.8254mm"
viewBox="0 0 3565.76 3568.33">
  <path class="fill:black" d="M375.95 1428.36c0,-264.33 133.18,-568.05 319.61,-742.26 86.5,-80.8 190.33,-160.92 316.39,-214.77 420.61,-179.74 856.9,-94.1 1181.86,212.68 79.88,75.42 167.13,191.04 219.74,307.2 78.38,173.05 101.76,285.56 101.76,495.3 0,270.56 -139.26,544.22 -314.91,719.9 -656.39,656.54 -1824.46,218.75 -1824.46,-778.04zm918.41 -842.27c-106.11,19.74 -340.06,35.34 -366.87,176.85 -20.86,110.05 79.51,217.94 213.65,163.26 29.96,-12.21 69.5,-25.57 103.43,-32.17 348.34,-67.93 608.18,128.67 712.96,343.99 27.62,56.77 52.21,120.1 147.02,124.38 97.16,4.37 198.55,-91.51 132.38,-229.19l-46.44 -89.31c-139.88,-232.77 -362.08,-394.27 -638.57,-446.56 -61.53,-11.62 -193.51,-23.16 -257.57,-11.25zm-1294.32 958.64c14.48,28.87 -2.05,523.79 460.14,962.05 423.39,401.47 1070.5,506.46 1599.64,241.29 85.62,-42.91 135.04,-93.29 182.28,-50.47 221.45,221.46 445.97,440.65 664.33,665 76.09,78.21 148.96,152.63 257.35,188.24 119.33,39.22 222.25,11.96 311.68,-77.16 84.31,-84.02 111.01,-189.68 74.02,-304.57 -19.55,-60.7 -56.01,-124.11 -99.16,-168.27 -231.99,-237.32 -480.29,-474.31 -711.12,-711.25 -76.48,-78.5 -82.13,-72.41 -28.63,-166.09 206.82,-362.04 236.15,-829.11 75.24,-1225.11 -255.74,-629.4 -932.73,-996.38 -1594.62,-875.47 -604.79,110.48 -1061.61,573.19 -1171.31,1177.21 -21.67,119.43 -19.84,224.4 -19.84,344.6z"/>
</svg>`
const IconPrevProx = `<svg xmlns="http://www.w3.org/2000/svg" width="98.5895mm" height="91.6908mm" viewBox="0 0 9844.72 9155.85">
  <path class="fill:#010103" d="M-0 1471.18l0 2575.75c100.25,537.14 430.11,631.27 903.91,630.92 512.85,-0.37 1025.71,-0.01 1538.56,-0.01 541.08,0 979.11,66.1 1224.02,-318.03 206.09,-323.26 110.05,-756.04 -190.61,-950.59 -204,-131.98 -351.85,-109.97 -628.86,-123.55 -562.17,-27.58 522.93,-1457.38 2019.09,-1670.36 915.77,-130.35 1972.14,249.74 2532.04,872.57 396.63,441.21 705.19,906.37 809.65,1574.5 213.05,1362.71 -446.64,2637.96 -1662.83,3214.08 -1027.7,486.83 -1512.83,85.69 -1893.28,587.96 -365.53,482.58 -214.15,1338.41 848.45,1289.4 2118.93,-97.74 3919.28,-1709.22 4273.66,-3764.8 225.06,-1305.31 -83.3,-2612.76 -957.96,-3703.68 -1235.84,-1541.4 -3420.14,-2127.21 -5325.43,-1329.17 -1419.8,594.7 -1840.86,1559.22 -2060.39,1597.52 -71.7,-79.1 -4.82,-452.21 -107.85,-659.78 -192.08,-386.97 -643.84,-503.34 -1013.63,-273.33 -234.63,145.95 -238.19,331.49 -308.53,450.59z"/>
</svg>`

const IconSEMicon = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="29.9998mm" height="30mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 254.27 254.27">
  <path class="fill:black" d="M171.77 188.73c5.76,-3.86 9.46,-8.74 13.08,-12.28 1.77,-1.73 2.55,-3.41 4.36,-4.63 2.44,1.64 32.77,32.51 37.65,37.38 5.39,5.39 15.78,12.73 7.29,23.41 -3.16,3.98 -6.49,4.2 -11.12,4.2 -5.71,0 -11.13,-7.17 -14.4,-10.44l-36.85 -37.65zm-57.06 -115.19l0 59.18c0,4.51 3.41,7.92 7.93,7.92l24.31 0c5.22,0 10.09,-8.01 5.1,-14.08 -3.49,-4.25 -12.62,-2.83 -20.42,-2.83l0 -11.1c5.63,0 16.91,1.33 16.91,-8.45 0,-10.08 -10.85,-8.98 -16.91,-8.98l0 -11.62 12.15 0c14.31,0 12.58,-17.44 1.58,-17.44l-22.19 0c-4.13,0 -8.45,3.51 -8.45,7.4zm-41.21 43.86c0,7.68 -3.92,7.4 -10.04,7.4 -5.81,0 -5.33,-4.28 -9.18,-6.67 -8.63,-5.35 -21.2,7.83 -5.1,19.36 9.75,6.98 24.22,6.23 33.92,-1.51 12.19,-9.74 10.27,-33.48 -8.07,-39.66 -6.91,-2.33 -16.32,0.47 -16.32,-7.45 0,-7.59 6.47,-6.34 11.62,-6.34 6.11,0 2.37,6.87 13.21,6.87 5.77,0 12.77,-10.42 0.01,-19.56 -13.13,-9.41 -37.11,-5.37 -41.36,13.08 -3.73,16.22 8.68,29.24 22.86,29.19 4.4,-0.01 8.45,1.07 8.45,5.29zm109.9 -39.63l0 51.78c0,11.5 11.6,13.52 16.1,6.59 1.9,-2.94 1.34,-5.85 1.34,-10.29 -0,-7.57 0,-15.15 0,-22.72 2.49,1.82 3.99,8.34 10.57,8.34 6.57,0 8.08,-6.52 10.57,-8.34 0,5.19 -1.02,29.08 1.13,32.68 4.3,7.2 16.3,5.68 16.3,-6.26l0 -51.78c0,-8.06 -2.95,-11.1 -10.04,-11.1 -4.43,0 -8.08,6.57 -10.04,9.51l-5.8 8.46c-0.8,1.27 -0.97,2.18 -2.65,2.63 -0.43,-1.59 -11.42,-16.9 -12.27,-17.85 -1.62,-1.8 -1.96,-2.17 -4.62,-2.82 -5.55,-1.36 -10.58,2.61 -10.58,11.16zm-77.14 134.21c20.35,0 37.38,-6.15 50.72,-13.21l30.88 30.94c0.1,0.12 0.38,0.46 0.48,0.57l14.47 14.59c8.95,9 21.78,12.16 33.95,6.74 16.08,-7.17 22,-26.96 13.91,-41.39 -3.74,-6.68 -35.37,-36.86 -42.84,-44.34 -11.42,-11.42 -19.46,-23.99 -28.46,-10.23 -5.67,8.68 -14.41,17.57 -23.14,23.36 -37.53,24.52 -83.65,20.1 -115.07,-12.31 -21.94,-22.63 -29.64,-58.6 -19.57,-88.37 2.32,-6.86 5.3,-12.96 8.93,-19.22 32.42,-51.36 104.03,-56.52 143.43,-10.14l0.82 0.96c2.15,2.56 4.24,6.18 8.62,6.18 6.73,0 12.13,-7.13 6.88,-14.28 -24.08,-31.33 -62.34,-46.43 -101.39,-40.59 -14.72,2.2 -31.6,9.29 -43.67,17.9 -16.97,12.24 -28.42,26.17 -36.84,45.4 -8.73,20.36 -10.48,43.08 -5.97,64.73 5.64,27.1 24.66,53.03 48.32,67.23 16.97,10.18 35.75,15.33 55.52,15.48z"/>
</svg>`
const IconArt = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="30mm" height="30mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 211.91 211.91">
  <path class="fill:black" d="M100.44 187.96c21.32,0 37.5,-9.66 43.55,-30.29 0.34,-1.15 0.75,-2.66 1.3,-3.78 -4.39,-2.9 -26.54,-28.09 -28.96,-28.09 -7.32,0 -17.66,5.7 -22.3,12.09 -5.16,7.12 -6.24,15.71 -8.71,25.49 -3.59,14.24 -9.65,8.23 -13.36,12.16 -1.64,1.74 -1.56,4.22 0,5.97 3.23,3.61 21.95,6.45 28.49,6.45zm25.23 -69.99l27.09 27.17 23.43 -24.8c13.12,-15 35.73,-45.85 35.73,-58.77 0,-21.31 -44.39,18.04 -49.37,22.25 -25.87,21.81 -12.39,11.6 -36.87,34.16zm-90.16 38.22c0,-4.18 1.97,-8 4.08,-10.26 8.82,-9.46 25.35,-2.34 25.35,8.41l0 3.22c0,9.5 -14.56,18.23 -24.89,8.88 -2.12,-1.92 -4.54,-6.39 -4.54,-10.26zm-35.5 3.14l0 -6.07c0.57,-13.36 9.34,-21.93 19.68,-29.7 8.08,-5.93 16.41,-14.02 9.9,-25.55 -7.15,-12.67 -29.59,-13.52 -29.59,-44.51 0,-23.78 28.63,-41.46 49.22,-48.18 18.17,-5.93 33.6,-6.81 52.34,-3.13 19.92,3.91 40.41,14.65 54.81,28.86 10.44,10.29 13.05,16.76 19.74,26.59 -3.5,2.31 -19.15,17.34 -21.49,17.96 -0.54,-6.4 -6.94,-12.43 -14.01,-12.43 -16.08,0 -20.69,18.78 -8.34,26.64 1.71,1.09 2.89,1.1 4.6,1.91 -1.09,1.61 -13.48,12.59 -16,15.08 -6.72,6.66 -5.74,7.12 -11.73,8.7 -19.7,5.19 -29.26,17.6 -33.35,38.04 -2.28,11.37 -1.74,9.03 -5.32,9.95 -10.38,2.69 -16.09,17.81 -5.73,26.95 5.57,4.91 23.92,8.54 30.54,8.58 2.79,0.02 4.48,0.51 6.54,0.46 21.3,-0.77 37.28,-8.23 48.11,-26.74 9.81,-16.78 -3.83,-5.12 22.8,-31.86 2.25,-2.2 11.2,-12.99 13.19,-13.7 -8.42,35.63 -30.03,61.68 -63.98,76.45 -9.59,4.17 -25,8.27 -38.79,8.27 -14.45,0 -20.74,-0.94 -34.28,-5.35 -21.33,-6.95 -46.82,-23.23 -48.87,-47.23zm43.91 -111.81c15.79,0 19.93,16.09 11.58,24.31 -8.98,8.85 -25.55,3.2 -25.56,-10.04 -0,-7.35 6.43,-14.27 13.97,-14.27zm51.85 -14.74c13.45,0 20.22,15 11.34,24.53 -4.66,5.01 -14.71,6.53 -20.81,0.46 -11.26,-11.2 -0.72,-24.99 9.47,-24.99z"/>
</svg>`
const IconCompra = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="30mm" height="30mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 184.49 184.49">
  <path class="fill:black" d="M8.85 18.37l13.52 0 21.79 47.19 10.18 22.04c0.56,1.66 -0.84,3.11 -2.53,6l-9.82 17.67c-2.71,7.75 -2.3,15.26 3.12,21.05 2.75,2.94 6.95,6.04 12.38,6.04l91.93 -0.02c11.8,0 11.8,-18.37 0,-18.37l-83.13 0c-3.23,0.01 -3.93,0.32 -5.97,-1.08 0,-3.17 6.2,-13.73 8.08,-17.29l63.26 0c15.17,0 16.64,-5.19 23.9,-19.09l22.69 -41.94c1.38,-2.36 2.36,-4.67 3.72,-6.99 1.62,-2.75 3.1,-3.42 2.27,-8.22 -1.36,-7.82 -9.42,-6.97 -14.28,-6.97l-127.57 0 -8.08 -18.37 -25.46 0c-11.8,0 -11.8,18.37 0,18.37zm31.44 147.7c0,15.12 18.25,24.66 30.18,13.64 7.96,-7.36 8.1,-21 -0.5,-27.85 -13.78,-10.97 -29.67,0.28 -29.67,14.21zm89.97 0c0,14.98 18.04,25.12 30.72,13.12 6.26,-6.46 7.44,-16.68 2.17,-23.78 -11.61,-15.66 -32.89,-6.16 -32.89,10.66z"/>
</svg>`
const IconPrint = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="30mm" height="30mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 161.07 161.07">
  <path class="fill:black" d="M123.15 80.53c0,-5.94 8,-4.7 13.47,-4.7 6.74,0 6.74,9.4 0,9.4 -5.48,0 -13.47,1.24 -13.47,-4.7zm-66.12 56.72c0,-2.67 2.28,-4.7 5.01,-4.7l36.98 0c6.64,0 6.13,9.09 0.94,9.09l-38.86 0c-2.25,0 -4.07,-2.39 -4.07,-4.39zm0 -18.8c0,-2.56 2.01,-4.7 4.7,-4.7l37.6 0c6.03,0 6.41,9.09 -0.31,9.09l-36.98 0c-2.96,0 -5.01,-2.23 -5.01,-4.39zm-9.71 38.23c0,2.14 2.24,4.39 4.39,4.39l57.66 0c2.14,0 4.39,-2.24 4.39,-4.39l0 -52.64 -66.43 0 0 52.64zm0.31 -147.28l37.6 0 0 23.82c0,2.9 2.47,4.7 4.39,4.7l23.82 0 0 18.8 -65.81 0 0 -47.32zm75.52 28.52c9.83,0 9.09,-0.22 9.09,9.4l-9.09 0 0 -9.4zm-94.32 3.45c0,-4.27 5.51,-3.45 9.09,-3.45l0 9.4 -9.09 0 0 -5.95zm9.09 -36.66l0 23.5 -6.27 0c-6.44,0 -12.53,6.09 -12.53,12.53l0 6.58c-7.56,0 -11.38,-0.16 -16.23,5.71 -1.48,1.79 -2.89,5.19 -2.89,7.77l0 58.6c0,6.7 6.92,13.16 13.47,13.16l24.76 0 0 -28.52c-2.82,0 -6.12,0.4 -7.9,-1.19 -2.4,-2.16 -2.64,-8.21 4.76,-8.21l90.88 0c8.6,0 7.94,9.4 0.94,9.4l-4.07 0 0 28.52 24.13 0c7.72,0 14.1,-6.96 14.1,-13.47l0 -58.29c0,-3.68 -2.3,-7.01 -4.58,-9.52 -4.46,-4.15 -8.73,-3.95 -14.54,-3.95 0,-6.11 0.72,-9.96 -3.22,-14.64 -6.11,-7.26 -15.17,-2.98 -18.45,-4.73 -2.13,-1.14 -26.22,-27.95 -29.71,-27.95l-47.94 0c-2.68,0 -4.7,2.02 -4.7,4.7z"/>
</svg>`
const IconFret = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40mm" height="27mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 256.05 172.83">
  <path class="fill:black" d="M202.04 160.01c-11.69,0 -20.33,-15.28 -9.71,-26.46 9.18,-9.38 25.22,-3.01 25.22,9.99 0,5.3 -1.67,8.72 -4.36,11.46 -2.55,2.61 -6.3,5 -11.14,5zm54.01 -71.72l0 6.13c-0.33,4.02 -1.08,9.07 -1.54,15.13 -0.48,6.41 -1.41,13.73 -1.92,20.15 -0.37,4.65 -0.52,5.6 -2.2,9.06 -4.21,8.69 -10.84,11.48 -21.35,11.48 -0.45,5.57 -5.7,12.91 -9.28,15.66 -11.66,8.97 -23.82,9.37 -35.53,0.08 -4.41,-3.5 -7.45,-10.19 -8.7,-15.74 -2.74,0 -5.01,-0.54 -7.21,-1.33 -2.8,-1 -3.29,-1.93 -5.29,-3.31 -4.69,2.55 -6.57,4.68 -13.99,4.64l-55.52 -0.01c-2.87,12.66 -13.67,21.81 -27.08,22.57 -12.17,0.69 -26.19,-11.3 -26.43,-22.57l-4 0c-8.75,0 -15.92,-5.91 -17.31,-13.58 -1.21,-6.71 1.19,-20.52 1.81,-28.09 -3.7,0 -9.86,1.46 -11.23,-4.93 -0.95,-4.43 2.49,-7.52 7.75,-7.92 9.66,-0.72 50.83,-0.02 63.99,-0.02 7.98,0 23,3.12 23,-9.26 0,-9.74 -9.74,-8.75 -14,-8.75 -7.5,0 -15,0 -22.5,0l-34.02 0.02c-3.56,-0.16 -6.49,-2.34 -6.49,-4.65 0,-10.26 6.46,-8.23 18,-8.23l47.01 0c4.27,0 7.43,0.58 10.23,-1.31 7.36,-4.96 4.91,-16.55 -3.7,-16.73 -22.92,-0.47 -51.06,0.03 -74.54,0.03 -7.98,0 -24,2.51 -24,-5.66 0,-2.88 0.21,-4.62 3.3,-6.38 2.08,-1.19 3.78,-0.83 6.7,-0.82l77.52 0c7.73,0 22,2.78 22,-9.26 0,-10.34 -14.59,-7.72 -21,-7.72 -14.42,0 -44.84,0.68 -57.08,0.06 -2.64,-0.13 -2.54,0.49 -1.9,-4.64 0.86,-6.91 0.33,-12.4 8.97,-12.4l123.52 0c5.65,0 10.17,2.04 13.15,5 8.88,8.81 3.86,18.53 3.86,26.9l39.51 0c3.5,0 5,1.36 6.36,3.75 1.37,2.41 2.23,4.14 3.48,6.71l20.17 40.47c4.98,0 6.95,1.83 7.5,5.46zm-189.54 71.72c-4.17,0 -7.29,-1.84 -9.81,-3.8 -7.92,-6.15 -7.12,-27.07 11.81,-27.07 11.99,0 17.99,17.55 8.64,26.38 -2.23,2.11 -6.56,4.49 -10.64,4.49zm143.53 -64.31l33.01 0c0,4.66 -0.82,8.56 -1,12.87 -0.18,4.28 -0.7,8.35 -1.04,12.82 -1.03,13.71 -0.94,15.99 -11.96,15.99 -1.15,-14.24 -23.87,-30.4 -43.31,-14.71 -3.43,2.77 -9.1,9.9 -9.2,14.71 -4.12,0 -7.26,-1.27 -6.38,-7.56l3.34 -36.21c0.31,-4.06 0.85,-8.13 1.03,-11.8 0.21,-4.39 0.84,-8.27 1.01,-12.34 0.34,-8.12 2,-16.45 2,-24.69l17.5 0 -3.04 32.93c-0.21,9.8 7.65,18 18.04,18z"/>
</svg>`
const IconCorte = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="30mm" height="30mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 125.83 125.83">
  <path class="fill:black" d="M28.85 71.75c0,-2.52 7.31,-9.05 8.1,-9.58l15.28 15.42c-0.9,1.31 -7.07,7.87 -8.98,8.08 -2.24,0.24 -14.4,-12.67 -14.4,-13.92zm-28.73 51.6c0,0.99 1.01,2.66 3.18,2.46 1.81,-0.25 28.29,-19.5 30.65,-21.43 2.15,-1.99 1.26,-4.44 -0.89,-5.15l-19.83 -4.97c-11.48,-2.87 -10.67,-3.36 -11.41,6.23 -0.47,6.09 -1.7,17.81 -1.7,22.87zm86.5 -123.35c15.8,0 21.98,5.3 34.22,14.82 5.36,4.27 6.6,13.27 2.73,19.3 -2.91,4.52 -59.22,50.82 -69.61,59.58 -1.23,1.04 -3.6,3.61 -5.47,3.61l-44 -11.01c-5.55,-1.39 -5.54,-3.12 -2.23,-7 18.57,-21.84 38.55,-45.45 57.34,-66.95 6.61,-7.44 17.45,-11.89 27.03,-12.34zm-26.1 69.29l-15.53 -15.42c1.13,-0.77 13.06,-12.95 15.1,-14.99 6.48,-6.49 5.34,-6.08 13.14,1.72 8.2,8.21 8.93,7.16 2.33,13.76 -1.99,1.99 -13.97,14.21 -15.04,14.93zm40.51 -35.14c-8.42,0 -10.99,-7.1 -8.44,-12.38 3.07,-6.36 14.59,-6.66 15.97,3.39 0.59,4.29 -3.66,8.99 -7.53,8.99z"/>
</svg>`
const IconSolda = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="30mm" height="30mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 114.82 114.82">
 <g id="Camada_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <g id="_2240053008832">
   <path class="fill:black" d="M-0 14.52l0 69.2c0,4.91 0.73,8.8 2.08,12.31 4.05,10.53 13.88,17.69 24.81,17.69l29.4 0c7.67,0 13.95,-3.37 19.09,-8.77 0.69,-0.73 0.95,-1.19 1.59,-1.94 3.91,-4.61 5.98,-12.32 5.98,-19.05l0 -69.44c0,-8.14 -4.74,-14.52 -12.08,-14.52l-58.8 0c-5.02,0 -9.63,3.84 -11.2,8.43 -0.57,1.67 -0.88,3.74 -0.88,6.08zm17.09 29.52l48.77 0 0 -15.73 -48.77 0 0 15.73zm-4.79 1.94l0 -19.6c0,-1.61 0.78,-2.9 2.28,-2.9l53.79 0c1.49,0 2.28,1.29 2.28,2.9l0 19.6c0,2.06 -1.02,3.15 -2.96,3.15l-52.42 0c-1.94,0 -2.96,-1.08 -2.96,-3.15z"/>
   <path class="fill:black" d="M97.39 114.82l-3.79 0 0 -25.48 3.79 0 0 25.48zm8.19 -77.7c2.5,5.49 4.99,10.99 6.54,14.34 1.54,3.35 2.12,4.57 2.43,6.12 0.3,1.55 0.33,3.44 0.18,6.1 -0.15,2.66 -0.48,6.07 -1.33,7.33 -0.85,1.26 -2.23,0.35 -2.69,-1.84 -0.46,-2.19 0,-5.66 -0.14,-8.14 -0.14,-2.49 -0.88,-3.99 -1.8,-5.84 -0.92,-1.86 -2.02,-4.07 -3.11,-6.29 -0.02,-3.92 -0.03,-7.85 -0.05,-11.77zm-6.3 -6.68l3.79 0 0 56.25 -3.79 0 -11.35 0 0 -56.25 11.35 0zm-4.43 -2.32l-4.07 0 -0 -17.67c0,-1.75 1.27,-2.51 4.07,-2.53l0 20.2zm6.51 -0l-4.07 0 0 -20.2c3.5,0.03 4.08,1.06 4.07,3.16l-0 17.04z"/>
  </g>
 </g>
</svg>`
const IconCbmt = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="19.312mm" height="29.7323mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 43.43 66.86">
  <path class="fill:black" d="M6.72 50.93c0,-1.87 0.66,-2.95 1.41,-4.06l27.18 0c0.21,0.79 1.25,1.78 1.25,3.59l0 9.53 -29.84 0 0 -9.06zm0 -34.99l0 -9.06 29.84 0 0 9.53c0,1.89 -1.2,3.58 -2.38,4.81l-7.19 7.18c-2.44,2.44 -2.93,2.51 -2.93,5.66 0,2.52 3.26,4.27 4.37,5.94l-13.44 0c1.72,-2.57 7.95,-5.09 1.68,-11.37l-7.5 -7.5c-1.4,-1.4 -2.46,-2.73 -2.46,-5.19zm-6.72 0.78c0,7.87 9.45,13.1 11.87,16.72 -2.82,4.21 -11.87,8.74 -11.87,16.87l0 16.56 42.96 0c0.36,0 0.47,-0.11 0.47,-0.47l0 -14.37c0,-7.58 -3.31,-9.95 -8.08,-14.72 -0.93,-0.93 -3.18,-2.96 -3.79,-3.87 2.95,-4.4 11.87,-8.05 11.87,-18.28l0 -14.69c0,-0.36 -0.11,-0.47 -0.47,-0.47l-42.96 0 0 16.72z"/>
</svg>`
const iconAplic = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="30mm" height="30mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 98.38 98.38">
  <path class="fill:black" d="M18.56 98.38c4.03,0 8.47,-1.72 11.25,-4.01 5.96,-4.91 7.06,-9.41 7.06,-18.87 0,-13.73 0,-27.46 0,-41.18 -1.26,0.84 -2.09,2.14 -3.3,3.06 -0.64,0.49 -1.17,0.87 -1.93,1.37 -8.82,5.78 -19.62,5.13 -28.04,-1.16 -1.37,-1.02 -2.36,-2.45 -3.59,-3.27 0,13.73 0,27.46 0,41.18 0,7.51 0.05,10.63 4.32,16.27 2.97,3.92 8.83,6.6 14.24,6.6zm-1.02 -72.71c-2.6,0 -5.23,-2.42 -6.04,-4.63 -2.93,-7.93 7.64,-13.71 12.63,-7.29 1.66,2.14 1.55,3.16 1.55,5.57 0,2.98 -3.38,6.36 -6.36,6.36l-1.78 0zm-17.54 -7.12c0,15.54 18.51,23.43 29.53,14.53 0.4,-0.32 0.53,-0.53 0.92,-0.86 7.98,-7.03 8.21,-18.69 2.16,-25.43 -1.44,-1.6 -1.47,-1.92 -3.52,-3.35 -12.54,-8.77 -29.09,0.27 -29.09,15.11zm42.71 -0.51l0 54.66 31.78 0 0 -23.9 23.9 0 0 -48.81 -64.06 0c1.27,1.9 8.39,6.76 8.39,18.05zm37.62 54.66l2.19 -2.14c0.53,-0.48 0.7,-0.61 1.16,-1.12l3.41 -3.45c0.04,-0.04 0.09,-0.09 0.12,-0.13l7.88 -7.88c0.92,-0.96 2.42,-2.17 3.03,-3.32l-17.8 0 0 18.05z"/>
</svg>`
const IconInstal = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="35.7209mm" height="29.9999mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 128.68 108.07">
  <path class="fill:black" d="M46.24 24.13l-20.86 0c-2.71,0 -2.6,4.02 0,4.02l20.61 0c2.83,0 2.16,-4.02 0.25,-4.02zm9.3 23.37c0,2.47 -5.62,7.29 -11.06,7.29 -2.47,0 0.53,-5.84 1.07,-6.97 0.41,-0.86 0.48,-1.33 1.69,-1.33l7.29 0c0.59,0 1.01,0.42 1.01,1.01zm73.14 -27.65c0,1.35 -0.59,2.26 -2.01,2.26l-27.65 0c-1.49,0 -2.16,-4.27 0.5,-4.27l27.14 0c1.22,0 2.01,0.79 2.01,2.01zm-47.25 11.56c-1.46,0 -5.78,0.39 -5.78,-1.76l0 -19.35c0,-2.07 3.95,-1.76 5.28,-1.76 4.57,0 5.67,1.52 7.98,3.83 1.96,1.96 4.51,3.62 4.67,7.33 0.16,3.78 -2.23,5.44 -4.29,7.5 -2.17,2.17 -3.58,4.21 -7.85,4.21zm-44.74 42.98l-26.89 0c-3.12,0 -1.67,-4.54 -1.43,-6.21 1.2,-8.33 1.18,-12.9 1.18,-21.44 0,-1.75 -0.74,-3.31 0.33,-4.44 1.53,-1.63 6.41,0.35 7.82,1.32 3.01,2.05 4.18,6.55 5.11,9.97 1.75,6.39 4.77,9.78 11.68,11.19 3.2,0.66 3.23,0.61 3.48,4.06 0.06,0.86 0.43,2.58 0.45,3.33 0.02,0.96 -0.93,2.22 -1.73,2.22zm30.66 33.68l-56.55 0c-6.79,0 -10.34,-5.12 -10.81,-8.62l0 -1.44c0.17,-1.06 0.76,-1.76 1.76,-1.76l74.14 0c4.62,0 0.79,11.81 -8.55,11.81zm10.56 -18.85c0,1.21 0.1,3.02 -2.01,3.02l-74.14 0c-1.26,0 -1.65,-0.64 -1.76,-1.64l0 -2.63c0,-4.76 4.76,-9.3 9.55,-9.3l58.81 0c2.57,0 5.67,1.78 6.83,3.22 1.51,1.88 2.72,4.02 2.72,7.33zm-24.13 -76.15c0,-0.92 -0.69,-2.01 -1.51,-2.01l-33.18 0c-1.88,0 -2.35,4.02 0.5,4.02l32.17 0c1.22,0 2.01,-0.79 2.01,-2.01zm17.59 -6.03l0 27.9c0,3.76 -3.07,7.03 -6.54,7.28 -4.58,0.33 -17.63,-0.55 -20.03,0.58 -3.95,1.86 -5.72,10.46 -6.42,14.69 -0.36,2.19 -0.66,3.68 -3.26,3.17 -11.93,-2.32 -5.54,-13.19 -14.72,-19.98 -7.83,-5.8 -16.6,-1.65 -18.54,-3.33 -1,-0.86 -1.86,-3.77 -1.86,-5.68l0 -21.11c0,-5.45 5.18,-10.56 12.06,-10.56l51.27 0c4.55,0 8.04,3.35 8.04,7.04z"/>
</svg>`
const IconConfig = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="5.2916mm" height="25.4mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
viewBox="0 0 515.27 2473.35">
  <path class="fil0" d="M257.64 0c142.29,0 257.64,115.35 257.64,257.64 0,142.29 -115.35,257.64 -257.64,257.64 -142.29,0 -257.64,-115.35 -257.64,-257.64 0,-142.29 115.35,-257.64 257.64,-257.64zm0 1958.07c142.29,0 257.64,115.35 257.64,257.64 0,142.29 -115.35,257.64 -257.64,257.64 -142.29,0 -257.64,-115.35 -257.64,-257.64 0,-142.29 115.35,-257.64 257.64,-257.64zm0 -979.04c142.29,0 257.64,115.35 257.64,257.64 0,142.29 -115.35,257.64 -257.64,257.64 -142.29,0 -257.64,-115.35 -257.64,-257.64 0,-142.29 115.35,-257.64 257.64,-257.64z"/>
</svg>
` 

const IconLogin = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Creator: CorelDRAW 2020 (64 Bit) -->
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="70.7319mm" height="70.7319mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
viewBox="0 0 7055.58 7055.58"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
 <defs>
 </defs>
 <g id="Camada_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <path class="fill:black" d="M3527.79 0c1948.35,0 3527.8,1579.45 3527.8,3527.79 0,1948.35 -1579.45,3527.8 -3527.8,3527.8 -1948.34,0 -3527.79,-1579.45 -3527.79,-3527.8 0,-1948.34 1579.45,-3527.79 3527.79,-3527.79zm-9.64 4103.28c1030.45,0 1930.07,559.8 2411.56,1391.84 439.2,-535.58 702.86,-1220.64 702.86,-1967.33 0,-1714.71 -1390.06,-3104.77 -3104.78,-3104.77 -1714.71,0 -3104.77,1390.06 -3104.77,3104.77 0,740.3 259.26,1419.97 691.72,1953.51 483.42,-824.37 1378.7,-1378.01 2403.41,-1378.01zm0.14 -2781.66c724.31,0 1311.48,587.16 1311.48,1311.48 0,724.31 -587.16,1311.48 -1311.48,1311.48 -724.31,0 -1311.48,-587.16 -1311.48,-1311.48 0,-724.31 587.16,-1311.48 1311.48,-1311.48z"/>
 </g>
</svg>
`

const AbrevTaref = {
  'A':['Arte',IconArt],
  'O':['Compra',IconCompra],
  'I':['Impressão',IconPrint],
  'R':['Revelação',IconSEMicon],
  'E':['Estampa',IconSEMicon],
  'U':['Uber',IconFret],
  'C':['Corte',IconCorte],
  'S':['Soldagem',IconSolda],
  'M':['Acabamento',IconCbmt],
  'L':['Aplicação',iconAplic],
  'T':['Instalação',IconSEMicon],
  'K':['Finalizado',IconInstal]
}




const ConstFigs = [
  `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Creator: CorelDRAW 2020 (64 Bit) -->
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="60.2451mm" height="16.8393mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
viewBox="0 0 1446.43 404.29"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
 <defs>
  <style type="text/css">
   <![CDATA[
    .fil0 {fill:#FEFEFE}
    .fil1 {fill:black}
    .fil2 {fill:red}
    .fil3 {fill:white}
    .fil4 {fill:#009933;fill-rule:nonzero}
   ]]>
  </style>
 </defs>
 <g id="Camada_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <g id="_2134743690928">
   <path class="fil0" d="M501.12 346.18c-3.91,17.08 -9.18,38.39 -21.1,48.01 -8.8,7.1 -19.89,8.69 -30.83,9.26 -15.34,0.8 -31.32,0.15 -46.73,0.15 -27.91,-0.01 -51.12,-24.28 -44.13,-52.37l1.17 -4.69 -17.4 -0.09c-26.39,-0.14 -43.42,-18.57 -44.97,-41.66l-210.17 -0.79c-20.18,-0.08 -41.44,-4.26 -58.67,-15.21 -14.42,-9.16 -25.65,-23.08 -27.87,-40.41 -3.5,-27.28 16.05,-48.55 38.21,-61.04 14.78,-8.33 28.56,-12.39 45.52,-12.32 7.39,0.03 14.73,0.74 22.11,1.14l50.12 -146.37c6.32,-18.46 23.98,-29.55 43.15,-29.55 20.5,0 40.98,-0.33 61.49,-0.17 21.65,0.17 46.43,0.26 67.74,3.79 32.44,5.37 66.86,20.99 81.42,51.23 23.73,-5.91 49.93,-7.65 73.5,-4.18 5.87,0.86 11.7,2.03 17.47,3.43 6.79,0.56 17.6,-0.63 24.4,-0.88 4.12,-0.15 8.91,-0.31 13.74,-0.21 0.53,-1.88 1.17,-3.73 1.93,-5.55 17.88,-43.24 89.17,-56.09 125.67,-30.04 12.26,8.75 20.31,21.28 22.22,35.29 16.41,-0.49 32.23,-0.49 45.77,8.74 8.48,-4.78 16.29,-8.4 27.67,-8.4l53.55 0c4.66,0 9.27,0.65 13.69,1.94 8.32,-13.32 22.64,-24.68 34.94,-30.93 16.84,-8.56 32.44,-11.62 51.2,-9.97 8.32,0.73 16.54,2.26 24.83,3.31 12.95,-7.88 26.25,-6.52 41.72,-6.52 12.65,0 24.46,4.72 32.96,13.24 61.39,-32.73 141.94,-19.21 184.86,37.68 14.69,19.47 23.12,42.34 24.4,66.72 1.34,25.52 -6,50.12 -19.56,71.05 20.88,-4.51 42.21,-3.2 65.28,-3.28l68.17 -0.24c29.17,-0.56 60.58,1.11 83.94,20.95 24.75,21.03 27.96,51.43 20.13,81.24 -3.3,12.54 -5.75,25.15 -10.16,37.4 -13.31,36.95 -50.18,63.51 -88.9,67.22 -8.99,0.86 -18.47,0.91 -27.51,1 -12.36,0.12 -24.74,0.06 -37.1,-0.01 -17.98,-0.1 -36.1,-0.4 -54.07,-0.01 -24.82,0.54 -51.37,-0.1 -73.42,-12.16 -19.66,14.45 -43.53,11.81 -68.1,11.83 -10.52,0.01 -21.04,-1.71 -30.37,-6.34 -23.38,9.83 -42.95,6.28 -68.99,6.28 -25.51,0 -50.63,2.03 -73.55,-9.31 -26.19,17.13 -65.3,10.55 -89.72,-9.28 -24.15,19.52 -52.22,18.6 -84.03,18.6 -9.61,0 -19,0.23 -28.59,-0.8 -36.99,-3.95 -65.23,-25.46 -70.73,-59.95 -23.39,3.41 -49.77,3.63 -71.86,3.74 -21.48,0.11 -42.95,-0.39 -64.41,-0.48z"/>
   <path class="fil1" d="M651.03 325.62c-38.75,9.45 -116.88,5.91 -161.38,6.09 -15.84,63.45 -9.81,57.44 -87.18,57.42 -19.91,-0.01 -34.51,-16.71 -30.1,-34.42l5.61 -22.54 -35.79 -0.19c-23.48,-0.12 -35.09,-19.91 -29.2,-41.6l-225.97 -0.85c-72.04,-0.32 -98.88,-57.14 -41.29,-89.61 28.55,-16.09 44.02,-8.72 70.78,-9.08l53.55 -156.39c4.09,-11.96 15.75,-19.78 29.48,-19.78 32.85,0 96.93,-1.53 126.87,3.42 33.23,5.5 67.07,22.27 74.78,54.61 24.46,-8.12 54.22,-11.37 80.4,-7.52 5.77,0.85 11.49,2.02 17.14,3.41 9.27,1.03 41.58,-2.98 53.19,0.62 -2.63,-43.62 70.99,-65.22 106.57,-39.82 13.29,9.49 19.08,23.8 15.6,38.33 26.67,0 45.12,-4.16 59.04,11.59 10.42,-5.83 17.94,-11.59 29.43,-11.59l53.55 0c8.21,0 15.68,2.81 21.23,7.6 1.42,-15.1 20.5,-31.33 33.94,-38.16 29.35,-14.91 47.85,-7.02 73.32,-4.57 10.72,-8.85 22.98,-7.04 37.87,-7.04 13.14,0 24.06,6.98 28.84,18.06 81.99,-54.57 194.24,-3.53 198.93,85.89 1.75,33.25 -13.12,65.26 -39.72,88.06 3.33,2.04 6.34,4.63 8.91,7.86 28.59,-17.61 58.49,-14.54 91.03,-14.46l68.39 -0.25c25.71,-0.49 54.35,0.56 74.3,17.51 20.72,17.6 21.7,42.96 15.51,66.54 -3.17,12.06 -5.53,24.38 -9.78,36.18 -10.85,30.14 -41.8,54.39 -76.67,57.73 -20.9,2 -87.47,0.27 -117.61,0.92 -25.53,0.55 -54.21,0.1 -74.56,-15.93 -17.15,19.5 -42.82,15.57 -66.65,15.6 -10.97,0.01 -21.43,-2.17 -29.51,-8.28 -23.24,12.31 -40.87,8.22 -69.84,8.22 -25.65,0 -52.99,2.77 -74.87,-12.37 -21.68,22.18 -68.27,13.99 -88.2,-12.07 -23.34,26.99 -53.9,24.44 -84.23,24.44 -9.18,0 -17.85,0.27 -27.05,-0.72 -37.69,-4.03 -60.87,-27.33 -58.63,-62.87z"/>
   <path class="fil2" d="M1222.64 239.77c-24.73,2.72 -44.28,20.11 -50.53,38.8 -3.55,10.6 -6.17,23 -9.07,34.01 -15.14,57.56 40.43,48.45 82.03,48.45 17.51,0 81.99,0.77 93.9,-0.38 24.2,-2.32 44.01,-20.31 50.56,-38.5 3.56,-9.87 6.33,-23.45 9.09,-33.96 15.3,-58.18 -41.99,-48.83 -82.77,-48.83 -16.27,0 -82.85,-0.73 -93.22,0.41zm-240.17 -186.03c-34,45.28 -75.61,2.47 -96.85,23.95l-17.4 0c32.14,-44.4 76.98,-1.01 96.85,-23.95l17.39 0zm5.33 42.17c-6.21,15.63 -28.7,67.89 -30.41,83.54l-53.59 7.72 -1.57 -8.28c-57.27,20.22 -112.66,0.85 -96.98,-38.6 14.49,-36.47 75.44,-53.47 117.52,-47.28 5.61,0.82 11.63,2.11 18.12,3.86l46.92 -0.96zm-63.29 22.11c-37.61,-13.47 -79.04,21.24 -61.26,39.56 13.72,14.12 43.72,2.05 45.4,0.33l15.85 -39.89zm139.78 -15.96l7.5 0 0 68.5 -7.5 0 0 -68.5zm23.77 26.83l11.26 0c0,-19.05 -1.11,-9.06 -3.76,-19.41l-7.51 0 0 19.41zm-83.2 -4.56c0,-21.59 2.39,-37.28 21.89,-49.1 36.68,-22.22 80.43,-20.49 116.79,-0.39 39.53,21.84 19.68,103.76 -6.32,122.32 -24.26,17.32 -75.8,18.22 -102.25,0.16 -19.05,-13.01 -30.11,-49.17 -30.11,-72.99zm84.13 -74.78c47.72,0 89.27,38.48 90.4,81.33 1.31,49.42 -38.89,88.78 -96.34,88.78 -92.44,0 -130.84,-119.13 -37.54,-162.12 13.93,-6.42 26.57,-7.97 43.47,-7.99zm-0.93 89.62l0 31.39 -6.88 0 0 -68.5c21.57,0 17.2,-1.71 21.9,6.85 0.94,1.71 3.75,5.95 3.75,7.99l0 53.66 -7.5 0c0,-38.91 3.06,-33.11 -9.39,-33.11 -1.44,0 -1.88,0.4 -1.88,1.71zm20.65 -35.39c0,-1.31 0.44,-1.71 1.88,-1.71 25.89,0 21.9,-2 21.9,7.42l-8.13 0 0 61.08 -7.51 0 0 -59.36c0,-2.44 -2.4,-1.71 -8.13,-1.71l0 -5.71zm-63.18 7.42c0,23.64 -2.84,19.41 11.88,19.41l0 7.42 -11.88 0 0 32.54 -6.88 0 0 -68.5 21.9 0 0 7.42c-8.84,0 -15.01,-1.23 -15.01,1.71zm-25.65 1.14c0,22.52 6.8,56.04 17.49,75.37 10.6,19.16 88.8,17.12 97.1,0.65 12.88,-28.76 16.16,-54.05 16.16,-85.73 0,-17.01 -7.71,-20.9 -20.19,-25.53 -23.4,-8.67 -69.28,-6.98 -92.33,0.49 -19.03,6.17 -18.23,14.05 -18.23,34.75zm134.38 141.51c2.61,-9.96 2.69,-14.43 -9.74,-14.53 -48.82,-0.4 -41.67,-3.1 -49.93,28.04 -6.95,26.2 -13.59,52.79 -20.96,78.83 -3.03,10.68 -3.84,14.93 9.72,14.91 21.22,-0.02 40.31,3.33 44.69,-8.61l26.21 -98.64zm-98.42 87.98c-6.16,-4.3 -40.86,-2.41 -51.06,-2.45 -17.86,-0.07 -32.42,0.73 -29.78,-19.35 2.17,-16.47 21.31,-67.62 17.93,-78.92 -6.19,-2.57 -34.91,-2.6 -44.25,-1.6 -12.52,1.35 -13.24,16.8 -16.05,27.6 -3.68,14.18 -17.37,57.56 -15.19,69.92 5.01,28.34 36.29,24.01 66.59,24.01 10.41,0 37.41,1.12 45.85,-0.74 4.28,-0.95 25.28,-11.67 25.96,-18.47zm-256.88 -3.5c-14.58,-0.37 -30.89,0.72 -45.08,-0.17 -13.21,-0.83 -19.44,-10.92 -16.77,-23.85 12.44,-60.14 22.69,-52.1 75.28,-52.1 16.23,0 28.53,-2.52 36.04,7.79 10.56,14.49 -10.58,45.81 -7.7,65.15 3.42,23.99 30.42,28.74 41.94,25.15 5.5,-1.72 5.34,-7.14 7.09,-13.6 5.58,-20.74 13.68,-46.78 17.43,-67.45 2.5,-13.79 -2.34,-26.33 -10.09,-32.53 -9.48,-7.6 -21.79,-7.34 -37.11,-7.33 -30.51,0 -61.02,0 -91.53,0 -15.58,0 -28.43,-1.04 -41.66,4.32 -25.52,10.35 -31.63,30.35 -36.89,49.78 -2.54,9.36 -7.57,24.78 -8.02,33.87 -1.86,36.98 35.18,33.69 54.85,33.69 12.59,0 32.04,1.24 42.75,-2.47 4.49,-1.56 25.29,-12.55 19.48,-20.24zm541.95 -52.18c-1.51,7.66 -7.95,31.4 -11.17,37.15 -7.6,13.59 -21.17,14.95 -34.61,14.92 -17.1,-0.03 -34.21,-0.04 -51.3,0.01 -16.78,0.05 -28.17,-6.76 -24.83,-23.59 1.39,-7.03 8.11,-31.44 10.94,-36.76 5.86,-11 16.89,-15.75 34.68,-15.69 17.09,0.05 34.18,-0.01 51.27,-0.02 17.06,-0.01 28.3,7.41 25.03,23.98z"/>
   <path class="fil3" d="M422.28 280.09c-28.43,-0.61 -81.67,-6.73 -79.93,23.7l74.25 0.39 -14.12 56.76 48.19 0.02 14.23 -57.01c43.97,-1.47 141.75,3.15 177.69,-5.45 26.11,-6.24 37.29,-19.01 44.94,-42.55 10.52,-32.33 20.84,-46.44 -9.68,-56.93 -19.29,-1.22 -55.38,-1.52 -74.53,-0.25 -7.24,0.48 -8.81,1.54 -10.54,7.52 -9.97,34.51 -6.29,66.04 -46.51,72.29 -4.06,0.63 -64.27,3.88 -69.88,0.18 18.01,-18.54 59.57,-1.05 79.33,-14.99 10.93,-7.71 10.6,-15.54 14.77,-29.92 2.8,-9.64 8.3,-25.24 9.47,-34.49 -10.96,-2.24 -74.32,-1.1 -88.81,-0.39 -24.69,3.77 -38.35,13.39 -48.72,27.13 -14.53,19.26 -12.27,31.07 -20.14,53.98zm161.23 -216.65c8.71,-21.93 68.62,-22.08 59.84,0 -8.98,22.61 -68.48,21.72 -59.84,0zm22.71 119.57l76.85 -42.92 -38.6 -44.18 63.64 0 18.02 20.39 36.42 -20.39 53.55 0 -72.55 40.78 40.78 46.32 -64.18 0 -19.42 -22.53 -40.42 22.53 -54.09 0zm-12.52 0l-55.21 0 34.62 -87.1 56.87 -4.16 -36.27 91.26z"/>
   <path class="fil4" d="M541.7 95.91c-6.21,15.63 -28.71,67.89 -30.41,83.54l-53.59 7.72 -1.58 -8.28c-57.27,20.22 -112.66,0.85 -96.98,-38.6 14.49,-36.47 75.45,-53.47 117.52,-47.28 5.61,0.82 11.63,2.11 18.12,3.86l46.92 -0.96zm-63.29 22.11c-37.61,-13.47 -79.04,21.24 -61.25,39.56 13.72,14.12 43.71,2.05 45.4,0.33l15.85 -39.89zm-338.07 97.67l59.18 -172.83c30.95,0 95.38,-1.33 121.36,2.97 72.05,11.92 61.75,66.55 5.13,91.5 -26.04,11.48 -63.56,17.07 -98.47,15.14l-21.65 63.23 -65.56 0zm122.79 -141.1l-8.92 0 -15.8 46.14c25.11,0 62.88,-0.13 70.84,-23.35 7.18,-20.95 -23.33,-22.78 -46.12,-22.78z"/>
   <path class="fil4" d="M99.16 232.3c-1.98,-1.9 -4.16,-3.31 -6.56,-4.24 -2.41,-0.92 -5.12,-1.38 -8.13,-1.38 -5.22,0 -9.94,1.25 -14.17,3.75 -4.24,2.5 -7.07,5.71 -8.5,9.62 -1.43,3.92 -0.95,7.09 1.46,9.51 2.4,2.43 6.24,3.64 11.53,3.64 3.13,0 6.4,-0.45 9.84,-1.36 3.44,-0.91 7.03,-2.26 10.78,-4.08l-5.09 11.36c-3.1,1.24 -6.32,2.18 -9.69,2.83 -3.38,0.66 -6.75,0.98 -10.13,0.98 -3.63,0 -6.97,-0.39 -10.02,-1.18 -3.04,-0.79 -5.69,-1.95 -7.94,-3.48 -3.19,-2.17 -5.27,-4.8 -6.24,-7.93 -0.97,-3.11 -0.79,-6.51 0.55,-10.19 1.16,-3.17 3.03,-6.14 5.6,-8.91 2.58,-2.77 5.75,-5.22 9.5,-7.35 3.78,-2.12 7.85,-3.75 12.22,-4.89 4.35,-1.13 8.71,-1.69 13.08,-1.69 3.47,0 6.65,0.33 9.56,1.01 2.91,0.66 5.55,1.68 7.91,3.04l-5.57 10.94zm12.32 29.24l-13.34 0 15.39 -42.11 13.8 -1.27 -7.51 20.54c2.43,-1.51 4.84,-2.63 7.26,-3.36 2.4,-0.73 4.87,-1.11 7.37,-1.11 4.06,0 6.84,0.8 8.34,2.42 1.52,1.61 1.71,3.96 0.57,7.06l-6.52 17.83 -13.25 0 5.57 -15.23c0.51,-1.4 0.48,-2.45 -0.09,-3.15 -0.55,-0.72 -1.64,-1.07 -3.27,-1.07 -2.31,0 -4.3,0.55 -5.94,1.62 -1.65,1.09 -2.85,2.66 -3.6,4.72l-4.79 13.11zm67.07 -19.84c-0.68,-0.31 -1.36,-0.54 -2.04,-0.67 -0.67,-0.14 -1.36,-0.21 -2.07,-0.21 -2.53,0 -4.93,0.73 -7.2,2.21 -2.26,1.46 -3.81,3.31 -4.62,5.54 -0.76,2.09 -0.64,3.83 0.37,5.22 1.02,1.39 2.61,2.08 4.8,2.08 0.87,0 1.83,-0.16 2.88,-0.48 1.05,-0.33 2.19,-0.82 3.43,-1.5l4.45 -12.17zm15.8 -6.74l-6.07 16.61c-0.76,2.08 -1.35,3.84 -1.75,5.26 -0.4,1.41 -0.68,2.62 -0.82,3.62l-13.23 2.36 -0.27 -2.53c-1.98,0.86 -3.86,1.5 -5.63,1.91 -1.75,0.41 -3.51,0.61 -5.27,0.61 -4.96,0 -8.61,-1.37 -10.97,-4.1 -2.37,-2.74 -2.81,-6.14 -1.33,-10.21 1.57,-4.29 4.76,-7.83 9.55,-10.62 4.8,-2.79 10.09,-4.19 15.86,-4.19 1.32,0 2.67,0.13 4.03,0.38 1.36,0.25 2.82,0.65 4.38,1.18l11.5 -0.29zm39.04 26.58l-13.34 0 5.57 -15.23c0.49,-1.36 0.45,-2.4 -0.11,-3.13 -0.58,-0.73 -1.62,-1.09 -3.15,-1.09 -2.19,0 -4.1,0.55 -5.73,1.65 -1.64,1.11 -2.82,2.67 -3.56,4.69l-4.79 13.11 -13.34 0 9.71 -26.58 12.41 0 -1.63 4.45c2.87,-1.8 5.55,-3.12 8.01,-3.94 2.47,-0.83 4.99,-1.24 7.54,-1.24 2.8,0 4.98,0.4 6.52,1.21 1.52,0.8 2.61,2.08 3.25,3.85 2.49,-1.68 5,-2.95 7.53,-3.8 2.54,-0.84 5.11,-1.26 7.73,-1.26 4.26,0 7.1,0.82 8.52,2.49 1.41,1.66 1.49,4.23 0.23,7.7l-6.26 17.12 -13.34 0 5.57 -15.23c0.49,-1.36 0.45,-2.4 -0.11,-3.13 -0.58,-0.73 -1.62,-1.09 -3.15,-1.09 -2.22,0 -4.13,0.55 -5.75,1.65 -1.63,1.11 -2.81,2.67 -3.55,4.69l-4.79 13.11zm66.87 -19.84c-0.68,-0.31 -1.36,-0.54 -2.04,-0.67 -0.67,-0.14 -1.36,-0.21 -2.07,-0.21 -2.53,0 -4.93,0.73 -7.2,2.21 -2.26,1.46 -3.81,3.31 -4.62,5.54 -0.76,2.09 -0.64,3.83 0.37,5.22 1.02,1.39 2.61,2.08 4.8,2.08 0.87,0 1.83,-0.16 2.88,-0.48 1.05,-0.33 2.19,-0.82 3.42,-1.5l4.45 -12.17zm15.81 -6.74l-6.07 16.61c-0.76,2.08 -1.35,3.84 -1.75,5.26 -0.4,1.41 -0.68,2.62 -0.82,3.62l-13.23 2.36 -0.27 -2.53c-1.98,0.86 -3.86,1.5 -5.63,1.91 -1.75,0.41 -3.51,0.61 -5.27,0.61 -4.96,0 -8.61,-1.37 -10.97,-4.1 -2.37,-2.74 -2.81,-6.14 -1.33,-10.21 1.57,-4.29 4.76,-7.83 9.55,-10.62 4.8,-2.79 10.09,-4.19 15.86,-4.19 1.32,0 2.67,0.13 4.03,0.38 1.36,0.25 2.82,0.65 4.38,1.18l11.5 -0.29zm32.42 6.74c-0.68,-0.31 -1.35,-0.54 -2.03,-0.67 -0.67,-0.14 -1.36,-0.21 -2.07,-0.21 -2.53,0 -4.93,0.73 -7.2,2.21 -2.26,1.46 -3.81,3.31 -4.62,5.54 -0.76,2.09 -0.64,3.83 0.37,5.22 1.02,1.39 2.61,2.08 4.8,2.08 0.84,0 1.79,-0.12 2.79,-0.37 1.02,-0.24 2.13,-0.62 3.34,-1.14l4.62 -12.65zm21.94 -23.54l-15.85 43.38 -12.15 1.27 0.24 -2.06c-2.13,0.7 -4.17,1.23 -6.11,1.56 -1.95,0.33 -3.86,0.5 -5.74,0.5 -5.36,0 -9.11,-1.23 -11.22,-3.68 -2.11,-2.46 -2.38,-5.86 -0.79,-10.21 1.67,-4.56 4.78,-8.22 9.32,-10.97 4.55,-2.75 9.74,-4.13 15.56,-4.13 1.36,0 2.64,0.09 3.82,0.28 1.19,0.18 2.32,0.47 3.43,0.87l5.68 -15.53 13.8 -1.27zm26.29 23.54c-0.68,-0.31 -1.36,-0.54 -2.04,-0.67 -0.67,-0.14 -1.36,-0.21 -2.07,-0.21 -2.53,0 -4.93,0.73 -7.2,2.21 -2.26,1.46 -3.81,3.31 -4.62,5.54 -0.76,2.09 -0.64,3.83 0.37,5.22 1.02,1.39 2.61,2.08 4.8,2.08 0.87,0 1.83,-0.16 2.88,-0.48 1.05,-0.33 2.19,-0.82 3.43,-1.5l4.45 -12.17zm15.81 -6.74l-6.07 16.61c-0.76,2.08 -1.35,3.84 -1.75,5.26 -0.4,1.41 -0.68,2.62 -0.82,3.62l-13.23 2.36 -0.27 -2.53c-1.98,0.86 -3.86,1.5 -5.63,1.91 -1.75,0.41 -3.51,0.61 -5.27,0.61 -4.96,0 -8.61,-1.37 -10.97,-4.1 -2.37,-2.74 -2.81,-6.14 -1.33,-10.21 1.57,-4.29 4.76,-7.83 9.55,-10.62 4.8,-2.79 10.09,-4.19 15.86,-4.19 1.32,0 2.67,0.13 4.03,0.38 1.36,0.25 2.82,0.65 4.38,1.18l11.5 -0.29z"/>
  </g>
 </g>
</svg>
  `,
  `<?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <!-- Creator: CorelDRAW 2020 (64 Bit) -->
  <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="59.0668mm" height="16.0596mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
  viewBox="0 0 2356.19 640.62"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
  <defs>
    <style type="text/css">
    <![CDATA[
      .fil1 {fill:black}
      .fil2 {fill:#FFCC00}
      .fil0 {fill:white}
    ]]>
    </style>
  </defs>
  <g id="Camada_x0020_1">
    <metadata id="CorelCorpID_0Corel-Layer"/>
    <path class="fil0" d="M1589.3 97.42c4.5,-4.22 9.29,-8.05 14.6,-11.47 26.47,-17.07 58.29,-18.88 88.71,-14.47 30.59,4.44 59.92,22.28 77.02,47.74 13.19,-20.95 27.85,-41.53 50.55,-52.3 23.02,-10.93 46.05,-15.12 71.14,-9.78 10.69,2.27 25.37,8.88 35.05,9.8 1.41,0.14 2.67,0.1 4.01,-0.24l21.46 -7.71 0.45 -0.14c43.38,-13.83 97.25,-26.79 142.99,-18.54 12.72,2.29 24.19,6.13 35.89,11.51 2.76,1.27 8.92,4.59 12.38,5.71 9.15,-3.32 17.76,-7.89 27.15,-11.1 10.44,-3.57 23.76,-9.42 34.48,-11.14 13.19,-2.11 35.14,0.55 48.83,1.06l7.51 0.28 6.23 4.19c23.92,16.1 55,24.81 70.98,50.68 28.03,45.4 -4.15,105.57 -36.39,139.66 -9.9,10.48 -20.79,18.68 -32.9,24.36 22.16,14.26 39.04,34.49 43.86,62.04 9.72,55.58 -35.19,113.5 -76.3,146.31 -0.63,0.51 -1.27,1 -1.91,1.48 20.46,8.98 50.1,17.9 60.43,21.66 28.7,10.42 58.99,32.97 60.62,66.17 1.16,23.65 -13.19,42.59 -32.05,55.17 -26.66,17.78 -63.14,11.74 -93.1,8.41 -45.84,-5.1 -93.65,-2.48 -139.03,-10.09l-283.05 -18.66 -1.2 -0.2c-10.89,-1.74 -23.46,-2.25 -34.51,-2.96 -22.3,-1.44 -44.65,-2.56 -66.98,-3.59 -61.74,-2.87 -123.56,-5.03 -185.34,-6.85 -55.89,-1.64 -111.81,-3 -167.72,-3.66 -35.55,-0.42 -73.27,-1.36 -108.73,0.83 -19.65,1.21 -38.69,1.38 -58.39,0.61 -46.88,-1.84 -95.86,-0 -142.81,1.26 -43.8,1.18 -87.59,2.72 -131.39,4.14 -71.22,2.31 -144.95,10.76 -215.72,19.2 -69.28,8.27 -138.91,17.55 -207.75,28.9 -40.44,6.67 -89.98,17.47 -130.56,14.39 -46.45,-3.53 -140.34,-55.97 -176.83,-87.91 -8.31,-5.42 -21.35,-10.34 -30.25,-14.2 -16.97,-7.36 -33.65,-15.11 -49.07,-25.4 -13.41,-8.96 -25.51,-19.63 -35.06,-32.69 -23.11,-31.6 -30.89,-67.26 -28.49,-105.81 0.83,-13.39 2.87,-26.4 5.05,-39.62 0.59,-3.6 2,-10.78 2.33,-15.77 -4.94,-5.17 -14.74,-12.64 -19.26,-17.13 -14.4,-14.28 -24.23,-30.79 -25.78,-51.43 -2.13,-28.47 3.38,-55.74 18.93,-79.92 24.58,-38.21 68.5,-59.91 109.77,-75.25 71.96,-26.75 175.8,-15.25 234.41,36.52 6.25,5.51 11.34,8.73 15.52,12.76 0.75,-0.14 1.5,-0.3 2.25,-0.46 19.93,-4.43 43.89,-17.6 63.52,-25.17 40.53,-15.62 80.96,-22.55 124.33,-24.23 4.53,-0.18 10.19,-1.83 14.58,-2.96 9.03,-2.33 17.74,-4.41 27.07,-5.24 29.9,-2.65 55.56,8.24 79,26.16 3.65,2.79 6.96,5.54 9.96,8.28 0.22,-1.56 0.47,-3.12 0.79,-4.7 3.18,-15.69 11.11,-27.63 22.83,-38.33 23.76,-21.68 68.57,-22.75 98.27,-14.48 18.33,5.1 31.16,12.05 45.03,24.91 1.58,1.46 3.11,2.92 4.66,4.35 8.31,-4.68 18.38,-11.82 23.28,-14.82 25.09,-15.37 49.8,-24.48 79.11,-28.33 38.92,-5.11 114.32,26.6 134.1,61.44 7.13,12.57 10.43,26.38 10.73,40.48 15.41,-8.44 34.19,-15.96 50.21,-21.06 -1.22,-11.09 -1.03,-20.93 2.04,-32.35 10.91,-40.66 45.88,-71.1 81.68,-90.54 0.88,-0.47 1.76,-0.95 2.64,-1.4 0.26,-0.19 0.51,-0.38 0.78,-0.57l7.3 -5.2 53.31 1.95 9.87 5.62c39.27,22.38 57.15,43.22 57.75,89.58 0.01,0.34 0.01,0.74 0.02,1.17 2.68,1.01 5.4,1.99 8.13,3.37 5.35,2.7 10.18,5.98 14.61,9.78 0.66,-0.94 1.35,-1.86 2.07,-2.78 21.32,-26.97 56.64,-42.95 90.57,-45.12 34.48,-2.2 66.58,9.51 89.73,33.84z"/>
    <path class="fil1" d="M2253.03 62.68c-54.27,-1.99 -33.43,-5.15 -73.83,8.68 -11.01,3.73 -18.02,7.93 -28.23,11.49 -29.6,10.32 -37.16,-47.88 -190.68,1.09l-21.85 7.85c-30.93,9.33 -52.07,-27.13 -106.97,-1.07 -23.1,10.96 -38.81,42.02 -52.94,63.94 -12.36,19.18 -8.74,15.41 -20.02,15.83 1.53,-36.05 -31.78,-67.45 -69.68,-72.95 -74.38,-10.78 -86.63,30.17 -101.39,39.02 -6.24,-5.7 -3.62,-3.25 -8.73,-10.58 -38.88,-55.77 -118,-40.24 -149.05,-0.96 -12.17,15.39 -10.35,41.65 -23.44,54.05 0.67,-15.77 1.71,-26.85 -9.02,-39.95 -22.31,-27.22 -38.92,-8.06 -39.36,-41.63 -0.44,-33.93 -10.32,-47.68 -44.46,-67.04l-4.26 -2.43 -37.89 -1.39c-3.74,2.66 -0.42,0.57 -6.14,3.67 -30.26,16.43 -60.13,41.84 -68.81,74.22 -4.87,18.16 1.39,29.29 0.71,45.35 -17.92,3.04 -74.96,23.97 -83.93,37.27 -26.89,39.89 16.64,43.76 -10.26,92.29 -13.09,23.62 -20.87,6.64 -34.2,50.07 -25.82,-28.64 -31.51,-53.39 -114.92,-56.44 6.23,-45.74 52.31,12.47 107.5,-46.49 24.44,-26.14 41.54,-71.64 23.77,-102.95 -10.93,-19.26 -72.42,-52.97 -107.76,-48.33 -62.53,8.21 -84.14,41.9 -110.27,47.1 -19.27,-12.52 -21.61,-25.4 -52.3,-33.95 -27.19,-7.57 -60.14,-3.59 -73.45,8.56 -22.81,20.8 -11.55,34.2 -20.73,63.05 -4.64,14.56 -13.21,55.77 -19.98,63.77 2.13,-50.04 5.83,-65.8 -26.62,-90.6 -49.5,-37.84 -77.77,-13.57 -103.64,-12.57 -124.64,4.83 -151.98,52.87 -205.65,50.9 -2.94,-11.54 -9.51,-12.51 -18.42,-20.38 -51.28,-45.29 -145.05,-54.9 -207.8,-31.57 -65.62,24.39 -116.87,58.38 -111.61,128.52 2.6,34.76 42.76,48.01 44.9,63.79 3.28,24.26 -27.76,92.21 16.25,152.39 28.23,38.6 86.12,50.84 109.31,66.98 28.08,25.21 120.03,79.27 162.64,82.51 34.96,2.66 87.67,-8.08 124.28,-14.12 110.45,-18.21 319.59,-44.96 426.91,-48.44 70.08,-2.27 216.83,-7.71 276.08,-5.39 22.88,0.9 37.75,0.54 55.74,-0.57 88.68,-5.46 522.85,9.15 569.04,16.52l283.18 18.67c38.85,6.7 95.94,5.33 138.86,10.1 22.16,2.47 56.77,8.4 75.57,-4.15 38.29,-25.53 18.1,-59.76 -22.95,-74.67 -23.17,-8.42 -89.47,-25.87 -95.33,-48.88 7.09,-7.95 18.82,-11.17 29.38,-19.59 55.97,-44.67 109.9,-132.83 18.92,-174.09 -22.79,-10.3 -31.38,-8.48 -60.37,-9.54 3.32,-49.15 53.28,7.14 104.08,-46.59 23.31,-24.65 53.68,-74.43 33.12,-107.73 -10.71,-17.34 -44.3,-29.9 -63.28,-42.67zm-953.16 183.16c40.88,-17.41 70.19,-18.27 102.12,-48.48 3.69,17.01 -0.16,25.69 -5,43.08l-14.62 91.28c-0.67,15.62 0.9,35.57 -5.29,46 -20.66,-14.65 14.13,-22.57 -32.71,-61.91 -19.73,-16.58 5.76,-26.95 -22.71,-52.37 -13.56,-12.11 -12.8,-4.59 -21.79,-17.6z"/>
    <path class="fil2" d="M1646.1 461.33c-13.5,-0.49 -28.1,-12.74 -33.66,-19.67 -11.24,-14.04 -5,-18.44 -33.44,-19.86 -17.3,-0.86 -38.44,-0 -55.22,-2.03 -17.36,-2.1 -32.33,-11.31 -33.88,9.69 -4.02,54.43 -64.88,39.11 -84.98,5.3 -5.69,-9.58 -7.96,-25.57 -22.26,-26.1 -94.04,-3.45 -55.51,-6.81 -121.77,29.54 -130.45,63.62 -145.99,-36.3 -174.62,-37.35l-72.48 0.41c-22.35,34.33 -95.08,76.39 -134.29,74.95 -29.79,-1.09 -62.04,-29.89 -69.09,-31.98 -46.91,-13.89 -13.23,8.32 -69.81,-28.43 -22.49,13.48 -36.23,53.95 -92.61,61.09 -62.88,7.96 -85.83,-49.2 -101.09,-49.76 -12.69,-0.47 -20.28,7.53 -31.66,14.19 -106.53,62.28 -133.83,10.46 -152.22,9.79 -18.45,1.3 -130.37,23.54 -143.07,37.76 3.9,15.3 42.82,31.97 59.3,40.03 35.22,17.24 59.11,39.34 115.56,26.28l500.69 -57.18 148.95 -3.36c27.63,1 44.74,-4.69 72.38,-3.7 12.49,0.45 25.71,1.48 38.12,1.6 17.03,0.17 17.34,-2.19 34.36,-2.01 52.94,0.53 531.71,7.6 584.5,16.7 51.42,8.87 109.63,0.17 162.31,8.57 47.7,7.61 112.08,4.32 161.74,12.01 8.86,1.38 24.63,5.41 35.25,6.53l116.96 4.44c-9.37,-7.86 -49.56,-14.25 -101.47,-46.78 -25.78,-16.16 -91.04,-24.8 -126.61,-26.11 -71,-2.6 -37.08,-3.95 -82.44,13.16 -49.26,17.82 -79.62,32.57 -123.99,-23.93 -4.71,-6 -4.6,-8.48 -14.84,-11.5 -26.52,-7.83 -42.4,-5.3 -61.86,1.66 -10.65,3.81 -11.84,2.09 -21.37,5 -30.52,9.29 1.13,13.69 -71.4,11.03z"/>
    <path class="fil0" d="M1774.81 355.44c-14.45,-0.53 -9.48,-0.41 6.86,-38.1 15.06,-34.75 9.85,-37.82 24.09,-40.65 3.77,7.75 4.47,57.2 3.89,70.81 -12.33,2.09 -24.49,8.32 -34.84,7.94zm-544.61 -256.56c-1.6,37.78 9.99,30.6 46.92,0.5 26.09,-21.27 20.49,-27.55 -0.18,-44.87 -14.68,6.25 -18.82,5.15 -28.29,17.44 -3.26,4.22 -18.29,23.17 -18.45,26.94zm-94.13 104.08c19.21,27.82 19.64,27.4 4.74,62.05 -21.05,48.95 -7.94,31.96 -26.28,41.73 -21.84,11.64 -6.73,21.68 -3.8,29.57 3.46,9.29 1.73,11.66 1.48,22.47 -0.99,43.17 36.26,76.7 75.54,77.62 39.35,0.92 119.23,-33.01 121.47,-85.74 1.59,-37.43 -81.62,45.09 -136.44,44.15 -7.62,-15.65 -4.3,-20.09 0.17,-41.33 4.18,-19.9 2.34,-20.62 18.01,-27.37 21.38,-9.19 68.37,-28.49 83.1,-41.26 -18.91,-24.96 -56.24,-8.59 -75.52,-8.92 19.22,-62.6 20.09,-64.1 78,-84.49 14.44,-5.09 68,-22.67 68.45,-33.03 0.53,-12.66 -18.64,-16.05 -30.35,-16.47 -37.92,-1.39 -140.67,45.05 -178.56,61.04zm-315.96 46.78c-1.5,35.26 3.35,52.8 33.03,79.4 40.72,36.5 57.35,16.09 90.52,17.3 25.66,0.94 -14.93,34.06 -21.9,39.57l-22.2 13.74c-19.29,10.97 -15.83,12.09 -41.45,11.15 -22.17,-0.81 -2.85,-31.41 -26,-37.82 -1.6,11.71 -22.85,38.81 7.04,62.3 42.59,33.48 88.47,11.63 124.81,-18.27 66.39,-54.63 72.85,-124.66 -60.86,-112.92 -43.07,3.78 -43.85,-1.4 -43.1,-19.18 1.1,-25.92 91.7,-110.89 118.76,-115.47 2.7,12.43 -1.07,27.62 12.61,28.12 14.1,0.51 35.93,-33.64 37.05,-60.09 0.35,-8.15 -11.6,-13.32 -32.49,-26.56 -48.33,-30.63 -172.74,65.56 -175.84,138.75zm-632.31 -60.07c15.92,-6.11 50.64,-18.14 67,-13.91 68.48,17.71 8.16,153.34 -10.36,183.44 -29.15,47.35 -88.42,91.59 -86.55,47.52l13 -112.01c3.87,-15.95 8.72,-26.55 12.88,-45.06 18.14,-80.52 5.65,-28.17 4.03,-59.98zm-102.9 66.89c20.45,-11.16 5.22,-18.86 32.05,-23.4 -2.18,51.37 -44.96,160.81 0.92,200.56 7.28,6.31 12.23,9.19 20.12,16.02 67.17,58.07 147.33,-46.15 171.06,-98.52 3.85,-8.5 6.92,-15.05 11.48,-24.05 68.27,-134.61 -62.22,-238.78 -205.38,-169.17 -73.84,35.9 -66.53,88.52 -30.25,98.57zm674.97 -131.93c-1.99,46.92 -55.84,193.17 -78.82,233.78 -12.49,22.06 -30.89,53.62 -54.12,53.22 -9.58,-44.1 -12.39,-33.22 -10,-89.47 3.56,-83.95 34.13,-144.65 11.44,-169.29 -9.23,-10.03 -16.57,-9.1 -31.45,-9.65 -14.01,-0.51 -7.74,9.71 -24.91,11.15 -35.75,3.01 -12.66,-24.46 -167.83,36.22l-41.19 17.78c0.92,18.09 16.03,28.7 15.92,31.31 -0.06,1.4 -18.89,63.84 -26.1,70.64 -13.04,12.31 -18.41,2.61 -19.27,22.94 -0.31,7.32 4.82,8.23 8.74,16.69 6.28,13.54 1.63,5.31 1.34,17.34 -0.31,12.77 2.93,31.55 10.21,41.07 41.57,54.36 89.57,50.46 144.43,16.57 32.14,-19.86 46.56,-29.43 48.09,-65.42 1.6,-37.71 -86.5,47.99 -140.01,47.09 -3.66,-16.85 -2.27,-51.11 1.75,-55.79l79.9 -44.35c10.42,-5.03 4.17,-4.52 16.05,-6.88 -1.89,-37.06 -72.19,-6.23 -71.56,-21.06 0.65,-15.29 7.59,-32.24 12.86,-45.09 6.51,-15.89 17.65,-17.8 34.83,-23.91 30.48,-10.85 66.09,-31.28 91.1,-30.36 -1.67,39.34 -25.64,124.9 -12.39,181.9 6.59,28.35 9.27,54.81 33.4,76.14 52.89,46.77 107.5,-4.86 133.5,-48.49l17.33 -31.2c18.39,13.03 0.37,58.39 59.54,60.56 4.54,-14.78 -4.95,-45.95 -3.37,-83.08 0.87,-20.45 1.76,-40.9 2.6,-61.36 0.97,-23.74 4.95,-38.52 6.05,-58.03 4.97,-88.05 12.9,-97.97 -47.64,-100.19l-0.39 9.2zm1285.28 120.9c-0.96,22.65 19.49,83.67 68.83,85.48l55.25 -1.05c-1.28,18.98 -10.17,21.88 -25.98,35.63 -12.69,11.01 -74.44,55.3 -81.42,8.32 -2.41,-16.25 3.56,-12.71 -7.46,-20.51 -2.94,9.59 -4.8,8.91 -8.54,17.31 -3.89,8.73 -2.23,11.27 -6.8,18.99 -14.11,-1.56 -7.57,-3.35 -20.54,-3.82 -28,-1.03 -31.52,17.56 -21.9,-40.27 7.93,-47.7 37.87,-129.97 44.4,-174.35l2.51 -13.55c8.49,-25.45 47.08,-7.04 48.07,-30.32 1.24,-29.22 0.22,-30.72 -43.48,-32.32 -25.22,-0.93 -124.81,14.07 -126.1,44.53l-0.65 15.34c59.23,2.17 59.33,-15.85 57.92,17.49 -0.59,13.77 0.13,-1.32 -4.4,8.53 -7.36,15.96 -18.27,66.95 -22.81,83.4 -16.18,58.69 -12.9,135.22 -17.73,142.49 -7.21,10.87 -1.3,3.79 -17.82,8.45 -9.81,2.76 -9.82,4.26 -20.26,6.02 -3.04,71.61 58.69,26.12 70.44,23.18 24.77,-6.2 7.9,4.95 31.27,-11.39l50.39 -18.5c21.39,2.96 32.18,52.36 129.83,-15.39 26.32,-18.27 81.67,-80.63 27.08,-104.81 -40.93,-18.13 -121.04,6.59 -120.05,-16.7 1.27,-29.97 -3.53,-7.12 10.86,-27.85 19.22,-27.68 87.6,-92.73 111.61,-93.62 3.14,6.44 -1.11,47.94 29.06,15.27 13.39,-14.49 23.22,-27.74 24.17,-50.19 0.45,-10.6 -4.99,-6.21 -20.71,-18.5 -20.78,-16.25 -25.22,-18.01 -58.65,-6.89 -24.87,8.27 -55.87,31.27 -76.07,48.04 -24.86,20.63 -59.01,70.87 -60.31,101.54zm-373.5 182.93l-6.89 -0.25c0.66,-15.55 -2.74,-16.84 -2.01,-33.87l36.55 -229.8c4.01,-30.04 -27.65,-37.17 -52.78,-38.1 -25.06,-0.92 -31.97,23.77 -47.23,53.48 -15.63,30.45 -36.89,92.77 -46.58,124.35 -30.66,-19.91 -11.29,-145.58 -28.15,-169.27 -16.45,-23.09 -60.84,-18.07 -71.72,5.98 -8.52,18.82 -23.32,110.04 -30.72,133.24 -7.38,23.14 -22.57,165.76 31.59,167.75 22.67,0.83 11.81,-34.4 12.42,-48.7 1.11,-26.22 5.07,-83.71 11.32,-104.05 20.42,22.66 12.66,67.43 45.78,89.64 63.07,42.3 66.81,-52.94 80.93,-85.68l15.96 -32.52c-2.32,54.69 -18.97,163.12 27.28,179.35 19.63,6.89 8.24,-2.99 25.8,-3.08 29.4,-0.15 7,4.8 36.58,-6.85 10.22,-4.02 13.65,-1.4 22.68,-6.89 7.64,-4.64 5.03,-6.88 15.75,-13.56l63.33 -25.19c22.63,32.78 1.63,19.77 21.57,53.31 20.44,34.39 69.73,49.5 58.6,20.54 -11.15,-29 -22.9,-41.28 -21.21,-80.91 0.45,-10.5 10.69,-9.74 21.19,-11.51l0.52 -12.27c-10.57,-2.61 -30.73,-7.58 -30.22,-19.55l3.65 -85.9c1.89,-44.42 17.06,-76.72 18.86,-119.13 0.65,-15.37 -28.71,-22.47 -44.36,-14.17 -25.78,13.68 -115.03,189.66 -136.17,239.34 -3.62,8.5 -4.88,21.27 -8.05,27.37 -7.91,15.23 -22.69,10.21 -24.25,46.89z"/>
  </g>
  </svg>
  `
]