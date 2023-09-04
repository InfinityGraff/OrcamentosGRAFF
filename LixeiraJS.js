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



