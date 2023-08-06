// Declarações
  // Const's Fundos
    const FundoModal = QrySlt('#Fundo-Modal')
    const InnerVazio = QrySlt('#InnerVazio')
    
    const FormOrcamento = QrySlt('#FormOrcamento')
    const BtnInfo2 = QrySlt('#btnINFO2')
    const ModalInfo = QrySlt('#ModalInfo')
    const Prazo = QrySlt('#Prazo')
    const ModAlnotta = QrySlt("#ModalNota")
    const ResultFilTable = QrySlt('#resultfilter1')

  // Const's Login
    const LgTop = QrySlt('#Login-Top')
    const Login = QrySlt('#Login-Cod')
    const LoginSpn = QrySlt('#Span-Login')
    const I_Senha = QrySlt('#Inpt-Senha')
    const ImgPerfil = QrySlt('#Img-Perfil')

  // Const's Clientes
    
    const GrupClnt = QrySlt('#Grupo-Cliente')
    const GrupClntSv = QrySlt('#GrupoClntSave')
    const GrupClntInfSv = QrySlt('#GrupoClntSaveInfo')
    const RestaNome = QrySlt('#RestaNome')
    const DivCnttForm = QrySlt('#Div-Inpt-Cntt')
    const I_Clnt = QrySlt('#Div-Inpt-Clnt input')
    const InnClnt = QrySlt('#Inner-Clnt')

  // Const's Form
    const I_Serv = QrySlt("#Div-Inpt-Serv select")
    const I_Tipo = QrySlt("#Div-Inpt-Tipo select")
    const I_Cbmt = QrySlt("#Div-Inpt-Cbmt select")
    const I_Gram = QrySlt('#Div-Inpt-Gram select')
    const I_QFix = QrySlt('#Div-Inpt-QFix select')
    const I_Etc = QrySlt("#Div-Inpt-Etc input")
    const I_Lcal = QrySlt("#Div-Inpt-Lcal input")
    const I_Qnt = QrySlt('#Div-Inpt-Qnt input')

    const DivEtc = QrySlt("#Div-Inpt-Etc")
    const DivTipo = QrySlt('#Div-Inpt-Tipo')
    const DivCbmt = QrySlt('#Div-Inpt-Cbmt')
    const DivLarg = QrySlt('#Div-Inpt-Larg')
    const DivAlt = QrySlt('#Div-Inpt-Alt')

    const Grupo_Tipos = QrySlt('#Grupo-Tipos')
    const Grupo_Medidas = QrySlt('#Grupo-Medidas')
    let ArryMdds=['#Div-Inpt-Larg input','#Div-Inpt-Alt input','#Div-Inpt-Qnt input']

    const Iccon = '.Maisss > div:first-child'
//_________________________________________________________________________________________________________

// Declarações dos Arrays
  let IDPdd = 'ID-001'
  let ITitem = 'ID-001'
  let ArryUni = ['','','','',''] // Art,Dsgn,Fret,Lcal,VlrFret
  let ArryClnt = ['','','','','','','',''] // Clnt,Cntt
  let ArryItem = []
  let ArryPag = ['','',''] // //Form,Vlr,Data
  let ArryPDD = {IDPdd:{'Clnt':ArryClnt,ITitem:ArryItem,'UNI':ArryUni,'Pag':ArryPag}}
  
  let ObjInfo = {}
  let ObjItem = {}
  let NewArryItem = ['Gato']
  let IDs = []
  let W400 = window.matchMedia("(max-width: 500px)")

// OnLoad's_________________________________________________________________________________________________________

  document.addEventListener('DOMContentLoaded',()=>{
    AddInnSVG()
    PreLoadIMG()
    BloqueaData('#Prazo, #dataPagInfo')
    ReloadTab()
    MenuNav('nav a, #Home')
    LoadListServ()
    W400.addListener(MediaQuere)
    
    QrySltAll('input[name="Cntt"]').forEach(I=>{I.addEventListener('input',e=>{MaskkCntt(e)})})
    QrySltAll('#Grupo-Medidas input').forEach(e=>{e.setAttribute('inputmode','numeric')}) // campo Numerico
    document.addEventListener('click',e=>{ClickFora(e)}) // remover Coisas com Click Fora
    window.addEventListener('scroll',()=>{ // Mostrar ou não Btn RoloTop
      const Btn = QrySlt('#RoloTop')
      if ((window.scrollY || window.pageYOffset) >= 250) {
        Show(Btn)
      }else{
        setTimeout(()=>{
          None(Btn)},100)
      }
    })
    ArySltAll('select').forEach(E=>{E.addEventListener("change",FilTable)})

    ReloadPlanPdds(APIPlan)
    ReloadPlanClnt(APIPlanClnt)
  })
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
  }
  function PreLoadIMG(){
    tabela.filter(e=>e[8]!==''||e[8]!==null).forEach(e=>{
      insetBefor('#image-preloader',`<img src="${LinkDrive}${e[8]}">`) })
  }
  function ClickFora(e){
    const E = e.target
      if(!ArySltAll('.Bandeija, #InputdeCor, #ListaCor li').includes(E)){
        QrySltAll('.Bandeija').forEach(e=>e.innerHTML = "")
        QrySltAll('input[type="text"]').forEach(inpt=>Rad0(inpt))
        None('#ListaCor')
      }
  }
  function ReloadPlanPdds(API){
    fetch(API).then((response)=>response.json())
      .then((data)=>{
        const table = QrySlt("#TabelaPlan")
        table.innerHTML = ""

        data.forEach((item) => {
          const row = table.insertRow()
          row.insertCell().innerText = item.Login
          row.insertCell().innerText = item.Stts
          row.insertCell().innerText = item.ID
          row.insertCell().innerText = item.IT
          row.insertCell().innerText = item.Serv
          row.insertCell().innerText = item.Tipo
          row.insertCell().innerText = item.Cbmt
          row.insertCell().innerText = item.Cbmt2
          row.insertCell().innerText = item.Medidas
          row.insertCell().innerText = item.Valor
          row.insertCell().innerText = item.Custo
          row.insertCell().innerText = item.Calc
          row.insertCell().innerText = item.Descr
        })
      })
      .catch((error)=>{console.error("Erro ao recuperar dados:",error)})
  }
  function ReloadPlanClnt(API){
    fetch(API).then((response) => response.json())
      .then((data)=>{
        const table = QrySlt("#TableCliente")
        table.innerHTML = ""

        data.forEach((item) => {
            const row = table.insertRow()
            row.insertCell().innerText = item.IDClnt
            row.insertCell().innerText = item.Tag
            row.insertCell().innerText = item.Cliente
            row.insertCell().innerText = item.NomeCompleto
            row.insertCell().innerText = item.Apelido
            row.insertCell().innerText = item.Contato
            row.insertCell().innerText = item.Endereço
            row.insertCell().innerText = item.Loja
            row.insertCell().innerText = item.CnttLoja
            row.insertCell().innerText = item.Categoria
            row.insertCell().innerText = item.Veiculo
            row.insertCell().innerText = item.Stts
            row.insertCell().innerText = item.LinksPdds
            row.insertCell().innerText = item.Desc
          })

        AtualizaConstCntts('#TableCliente')
      })
      .catch((error)=>{console.error("Erro ao recuperar dados:",error)})
  }
  function BloqueaData(Stg){
    QrySltAll(Stg).forEach(i=>{i.min = new Date().toISOString().split('T')[0]})
  }
  function MenuNav(Stg){
    QrySltAll(Stg).forEach(e=>{e.addEventListener('click',()=>{
    
      const Abas = {
        'Home': QrySlt('#Aba-Home'),
        'Orcamento': QrySlt('#Aba-Orcamento'),
        'Relatorio': QrySlt('#Aba-Relatorio'),
        'Agenda': QrySlt('#Aba-Agenda'),
        'Clientes': QrySlt('#Aba-Clientes'),
      }
  
      for(const [key,aba] of Object.entries(Abas)){
        aba.style.display = (key === e.getAttribute('id')) ? 'flex' : 'none'}})
    })
  }
  function MediaQuere(max){
    let C = QrySlt('.Cabecalho')
    let R = QrySlt('#DivResult')

    if(max.matches){
      ModAlnotta.classList.add("media80")
      None('#trocatroca')
      C.classList.remove("Bt")
      R.classList.remove("Cl")
      TrocaPose('#DivResult',0)
    }else{
      Show('#trocatroca')
      ModAlnotta.classList.add("media80")
      C.classList.add("Bt")
      R.classList.add("Cl")
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
  function LoadListServ(){
    for(const Grup in grupos){
      I_Serv.insertAdjacentHTML('beforeend',`<optgroup label='${Grup}'>${Options(grupos[Grup])}</optgroup>`)
    }
  }

// Funções pra Abrir Modais ______________________________________________________________________________________________________________

  function AbreLogin(){ // 1-HTML
    AbrirModalHTML(FundoModal,QrySlt('#ModalLogin')) ; LoginSpn.innerHTML='' ; I_Senha.focus()
  }
  async function AbreInfo(Arry,id,nada,Total,btn){ // 2-JS
    if(SemLogin()){MiniInput('Senha') ; await PrmssInnr(Login)}
    AbrirModalHTML(FundoModal,QrySlt('#ModalInfo'))
    QrySlt('#Title-Info').innerHTML=`${IDPdd}: ${'Nome'}, Total: ${Total}`

    // Chama os EventListener
    const formInfo1 = QrySlt('#Modal-Info1') ; const SbmtInfo1 = QrySlt('#btnINFO1')
    const formInfo2 = QrySlt('#Modal-Info2') ; const SbmtInfo2 = QrySlt('#btnINFO2')
    const SbmtInfo3 = QrySlt('#btnINFO3')
  
    formInfo1.addEventListener('input',()=>{Ouvinte(formInfo1,SbmtInfo1)})
    QrySltAll('#Modal-Info1 select').forEach(e=>{e.addEventListener('change',()=>{Ouvinte(formInfo1,SbmtInfo1)})})
  
    formInfo2.addEventListener('input',()=>{Ouvinte(formInfo2,SbmtInfo2)})
    QrySltAll('#Modal-Info2 select').forEach(e=>{e.addEventListener('change',()=>{Ouvinte(formInfo2,SbmtInfo2)})})
  
    SbmtInfo1.addEventListener('click',()=>{Show('#Modal-Info2');None('#Modal-Info1')})
    SbmtInfo3.addEventListener('click',()=>{Show('#Modal-Info1');None('#Modal-Info2')})
    SbmtInfo2.addEventListener('click',()=>{None(FundoModal);SavePdd('','','Info','','')})
    
  }
  function AbreCadastro(){ // 1-HTML
    const ModalCadastro = QrySlt('#ModalCadastro')
    AbrirModalHTML(FundoModal,ModalCadastro)
    Show(ModalCadastro)
  }
  function MiniInput(tipo){ // 2-JS
    let palce = tipo === 'Senha' ? 'Insira a Senha' : tipo === 'Clnt' ? 'Nome do Cliente' : ''
    let type = tipo === 'Senha' ? 'password' : 'text'
    InnerVazio.innerHTML = 
    `<input class="MiniSenha" type="${type}" placeholder="${palce}" onkeyup="TestSenha(event,'${tipo}',this,this.parentNode)">`
    AbrirModalHTML(FundoModal,InnerVazio) ; InnerVazio.children[0].focus()
  }
  function AbreItem(Arry,Mdd,IMG){ // 1-JS
    AbrirModalHTML(FundoModal,QrySlt('#Modal-Item')) ; const NwArry = Arry.split('/')
    QrySlt('#Conteudo-Item').innerHTML = `
        <div class="itemfilter Ct Cl w100 Rdd">
          <div class="RstServ">${NwArry[2]} ${NwArry[3]}</div>
          <div id="FotoItem"><img src="${IMG}"></div>
          <div>${Mdd.split('/').map(i=>`<div>${i}</div>`).join("").replace('*','')}</div>
        </div>
        <button onclick="Copy('${Mdd}',this)">Copy Itens</button>`
  }
  function AbreNota(Mdd,VlrFinall,VlrDescs){

    const CSS = 'style="color: white"'
    QrySlt('#DataNota').innerHTML = NewDate
    const ModalNota = QrySlt('#ModalNota')
    AbrirModalHTML(FundoModal,ModalNota)
    QrySlt('#Titulo-Nota').innerHTML = `<h1>${IDPdd}: ${InnClnt.innerHTML}</h1>`
    QrySlt('#conteudo-nota').innerHTML = `
    <table id="TabelaNotinha" class="w100"><thead><tr><th ${CSS}>Serviços</th></tr></thead></table>

      <div id="DescrNOTTApdd" class="Ct Cl">${Mdd.split('/').map(i=>`<div class="magem">${i.replace(/\./g,',')}</div>`).join("").replace(/\*.*\*/,'').replace("*",'')}</div>
    
      <h2 class="Hr Ct">Total R$ ${VlrDescs.replace(/\./g,',')}</h2>

      `
  }
    function TestSenha(e,tipo,input){ // 'e' = Tecla
      let inpt = e==='' ? QrySlt(input) : input
      if(KeyEnter(e)||e===''){
        if(tipo==='Clnt'){QrySlt('#Inner-Clnt').innerHTML = inpt.value ; None(FundoModal)}
        if(tipo==='Senha'){
          const Spn = 'Senha Inválida' ; const Cryp = CrypPass(inpt.value)
            if(User[Cryp]){None([FundoModal]) ; LgTop.innerHTML=User[Cryp][1] ; Login.innerHTML=User[Cryp][0] ; ImgPerfil.src=User[Cryp][2]}
            else{LoginSpn.innerHTML=Spn ; inpt.placeholder=Spn}
          inpt.value='' ; inpt.focus()}
      }
    }

// OnInputs__________________________________________________________________________________________

  document.addEventListener('input',()=>{handle();Clientes();FilTable()})

  function handle(){
    QrySltAll('input[type="text"][name="'+event.target.name+'"]').forEach(i=>{i.value = event.target.value})
    QrySltAll('div[data="'+event.target.name+'"]').forEach(i=>{i.innerHTML = event.target.value})
  }
  function Clientes(){ // onInput Clnt, e Cntt
    const e = event.target
    if(e.name === 'Clnt') {QrySlt('#Inner-Clnt').innerHTML = e.value;BandejaFit(e,2);ShowCntt(DivCnttForm);ShowBtnCadastro()}
    if(e.name === 'Cntt') {BandejaFit(e,5)}

    function ShowCntt(DivCnttForm){
      if(I_Clnt.value===''){None(DivCnttForm)}else{Show(DivCnttForm)}
    }
    function ShowBtnCadastro(){
      if(ArryClnt[7]===''){
           QrySltAll('.btn_cdstr').forEach(e=>Show(e))}
      else{QrySltAll('.btn_cdstr').forEach(e=>None(e))}
    }
    function BandejaFit(inpt,indx){ // preciso só ocultaar os outros

      QrySltAll('.Bandeija').forEach(e =>{
        
        if(e.parentNode === inpt.parentNode.parentNode){Show(e)}else{None(e)}

        Rad0(inpt); e.innerHTML = ""
        let value = inpt.value.toLowerCase()
        if (!value)return
  
        Cttlist.map((e,idx) => [e[indx],idx])
        .filter(([opt])=>opt.toLowerCase().includes(value))
        .forEach(([opt,Idex])=>{RadB(inpt)
          const li = CreateTag('div')
          li.innerHTML=`<div>${opt}</div>`
          if (indx===5){li.innerHTML+=`<div>${Cttlist[Idex][2]}</div>`}
            li.addEventListener("click",()=>{
              ArryClnt = [...Cttlist[Idex]]
              Rad0(inpt) ; ShowClntSalvo() ; FilTable()
              e.innerHTML = ""
            })
            e.appendChild(li)})
            Snap(e,inpt)
      })
    }
  }
  function ShowEditClnt(){
    if(ArryClnt[7]===''){
         QrySltAll('.btn_edtcl').forEach(e=>Show(e))}
    else{QrySltAll('.btn_edtcl').forEach(e=>None(e))}
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
  }
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
    unddback = undd

    if(I_Cbmt.options[1].value.trim() === ''
    || I_Cbmt.options[1].value === '-'){
      None(DivCbmt)}else{Show(DivCbmt)}
  }

// FORM ________________________________________________



function NewOrcamentos(btn){
  PushArry(IDs,"#TabelaPlan tr td:nth-child(3)")
  IDPdd = ('0000'+(Math.max(...IDs)+1)).slice(-3)
  QrySltAll('#FormOrc > h2,#DivResult > h2').forEach(e=>{e.innerHTML = 'Orçamento: '+ IDPdd}) // Cria ID

  Show(FormOrcamento)
  None(btn.parentNode)

  QrySltAll('select').forEach(e=>{e.addEventListener('change',e=>{ShowTipo();LoadCor()})})

}
function LoadCor(){
  // se o serviço tiver opção de cor, então MostraMostra
  QrySlt('#InputdeCor')
}
function CloseForm(e){   
    e.addEventListener('click',()=>{
      e.classList.add('clicked')
      FormOrcamento.classList.add("CloseForm")

      setTimeout(()=>{
        Show(QrySlt('#NewOrcamento').parentNode)
      },100)
      setTimeout(()=>{
        e.classList.remove('clicked')
        FormOrcamento.classList.remove("CloseForm")
        None(FormOrcamento)
      },500)})
}
function clearForm(){
  QrySltAll('input, select',FormOrcamento).forEach((e) => (e.value = ''))
  FilTable()
  EscMdds('All')
}
function ReloadForm(){
  ReloadTab()
  FilTable()
  const Mais = QrySlt('#Div-Inpt-Mais').children
  if(Mais.length===2){None(Iccon)}else{Show(Iccon)}
}
function ClonaMdd(btn){
  const INDX = isNaN(btn) ? IndiceDe(btn.parentNode) : btn
  Show(Iccon)
  ArySltAll('#Grupo-Medidas > div').forEach(div=>{
    const inpt = QrySltAll(".Maisss, input",div)
    const Utm = inpt[inpt.length-1]
    const NewInpt = Utm.cloneNode(true)

    if(NewInpt.hasAttribute("data-Tab")){NewInpt.value=''}

    div.insertBefore(NewInpt,div.children[INDX+1])
  })
  ReloadForm()
  ReajustaTabindex()
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

  ReloadForm()
}
document.addEventListener('keydown',(e)=>{ClonaMddKey(e)})
function ClonaMddKey(e) {
  if (e.key === '+') {
    e.target.value = e.target.value.replace('+', '')
    ClonaMdd(IndiceDe(e.target))
    console.log(IndiceDe(e.target))
  }
  ReloadForm()
}
function ReloadTab(){ // Ajeitar essa função q nem precisa mais!
  
  QrySltAll('input[data-Tab]').forEach(inpt=>{
  
  inpt.addEventListener("keyup",(e)=>{
    let inputses = QrySltAll('input[placeholder="0 UND"]',inpt.parentNode)
    let ultimo = inputses[inputses.length - 1]
    if(inpt===ultimo){return}
    if(e.key === "Tab" || KeyEnter(e) || e.key === "+"){
      e.preventDefault()
      let nextInput = getNextInput(inpt,inpt.parentNode.parentNode)
      if (nextInput){nextInput.focus()}
    }
  })})
  
  function getNextInput(inpt,DivInpt){
    return QrySlt(`input[data-Tab="${TabIndx(inpt,1)}"]`,DivInpt)
  }
}
function reajustarInputs(Div,Idx) {
  const inpt = QrySltAll(`${Div} input`)
  let IDX = Idx

  inpt.forEach((e,idx)=>{
    e.value = e.value.replace('+', '')
    e.setAttribute("data-Tab", `${idx === 0 ? Idx : (IDX += 3)}`)
   
  })
}
function ReajustaTabindex() {
  reajustarInputs("#Div-Inpt-Larg",1)
  reajustarInputs("#Div-Inpt-Alt", 2)
  reajustarInputs("#Div-Inpt-Qnt", 3)
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
    const VlrFinal = Cm(Totais[1])
    const VlrM2 = Cm(Vlr)
    const Desc = (i=Cttlist.findIndex(I=>I.includes(ArryClnt[0])))=>i+1?Cttlist[i][13]:0
    const DescMDD = Totais[3]>=4 && onOff==='on' ? Totais[3]/(120+Totais[3]*10) : 0
    const ShowNone = Desc() === 0 ? '' : '' // no true é 'none'
    const ShowNone2 = onOff === 'off' ? 'none' : ''
    const TotalDesc = Calc.match(/OFS/) ? Cm(Vlr) : Cm(Totais[1]*(1-Desc()-DescMDD))
    const CBMT = `${Cbmt} (${Gram})`.replace(/\s\(\)/,'')
    const QNT = QFix !== 'Todos' ? QFix : I_Qnt.value
    const IMG = Foto ? Foto.match('.jpg') ? Foto : `${LinkDrive}${Foto}` : ''
    const Etc = I_Etc.value
    const Mdds  =Totais[0].map(I=>`${I[0]}|${I[1]}|${I[2]}|${I[3]}`).join(',')
    const Mdds2 =Totais[0].map(I=>`${I[0]} - ${Serv} ${Tipo} (${I[1]} x ${I[2]}) R$ ${Cm(I[3])}`).concat(`*Total: R$ ${TotalDesc}*`).join('/')

    let NewItem=[GerarIT(),'Stts',Serv,Tipo,CBMT,QNT,Mdds,Desc(),TotalDesc,VlrM2,Cust,Calc,Foto,Etc]
    
    let SAVENewItem=[
      'Login','Stts',IDPdd,GerarIT(),Serv,Tipo,CBMT,QNT,Mdds,TotalDesc,Cust,Calc,Etc]

    let NewItemaDD=[GerarIT(),QNT,Serv,Tipo,CBMT,Mdds,' Mdd2',TotalDesc]

      let FuncIMG = `AbreItem('${NewItem.join('/')}','${Mdds2}','${IMG}')`
      let FuncAdd = `addyCRUD('${NewItemaDD.join('/')}');Show(['#Div-CRUD','#SavSav']);Scroll('Fim');OcultaCoisas('${ResultFilTable}')`
      let FuncSav = `SavePDDD('${SAVENewItem.join('/')}','Saver','Filter','${TotalDesc}')`
      let FuncEnt = `AbreInfo('${NewItem.join('/')}','Entrada','Filter','${TotalDesc}','this')`
      let Comment = Serv==='Placa' ? Totais[2].map(c=>`<div>${c}</div>`).join('') : ""
      let Ferro = Serv==='Placa' ? Totais[4].map(c=>`<div>${c}</div>`).join('') : ""
      let Alumn = Serv==='Placa' ? Totais[5].map(c=>`<div>${c}</div>`).join('') : ""
      

    const item = CreateTag('div')
    item.innerHTML =

      `<div class="itemfilter Ct Cl w100 Rdd">
        <div class="RstTitle w100 Pddn-XY Ct Bt">
          <div class="RstServ ppt" onclick="AbreNota('${Mdds2}','${VlrFinal}','${TotalDesc}')">${Serv} ${Tipo}</div>
          <div class="RstValrM2 Ct"> <div class="FtLt CrCnz">(Valor por Metro)</div>R$ ${VlrM2} m²</div>
        </div>
        <div class="Ct Bt Pddn-XY">
          <div id="FotoFilter">
            ${
              Foto ?
              Serv==='Placa'? 
              `<div id="Canvs${indx}" class="canvas"></div>` :
              `<img src="${IMG}" onclick="${FuncIMG}">` :
              `<div class="SVGFilt Ct">${IconSemFoto}</div>`}</div>

          <div class="Ct Cl"><div class="Descricao">
                <div><strong>Acbmnt: </strong>${Cbmt}</div>
                <div><strong>Qnt: </strong>${QFix} Und</div>
                <div><strong>Grama: </strong>${Gram}</div>
              </div><hr class="w100"><div class="valores Ct Cl w100">
                
                <div class="RstValrDesc ${ShowNone} ${ShowNone2}">R$ ${VlrFinal} <div>${IconXDesc}</div> </div>
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

  QrySltAll('.canvas').forEach(e=>{Gera3d(e)})
  OcultaCoisas(ResultFilTable)
}
function OcultaCoisas(e){

  if(EShow('#Div-CRUD')){
    Show('#SavSav')
    // oculta os BTN do filter
    QrySltAll('#resultfilter1 button').forEach(e=>{if(!e.textContent.includes('Adicionar')){None(e)}})
  }else{
    None('#SavSav')
  }

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
  const QNT = ArySltAll('#Div-Inpt-Qnt input').map(I=>I.value * Tipo.match(/FV/) ? 2 : 1)

  // 'SOMA' Calculo Total, 'LIST' Calculo Unidade
  const SOMA = TotalCress(Vlr,QNT.reduce((acc,Qnt,x)=>acc+Qnt*LAG[x]*ALT[x],0))
  const LIST = QNT.map((Qnt,x)=>[Qnt,LAG[x],ALT[x],TotalCress(Vlr,Qnt*LAG[x]*ALT[x])])

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
function Ouvinte(form,btn){ // a função que livera os Botões Submit e Cria os Arrays
  const date = event.target.getAttribute('data')
  const Value = event.target.value
  
// na verdade todo Show que Acontecer aqui, deve acontecer em todos lugares, tipo (Show Endereço Info, tem q dar Show no Form tbm)
  if(date){const val = Value==='NPag' ? ['#Endereco'] : ['#vlrPagInfo','#dataPagInfo']
    if(Value==='NPag'||Value==='Graff'){None(QrySlt(date)) ; EscRequired(val)}
    else{Show(QrySlt(date)) ; AddRequired(val)}
  if(Value.match(/^_/) || Value===''){None('#divdesigner')
  }else{Show('#divdesigner')}
  }
  const valid = ArySltAll('input[required]',form).concat(ArySltAll('select[required]',form))
    .every(e=>e.value) && ArySltAll('input[type="radio"][required]:checked',form).length>0
  ToggleShowNone(btn,valid)

  // Criar o Obj deve servir pra Todos, ele só ta só pra o Modal-Info, mas será pra (Form do Orçamento, inuts do CRUD, e para o Modal-Info)
  const Rad = ArySltAll('input[type="radio"]:checked, select,input[type="checkbox"]:checked',ModalInfo).map(i=>`${i.name}:${i.value}`)
  const Txt = ArySltAll('input',ModalInfo).filter(i=>(i.type!=='radio'&&i.type!=='checkbox')&&i.Value!=='').map(i=>`${i.id}:${i.value}`)
  let obj = {};[...Rad,...Txt].forEach(i=>{let [k,v]=i.split(':');obj[k]=v})
  ObjInfo = obj
  console.log(obj)
}
async function SavePdd(arry,Stts,orig,Ttal,btn){

    const semClnt = I_Clnt.value === ''
    const oCRUD = orig === 'CRUD'
    const oFILT = orig === 'Filter'
    const oINFO = orig === 'Info'
    const Bloco = Stts === 'Bloco'
    const Entra = Stts === 'Entrada'
  
  if(SemLogin()){MiniInput('Senha') ; await PrmssInnr(Login)}

  if(ArryClnt[7]!==''){ArryPDD.IDPdd.Clnt = ArryClnt}
  if(Bloco&&((oCRUD&&semClnt)||(oFILT&&semClnt))){
    MiniInput('Clnt') ; await PrmssInnr(InnClnt)
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
  console.log(IconLixo)
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


// Funções Planilha________________________________________________________________

QrySlt("#SavePddPlan").addEventListener("submit",(e)=>{SavePlan(e,"Pedidos")})
QrySlt("#SaveClntPlan").addEventListener("submit",(e)=>{SavePlan(e,"Clientes")})



function SavePlan(e,Aba){

  e.preventDefault()
  const formData = new FormData(e.target)
  const jsonData = {}
  formData.forEach((value,key)=>{
    jsonData[key] = value
  })

  jsonData["sheet"] = Aba

  fetch(APIPlan, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Dados enviados com sucesso!",data)
      ReloadPlan()
    })
    .catch((error) => {
      console.error("Erro ao enviar os dados:",error)
    })

}

function SaveSync(e,inpt){
  if(KeyEnter(e)){
    if(SemLogin()){MiniInput('Senha');return}
    alert(inpt.value,Login.innerHTML) ; inpt.value=''
  }
}

async function SavePDDD(ArryItem,Stts,Orign,Total){
  if(SemLogin()){MiniInput('Senha') ; await PrmssInnr(Login)}
  
  const NewArry = ArryItem.split('/')
  NewArry[0] = Login.innerHTML
  NewArry[1] = Stts
  NewArry[9] = RS(Num(NewArry[9]))

  QrySltAll('#SavePddPlan input').forEach((e,idx)=>{e.value = NewArry[idx]})
  QrySlt("#SavePddPlan button").click()
  
}

function AtualizaConstCntts(e){
  Cttlist = TAble_to_Array(e)
}


// Viagens ________________________________________________


function CarregaCoresStock() {
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

function NewPDF(){
  QrySlt("#LugarFotoNotta").innerHTML = IconLogo;

  const options = {
    margin: [0, 0, 0, 0],
    filename: "arquivo.pdf",
    html2canvas: { scale: 1 }, // Set scale to 1
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', height: 'auto'}, // Set height to 'auto'
  };

  html2pdf().set(options).from(QrySlt("#ModalNota")).save();
}



function proxinpt(e){
  if(KeyEnter(e)){
  let idx = parseInt(e.getAttribute('tabindex'))
  let next = QrySlt('[tabindex="'+(idx+1)+'"]')
  if (next){next.focus()}}
}

function ColaArry(){
  const el = document.createElement('textarea')
  document.body.appendChild(el)
  el.focus()
  document.execCommand('paste')
  CnttLIST3 = el.value
  console.log(el.value)
  //document.body.removeChild(el)
}

function TesteCntt(){
  console.log(CnttLIST3)
}


window.addEventListener('message',receberMensagem,false)

var iframe = document.getElementById('Xoco')

function receberMensagem(event) {
    if (event.origin !== 'https://script.google.com'){return}
    console.log('Mensagem recebida do iframe:', event.data)
}

