const //Fundos
  FormOrc = QrySlt('#FormOrcamento'),
  BtnInfo2 = QrySlt('#btnINFO2'),
  Prazo = QrySlt('#Prazo'),
  ModAlnotta = QrySlt("#ModalNota"),
  ResultFilTable = QrySlt('#resultfilter1'),
// Clientes
  GrupClnt = QrySlt('#Grupo-Cliente'),
  GrupClntSv = QrySlt('#GrupoClntSave'),
  GrupClntInfSv = QrySlt('#GrupoClntSaveInfo'),
  RestaNome = QrySlt('#RestaNome'),
    //DivCnttForm = QrySlt('#Div-Inpt-Cntt'),
  I_Clnt = QrySlt('#Div-Inpt-Clnt input'),
    //InnClnt = QrySlt('#Inner-Clnt'),
// Form
  I_Serv = QrySlt("#Div-Inpt-Serv select"),
  I_Tipo = QrySlt("#Div-Inpt-Tipo select"),
  I_Cbmt = QrySlt("#Div-Inpt-Cbmt select"),
  I_Gram = QrySlt('#Div-Inpt-Gram select'),
  I_QFix = QrySlt('#Div-Inpt-QFix select'),
  I_Etc = QrySlt("#Div-Inpt-Etc input"),
    //I_Lcal = QrySlt("#Div-Inpt-Lcal input"),
  I_Qnt = QrySlt('#Div-Inpt-Qnt input')

  let ArryMdds=['#Div-Inpt-Larg input','#Div-Inpt-Alt input','#Div-Inpt-Qnt input']
  let W400 = window.matchMedia("(max-width: 500px)")
//_________________________________________________________________________________________________________

// Declarações dos Arrays
let IDs = []
let IDPdd = 'ID-001'
let LgTp = {'Nome':'','Cod':'','Img':''} ; function SemLogin(){return LgTp.Cod===''}
let Cadstr = ['']
let ObjInfo = {}
let ArryInfo = []
let CorItem = ''
let ItemsPdd = []
let ArryClnt = ['','','','','','','','','','','','','','']
let ClntOK = ()=>ArryClnt[0]?ArryClnt[0]:Cadstr[0]

// Save Informações ___________________________________________________________________________
function SaveCadastro(){Cadstr = ArySltAll('#ModalCadastro input').map(e=>e.value)}
function SaveInfo(){ConfirmPlan()}
function SaveCRUDI(){SaveCadastro();const It=ResumeCRUD();ItemsPdd=[IDPdd,ClntOK(),It[0],It[1],It[3],It[4]];ConfirmPlan()}

async function SaveDireto(Itens,Mdds,Total,Etc,Tarefs){SaveCadastro()
  if(SemLogin()){MiniInput('S');await PrmssInnr(QrySlt('#Login-Cod'))}
  if(I_Clnt.value===""){MiniInput('C');await PrmssInnr(QrySlt('#Inner-Clnt'))}
  ItemsPdd = [IDPdd,ClntOK(),Itens,Mdds,Total,Etc,Tarefs]
  ConfirmPlan()
}

function Acumulador(){SaveCadastro(); QrySlt('#ContentNotaCRUD').innerHTML ? SaveCRUDI() : null
  QrySlt('input[name="RG"]').value = [LgTp.Cod,RG()].join(',')
  QrySlt('input[name="ArryClnt"]').value = ArryClnt[0] ? ArryClnt[0] : Cadstr.join(',')
  QrySlt('input[name="ObjInfo"]').value = ArryInfo
  QrySlt('input[name="ArryItens"]').value = ItemsPdd.map(e=>e===''||e===' '?"-":e).join('+')
  QrySlt("#SavePddPlan button").click()
}

// Funções Planilha________________________________________________________________
QrySlt("#SavePddPlan").addEventListener("submit",(e)=>{SavePlan(e,"API")})
function SavePlan(e,Aba){e.preventDefault()
  const formData = new FormData(e.target) ; const jsonData = {}
  formData.forEach((value,key)=>{jsonData[key]=value})
  jsonData["sheet"] = Aba

  fetch(APIPlan,{method:"POST",headers:{"Content-Type":"application/json",},body:JSON.stringify(jsonData),})
    .then((response)=>response.json())
    .then((data)=>{console.log("Dados enviados com sucesso!",data);AlertPlanOK();clearForm();clearCRUD()})
    .catch((error)=>{console.error("Erro ao enviar os dados:",error)})
}

// OnLoad's_________________________________________________________________________________________________________
document.addEventListener('DOMContentLoaded',()=>{
  AddInnSVG()
  LoginStorage()
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
  document.addEventListener('input',()=>{handle();InptClnts();FilTable();ReadModal()})
  QrySltAll('select').forEach(e=>{e.addEventListener('change',e=>{ShowTipo();FilTable();ReadModal()})})
})

function BloqueaData(Stg){QrySltAll(Stg).forEach(i=>{i.min = new Date().toISOString().split('T')[0]})}
function LargPaiAbas(){QrySlt("#Pages").style.width = `${QrySlt('header').offsetWidth*5}px`}
function DefinePag(aba){QrySlt('#Pages').style.transform = `translateX(${(-aba*(QrySlt('header').offsetWidth))}px)`}

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

// Funções pra Abrir Modais ______________________________________________________________________________________________________________
const FMdal = QrySlt('#Fundo-Modal')
function AbreLogin(){FocoFilho(FMdal,'#ModalLogin');InnQry('#Span-Login','');Foco('#Inpt-Senha')}
function AbreCdstr(){FocoFilho(FMdal,'#ModalCadastro')}
function AbreItem(html){FocoFilho(FMdal,'#Modal-Item');InnQry('#Conteudo-Item',html.innerHTML)}
function MiniInput(e){FocoFilho(FMdal,'#InnerVazio');InnQry('#InnerVazio',e==='S'?InptPss(e):InptTxt(e));FocoCh0('#InnerVazio')}
function ConfirmPlan(){FocoFilho(FMdal,'#ConfirmPlan')}
async function AlertPlanOK(){Show('#Alert');await delay(8000);None('#Alert')}

function AbreNota(Mdd=ResumeCRUD()[2],Valor,Desc){FocoFilho(FMdal,'#ModalNota')
  InnQry('#DescrNota',CleaAsps(Mdd.split('/').map(e=>Div(Virg(e))).join("")))
  InnQry('#TotalNotta',`Total: ${RS(Desc ? Desc : Inn('#TotalCrud'))}`)
}
async function AbreInfo(Itens,Mdds,Total,Etc,Tarefs){
  if(SemLogin()){MiniInput('S');await PrmssInnr(QrySlt('#Login-Cod'))};FocoFilho(FMdal,'#ModalInfo')
  EvtInpt('#Modal-Info1',()=>{Ouvinte('#Modal-Info1','#btnINFO1')})
  EvtInpt('#Modal-Info2',()=>{Ouvinte('#Modal-Info2','#btnINFO2')})
  EvtInpt('#ModalInfo',()=>{ColetaDados(QrySlt('#ModalInfo'))})
  EvtClik('#btnINFO2',()=>{SaveCadastro();None('#Fundo-Modal');ItemsPdd=[IDPdd,ClntOK(),Itens,Mdds,Total,Etc,Tarefs];ConfirmPlan()})
}
function ReadModal(){
  ArySltAll('#Titulo-Nota,#Title-Info').forEach(e=>{e.innerHTML=`<h1>${IDPdd}: ${ArryClnt[2]}</h1>`})
  ArySltAll('#DataNota').forEach(e=>{e.innerHTML=RG()})
}
function TestSenha(e,tipo,input){
  if(e==='Deslog'){
    LgTp.Cod = ''
    LgTp.Nome = ''
    LgTp.Img = ''
    InnQry('#Login-Cod','')
    InnQry('.LgTp2',IconLogin)
    Show('.LgTp')
    None('.ImgPerfil')
    None('.ImgPerfil2')
    QrySltAll('.ImgPerfil').forEach(e=>{e.src=''})
  }
  else if(e==='Storage'){
    if(User[input] === undefined || User[input] === null){return}
    else{
      LgTp.Cod = User[input][0]
      LgTp.Nome = User[input][1]
      LgTp.Img = User[input][2]
      localStorage.removeItem('SenhaCryp')
      localStorage.setItem('SenhaCryp',input)
      InnQry('#Login-Cod','Logado')
      InnQry('.LgTp2',User[input][1])
      None('.LgTp')
      Show('.ImgPerfil')
      Show('.ImgPerfil2')
      QrySltAll('.ImgPerfil').forEach(e=>{e.src=User[input][2]})
    }
  }
  else{
    let inpt = e==='' ? QrySlt(input) : input
    if(KeyEnter(e)||e===''){
      if(tipo==='C'){InnQry('#Inner-Clnt',inpt.value) ; ArryClnt[0] = inpt.value ;  I_Clnt.value = inpt.value ; None(FMdal)}
      if(tipo==='S'){
        const Cryp = CrypPass(inpt.value)
          if(User[Cryp]){
            None([FMdal])
            LgTp.Cod = User[Cryp][0]
            LgTp.Nome = User[Cryp][1]
            LgTp.Img = User[Cryp][2]
            localStorage.removeItem('SenhaCryp')
            localStorage.setItem('SenhaCryp',Cryp)
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
}
function LoginStorage(){const Pass = localStorage.getItem('SenhaCryp');if(Pass===null){return};TestSenha('Storage','',Pass)}
function Deslogar(){localStorage.removeItem('SenhaCryp');TestSenha('Deslog','','')}

// FORM ________________________________________________

function NewOrcamentos(btn){if(!NewOrcamentos.First){NewOrcamentos.First=true}else{clearForm();clearCRUD()};Show(FormOrc,btn.parentNode)}
function clearForm(){QrySltAll('input, select',FormOrc).forEach((e)=>e.value='');FilTable();EscMdds('All')}

function CloseForm(e){   
    e.addEventListener('click',()=>{
      e.classList.add('clicked')
      FormOrc.classList.add("CloseForm")

      setTimeout(()=>{Show(QrySlt('#NewOrcamento').parentNode)},100)

      setTimeout(()=>{
        e.classList.remove('clicked')
        FormOrc.classList.remove("CloseForm")
        None(FormOrc)},500)})
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
function EditaClntSave(Clnt,Cntt){Show([GrupClnt,RestaNome],[GrupClntSv,GrupClntInfSv]);ArryClnt.fill('');FilTable()}
function mudarCor(cor){QrySlt('#InputdeCor').style.backgroundColor=cor;CorItem=cor}

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
  
  grupos.forEach(e=>{e.innerHTML = `<div>${ArryClnt[2]}</div><div>${ArryClnt[5]}</div>
       <div class="baby Ct" onclick="EditaClntSave('${ArryClnt[2]}','${ArryClnt[5]}')">Editar</div>`})
}
function ShowTipo(){
  let undd = tabela.find(e=>e.includes(I_Serv.value))?.[7] ?? null
    ShowTrue('#Grupo-Tipos',undd.match(/OFS/),'#Grupo-Medidas')      // Troca de OFS pra M2
    NoneTrue(['#Div-Inpt-Larg','#Div-Inpt-Alt'],undd.match(/QNT/))   // Remove Larg e Alt se n precisar
    ShowTrue('#Div-Inpt-Tipo',I_Serv.value!=='')                     // Temove Tipo quando n tem Serv
    ShowTrue('#GrupoCores',undd.match(/W/))                          // Add Cor Quando nesesário
    NoneTrue('#Div-Inpt-Cbmt',['','-'].includes(I_Cbmt.options[1].value.trim())) // Remove acabamento se n Tiver
}
function Ouvinte(formInfo,btnInfo){
  const [form,btn] = [QrySlt(formInfo),QrySlt(btnInfo)]
  const date = event.target.getAttribute('data')
  const Value = event.target.value

  if(date){const val = Value==='NPag' ? ['#Endereco'] : ['#vlrPagInfo','#dataPagInfo']
    if(Value==='NPag'||Value==='Graff'){None(QrySlt(date)) ; EscRequired(val)}
    else{Show(QrySlt(date)) ; AddRequired(val)}
    NoneTrue('#divdesigner',(Value.match(/^_/) || Value===''))
  }
  const valid = ArySltAll('input[required]',form).concat(ArySltAll('select[required]',form))
    .every(e=>e.value) && ArySltAll('input[type="radio"][required]:checked',form).length>0
  ShowTrue(btn,valid)
}
function ColetaDados(MdalInfo){
  const Rad = ArySltAll('input[type="radio"]:checked, select,input[type="checkbox"]:checked',MdalInfo).map(i=>`${i.name}:${i.value}`)
  const Txt = ArySltAll('input',MdalInfo).filter(i=>(i.type!=='radio'&&i.type!=='checkbox')&&i.Value!=='').map(i=>`${i.id}:${i.value}`)
  let obj = {};[...Rad,...Txt].forEach(i=>{let [k,v]=i.split(':');obj[k]=v})
  ObjInfo = obj
  ArryInfo = [obj.Arte,obj.Desig,obj.Aplic,obj.Frete,obj.Endereco,obj.vlrPagInfo,cvData(obj.dataPagInfo),cvData(obj.Prazo)] //.map(e=>e===undefined?'':e)
}

// Funções do Filter__________________________________________________________________________________
function InnerOptions(e){
  if(e==='Serv'){I_Tipo.innerHTML = OptFilter('Tipo',1);I_Cbmt.innerHTML = OptFilter('CBMT',2)}
  if(e==='Tipo'){I_Cbmt.innerHTML = OptFilter('Cbmt',2)}
  if(e==='Cbmt'){if(I_Tipo.value!=='Todos'){return};I_Tipo.innerHTML = OptFilter('TipoUP',1)}
  I_Gram.innerHTML = OptFilter('Gram',3);I_QFix.innerHTML = OptFilter('QFix',4)
}
function OptFilter(Stng,Coll){ // cria as listas Options

  function Fill(R){
      const Serv1 = (R)=> {return R[0]===I_Serv.value}
      const Tipo1 = (R)=> {return R[1]===I_Tipo.value}
        const Tipo2 = ()=> {return I_Tipo.value === 'Todos'}
      const Cbmt1 = (R)=> {return R[2]===I_Cbmt.value}
        const Cbmt2 = ()=> {return I_Cbmt.value === 'Todos'}
      const Gram1 = (R)=> {return R[3]===I_Gram.value}
        const Gram2 = ()=> {return I_Gram.value === 'Todos'}

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

const items = Arry.map(([Serv,Tipo,Cbmt,Gram,QFix,Vlr,Cust,Calc,Foto,Itm,Tarefs],indx)=>{
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
  const Mdds  =Orc[0].map(I=>`${I[0]}|${I[1]}|${I[2]}|${I[3]}`).join(',')
  const Mdds3 =Orc[0].map(I=>`${I[0]}|${I[1]}|${I[2]}|${I[3]}`).join('/').replace('.',',')
  const Mdds1 = Orc[0].map(I=>`${I[0]} - ${Serv} ${Tipo} (${I[1]} x ${I[2]}) ${RS(I[3])}`).concat(`*Total: ${RS(TotalDesc)}*`)
  const Mdds2 =Mdds1.join('/')
  const Ittens = Orc[0].map(e=>Itm).join(',')
  const Taref = Tarefs.toLowerCase().replace(/\s+/g, '')
  const ItemHTML = `<div class="Ct Cl w100 Rdd">
                      <div class="RstServ">${Serv} ${Tipo}</div>
                      <div id="FotoItem"><img src="${IMG}"></div>
                      <div>${Mdds1.map(i=>Div(i)).join("").replace('*','')}</div>
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
  const Etc = `${I_Etc.value} ${CorItem}`

  let ItemCRUD=[Itm,QNT,Serv,Tipo,CBMT,Mdds,' Mdd2',TotalDesc,Etc]
  
  let Comment = Serv==='Placa' ? Orc[2].map(c=>`<div>${c}</div>`).join('') : ""
  let Ferro =   Serv==='Placa' ? Orc[4].map(c=>`<div>${c}</div>`).join('') : ""
  let Alumn =   Serv==='Placa' ? Orc[5].map(c=>`<div>${c}</div>`).join('') : ""

  const item = CreateTag('div')
  item.innerHTML =
    `<div class="itemfilter Ct Cl w100 Rd">
      <div class="RstTitle w100 Pddn-XY Ct Bt">
        <div class="RstServ ppt" onclick="AbreNota('${Mdds2}','${SubTotal}','${TotalDesc}')">${Serv} ${Tipo}</div>
        <div class="RstValrM2 Ct"> <div class="FtLt CrCnz">(Valor por Metro)</div>R$ ${VlrM2} m²</div>
      </div>
      <div class="Ct Bt Pddn-XY">
        <div class="none">${ItemHTML}</div>
        <div id="FotoFilter" onclick="AbreItem(this.parentNode.firstElementChild)">
          ${ Serv==='Placa'? `<div id="Canvs${indx}" class="canvas"></div>` :
          Foto ? `<img src="${IMG}">` : `<div class="SVGFilt Ct">${IconSemFoto}</div>`}
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
            <button onclick="addyCRUD('${ItemCRUD.join('/')}')">Adicionar</button>
            <button onclick="SaveDireto('${Ittens}','${Mdds}','${TotalDesc}','${Etc}','${Taref}')">Salvar</button>
            <button onclick="AbreInfo('${Ittens}','${Mdds}','${TotalDesc}','${Etc}','${Taref}')">Entrada</button>
          </div>
      </div>
      <div class="Ct Cl">${Comment}</div><div>${Ferro}</div><div>${Alumn}</div>
    </div>`
  return item
})
items.forEach(I=>ResultFilTable.appendChild(I))

QrySlt('#Contagem').innerHTML = ResultFilTable.children.length + ' Itens'
ShowTrue('#DivBtnDesc',MddTotalM2===1)
QrySltAll('.canvas').forEach(e=>{Gera3d(e)})
OcultaCoisas(ResultFilTable)
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

// CRUD___________________________________________________________

function addyCRUD(Arry) {

  Show(['#Div-CRUD','#SavSav']) ; Scroll('Fim') ; OcultaCoisas(ResultFilTable)

  const Arr = Arry.split('/')
  const Mdd = Arr[5].split(',')
  const Defaut = QrySlt('#CrudDefaut')

  Mdd.forEach(e=>{const E = e.split('|')
    Arr[1] = E[0]
    Arr[5] = Cm(parseFloat(E[1]))
    Arr[6] = Cm(parseFloat(E[2]))
    Arr[7] = RS_HTML(parseFloat(E[3]))
    Arr[8] = Arr[8]
    Arr[9] = IconLaps
    Arr[10] = IconSavList
    Arr[11] = IconLixo
    Arr[12] = IconEscList
    const Clone = Defaut.cloneNode(true)
    Clone.removeAttribute('id')
    Clone.classList.remove('none')
    QrySltAll('td input',Clone).forEach((e,i)=>{e.value = Arr[i]})
    QrySltAll('td div',Clone).forEach((e,i)=>{e.innerHTML = Arr[i]})
    Pai(Defaut).appendChild(Clone)
  })
  Show('#ClearCRUD')
  TotalCrud()
  clearForm()
  
}
function TotalCrud(){
  let Soma = 0
  QrySltAll('#CRUD td:nth-child(8) > div > div > div:nth-child(2)').forEach(e=>{Soma+=Num(e.innerHTML)})
  QrySlt('#TotalCrud').innerHTML = Cm(Soma)
}
function AddAdd(){ArySltAll('button',ResultFilTable)[0].click()}
function DeletCRUD(e){if(confirm(`Tem certeza que deseja deletar?`)){e.remove()}}
function EditaCRUD(e){
  QrySltAll('[data="CrudB"]',e).forEach((E,i)=>{if(i===7){return};Show(E)})
  QrySltAll('[data="CrudA"]',e).forEach((E,i)=>{if(i===7){return};None(E)})
}
function CancelEditCRUD(e){
  QrySltAll('[data="CrudB"]',e).forEach((E,i)=>{if(i===7){return};None(E)})
  QrySltAll('[data="CrudA"]',e).forEach((E,i)=>{if(i===7){return};Show(E)})
}
function SaveEditCRUD(e){
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
function clearCRUD(){QrySltAll('#CRUD tr').forEach((e,idx)=>{if(idx>=2){e.remove()}});None('#ClearCRUD')}
function ResumeCRUD(){
  const TabelaCrud = ArySltAll('#CRUD table tr').slice(2) 
  const ArryNovo = TabelaCrud.map(Lin=>{return ArySltAll('td',Lin).map((Cell,Idx)=>{return Cell.textContent.replace('R$','')}).filter((_,idx)=>[0,1,5,6,7,8].includes(idx))})
  const AryResum = TabelaCrud.map(Lin=>{return ArySltAll('td',Lin).map((Cell,Idx)=>{return Cell.textContent.replace('R$','')}).filter((_,idx)=>[1,2,3,4,5,6,7].includes(idx))})
  const Itens = ArryNovo.map(e=>e[0]).join(',')
  const Mdds = ArryNovo.map(e=>e.slice(1).slice(0,-1).join('|')).join('/')
  const total = QrySlt('#TotalCrud').innerHTML
  const Formate = AryResum.map(I=>`${I[0]} - ${I[1]} ${I[2]} ${I[3]} (${I[4]} x ${I[5]}) ${RS(I[6])}`).concat(`*Total: ${RS(total)}*`).join('/')
  const Etc = ArryNovo.map(e=>e[5])
  return [Itens,Mdds,Formate,total,Etc]
}

// Template Strings ___________________________________________________________________________

function LoadRoloTop(){
  Topic.forEach(e=>{const [Top,Qnt] = Object.entries(e)[0]

    const Template = `
    <div class="Ct"><div>${Top}</div><div class="RolodeImg Ct w100 Rltv Rd">
      <span class="Abslt flip Fad h100 Ct"><div class="Seta RD WH40 Ct ppt"></div></span>
      <span class="Abslt Flip Fad h100 Ct"><div class="Seta RD WH40 Ct ppt"></div></span>
    <div class="RoloGrupImg Rw w100">
    ${SplitNum(Qnt).map(e=> `<div><div class="Cl ppt">
        <div class="Rltv Rd ppt">
          <img src="Portifolio/${Top.slice(1)}_${Zero(e)}.png" 
          class="${
            Top.match(/^@/)?'Stry perspectiva':
            Top.match(/^&/)?"Wind FotoGravata":
            Top.match(/^9/)?"Flag ScalaFlag":
            
            'Feed Rd'
          }" 
          onclick="AbreItem(this.parentNode.parentNode)">
        </div>
        <a>Adesivo</a>
        <div>R$ 00,00</div>
      </div></div>`).join('')}</div></div></div>`
    insetBefor('#RoloTopHome',Template)
  })
  gata();gata2();gata3()
}
function LoadCores(){Show('#ListaCor');InnQry('#ListaCor','')
  StockjVinil.forEach(e=>{insetBefor('#ListaCor',`<li style="background:${e}" onclick="mudarCor('${e}')"></li>`)})
}
function LoadListServ(){for(const Grup in grupos){insetBefor(I_Serv,`<optgroup label='${Grup}'>${Options(grupos[Grup])}</optgroup>`)}}
function gata(){QrySltAll('.FotoGravata').forEach(e=>{insetAntes(e.parentNode,`<img class="Molde Abslt Rd" src="Moldes/Molde_Gravata_2.png" onclick="AbreItem(this.parentNode.parentNode)">`)})}
function gata2(){QrySltAll('.perspectiva').forEach(e=>{insetAntes(e.parentNode,`<img class="MoldeStry Abslt Rd" src="Moldes/Molde_Insta_1.png" onclick="AbreItem(this.parentNode.parentNode)">`)})}
function gata3(){QrySltAll('.ScalaFlag').forEach((e,idx)=>{insetAntes(e.parentNode,`<img class="MoldeFlag Abslt Rd" src="Moldes/Molde_Wind_00${(idx+1)>4?4:idx+1}.png" onclick="AbreItem(this.parentNode.parentNode)">`)})}

function exibirImagem(){
  const Resute = QrySlt('.FotoGravata')
  const Inpt = QrySlt('#InptIMG')
  if(Inpt.files&&Inpt.files[0]){
    const reader = new FileReader()
    reader.onload = (e) => Resute.src=e.target.result
    reader.readAsDataURL(Inpt.files[0])
}}

function exibirStry(){
  const Resute = QrySlt('.perspectiva')
  const Inpt = QrySlt('#InptStry')
  if(Inpt.files&&Inpt.files[0]){
    const reader = new FileReader()
    reader.onload = (e) => Resute.src=e.target.result
    reader.readAsDataURL(Inpt.files[0])
}}

QrySlt('#InptIMG').addEventListener('change',exibirImagem)
QrySlt('#InptStry').addEventListener('change',exibirStry)



// Doidera ___________________________________________________________________________

/*

function loadIDPdd(){
  fetch(APIPlan).then(Resp=>Resp.json()).then(Plan=>{
    Historico(Plan)
    IDs = Plan.map(e=>Num(e.ID.replace('ID-','')))
    IDPdd = 'ID-'+(('0000'+(Math.max(...IDs)+1)).slice(-3))
    const IDnew = 'ID-'+(('0000'+(Math.max(...IDs)+1)).slice(-3))
    QrySltAll('#FormOrc > h2,#DivResult > h2').forEach(e=>{e.innerHTML = 'Orçamento: '+ IDnew}) // Cria ID
  })
}loadIDPdd()

*/

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

async function PesquisaKM(inpt){
  const listaLugares = {'Camaragibe':20,'São Lourenço':10,'Recife':40}
  Show([RsutFrete,RsutFrete.parentNode])
  if(inpt in listaLugares){await delay(2000)
  RsutFrete.innerHTML = listaLugares[inpt]
  }else{RsutFrete.innerHTML = 'Lugar não Encontrado'}
  }


//Funções do Modelo 3D CGI__________________________________________________________________________________


const altura = QrySlt('#Div-Inpt-Alt input')
const Largur = QrySlt('#Div-Inpt-Larg input')
const Comprm = QrySlt('#Compmnt')
const BackCub = QrySlt('#BackCub')

const Dist = 4 ; let AngX = 0 ; let AngY =  70 ; let LastCUB;
function SetCor(e){
 return new THREE.MeshBasicMaterial({color:e})
}

function Gera3d(div){
  const scene = new THREE.Scene()
  const Cam   = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
  const Ct    = new THREE.Vector3(0,0,0)
  const GtyBox= new THREE.BoxGeometry()
  const Render= new THREE.WebGLRenderer({antialias:true,alpha:true})
  scene.background = null;

   // Criar Eixos // vermelha (X), verde (Y) e azul (Z)
   const axesHelper = new THREE.AxesHelper(5)
   //scene.add(axesHelper)
  
  //Render.setSize(canvas.clientWidth,canvas.clientHeight)
  Render.setSize(110,90)
  Cam.position.set(0,0,90)
  div.innerHTML = ''
  div.appendChild(Render.domElement)

  // Define Cores
  const Alpha = new THREE.Color(SetCor('red'))
  const Trprt = new THREE.MeshStandardMaterial({color:Alpha,transparent:true,opacity:0.0})
  const CorRoxo = SetCor('#43006d')
  const CorLrnj = SetCor('#ff6200') 
  const CorRosa = SetCor('#a0007b')
  const CorRedd = SetCor('red')

  const iX = parseFloat(Largur.value)+0.1
  const iY = parseFloat(altura.value)+0.1
  const iZ = parseFloat(Comprm.value)+0.1

  // Cria Empt
  const empt = new THREE.Mesh(GtyBox,Trprt)
  if(LastCUB){empt.rotation.copy(LastCUB)
  }else{empt.position.copy(Ct)}
  CriaPlaca(empt)
  scene.add(empt)

 
  function CriaPlaca(empt){
    const cube = new THREE.Mesh(GtyBox,Trprt)
    cube.scale.set(iX, iY, iZ)
    cube.position.copy(empt.position)
    empt.add(cube)

    const CuboX = cube.position.x
    const CuboY = cube.position.y
    const CuboZ = cube.position.z

    const QntX = QtnCstl(cube,'x')
    const QntY = QtnCstl(cube,'y')
    const QntZ = QtnCstl(cube,'z')

    function QtnCstl(e,XYZ){
      return Math.max(Math.round(e.scale[XYZ])-1,0)
    }
    function Desloc(e,XYZ,Test) {
      const multiplier = Test === '-' ? -1 : 1
      return e.position[XYZ] + multiplier * e.scale[XYZ] / 2
    }
    function Space(XYZ){
      return cube.scale[XYZ] > 1 ? cube.scale[XYZ] / (QtnCstl(cube,XYZ)+1) : 0
    }

    // Cria os Quadros
    for(let i = 0; i < 12; i++){
      const Vara = new THREE.Mesh(GtyBox,Trprt)
      Vara.scale.set(0.1, 0.1, 0.1)

      switch (i) {
        // Face Principal
        case 0: // vértices (0, 1) | 'Roxo' Direita
          Vara.position.set(cube.scale.x / 2, 0, cube.scale.z / 2)
          Vara.scale.y = cube.scale.y-0.1
          Vara.material = CorRoxo
          break;
        case 1: // vértices (1, 2) | 'Laranja' Cima
          Vara.position.set(0, cube.scale.y / 2, cube.scale.z / 2)
          Vara.scale.x = cube.scale.x+0.1
            Vara.material = CorLrnj
          break
        case 2: // vértices (2, 3) | 'Roxo' Esquerda
          Vara.position.set(-cube.scale.x / 2, 0, cube.scale.z / 2)
          Vara.scale.y = cube.scale.y-0.1
          Vara.material = CorRoxo
          break
        case 3: // vértices (3, 0) | 'Laranja' Baixo
          Vara.position.set(0, -cube.scale.y / 2, cube.scale.z / 2)
          Vara.scale.x = cube.scale.x + 0.1
            Vara.material = CorLrnj
          break
        //  
        // Face Oposta
        case 4: // vértices (4, 5)
          if(Comprm.value=='0'){break}
          Vara.position.set(cube.scale.x / 2, 0, -cube.scale.z / 2)
          Vara.scale.set(0.1, cube.scale.y-0.1, 0.1)
            Vara.material = CorRoxo
          break
        case 5: // vértices (5, 6)
          if(BackCub.value=='0'){break}
          Vara.position.set(0, cube.scale.y / 2, -cube.scale.z / 2);
          Vara.scale.set(cube.scale.x - 0.1, 0.1, 0.1);
            Vara.material = CorRedd      
          break
        case 6: // vértices (6, 7)
          if(Comprm.value=='0'){break}
          Vara.position.set(-cube.scale.x / 2, 0, -cube.scale.z / 2);
          Vara.scale.set(0.1, cube.scale.y-0.1, 0.1);
            Vara.material = CorRoxo
          break
        case 7: // vértices (7, 0)
          if(BackCub.value=='0'){break}
          Vara.position.set(0, -cube.scale.y / 2, -cube.scale.z / 2);
          Vara.scale.set(cube.scale.x - 0.1, 0.1, 0.1);
            Vara.material = CorRedd
          break
        //
        // Laterais
        case 8: // vértices (0, 4)
          if(Comprm.value == '0'){break}
          Vara.position.set(cube.scale.x / 2, cube.scale.y / 2, -0.05)
          Vara.scale.set(0.1, 0.1,cube.scale.z)
            Vara.material = CorRosa
          break
        case 9: // vértices (1, 5)
          if(Comprm.value == '0'){break}
          Vara.position.set(-cube.scale.x / 2, -cube.scale.y / 2, -0.05)
          Vara.scale.set(0.1, 0.1, cube.scale.z)
          Vara.material = CorRosa
          break
        case 10: // vértices (2, 6)
          if(Comprm.value == '0'){break}
          Vara.position.set(-cube.scale.x / 2, cube.scale.y / 2, -0.05)
          Vara.scale.set(0.1, 0.1, cube.scale.z)
          Vara.material = CorRosa
          break
        case 11: // vértices (3, 7)
          if(Comprm.value == '0'){break}
          Vara.position.set(cube.scale.x / 2, -cube.scale.y / 2, -0.05)
          Vara.scale.set(0.1, 0.1, cube.scale.z)
          Vara.material = CorRosa
          break
        default:break
      }
      empt.add(Vara)
    }

    // Cria as Costelas
    function CmamaCostelas(V,H,x,y,z){
      if(BackCub.value!=='0'){
      CriaCostela(V,QntX,x,CuboX,CuboZ,Desloc(cube,z,'-'))} // Costas
      CriaCostela(V,QntX,x,CuboX,CuboZ,Desloc(cube,z,'+')) // Frente
      CriaCostela(V,QntZ,z,Desloc(cube,x,'-'),CuboY,CuboZ) // Esquerda
      CriaCostela(V,QntZ,z,Desloc(cube,x,'+'),CuboY,CuboZ) // Direita

      if(BackCub.value!=='0'){
      CriaCostela(H,QntY,x,CuboX,CuboX,Desloc(cube,z,'-'))} // Costa
      CriaCostela(H,QntY,x,CuboX,CuboX,Desloc(cube,z,'+')) // Frente
      CriaCostela(H,QntY,y,Desloc(cube,x,'-'),CuboX,CuboZ) // Esquerda
      CriaCostela(H,QntY,y,Desloc(cube,x,'+'),CuboX,CuboZ) // Direita
    }function CriaCostela(VH,Qtn,XYZ,posX,posY,posZ){
      for (let i = 0; i < Qtn; i++) {
        const Cstl = new THREE.Mesh(GtyBox,CorRoxo)
        
        const PosXYZ = {
          'x' : posX + (i + 1) * Space(XYZ) - cube.scale.x / 2,
          'y' : posY + (i + 1) * Space(XYZ) - cube.scale.y / 2,
          'z' : posZ + (i + 1) * Space(XYZ) - cube.scale.z / 2,
        }

        if(VH==='V'){
          if(XYZ==='x'){Cstl.position.set(PosXYZ[XYZ],0,posZ)}
          if(XYZ==='z'){Cstl.position.set(posX,0,PosXYZ[XYZ])}
          Cstl.scale.set(0.1,0.1,0.1)
          Cstl.scale.y = cube.scale.y - 0.1
        }
        if(VH==='H'){
          if (XYZ === 'y'){
            Cstl.position.set(posX, PosXYZ[XYZ], posZ)
            Cstl.scale.set(0.099,0.099,0.099)
            Cstl.scale.z = cube.scale.z - 0.1
            Cstl.material = CorRosa
          }
  
          if (XYZ === 'x') {
            Cstl.position.set(posX, PosXYZ['y'], posZ)
            Cstl.scale.set(0.099,0.099,0.099)
            Cstl.scale.x = cube.scale.x - 0.1
            Cstl.material = CorLrnj
          }
        }

        empt.add(Cstl)
      }
    }CmamaCostelas('V','H','x','y','z')
  }

  let zoomCur = 1.0

  // Atualiza Posição da Câmera
  function UpCam(){
    const x = Dist * zoomCur * Math.sin(AngX) * Math.cos(AngY);
    const y = Dist * zoomCur * Math.sin(AngY);
    const z = Dist * zoomCur * Math.cos(AngX) * Math.cos(AngY);
    Cam.position.set(x, y, z);
    Cam.lookAt(Ct) // pra onde ela ta olhando
  }

  /*

  // EventListeners para o movimento do Mouse
  let Drag = false  ;  let PvX = 0  ;  let PvY = 0 ; const Sensibily = 0.002
  canvas.addEventListener('mousedown',(e)=>{
    Drag = true ; PvX = e.clientX ; PvY = e.clientY
  });document.addEventListener('mouseup',()=>{
    Drag = false
  });document.addEventListener('mousemove',(e)=>{
    if (Drag){ // este 0.01 é a Sensibilidade
      AngX += (e.clientX - PvX) * Sensibily
      AngY += (e.clientY - PvY) * Sensibily
      PvX = e.clientX ; PvY = e.clientY
      UpCam()}
  })
  
  // chamada do zom
  //canvas.addEventListener("wheel", onMouseWheel, false)

  function onMouseWheel(event) {
    const Sensibily = 0.1
    const delta = Math.sign(event.deltaY)
    zoomCur += delta * Sensibily
    zoomCur = Math.min(Math.max(zoomCur, 0.1), 3.0)
    UpCam()
    animate()
  }

  */

  function animate() {
    requestAnimationFrame(animate)
    empt.rotation.y += 0.01
    LastCUB = empt.rotation.clone()
    Render.render(scene,Cam)
  }animate();UpCam()
}





// Viagens ________________________________________________

function hojeInfo(inpt){ // tentar jogar isso pra a Biblioteca
  ArryPag[2] = QrySlt(inpt).value = NewDate ; RequedInfo('2')
}

const Endereco = QrySlt('#Endereco')
const RsutFrete = QrySlt('#RsutFrete')
Endereco.addEventListener('keyup',async(e)=>{
  if(KeyEnter(e)){
    PesquisaKM(Endereco.value)
    await new Promise((r)=>{
      new MutationObserver(r).observe(RsutFrete,{childList:true})})
    ArryUni[2]=Endereco.value ; ArryUni[3]=RsutFrete.innerHTML
    RequedInfo('1')}
})
Prazo.addEventListener('input',()=>{DescPrazo()})

function troctroc(){
  ModAlnotta.classList.toggle("media80")

  const ModalH1 = QrySlt("#ModalNota h1",ModAlnotta)
  
  if(ModAlnotta.classList.contains("media80")){ModalH1.style.fontSize = "30px"}
  else{ModalH1.style.fontSize = "15px"}
}

function proxinpt(e){
  if(KeyEnter(e)){
  let idx = parseInt(e.getAttribute('tabindex'))
  let next = QrySlt('[tabindex="'+(idx+1)+'"]')
  if (next){next.focus()}}
}

document.addEventListener('DOMContentLoaded',()=>{
  
  QrySltAll('input[name="Clnt"],input[name="Cntt"]').forEach(i=>{i.addEventListener('keydown',(e)=>{
    const bdjss = QrySltAll('.Bandeija > div')
    handleKeyDown(e,bdjss)})})
})

let BdjX = -1
function handleKeyDown(e,i){
  if(e.key==='ArrowDown'){BdjX = (BdjX + 1) % i.length ; BdjUP(i) }
  else if(e.key==='ArrowUp'){BdjX = (BdjX - 1 + i.length) % i.length;BdjUP(i) }
  else if(e.key==='Enter'){if(BdjX >= 0 && BdjX < i.length){e.target.value = i[BdjX].querySelector('div:first-child').textContent}}
}

function BdjUP(items){
  items.forEach((i,idx)=>{
    if(idx===BdjX){i.style.background = '#ff6600'}
    else{i.style.background = '#4d4d4d'}})
}


let startX
let startTranslateX
let currentIndex = 1
let isDragging = false
let currentX = 0

/*

  document.addEventListener('touchstart',(e)=>{
      startX = e.touches[0].clientX
      startTranslateX = currentX
      isDragging = true
  })
  document.addEventListener('touchmove',(e)=>{
      if (!isDragging) return

      const currentTouchX = e.touches[0].clientX
      const deltaX = currentTouchX - startX

      currentX = startTranslateX + deltaX
      Paginas.style.transform = `translateX(${currentX}px)`
  })
  document.addEventListener('touchend',(e)=>{
      if (!isDragging) return

      isDragging = false

      const endX = e.changedTouches[0].clientX
      const deltaX = endX - startX

      if (Math.abs(deltaX) > 50){
          if(deltaX > 0){if(currentIndex>0){currentIndex--}}
          else{if(currentIndex<4){currentIndex++}}
      }

      currentX = -currentIndex * (window.innerWidth)
      Paginas.style.transform = `translateX(${currentX}px)`
  })





document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  startTranslateX = currentX;
  isDragging = true;
  isVerticalMove = false; // Adicione esta linha para rastrear se o movimento é vertical ou horizontal.
});

document.addEventListener('touchmove', (e) => {
  if (!isDragging) return;

  const currentTouchX = e.touches[0].clientX;
  const currentTouchY = e.touches[0].clientY; // Adicione esta linha para obter a posição Y do toque.
  const deltaX = currentTouchX - startX;
  const deltaY = currentTouchY - startY; // Calcule a diferença em Y.

  // Verifique se o movimento é predominantemente vertical ou horizontal.
  if (Math.abs(deltaY) > Math.abs(deltaX)) {
      isVerticalMove = true;
  } else {
      isVerticalMove = false;
  }

  currentX = startTranslateX + deltaX;
  Paginas.style.transform = `translateX(${currentX}px)`;
});

document.addEventListener('touchend',(e)=>{
  if (!isDragging) return

  isDragging = false
  isVerticalMove = false // Reset isVerticalMove após o toque.

  const endX = e.changedTouches[0].clientX
  const deltaX = endX - startX

  // Verifique se o movimento foi bloqueado.
  if (Math.abs(deltaX) > 50 && !isVerticalMove) {
      if (deltaX > 0) {
          if (currentIndex > 0) {
              currentIndex--
          }
      } else {
          if (currentIndex < 4) {
              currentIndex++
          }
      }
  }

  currentX = -currentIndex * window.innerWidth
  Paginas.style.transform = `translateX(${currentX}px)`
});

*/
//


function Historico(ArryOBJ){
  Unique(ArryOBJ,'ID').forEach(id=>{
    const itemsWithID = ArryOBJ.filter(i=>i.ID===id)
    itemsWithID.sort((a,b) => new Date(b.Data) - new Date(a.Data))
    const latestItem = itemsWithID[0]
    const NewDiv = CreateTag('div')
    QrySlt('#BlockHistry').appendChild(NewDiv)
    itemsWithID.forEach(e=>{
      
      const clone = QrySlt('#Div-Blocks > div').cloneNode(true)
      Show(clone)
      const Itens = e.Item.split(',')
      const Medds = e.Medidas.split('/').map(i=>i.split('|'))
      const Tb = tabela.filter(e=>Itens.includes(e[9]))
      const Clientes = e.Cliente.split('|')
      const ItemFilt = Itens.map((e,x)=>{
        const Lin = Tb.find(r=>r[9]===e)
        return [Medds[x][0],Lin[0],Lin[1],Lin[2],Lin[3],Lin[4],Medds[x][1],Medds[x][2],`R$ ${Medds[x][3]}`]
      })

      const Barra = e.Barr.split('')
      const BarrUpp = UppCase(Barra)
      const BarrLow = LowCase(Barra)
        
      function Qry(e){return QrySlt(e,clone)}
      function Inn(e,Inner){QrySlt(e,clone).innerHTML = Inner}
      //
      Barra.forEach((b,idx)=>{Qry('.BlockBarra').innerHTML += `<div style="background:${idx<BarrUpp.length?'#e000c2':'gray'}"></div>`})
      Barra.forEach((b,idx)=>{Qry('.BBndjStts').innerHTML += `<div style="fill:${idx<BarrUpp.length?'#e000c2':'gray'}">${AbrevTaref[b.toUpperCase()][1]}</div>`})
      Qry('.BlockStts').style.background = e.Stts
      Inn('.BlockStts',AbrevTaref[BarrLow[0]?BarrLow[0].toUpperCase():'K'][1])
      Inn('.BlockDate',ConvertData(e.Data))
      Inn('.BlockID',e.ID)
      Inn('.BlockName',Clientes[2])
      Inn('.BlockValr',e.Total)
      Qry('.BlockValr').style.color = e.IDMpag ? '#00b118' : 'red'

      const PorcentPag = (Num(e.JaPag)/Num(e.Total))*100

      Qry('.ProgressPag').style.width = `${PorcentPag}%`
      Qry('.ProgressPag').style.background = InterCor(PorcentPag)
      Inn('.ProgressPag',RS(e.JaPag))
      
      Inn('.BlockTable',TableHTMLall(ItemFilt))
      QrySltAll('.BBndjClnt > div > div',clone).forEach((e,idx)=>{insetBefor2(e,`<div>${Clientes[idx]?Clientes[idx]:'-'}</div>`)})
      NewDiv.appendChild(clone)
        Qry('.BBndjItem span').innerHTML = Qry('.BBndjItem').clientHeight
        Qry('.BBndjPgmt span').innerHTML = Qry('.BBndjPgmt').clientHeight
        Qry('.BBndjStts span').innerHTML = Qry('.BBndjStts').clientHeight
        Qry('.BBndjClnt span').innerHTML = Qry('.BBndjClnt').clientHeight
      QrySltAll('.BBndj',clone).forEach(e=>e.style.height = '0px')
      
      e === latestItem ? Show(clone) : None(clone)
      if(itemsWithID.length===1 || e===itemsWithID[0]){None(Qry('.Prox'))}
      if(itemsWithID.length===1 || e===itemsWithID[itemsWithID.length-1]){None(Qry('.Prev'))}
    })
  })
}
function ShowBBndj(btn,bndj){
  const Parent = bndj==='.BBndjStts'? Parent2(btn) : bndj==='.BBndjPgmt'? Parent3(btn) : Parent5(btn)
  const bdj = QrySlt(bndj,Parent)
  const heit = Num(QrySlt(bndj+' span',Parent).innerHTML)

  if(bdj.clientHeight === 0){AnimaHeight(bdj,heit,200,'in')}
  else{AnimaHeight(bdj,0,200,'out')}
}
function AddPgmnt(Btn){
  const Lin = ArySltAll('input, select',Btn.parentNode.parentNode).map(e=>e.value)
  const clone = Btn.parentNode.parentNode.cloneNode(true)
  QrySlt('tbody',Parent4(Btn)).appendChild(clone)
  
  Parent5(Btn).style.height = Parent5(Btn).clientHeight + 20 +'px'
  QrySltAll('td',clone).forEach((e,idx)=>{
      if(idx<3){e.innerHTML=Lin[idx]}else{e.innerHTML=''}})
}
function PrevProx(btn,type) {
  const Filhos = Parent4(btn).children
  const ElemtAtual = Parent3(btn)
  const IdxAtual = IndiceDe(Parent3(btn))

  if (type === 'Prox' && IdxAtual>0){
    None(ElemtAtual)
    Show(Filhos[IdxAtual-1])
  } else if(type === 'Prev' && IdxAtual<Filhos.length-1){
      None(ElemtAtual)
      Show(Filhos[IdxAtual+1])
  }
}




function Reajuste(){
  const vazio = QrySlt('#InnerVazio')
  const VlrAntes = QrySlt('#TotalCrud')
  AbrirModalHTML(FundoModal,vazio)
  vazio.innerHTML = `<input type="text" placeholder="${VlrAntes.innerHTML}">`
    const inputElement = vazio.querySelector('input')
    inputElement.addEventListener('keyup',(e)=>{
      if(KeyEnter(e)){
        VlrAntes.innerHTML = e.target.value
        None(FundoModal)
      }
    })
}



