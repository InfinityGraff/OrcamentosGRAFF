const //Fundos
  FormOrcamento = QrySlt('#FormOrcamento'),
  BtnInfo2 = QrySlt('#btnINFO2'),
  ModalInfo = QrySlt('#ModalInfo'),
  Prazo = QrySlt('#Prazo'),
  ModAlnotta = QrySlt("#ModalNota"),
  ResultFilTable = QrySlt('#resultfilter1'),
// Clientes
  GrupClnt = QrySlt('#Grupo-Cliente'),
  GrupClntSv = QrySlt('#GrupoClntSave'),
  GrupClntInfSv = QrySlt('#GrupoClntSaveInfo'),
  RestaNome = QrySlt('#RestaNome'),
  DivCnttForm = QrySlt('#Div-Inpt-Cntt'),
  I_Clnt = QrySlt('#Div-Inpt-Clnt input'),
  InnClnt = QrySlt('#Inner-Clnt'),
// Form
  I_Serv = QrySlt("#Div-Inpt-Serv select"),
  I_Tipo = QrySlt("#Div-Inpt-Tipo select"),
  I_Cbmt = QrySlt("#Div-Inpt-Cbmt select"),
  I_Gram = QrySlt('#Div-Inpt-Gram select'),
  I_QFix = QrySlt('#Div-Inpt-QFix select'),
  I_Etc = QrySlt("#Div-Inpt-Etc input"),
  I_Lcal = QrySlt("#Div-Inpt-Lcal input"),
  I_Qnt = QrySlt('#Div-Inpt-Qnt input')


  let ArryMdds=['#Div-Inpt-Larg input','#Div-Inpt-Alt input','#Div-Inpt-Qnt input']
//_________________________________________________________________________________________________________

// Declarações dos Arrays
let IDPdd = 'ID-001'
let ITitem = 'ID-001'
let ArryUni = ['','','','',''] // Art,Dsgn,Fret,Lcal,VlrFret
let ArryClnt = ['','','','','','','','','','','','','',''] // Clnt,Cntt
let ArryItem = []
let ArryPag = ['','',''] // //Form,Vlr,Data
let ArryPDD = {IDPdd:{'Clnt':ArryClnt,ITitem:ArryItem,'UNI':ArryUni,'Pag':ArryPag}}


let ObjItem = {}
let NewArryItem = ['Gato']
let IDs = []
let W400 = window.matchMedia("(max-width: 500px)")
//______________________

let LgTp = {'Nome':'','Cod':'','Img':''}
let Cadstr = []
let ObjInfo = {}

function SemLogin(){return LgTp.Cod===''}

// OnLoad's_________________________________________________________________________________________________________
document.addEventListener('DOMContentLoaded',()=>{
  AddInnSVG()
  LargPaiAbas()
  BloqueaData('#Prazo, #dataPagInfo')
  ReloadTab()
  LoadListServ()
  DefinePag(1)
  MediaQuere(W400)
  W400.addListener(MediaQuere)
  LoadRoloTop() // Template String
  
  
  QrySltAll('input[name="Cntt"]').forEach(I=>{I.addEventListener('input',e=>{MaskCntt(e)})})
  QrySltAll('#Grupo-Medidas input').forEach(e=>{e.setAttribute('inputmode','numeric')}) // campo Numerico
  document.addEventListener('click',e=>{ClickFora(e)}) // remover Coisas com Click Fora
  //window.addEventListener('resize', handleResize)
  window.addEventListener('scroll',()=>{ // Mostrar ou não Btn RoloTop
    if((window.scrollY || window.pageYOffset) >= 250){Show('#RoloTop')}else{setTimeout(()=>{None('#RoloTop')},100)}
  })
  document.addEventListener('input',()=>{handle();InptClnts();FilTable()})
  QrySltAll('select').forEach(e=>{e.addEventListener('change',e=>{ShowTipo();LoadCor();FilTable()})})
})
function ClickFora(e){
  const E = e.target
    if(!ArySltAll('.Bandeija, #InputdeCor, #ListaCor li').includes(E)){
      None('.Bandeija') // Todas Bandeijas
      QrySltAll('input[type="text"]').forEach(inpt=>Rad0(inpt))
      None('#ListaCor')
    }
}
function ReloadPlanClnt(){
  fetch(APIPlanClnt).then((response) => response.json())
    .then((data)=>{Cttlist=[] ; data.forEach((i)=>{Cttlist.push([
        i.IDClnt,i.Tag,i.Cliente,i.NomeCompleto,i.Apelido,i.Contato,i.Endereço,
        i.Loja,i.CnttLoja,i.Categoria,i.Veiculo,i.Stts,i.LinksPdds,i.Desc])})     
    }).catch((error)=>{console.error("Erro ao recuperar dados:",error)})
}
function BloqueaData(Stg){
  QrySltAll(Stg).forEach(i=>{i.min = new Date().toISOString().split('T')[0]})
}
function AddInnSVG(){
  InnerSVG('.Maisss > div:first-child',IconEscList)
  InnerSVG('.Maisss > div:last-child',IconMais)
  InnerSVG('#RoloTop', IconRoloTop)
  InnerSVG('#ClearCRUD', IconClean)
  InnerSVG('#ClearForm', IconClean)
  InnerSVG('#imgnotta', IconNota)
  InnerSVG('#imgnotta2', IconNota)
  InnerSVG('.Close', IconEscList)
  InnerSVG('.Seta', IconSetair)
  //InnerSVG(IconSetair)
  InnerSVG('.Prev',IconPrevProx)
  InnerSVG('.Prox',IconPrevProx)
  InnerSVG('.LgTp',IconLogin)
  InnerSVG('.LgTp2',IconLogin)
  
}
function MediaQuere(max){
  if(max.matches){
    QrySlt('header').classList.remove("Bt")
      QrySlt('#GrupLogin1').classList.remove('none')
      QrySlt('#GrupLogin2').classList.add('none')
    //ModAlnotta.classList.add("media80")
    //None('#trocatroca')
    QrySlt('#DivResult').classList.remove("Cl")
    TrocaPose('#DivResult',0)
  }else{
    QrySlt('header').classList.add("Bt")
      QrySlt('#GrupLogin1').classList.add('none')
      QrySlt('#GrupLogin2').classList.remove('none')
    //Show('#trocatroca')
    //ModAlnotta.classList.add("media80")
    QrySlt('#DivResult').classList.add("Cl")
    TrocaPose('#FormOrc',0)
  }
}
function LargPaiAbas(){
  QrySlt("#Pages").style.width = `${QrySlt('header').offsetWidth*5}px`
}
function DefinePag(aba){
  QrySlt('#Pages').style.transform = `translateX(${(-aba*(QrySlt('header').offsetWidth))}px)`
}
function Scroll(Stg) {
  if(W400.matches){
    if(Stg === 'Fim'){
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth'})
    }else{
      const posits = window.pageYOffset + QrySlt(Stg).getBoundingClientRect().bottom
      window.scrollTo({top:posits,behavior:'smooth'})
    }
  }
}
function LoadListServ(){
  for(const Grup in grupos){
    I_Serv.insertAdjacentHTML('beforeend',`<optgroup label='${Grup}'>${Options(grupos[Grup])}</optgroup>`)
  }
}

// Funções pra Abrir Modais ______________________________________________________________________________________________________________
const FMdal = QrySlt('#Fundo-Modal')
function AbreLogin(){FocoFilho(FMdal,'#ModalLogin');InnQry('#Span-Login','');Foco('#Inpt-Senha')}
function AbreCdstr(){FocoFilho(FMdal,'#ModalCadastro')}
function AbreItem(html){FocoFilho(FMdal,'#Modal-Item');InnQry('#Conteudo-Item',html.innerHTML)}
function MiniInput(e){FocoFilho(FMdal,'#InnerVazio');InnQry('#InnerVazio',e==='S'?InptPss(e):InptTxt(e));FocoCh0('#InnerVazio')}

async function AbreInfo(){
  if(SemLogin()){MiniInput('S');await PrmssInnr(QrySlt('#Login-Cod'))};FocoFilho(FMdal,'#ModalInfo')
  QrySlt('#Title-Info').innerHTML=`${IDPdd}: ${'Nome'}, Total: ${IDPdd}`
  EvtInpt('#Modal-Info1',()=>{Ouvinte(QrySlt('#Modal-Info1'),QrySlt('#btnINFO1'))})
  EvtInpt('#Modal-Info2',()=>{Ouvinte(QrySlt('#Modal-Info2'),QrySlt('#btnINFO2'))})
  EvtClik('#btnINFO2',()=>{None(FMdal);SaveInfo('','','Info','','')})
}

function AbreNota(Mdd,VlrFinall,VlrDescs){
  FocoFilho(FMdal,'#ModalNota')

  const CSS = 'style="color: white"'
  QrySlt('#DataNota').innerHTML = NewDate
  QrySlt('#Titulo-Nota').innerHTML = `<h1>${IDPdd}: ${InnClnt.innerHTML}</h1>`
  QrySlt('#conteudo-nota').innerHTML = `
  <table id="TabelaNotinha" class="w100"><thead><tr><th ${CSS}>Serviços</th></tr></thead></table>

    <div id="DescrNOTTApdd" class="Ct Cl">${Mdd.split('/').map(i=>`<div class="magem">${i.replace(/\./g,',')}</div>`).join("").replace(/\*.*\*/,'').replace("*",'')}</div>
  
    <h2 class="Hr Ct">Total R$ ${VlrDescs.replace(/\./g,',')}</h2>`
}


// FORM ________________________________________________

 function NewOrcamentos(btn){
  if(!NewOrcamentos.First){NewOrcamentos.First = true}else{clearForm();clearCRUD()}
  //loadIDPdd()
  Show(FormOrcamento,btn.parentNode)
}
function loadIDPdd(){
  fetch(APIPlan).then(Resp=>Resp.json()).then(Plan=>{
    Historico(Plan)
    IDs = Plan.map(e=>Num(e.ID.replace('ID-','')))
    IDPdd = 'ID-'+(('0000'+(Math.max(...IDs)+1)).slice(-3))
    const IDnew = 'ID-'+(('0000'+(Math.max(...IDs)+1)).slice(-3))
    QrySltAll('#FormOrc > h2,#DivResult > h2').forEach(e=>{e.innerHTML = 'Orçamento: '+ IDnew}) // Cria ID
  
  })
}
function LoadCor(){
  // se o serviço tiver opção de cor, então MostraMostra
  QrySlt('#InputdeCor')
}
function CloseForm(e){   
    e.addEventListener('click',()=>{
      e.classList.add('clicked')
      FormOrcamento.classList.add("CloseForm")

      setTimeout(()=>{Show(QrySlt('#NewOrcamento').parentNode)},100)

      setTimeout(()=>{
        e.classList.remove('clicked')
        FormOrcamento.classList.remove("CloseForm")
        None(FormOrcamento)},500)})
}
function clearForm(){
  QrySltAll('input, select',FormOrcamento).forEach((e) => (e.value = ''))
  FilTable()
  EscMdds('All')
}
function ClonaMdd(btn){
  const INDX = isNaN(btn) ? IndiceDe(btn.parentNode) : btn
  Show('.Maisss > div:first-child')
  ArySltAll('#Grupo-Medidas > div').forEach(div=>{
    const inpt = QrySltAll(".Maisss, input",div)
    const Utm = inpt[inpt.length-1]
    const NewInpt = Utm.cloneNode(true)

    if(NewInpt.hasAttribute("data-Tab")){NewInpt.value=''}

    div.insertBefore(NewInpt,div.children[INDX+1])
  })
  ReloadTab()
  RstTabIndx("#Div-Inpt-Larg input",1)
  RstTabIndx("#Div-Inpt-Alt input" ,2)
  RstTabIndx("#Div-Inpt-Qnt input" ,3) //Escapar no Ultimo
}
function EscMdds(btn) {
  if (btn === 'All'){
    const idx = 2
    QrySltAll("#Grupo-Medidas > div").forEach(e => {
      const children = Array.from(e.children)
      for (let i = idx; i < children.length; i++) {
        e.removeChild(children[i])
      }
    })
  }else{
    const idxBtn = IndiceDe(btn.parentNode)

    QrySltAll("#Grupo-Medidas > div").forEach(e => {
      e.removeChild(Array.from(e.children)[idxBtn])
    })
  }
  ReloadTab()
}
function ReloadTab(){
  NoneTrue('.Maisss > div:first-child',QrySlt('#Div-Inpt-Mais').children.length===2)
  FilTable()
  QrySltAll('input[data-Tab]').forEach((inpt)=>{
    inpt.removeEventListener("keyup",keyupHandler)
    inpt.addEventListener('keyup',keyupHandler)})

  function keyupHandler(e){
    function NextyTab(inpt,e){
      inpt.value =  inpt.value.replace('+', '')
      e.preventDefault()
      if(e.key==="Tab"||KeyEnter(e)||e.key==="+"){
        if(Pai(inpt).id === 'Div-Inpt-Qnt' && e.key==="+"){ClonaMdd(IndiceDe(e.target))}
        let nextInput = QrySlt(`input[data-Tab="${TabIndx(inpt,1)}"]`,Avo(inpt))
        if(nextInput){nextInput.focus()}}
    };NextyTab(this,e)
  }
}

// OnInputs__________________________________________________________________________________________

function handle(){
  QrySltAll('input[type="text"][name="'+event.target.name+'"]').forEach(i=>{i.value = event.target.value})
  QrySltAll('div[data="'+event.target.name+'"]').forEach(i=>{i.innerHTML = event.target.value})
}
function InptClnts(){
  const e = event.target
  if(e.name === 'Cntt') {BandejaFit(e,5)}
  if(e.name === 'Clnt') {BandejaFit(e,2);QrySlt('#Inner-Clnt').innerHTML = e.value;
    ShowTrue('#Div-Inpt-Cntt',I_Clnt.value!=='') // Mostra e Oculta InptCntt
    ShowTrue('.btn_cdstr',ArryClnt[7]==='' && I_Clnt.value!=='') // Mostra e Oculta Btn Cadastro
  }

  function BandejaFit(inpt,indx){ // preciso só ocultaar os outros

    QrySltAll('.Bandeija').forEach(e=>{
      ShowTrue(e,e.parentNode===inpt.parentNode.parentNode)

      Rad0(inpt); e.innerHTML = ""
      let value = inpt.value.toLowerCase()
      if (!value)return

      Cttlist.map((e,idx)=>[e[indx],idx])
      .filter(([opt])=>opt.toLowerCase().includes(value))
      .forEach(([opt,Idex])=>{
        RadB(inpt)
        const li = CreateTag('div')
        li.innerHTML=`<div>${opt}</div> ${indx === 5 ? `<div>${Cttlist[Idex][2]}</div>` : ''}`
        li.addEventListener('click',()=>{ArryClnt = [...Cttlist[Idex]]
          Rad0(inpt) ; ShowClntSalvo() ; onOff = 'on' ; FilTable() ; None(e)
        })
        e.appendChild(li)
        })
        Snap(e,inpt)
    })
  }
}
function ShowClntSalvo(){
  Show([GrupClntSv,GrupClntInfSv],[GrupClnt,RestaNome])
  const grupos = [GrupClntSv,GrupClntInfSv]
  
  grupos.forEach(e=>{
     e.innerHTML = `<div>${ArryClnt[2]}</div><div>${ArryClnt[5]}</div>
       <div class="baby Ct" onclick="EditaClntSave('${ArryClnt[2]}','${ArryClnt[5]}')">Editar</div>`
  })
}
function EditaClntSave(Clnt,Cntt){
  Show([GrupClnt,RestaNome],[GrupClntSv,GrupClntInfSv])
  ArryClnt.fill('')
  FilTable()
}
function ShowTipo(){
  let undd = tabela.find(e=>e.includes(I_Serv.value))?.[7] ?? null
    ShowTrue('#Grupo-Tipos',undd.match(/OFS/),'#Grupo-Medidas')      // Troca de OFS pra M2
    NoneTrue(['#Div-Inpt-Larg','#Div-Inpt-Alt'],undd.match(/QNT/))   // Remove Larg e Alt se n precisar
    ShowTrue('#Div-Inpt-Tipo',I_Serv.value!=='')                     // Temove Tipo quando n tem Serv
    ShowTrue('#GrupoCores',undd.match(/W/))                          // Add Cor Quando nesesário
    NoneTrue('#Div-Inpt-Cbmt',['','-'].includes(I_Cbmt.options[1].value.trim())) // Remove acabamento se n Tiver
}
function CarregaCoresStock(){
  Show('#ListaCor')
  QrySlt('#ListaCor').innerHTML = ''
  StockjVinil.forEach(cor =>{
    QrySlt('#ListaCor').innerHTML += 
    `<li style="background:${cor}" onclick="mudarCor('${cor}')"></li>`
  })
}
function mudarCor(cor) {
  QrySlt('#InputdeCor').style.backgroundColor = cor
}

// Funções Grandes_______________________________________________________________

function DescPrazo(){
let valor = 40.00
let prazo = new Date(Prazo.value)
let hoje = new Date()

let diffTime = Math.abs(prazo - hoje)
let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

let desconto = 2.00 * diffDays
let valorFinal = valor - desconto

QrySlt('#innerdesc').innerHTML = 'Desconto: '+valorFinal
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

return Options(['Todos',...new Set(tabela.filter(R=>Fill(R)).map(R=>R[Coll]))])
}
function FilTable(){
let MddTotalM2 = 0
ResultFilTable.innerHTML = ''
const Arry = tabela.filter(T=>{
  return (I_Serv.value === "Todos" || T[0] === I_Serv.value) &&
         (I_Tipo.value === "Todos" || T[1] === I_Tipo.value) &&
         (I_Cbmt.value === "Todos" || T[2] === I_Cbmt.value) &&
         (I_Gram.value === "Todos" || T[3] === I_Gram.value) &&
         (I_QFix.value === "Todos" || T[4] === I_QFix.value)})

const items = Arry.map(([Serv,Tipo,Cbmt,Gram,QFix,Vlr,Cust,Calc,Foto,Itm],indx)=>{
  const Orc = Orcamento(Arry[indx])
  const SubTotal = Cm(Orc[1])
  const VlrM2 = Cm(Vlr)
  const DescClnt = ArryClnt[13]!==''? ArryClnt[13] : 0
  const DescMdds = Orc[3] >= 4 ? Orc[3]/(120+Orc[3]*10) : 0
  const Desc = Num(DescClnt)+Num(DescMdds)
  MddTotalM2 = Desc===0 ? 0 : 1
  if(onOff === 'on' && Desc===0){onOff='off'}
  const ClassNone = onOff === 'off' ? 'none' : ''
  const TotalDesc = Calc.match(/OFS/) ? Cm(Vlr*(1-DescClnt)) : Cm(Orc[1]*(1-Desc))
  const CBMT = `${Cbmt} (${Gram})`.replace(/\s\(\)/,'')
  const QNT = QFix !== 'Todos' ? QFix : I_Qnt.value
  const IMG = Foto ? Foto.match('.jpg|.png') ? Foto : `${LinkDrive}${Foto}` : ''
  const Etc = I_Etc.value
  const Mdds  =Orc[0].map(I=>`${I[0]}|${I[1]}|${I[2]}|${I[3]}`).join(',')
  const Mdds3 =Orc[0].map(I=>`${I[0]}|${I[1]}|${I[2]}|${I[3]}`).join('/').replace('.',',')
  const Mdds1 =Orc[0].map(I=>`${I[0]} - ${Serv} ${Tipo} (${I[1]} x ${I[2]}) ${RS(I[3])}`).concat(`*Total: ${RS(TotalDesc)}*`)
  const Mdds2 =Mdds1.join('/')
  const ItemHTML = `<div class="itemfilter Ct Cl w100 Rdd">
                      <div class="RstServ">${Serv} ${Tipo}</div>
                      <div id="FotoItem"><img src="${IMG}"></div>
                      <div>${Mdds1.map(i=>`<div>${i}</div>`).join("").replace('*','')}</div>
                    </div>
                    <div class="Cl Mgrn-PX2 ${ClassNone}">
                      <div class="Ct Mgrn-PX2">
                        <div>Cliente: ${Pct(DescClnt)}</div>
                        <div>Medidas: ${Pct(DescMdds)}</div>
                      </div>
                      <div>Total Desc: ${Pct(Desc)}</div>
                      <div>ValorM2: ${RS(Num(TotalDesc)/Orc[3])}</div>
                    </div>
                    <button onclick="Copy('${Mdds2}',this)">Copy Itens</button>
                    `
  let NewItem=[GerarIT(),'Stts',Serv,Tipo,CBMT,QNT,Mdds,Desc,TotalDesc,VlrM2,Cust,Calc,Foto,Etc]
  let SAVENewItem=['Login','Stts',IDPdd,ArryClnt[0],'NewHora',Itm,Mdds3,TotalDesc,Cust,Etc]
  let NewItemaDD=[Itm,QNT,Serv,Tipo,CBMT,Mdds,' Mdd2',TotalDesc]
  
  let FuncAdd = `addyCRUD('${NewItemaDD.join('/')}');Show(['#Div-CRUD','#SavSav']);Scroll('Fim');OcultaCoisas('${ResultFilTable}')`
  let FuncSav = `SavePDDD('${SAVENewItem.join('+')}','Saver','Filter','${TotalDesc}')`
  let FuncEnt = `AbreInfo('${NewItem.join('/')}','Entrada','Filter','${TotalDesc}','this')`
  let Comment = Serv==='Placa' ? Orc[2].map(c=>`<div>${c}</div>`).join('') : ""
  let Ferro = Serv==='Placa' ? Orc[4].map(c=>`<div>${c}</div>`).join('') : ""
  let Alumn = Serv==='Placa' ? Orc[5].map(c=>`<div>${c}</div>`).join('') : ""

  const item = CreateTag('div')
  item.innerHTML =
    `<div class="itemfilter Ct Cl w100 Rdd">
      <div class="RstTitle w100 Pddn-XY Ct Bt">
        <div class="RstServ ppt" onclick="AbreNota('${Mdds2}','${SubTotal}','${TotalDesc}')">${Serv} ${Tipo}</div>
        <div class="RstValrM2 Ct"> <div class="FtLt CrCnz">(Valor por Metro)</div>R$ ${VlrM2} m²</div>
      </div>
      <div class="Ct Bt Pddn-XY">
        <div class="none">${ItemHTML}</div>
        <div id="FotoFilter" onclick="AbreItem(this.parentNode.firstElementChild)">
          ${ Serv==='Placa'? `<div id="Canvs${indx}" class="canvas"></div>` :
          Foto ?            
            `<img src="${IMG}">` :
            `<div class="SVGFilt Ct">${IconSemFoto}</div>`}
        </div>

        <div class="Ct Cl"><div class="Descricao">
              <div><strong>Acbmnt: </strong>${Cbmt}</div>
              <div><strong>Qnt: </strong>${QFix} Und</div>
              <div><strong>Grama: </strong>${Gram}</div>
            </div><hr class="w100"><div class="valores Ct Cl w100">
              
              <div class="RstValrDesc ${ClassNone}">${RS(SubTotal)}<div>${IconXDesc}</div></div>
              <div class="RstValrFinal Ct FtMd"><div class="FtMd">R$</div> ${TotalDesc}</div>
          </div></div>
        <div class="Ct Cl">
          <button class"RD Mg" onclick="${FuncAdd}">Adicionar</button>
          <button class"RD Mg" onclick="${FuncSav}">Salvar</button>
          <button class"RD Mg" onclick="${FuncEnt}">Entrada</button></div>
      </div>
      <div class="Ct Cl">${Comment}</div>
      <div>${Ferro}</div>
      <div>${Alumn}</div>
    </div>`
  return item
})
items.forEach(I=>ResultFilTable.appendChild(I))

QrySlt('#Contagem').innerHTML = ResultFilTable.children.length + ' Itens'
ShowTrue('#DivBtnDesc',MddTotalM2===1)
QrySltAll('.canvas').forEach(e=>{Gera3d(e)})
OcultaCoisas(ResultFilTable)
}
function OcultaCoisas(e){

if(EShow('#Div-CRUD')){
  Show('#SavSav')
  // oculta os BTN do filter
  QrySltAll('#resultfilter1 button').forEach(e=>{if(!e.textContent.includes('Adicionar')){None(e)}})
}else{None('#SavSav')}

if(e.children.length===1){Show('#AddAdd')
  if(e.style.height === '150px'){return}
    e.style.height = '150px'
    e.classList.add('Slideheight-Out')
    setTimeout(()=>{e.classList.remove('Slideheight-Out')},500)

}else{None('#AddAdd')
  if(e.style.height === '304.19px'){return}
    e.style.height = '304.19px'
    e.classList.add('Slideheight-In')
    setTimeout(()=>{e.classList.remove('Slideheight-In')},500)
}
}
function Orcamento(arrays){

const [Serv,Tipo,Cbmt,Gram,QFix,Vlr,Cust,Calc,Foto] = arrays

const LAG = ArySltAll('#Div-Inpt-Larg input').map(I=>I.value)
const ALT = ArySltAll('#Div-Inpt-Alt input').map(I=>I.value)
const QNT = ArySltAll('#Div-Inpt-Qnt input').map(I=>I.value) //* Tipo.match(/FV/) ? 2 : 1

// 'SOMA' Calculo Total, 'LIST' Calculo Unidade
const SOMA = TotalCress(Vlr,QNT.reduce((acc,Qnt,x)=>acc+Qnt*LAG[x]*ALT[x],0),Serv)
const LIST = QNT.map((Qnt,x)=>[Qnt,LAG[x],ALT[x],TotalCress(Vlr,Qnt*LAG[x]*ALT[x],Serv)])

let FERRO = []
let TOTALLFERRO = []
let TOTALLALUMN = []

QNT.forEach((Qnt,x)=>{ // Para Calcular Ferro

  const Lag_ = LAG[x] ; const Alt_ = ALT[x]

  const desc   = I_Ferr.match(/..$/)/1000 * 2
  const PE     = Serv.match(/Cav/) ? 0.15*2 : 0
  const CkCstl = Tipo.match(/Lumi/)
  const CkLarg = Lag_ > Alt_

  const F_L = CkLarg ? Lag_+PE : Lag_-desc
  const F_A = CkLarg ? Alt_-desc : Alt_+PE
  const C_L = CkCstl ? 2 : CkLarg ? 2 : Math.round(Alt_)+1 // Costelas
  const C_A = CkCstl ? 2 : CkLarg ? Math.round(Lag_)+1 : 2 // Costelas

  const FM1 = Qnt * (F_L*C_L + F_A*C_A)
  const AM1 = Qnt * F_L*2

  FERRO.push(`${C_L} Varas de ${Cm(F_L)} | ${(C_A)} Costelas ${Cm(F_A)}`)
  TOTALLFERRO.push(`M¹ Ferro: ${FM1}`)
  TOTALLFERRO.push(`M¹ Alumn: ${AM1}`)
})

return [LIST,SOMA,FERRO,SOMA/Vlr,TOTALLFERRO,TOTALLALUMN]
}
async function PesquisaKM(inpt){
const listaLugares = {'Camaragibe':20,'São Lourenço':10,'Recife':40}
Show([RsutFrete,RsutFrete.parentNode])
if(inpt in listaLugares){await delay(2000)
RsutFrete.innerHTML = listaLugares[inpt]
}else{RsutFrete.innerHTML = 'Lugar não Encontrado'}
}

function Ouvinte(form,btn){ // Sync ShowNone no Modal-Info e Fora Dele
  const date = event.target.getAttribute('data')
  const Value = event.target.value

  if(date){const val = Value==='NPag' ? ['#Endereco'] : ['#vlrPagInfo','#dataPagInfo']
    if(Value==='NPag'||Value==='Graff'){None(QrySlt(date)) ; EscRequired(val)}
    else{Show(QrySlt(date)) ; AddRequired(val)}
  if(Value.match(/^_/) || Value===''){None('#divdesigner')
  }else{Show('#divdesigner')}
  }
  const valid = ArySltAll('input[required]',form).concat(ArySltAll('select[required]',form))
    .every(e=>e.value) && ArySltAll('input[type="radio"][required]:checked',form).length>0
  ShowTrue(btn,valid)

  const Rad = ArySltAll('input[type="radio"]:checked, select,input[type="checkbox"]:checked',ModalInfo).map(i=>`${i.name}:${i.value}`)
  const Txt = ArySltAll('input',ModalInfo).filter(i=>(i.type!=='radio'&&i.type!=='checkbox')&&i.Value!=='').map(i=>`${i.id}:${i.value}`)
  let obj = {};[...Rad,...Txt].forEach(i=>{let [k,v]=i.split(':');obj[k]=v})
  ObjInfo = obj
}

async function SavePdd(arry,Stts,orig,Ttal,btn){

  const semClnt = I_Clnt.value === ''
  const oCRUD = orig === 'CRUD'
  const oFILT = orig === 'Filter'
  const oINFO = orig === 'Info'
  const Bloco = Stts === 'Bloco'
  const Entra = Stts === 'Entrada'

if(SemLogin()){MiniInput('S') ; await PrmssInnr(Login)}

if(ArryClnt[7]!==''){ArryPDD.IDPdd.Clnt = ArryClnt}
if(Bloco&&((oCRUD&&semClnt)||(oFILT&&semClnt))){
  MiniInput('C') ; await PrmssInnr(InnClnt)
  ArryClnt[0]=InnClnt.innerHTML}
if(Entra&&oFILT){
  if(Ttal==='0,00'){
    ArryMdds.forEach(e=>ArySltAll(e).forEach(E=>{
    E.classList.toggle('error',E.value==='')})) ; return
  }else{
    AbreInfo('','ID',Ttal);await PrmssInnr(BtnInfo2)}}
if(Entra&&oCRUD){AbreInfo('','ID',Ttal) ; await PrmssInnr(BtnInfo2)}

const ARRAY = arry.split('/')
ARRAY[6] = ARRAY[6].split(',').map(e => e.split('|'))
ARRAY[1] = Stts
ArryItem.push(ARRAY)


console.log(ObjInfo)
}

// CRUD___________________________________________________________

function addyCRUD(Arry) {
  const Arr = Arry.split('/')
  const Mdd = Arr[5].split(',')
  const Defaut = QrySlt('#CrudDefaut')

  Mdd.forEach(e=>{const E = e.split('|')
    Arr[1] = E[0]
    Arr[5] = Cm(parseFloat(E[1]))
    Arr[6] = Cm(parseFloat(E[2]))
    Arr[7] = RS_HTML(parseFloat(E[3]))
    Arr[8] = IconLaps
    Arr[9] = IconSavList
    Arr[10] = IconLixo
    Arr[11] = IconEscList
    const Clonado = Defaut.cloneNode(true)
    Clonado.removeAttribute('id')
    Clonado.classList.remove('none')
    QrySltAll('td input',Clonado).forEach((e,i)=>{e.value = Arr[i]})
    QrySltAll('td div',Clonado).forEach((e,i)=>{e.innerHTML = Arr[i]})
    
    
    Defaut.parentNode.appendChild(Clonado)
  })
  Show('#ClearCRUD')
  TotalCrud()
  clearForm()
}
function TotalCrud(){
  let Soma = 0
  QrySltAll('#CRUD td:nth-child(8) > div > div > div:nth-child(2)')
  .forEach(e=>{
    Soma+=Num(e.innerHTML)
  })
  QrySlt('#TotalCrud').innerHTML = Cm(Soma)
}
function AddAdd(){
  ArySltAll('button',ResultFilTable)[0].click()
}
function DeletCRUD(e){
  if (confirm(`Tem certeza que deseja deletar?`)){e.remove()}
}
function EditaCRUD(e) {
  QrySltAll('[data="CrudB"]',e).forEach((E,i)=>{if(i===7){return};Show(E)})
  QrySltAll('[data="CrudA"]',e).forEach((E,i)=>{if(i===7){return};None(E)})
}
function CancelEditCRUD(e){
  QrySltAll('[data="CrudB"]',e).forEach((E,i)=>{if(i===7){return};None(E)})
  QrySltAll('[data="CrudA"]',e).forEach((E,i)=>{if(i===7){return};Show(E)})
}
function SaveEditCRUD(e) {
  const ListUp = []
  QrySltAll('[data="CrudB"]',e).forEach((E,i)=>{
    if(i===7){return};None(E)
    ListUp.push(E.value)
  })
  QrySltAll('[data="CrudA"]',e).forEach((E,i)=>{
    if(i===7){return};Show(E)
    if (i < 7) {E.innerHTML = ListUp[i]}
  })
}
function clearCRUD(){
  confirm('tem Certeza q quer Limpar?')
  QrySltAll('#CRUD tr').forEach((e,idx)=>{
    if(idx>=2){e.remove()}})
  None('#ClearCRUD')
}
function SaveCRUDI(Stg){
  const ArryNovo = ArySltAll(Stg+' table tr').slice(2).map(Lin=>{return ArySltAll('td',Lin).map((Cell,Idx)=>{
    return Cell.textContent.replace('R$','')}).filter((_,idx)=>[0,1,5,6,7].includes(idx)) })
  const Itens = ArryNovo.map(e=>e[0]).join(',')
  const Mdds = ArryNovo.map(e=>e.slice(1).join('|')).join('/')
  //const total = ArryNovo.reduce((sum, [, , , , value]) => sum + parseFloat(value), 0).toFixed(2).replace('.',',')
  const total = QrySlt('#TotalCrud').innerHTML
  const novoArry = ['Login','red',IDPdd,ArryClnt[0]?ArryClnt[0]:I_Clnt.value,'NewHora',Itens,Mdds,total,'Cust','Etc']
  SavePDDD(novoArry.join('+'),'Stts','','')
}


// Template Strings ___________________________________________________________________________

function LoadRoloTop(){
  Topic.forEach(e=>{const [Top,Qnt] = Object.entries(e)[0]

    const Template = `
    <div class="Ct"><div>${Top}</div><div class="RolodeImg Ct w100 Rltv Rd">
    <span class="Abslt flip Fad h100 Ct"><div class="Seta RD WH40 Ct ppt"></div></span>
    <span class="Abslt Flip Fad h100 Ct"><div class="Seta RD WH40 Ct ppt"></div></span>
    <div class="RoloGrupImg Ct Rw w100">
    ${SplitNum(Qnt).map(e=> `<div><div class="Cl ppt">
        <img src="Portifolio/${Top.slice(1)}_${Zero(e)}.png" class="${Top.match(/^@/)?'Stry':'Feed'} Rd" 
          onclick="AbreItem(this.parentNode.parentNode)">
        <a>Adesivo</a>
        <div>R$ 00,00</div>
      </div></div>`).join('')}</div></div></div>`
    insetBefor('#RoloTopHome',Template)
  })
}




// Save Informações ___________________________________________________________________________
  // a idéia aqui é manter essas variáveis sendo Atualizadas a cada Input

function SaveCadastro(){
  Cadstr = ArySltAll('#ModalCadastro input').map(e=>e.value)
  console.log("API: Clientes")
  console.log(Cadstr)
}
function SaveInfo(){
  console.log("API: Pedido e Pagamento")
  console.log(ObjInfo)
}

function TestSenha(e,tipo,input){
  let inpt = e==='' ? QrySlt(input) : input
  if(KeyEnter(e)||e===''){
    if(tipo==='C'){InnQry('#Inner-Clnt',inpt.value) ; None(FMdal)}
    if(tipo==='S'){
      const Cryp = CrypPass(inpt.value)
        if(User[Cryp]){
          None([FMdal])
          LgTp.Cod = User[Cryp][0]
          LgTp.Nome = User[Cryp][1]
          LgTp.Img = User[Cryp][2]
          InnQry('#Login-Cod',"Logado")
          InnQry('.LgTp2',User[Cryp][1])
          None('.LgTp')
          Show('.ImgPerfil')
          Show('.ImgPerfil2')
          QrySltAll('.ImgPerfil').forEach(e=>{e.src=User[Cryp][2]})
        }
        else{InnQry('#Span-Login','Senha Inválida') ; inpt.placeholder='Senha Inválida'}
      inpt.value='';inpt.focus()}
  }
}

