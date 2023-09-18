function PreLoadIMG(){
    tabela.filter(e=>e[8]!==''||e[8]!==null).forEach(e=>{
      insetBefor('#image-preloader',`<img src="${LinkDrive}${e[8]}">`)})
}

function SaveSync(e,inpt){
  if(KeyEnter(e)){
    if(SemLogin()){MiniInput('Senha');return}
    alert(inpt.value,Login.innerHTML) ; inpt.value=''
  }
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


`<div id="Modal-Teclado" class="ModalItem Rltv Modalzinho Ct Cl none">

<div class="">
  <div onclick="pressKey(49)">1</div>
  <div onclick="pressKey(50)">2</div>
  <div onclick="pressKey(51)">3</div>
</div>

<div class="">
  <div onclick="pressKey(52)">4</div>
  <div onclick="pressKey(53)">5</div>
  <div onclick="pressKey(54)">6</div>
</div>

<div class="">
  <div onclick="pressKey(55)">7</div>
  <div onclick="pressKey(56)">8</div>
  <div onclick="pressKey(57)">9</div>
</div>

<div class="">
  <div style="background: #ff7700;">Voltar</div>
  <div onclick="pressKey(48)">0</div>
  <div style="background: #ff7700;" onclick="pressKey(13)">Prox</div>
</div>

</div>`



function AbrirMiniTeclado(DOM){
  None('#Grupo-Servicos')
  const Teclado = QrySlt('#Modal-Teclado')
  const inpt = DOM.dataset.tab
  
  Teclado.innerHTML = `
    <div class="">
    <div onclick="pressKey(49,'${inpt}')">1</div>
    <div onclick="pressKey(50,'${inpt}')">2</div>
    <div onclick="pressKey(51,'${inpt}')">3</div>
    </div>
    
    <div class="">
      <div onclick="pressKey(52,'${inpt}')">4</div>
      <div onclick="pressKey(53,'${inpt}')">5</div>
      <div onclick="pressKey(54,'${inpt}')">6</div>
    </div>
    
    <div class="">
      <div onclick="pressKey(55,'${inpt}')">7</div>
      <div onclick="pressKey(56,'${inpt}')">8</div>
      <div onclick="pressKey(57,'${inpt}')">9</div>
    </div>

    <div class="">
      <div style="background: #ff7700;">Voltar</div>
      <div onclick="pressKey(48,'${inpt}')">0</div>
      <div style="background: #ff7700;" onclick="pressKey(13,'${inpt}')">Prox</div>
    </div>
    `




  AbrirModalHTML(FundoModal,Teclado)
  

//  inpt.value = ''
}


//outra forma de fazer o menu de navegação_____________________________________________________

MenuNav('nav a, #Home')  

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