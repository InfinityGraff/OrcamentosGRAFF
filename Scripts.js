// Declarações
  // Const's Fundos
    const FundoModal = QrySlt('#Fundo-Modal')
    const InnerVazio = QrySlt('#InnerVazio')
    
    const FormOrcamento = QrySlt('#FormOrcamento')
    const BtnInfo2 = QrySlt('#btnINFO2')
    const ModalInfo = QrySlt('#ModalInfo')
    const Prazo = QrySlt('#Prazo')
    const ModAlnotta = document.getElementById("ModalNota")

  // Const's Login
    const LgTop = QrySlt('#Login-Top')
    const Login = QrySlt('#Login-Cod')
    const LoginSpn = QrySlt('#Span-Login')
    const I_Senha = QrySlt('#Inpt-Senha')
    const ImgPerfil = QrySlt('#Img-Perfil')

  // Const's Clientes
    const Bandeja = QrySlt("#Bandeija")
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

    const Selects = QrySltAll('select')
    const DivTipo = QrySlt('#Div-Inpt-Tipo')
    const DivCbmt = QrySlt('#Div-Inpt-Cbmt')
    const DivLarg = QrySlt('#Div-Inpt-Larg')
    const DivAlt = QrySlt('#Div-Inpt-Alt')
    const DivQnt = QrySlt('#Div-Inpt-Qnt')

    const Grupo_Tipos = QrySlt('#Grupo-Tipos')
    const Grupo_Medidas = QrySlt('#Grupo-Medidas')
    let ArryMdds=['#Div-Inpt-Larg input','#Div-Inpt-Alt input','#Div-Inpt-Qnt input']

//_________________________________________________________________________________________________________

// Declarações dos Arrays
  let IDPdd = 'ID-001'
  let ITitem = 'ID-001'
  let ArryUni = ['','','','',''] // Art,Dsgn,Fret,Lcal,VlrFret
  let ArryClnt = ['','','','','','','',''] // Clnt,Cntt
  let ArryItem = []
  let ArryPag = ['','',''] // //Form,Vlr,Data
  let ArryPDD = {IDPdd:{'Clnt':ArryClnt,ITitem:ArryItem,'UNI':ArryUni,'Pag':ArryPag}}
  var IDs = ['0001','0002','0003']
  let ObjInfo = {}

// OnLoad's
  QrySlt('#Div-Inpt-Mais div').innerHTML = IconMais
  QrySlt('#RoloTop').innerHTML = IconRoloTop
  QrySlt('#ClearCRUD').innerHTML = IconClean
  QrySlt('#ClearForm').innerHTML = IconClean
  QrySlt('#imgnotta').innerHTML = IconNota
  QrySlt('#imgnotta2').innerHTML = IconNota

  document.addEventListener('click',e=>{ // remover a Bandeija se clicar fora (apresenta um erro no foreach de 'Rad0')
    if(!Bandeja.contains(e.target)){Bandeja.innerHTML = ""; 
    (conteudo=>{QrySltAll('input[type="text"]').forEach(inpt=>Rad0(inpt))})(Bandeja.innerHTML)}
  })
  document.addEventListener('DOMContentLoaded',()=>{ // $(document).ready(()=>{$('input[name="Cntt"]').mask('(99) 99999-9999')})
    var inputs = document.querySelectorAll('input[name="Cntt"]')
    inputs.forEach((I)=>{I.addEventListener('input',(e)=>{var Mask = ''
        var Val = e.target.value.replace(/\D/g, '')
  
        if(Val.length>0){Mask='('+Val.substring(0,2)+ ') '
        if(Val.length>2){Mask+=Val.substring(2,7)
        if(Val.length>7){Mask+='-'+Val.substring(7,11)
       }}}e.target.value=Mask
      })
    })
  })
  document.addEventListener('DOMContentLoaded',()=>{ // PreloadImagens
    const imageUrls = tabela.filter(e=>tabela[8]!==''||tabela[8]!==null)
    
    imageUrls.forEach(url => {
      const img = document.createElement('img')
      img.src = LinkDrive+url[8]
      document.getElementById('image-preloader').appendChild(img)
    })
  })
  window.addEventListener('DOMContentLoaded',()=>{ // não sei pq n ta funcionando, é pra bloquear data antes do dia de hoje
    QrySltAll('#Prazo, #dataPagInfo').forEach(i=>{i.min = new Date().toISOString().split('T')[0]})
  })
  window.addEventListener('scroll',()=>{
    const Btn = QrySlt('#RoloTop')
    if ((window.scrollY || window.pageYOffset) >= 250) {
      Show(Btn)
    }else{
      setTimeout(()=>{
        None(Btn)},100)
    }
  })
  document.addEventListener("DOMContentLoaded",()=>{
    ReloadTab()
  })

  // Chamar igual com a nova q criei_____________________________________________________________________________
Array.from(Selects).forEach(E=>{E.addEventListener("change",FilTable)})
const ResultFilTable = QrySlt('#resultfilter1')

  // campo Numerico
  QrySltAll('#Grupo-Medidas input').forEach(e=>{
    e.setAttribute('inputmode', 'numeric')
  })

  QrySltAll('.Close').forEach(e=>{ // não estou sentindo o x Rodando
    e.innerHTML = IconEscList
  })


  QrySltAll('.Seta').forEach(e=>{e.innerHTML = IconSetair})
  
  var W400 = window.matchMedia("(max-width: 500px)")
  MediaQuere(W400)
  W400.addListener(MediaQuere)

//_________________________________________________________________________________________________________


// Funções Gerais

  function MediaQuere(max){
    var C = QrySlt('.Cabecalho')
    var R = QrySlt('#DivResult')
    const FormOrc = QrySlt('#FormOrc')
    const DivResult = QrySlt('#DivResult')

    if(max.matches){
      ModAlnotta.classList.add("media80")
      None('#trocatroca')
      C.classList.remove("Bt")
      R.classList.remove("Cl")
      trocarPosicao(DivResult,FormOrc)
    }else{
      Show('#trocatroca')
      ModAlnotta.classList.add("media80")
      C.classList.add("Bt")
      R.classList.add("Cl")
      trocarPosicao(FormOrc,DivResult)
    }

    
  }
  function trocarPosicao(e1,e2){ // fazer esta função receber mais, e mandar pra biblioteca
    e1.parentNode.insertBefore(e1,e2)
  }
  function scrollToDiv() {
    if(W400.matches){
      const posits = window.pageYOffset + QrySlt('nav').getBoundingClientRect().bottom
      window.scrollTo({top:posits,behavior:'smooth'}) // pra grudar na base, tem q ser assim mesmo
      // QrySlt('nav').scrollIntoView({block:'start',behavior:'smooth'}) // caso eu queira no inico posso usar este
    }
  }
  function ScrollFinal() {
    if (W400.matches) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }
  QrySltAll('nav a, #Home').forEach(e=>{e.addEventListener('click',()=>{ // esse tbm tem uns Errinhos
    
    const Abas = { // conferir se as div tem esses Mesmos Nomes
      'Home': QrySlt('#Aba-Home'),
      'Orcamento': QrySlt('#Aba-Orcamento'),
      'Relatorio': QrySlt('#Aba-Relatorio'),
      'Agenda': QrySlt('#Aba-Agenda'),
      'Clientes': QrySlt('#Aba-Clientes'),
    }

    for(const [key,value] of Object.entries(Abas)){
          value.style.display = (key === e.id) ? 'flex' : 'none'}})
  })
  function SaveSync(e,inpt){
    if(KeyEnter(e)){
      if(SemLogin()){MiniInput('Senha');return}
      alert(inpt.value,Login.innerHTML) ; inpt.value=''
    }
  }
  function TestSenha(e,tipo,input){ // o e Siguinifica 'event' a tecla clicada
    let inpt = e==='' ? QrySlt(input) : input
    if(KeyEnter(e)||e===''){
      if(tipo==='Clnt'){QrySlt('#Inner-Clnt').innerHTML = inpt.value ; None(FundoModal)}
      if(tipo==='Senha'){
        const Spn = 'Senha Inválida' ; const Cryp = CrypPass(inpt.value)
          if(User[Cryp]){None([FundoModal]) ; LgTop.innerHTML=User[Cryp][1] ; Login.innerHTML=User[Cryp][0] ; ImgPerfil.src=User[Cryp][2]}
          else{LoginSpn.innerHTML=Spn ; inpt.placeholder=Spn}
        inpt.value='' ; inpt.focus()}
    } //Reload()
  }
  function proxinpt(e){
    if(KeyEnter(e)){
    var idx = parseInt(e.getAttribute('tabindex'))
    var next = QrySlt('[tabindex="'+(idx+1)+'"]')
    if (next){next.focus()}}
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
  
    SbmtInfo1.addEventListener('click',()=>{Show(QrySlt('#Modal-Info2'));None(QrySlt('#Modal-Info1'))})
    SbmtInfo3.addEventListener('click',()=>{Show(QrySlt('#Modal-Info1'));None(QrySlt('#Modal-Info2'))})
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
          <div id="FotoFilter"><img src="${IMG}"></div>
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


// OnInputs__________________________________________________________________________________________

  document.addEventListener('input',()=>{handle();Clientes();FilTable()}) // to chamando assim pq posso querer chamar mais...
  

  function handle(){ // essa função Geral Mantem o Handdle a Cada inpuit do Documento inteiro
    QrySltAll('input[type="text"][name="'+event.target.name+'"]').forEach(i=>{i.value = event.target.value})
    QrySltAll('div[data="'+event.target.name+'"]').forEach(i=>{i.innerHTML = event.target.value})
  }
  function Clientes(){ // Funções que São Atreladas ao onInput Clnt, e Cntt
    const e = event.target
    if(e.name === 'Clnt') {QrySlt('#Inner-Clnt').innerHTML = e.value;BandejaFit(e,0);ShowCntt(DivCnttForm);ShowBtnCadastro()}
    if(e.name === 'Cntt') {BandejaFit(e,1)}

    function ShowCntt(DivCnttForm){if(I_Clnt.value===''){None(DivCnttForm)}else{Show(DivCnttForm)}}

    function ShowBtnCadastro(){
      if(ArryClnt[7]===''){
           QrySltAll('.btn_cdstr').forEach(e=>Show(e))}
      else{QrySltAll('.btn_cdstr').forEach(e=>None(e))}
    }

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
        li.innerHTML=`<div>${opt}</div>`
        if (indx===1){li.innerHTML+=`<div>${Cttlist[Idex][0]}</div>`}
          li.addEventListener("click",()=>{
            ArryClnt = [...Cttlist[Idex]]
            Rad0(inpt) ; ShowClntSalvo() ; FilTable()
            Bandeja.innerHTML = ""
          });Bandeja.appendChild(li)})
    }
  }
  function ShowEditClnt(){
    if(ArryClnt[7]===''){
         QrySltAll('.btn_edtcl').forEach(e=>Show(e))}
    else{QrySltAll('.btn_edtcl').forEach(e=>None(e))}
  }
  function ShowClntSalvo(){
    Trogl([GrupClntSv,GrupClntInfSv],[GrupClnt,RestaNome])
    const grupos = [GrupClntSv,GrupClntInfSv]
    
    grupos.forEach(e=>{
       e.innerHTML = `<div>${ArryClnt[0]}</div><div>${ArryClnt[1]}</div>
         <div class="baby Ct" onclick="EditaClntSave('${ArryClnt[0]}','${ArryClnt[1]}')">Editar</div>`
    })
  }
  function EditaClntSave(Clnt,Cntt){
    Trogl([GrupClnt,RestaNome],[GrupClntSv,GrupClntInfSv])
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

  document.addEventListener('keyup',(e)=>{ClonaMddKey(e); /*EnterTab(e)*/})
  function EnterTab(e){ // só chamar quando for fora dos Input Medidas
    if(KeyEnter(e)){
      const inptAtivo = document.activeElement
      if (inptAtivo.tagName === "INPUT"){
        const prox = inptAtivo.nextElementSibling
        if (prox && prox.tagName === "INPUT") {
          prox.focus();
        }
      }
    }
  }
  function ClonaMddKey(e){ // tem uns erros nesse aqui
    // quando não tem Input pra ele dar o tab, ele acaba digitando o '+' no input, então tem q esperar sei lá
    if(e.key==='+'){console.log(e.key);ClonaMdd()}
  }


// FORM ________________________________________________

  function NewOrcamentos(btn){
    QrySltAll('#FormOrc > h2,#DivResult > h2').forEach(e=>{e.innerHTML = 'Orçamento: '+('0000'+(Math.max(...IDs)+1)).slice(-3)}) // Cria ID

    Show(FormOrcamento)
    None(btn.parentNode)

    for(const grupo in grupos){ // Carrega Lista Serv
      const options = grupos[grupo].map(Serv =>
      `<option value='${Serv}'>${Serv}</option>`).join("")
      I_Serv.insertAdjacentHTML('beforeend',
      `<optgroup label='${grupo}'>${options}</optgroup>`)
    }

    QrySltAll('select').forEach(e=>{e.addEventListener('change',ShowTipo)})

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
    FormOrcamento.querySelectorAll('input, select').forEach((e) => (e.value = ''))
    FilTable()
  }
  function ClonaMdd() {
    QryArryAll(document,'#Grupo-Medidas > div')
    .forEach(div=>{
      var inpt = div.querySelectorAll("#Mais, input")
      var Utm = inpt[inpt.length-1]
      
      var NewInpt = Utm.cloneNode(true)

      if(Utm.id === 'Mais'){
        Utm.innerHTML = IconEscList
        Utm.removeAttribute('id')
        Utm.classList.add('HvrSVG')
        Utm.onclick = ()=>{EscMdds(Utm)}
      }
      
      if (NewInpt.hasAttribute("data-Tab")){
        NewInpt.setAttribute("data-Tab",`${TabIndx(NewInpt,3)}`)
        NewInpt.value=''
      }
      
      div.appendChild(NewInpt)
    })
    ReloadTab()
    FilTable()
  }
  function EscMdds(btn) {
    const idx = IndiceDe(btn)
    Array.from(btn.parentNode.parentNode.children).forEach(e=>{
      e.removeChild(Array.from(e.children)[idx])
    })
    FilTable()
  }
  function ReloadTab(){

    var inputs = document.querySelectorAll('input[data-Tab]')
    
    inputs.forEach(inpt=>{
    
    inpt.addEventListener("keydown",(e)=>{
    var inputses = inpt.parentNode.querySelectorAll('input[placeholder="0 UND"]')
    var ultimo = inputses[inputses.length - 1]
    if(inpt===ultimo){return}
    if(e.key === "Tab" || KeyEnter(e) || e.key === "+"){
    e.preventDefault()
    var nextInput = getNextInput(inpt,inpt.parentNode.parentNode)
    if (nextInput){nextInput.focus()}}
    })})
    
    function getNextInput(inpt,DivInpt){
    var nextInput = DivInpt.querySelector(`input[data-Tab="${TabIndx(inpt,1)}"]`)
    return nextInput
    }
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

    const ModalH1 = ModAlnotta.querySelector("#ModalNota h1")
    
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


// Funções Grandes____________________________________________________________________________________________

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

  return ['Todos',...new Set(tabela.filter(R=>Fill(R)).map(R=>R[Coll]))]
  .map(e=>{return `<option value='${e}'>${e}</option>`}).join("")
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
    const VlrFinal = Reais(Totais[1])
    const VlrM2 = Reais(Vlr)
    const Desc = (i=Cttlist.findIndex(I=>I.includes(ArryClnt[0])))=>i+1?Cttlist[i][6]:0
    const ShowNone = Desc() === 0 ? 'none' : ''
    const TotalDesc = Reais(Totais[1]*(1-Desc()))
    const CBMT = `${Cbmt} (${Gram})`.replace(/\s\(\)/,'')
    const QNT = QFix !== 'Todos' ? QFix : I_Qnt.value
    const IMG = `${LinkDrive}${Foto}`
    const Etc = I_Etc.value
    const Mdds  =Totais[0].map(I=>`${I[0]}|${I[1]}|${I[2]}|${I[3]}`).join(',')
    const Mdds2 =Totais[0].map(I=>`${I[0]} - ${Serv} ${Tipo} (${I[1]} x ${I[2]}) R$ ${Reais(I[3])}`).concat(`*Total: R$ ${TotalDesc}*`).join('/')

    let NewItem=[GerarIT(),'Stts',Serv,Tipo,CBMT,QNT,Mdds,Desc(),TotalDesc,VlrM2,Cust,Calc,Foto,Etc]
    let NewItemaDD=[GerarIT(),QNT,Serv,Tipo,CBMT,Mdds,' Mdd2',TotalDesc]
      let FuncIMG = `AbreItem('${NewItem.join('/')}','${Mdds2}','${IMG}')`
      let FuncAdd = `addyCRUD('${NewItemaDD.join('/')}');Show(['#Div-CRUD','#SavSav']);ScrollFinal();OcultaCoisas('${ResultFilTable}')`
      let FuncSav = `SavePdd( '${NewItem.join('/')}','Bloco'  ,'Filter','${TotalDesc}','this')`
      let FuncEnt = `AbreInfo('${NewItem.join('/')}','Entrada','Filter','${TotalDesc}','this')`
      let Comment = Serv==='Placa' ? Totais[2].map(c=>`<div>${c}</div>`).join('') : ""
      

    const item = CreateTag('div')
    item.innerHTML =

      `<div class="itemfilter Ct Cl w100 Rdd">
        <div class="RstTitle w100 Pddn-XY Ct Bt">
          <div class="RstServ ppt" onclick="AbreNota('${Mdds2}','${VlrFinal}','${TotalDesc}')">${Serv} ${Tipo}</div>
          <div class="RstValrM2 Ct"> <div class="FtLt CrCnz">(Valor por Metro)</div>R$ ${VlrM2} m²</div>
        </div>
        <div class="Ct Bt Pddn-XY">
          <div id="FotoFilter"> ${Serv==='Placa'? `<div id="Canvs${indx}" class="canvas"></div>` :`<img src="${IMG}" onclick="${FuncIMG}">`}</div>
          <div class="Ct Cl"><div class="Descricao">
                <div><strong>Acbmnt: </strong>${Cbmt}</div>
                <div><strong>Qnt: </strong>${QFix} Und</div>
                <div><strong>Grama: </strong>${Gram}</div>
              </div><hr class="w100"><div class="valores Ct Cl w100">
                
                <div class="RstValrDesc ${ShowNone}">R$ ${VlrFinal}</div>
                <div class="RstValrFinal Ct FtMd"><div class="FtMd">R$</div> ${TotalDesc}</div>
            </div></div>
          <div class="Ct Cl">
            <button class"RD Mg" onclick="${FuncAdd}">Adicionar</button>
            <button class"RD Mg" onclick="${FuncSav}">Salvar</button>
            <button class"RD Mg" onclick="${FuncEnt}">Entrada</button></div>
        </div>
        <div class="Ct Cl">${Comment}</div>
      </div>`
    return item
  })
  items.forEach(I=>ResultFilTable.appendChild(I))

  QrySlt('#Contagem').innerHTML = ResultFilTable.children.length + ' Itens'

  QrySltAll('.canvas').forEach(e=>{Gera3d(e)})
  AddXdesc()
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

  if(e.children.length===1){Show(QrySlt('#AddAdd'))
    if(e.style.height === '150px'){return}
      e.style.height = '150px'
      e.classList.add('Slideheight-Out')
      setTimeout(()=>{e.classList.remove('Slideheight-Out')},500)

  }else{None(QrySlt('#AddAdd'))
    if(e.style.height === '304.19px'){return}
      e.style.height = '304.19px'
      e.classList.add('Slideheight-In')
      setTimeout(()=>{e.classList.remove('Slideheight-In')},500)
  }
}
function AddXdesc() {
  const elements = document.querySelectorAll('.RstValrDesc')

  elements.forEach(e => {
    const spn = document.createElement('span')
    spn.innerHTML = TagSVG(IconXDesc,'','','','height: 20px; width: 57px;position: absolute;top: -3px;left: -57px;')
    spn.style.position = 'relative'
    spn.style.zIndex = '1'
    e.appendChild(spn)
  })
}
function Orcamento(arrays){
  const [Serv,Tipo,Cbmt,Gram,QFix,Vlr,Cust,Calc,Foto] = arrays

  const ArryLag = IptsDIV('#Div-Inpt-Larg input').map(I=>I.value)
  const ArryAlt = IptsDIV('#Div-Inpt-Alt input').map(I=>I.value)
  const ArryQnt = IptsDIV('#Div-Inpt-Qnt input').map(I=>I.value)

  let MedidasList = []
  let Coment = []
  
  ArryQnt.forEach((e,x)=>{

      const Ferro = 20, Alumn = 5, Chapa = 0, I_Ferr = "20x20"
      const Larg_ = ArryLag[x] ; const Alt_ = ArryAlt[x]
      const Qnt_ = Tipo.match(/[2]/) ? ArryQnt[x] * 2 : ArryQnt[x] * 1
      const desc = I_Ferr.match(/..$/)/1000*2
      const PE   = Serv.match(/Cav/) ? 0.15*2 : 0
      const CkCstl = Tipo.match(/Lumi/)
      const CkLarg = Larg_ > Alt_

      const F_L = CkLarg ? Larg_+PE : Larg_-desc
      const F_A = CkLarg ? Alt_-desc : Alt_+PE
      const C_L = CkCstl ? 2 : CkLarg ? 2 : Math.round(Alt_)+1 // Costelas
      const C_A = CkCstl ? 2 : CkLarg ? Math.round(Larg_)+1 : 2  // Costelas

      const FM1 = Calc.match(/\sF/)  ? Qnt_ * Ferro * (F_L*C_L + F_A*C_A) : 0
      const AM1 = Calc.match(/A/)    ? Qnt_ * Alumn * 2 * (F_L+F_A) : 0
      const MM2 = Calc.match(/M2|C/) ? Qnt_ * Larg_ * Alt_ : 0
      const QNT = Calc.match(/QNT/)  ? Qnt_ * Vlr: 0
      const OFS = Calc.match(/OFS/)  ? Vlr : 0

    const Total = Math.round(MM2*(Vlr+Vlr*Crecent(MM2))) + FM1 + AM1 + QNT + OFS

    Coment.push(`${C_L} Varas de ${CmStng(F_L)} | ${(C_A)} Costelas ${CmStng(F_A)}`)

    MedidasList.push([ArryQnt[x],ArryLag[x],ArryAlt[x],Total])

  })
  let Totall = 0 ; MedidasList.forEach(I => {Totall += I[3]})

  
  
  return [MedidasList,Totall,Coment]
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
  if(Value.match(/^_/) || Value===''){None([QrySlt('#divdesigner')])
  }else{Show(QrySlt('#divdesigner'))}
  }
  const valid = QryArryAll(form,'input[required]').concat(QryArryAll(form,'select[required]'))
    .every(e=>e.value) && QryArryAll(form,'input[type="radio"][required]:checked').length>0
  ToggleShowNone(btn,valid)

  // Criar o Obj deve servir pra Todos, ele só ta só pra o Modal-Info, mas será pra (Form do Orçamento, inuts do CRUD, e para o Modal-Info)
  const Rad = QryArryAll(ModalInfo,'input[type="radio"]:checked, select,input[type="checkbox"]:checked').map(i=>`${i.name}:${i.value}`)
  const Txt = QryArryAll(ModalInfo,'input').filter(i=>(i.type!=='radio'&&i.type!=='checkbox')&&i.Value!=='').map(i=>`${i.id}:${i.value}`)
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
      ArryMdds.forEach(e=>IptsDIV(e).forEach(E=>{
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
    Clonado.querySelectorAll('td input').forEach((e,i)=>{e.value = Arr[i]})
    Clonado.querySelectorAll('td div').forEach((e,i)=>{e.innerHTML = Arr[i]})
    
    
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
  QryArryAll(ResultFilTable,'button')[0].click()
}
function DeletCRUD(e){
  console.log(IconLixo)
  if (confirm(`Tem certeza que deseja deletar?`)){e.remove()}
}
function EditaCRUD(e) {
  e.querySelectorAll('[data="CrudB"]').forEach((E,i)=>{if(i===7){return};Show(E)})
  e.querySelectorAll('[data="CrudA"]').forEach((E,i)=>{if(i===7){return};None(E)})
}
function CancelEditCRUD(e){
  e.querySelectorAll('[data="CrudB"]').forEach((E,i)=>{if(i===7){return};None(E)})
  e.querySelectorAll('[data="CrudA"]').forEach((E,i)=>{if(i===7){return};Show(E)})
}
function SaveEditCRUD(e) {
  const ListUp = []
  e.querySelectorAll('[data="CrudB"]').forEach((E,i)=>{
    if(i===7){return};None(E)
    ListUp.push(E.value)
  })
  e.querySelectorAll('[data="CrudA"]').forEach((E,i)=>{
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


//__________________________________________________________________________________


const altura = document.querySelector('#Div-Inpt-Alt input')
const Largur = document.querySelector('#Div-Inpt-Larg input')
const Comprm = document.querySelector('#Compmnt')
const BackCub = document.querySelector('#BackCub')

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
