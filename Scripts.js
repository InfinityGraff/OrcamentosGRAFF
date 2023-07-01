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
  

  function NewOrcamentos(btn){
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