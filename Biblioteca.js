// Funções DOM -- Clean
  function QrySlt(Stg,e=document){return e.querySelector(Stg)}
  function QrySltAll(Stg,e=document){return e.querySelectorAll(Stg)}
  function ArySltAll(Stg,e=document){return Array.from(e.querySelectorAll(Stg))}  
  function Stg(e){return typeof e==='string'? QrySlt(e) : e}
  function IndiceDe(e){return Array.from(e.parentNode.children).indexOf(e)}
  function CreateTag(e){return document.createElement(e)}
  function PushArry(Push,Stg){QrySltAll(Stg).forEach(e=>{Push.push(e.innerText)})}
  function insetBefor(e,Stgs){Stg(e).insertAdjacentHTML('beforeend',Stgs)}
  function insetAntes(e,Stgs){Stg(e).insertAdjacentHTML('afterbegin',Stgs)}
  function insetBefor2(e,Stg){e.insertAdjacentHTML('beforeend',Stg)}
  function EvtChng(Stg,Calback){QrySltAll(Stg).forEach(e=>{e.addEventListener('change',Calback)})}
  function EvtInpt(Stg,Calback){QrySltAll(Stg).forEach(e=>{e.addEventListener('input',Calback)})}
  function EvtClik(Stg,Calback){QrySltAll(Stg).forEach(e=>{e.addEventListener('click',Calback)})}
  function Inn(e){return Stg(e).innerHTML}
  function InnQry(e,Stg){QrySlt(e).innerHTML = Stg}
  function InnQryM(e,Stg){QrySlt(e).innerHTML += Stg}
  function InnTogg(e,Stg,Stg2){QrySlt(e).innerHTML = QrySlt(e).innerHTML===Stg?Stg2:Stg}
  function ValTogg(e,Stg,Stg2){QrySlt(e).value = QrySlt(e).value===Stg?Stg2:Stg}

  function Pai(e){return e.parentNode}
  function Avo(e){return e.parentNode.parentNode}
  function Unique(Arry,Key){return [...new Set(Arry.map(i=>i[Key]))]}
  function Parent1(e){return e.parentNode}
  function Parent2(e){return e.parentNode.parentNode}
  function Parent3(e){return e.parentNode.parentNode.parentNode}
  function Parent4(e){return e.parentNode.parentNode.parentNode.parentNode}
  function Parent5(e){return e.parentNode.parentNode.parentNode.parentNode.parentNode}

// Funções Templates
  function Ared(e){return Math.floor(e)}
  function ParsMil(e){return parseFloat(QrySlt(e).value)*500}
  function InnerSVG(Stg,e){QrySltAll(Stg).forEach(E=>E.innerHTML = e)}
  function TableHTMLall(e,on=''){return e.map(R=>`<tr>${R.map(C=>`<td ${on}>${C}</td>`).join('')}</tr>`).join('')}
  function TableHTMLfil(e,c,on=''){return e.map(R=>`<tr>${c.map(C=>`<td ${on}>${R[C]}</td>`).join('')}</tr>`).join('')}
  function Options(e){return e.map(E=>`<option value='${E}'>${E}</option>`).join("")}
  function ArryStg(e){return e.map(E=>`['${E.join("','")}']`).join('\n')}
  function Num(e){return typeof e === 'number' ? e : parseFloat(e.replace(',', '.'))}
  function Pct(e){return `${(e*100).toFixed(2)}%`}
  function Virg(e){return e.replace('.',',')}
  function Cm(e){return parseFloat(e).toFixed(2).replace('.',',')}
  function RS_HTML(e){return `<div class="Ct"><div>R$</div><div>${Cm(e)}</div></div>`}
  function RS(e){return `R$ ${Cm(e)}`}
  function RstTabIndx(Div,Idx){let IDX = Idx ; QrySltAll(Div).forEach((e,idx)=>{e.setAttribute("data-Tab",`${idx===0?Idx:(IDX+=3)}`)})}
  function SplitNum(Num){return Array.from({length:Num},(_,idx)=>idx+1)}
  function Zero(Num){return String(Num).padStart(3,'0')}
  function InptTxt(e){return `<input type="text" placeholder="Nome do Cliente" onkeyup="TestSenha(event,'${e}',this)">`}
  function InptPss(e){return `<input type="password" placeholder="Insira a Senha" onkeyup="TestSenha(event,'${e}',this)">`}
  function Div(e,Class=''){return `<div class="${Class}">${e}</div>`}
  function CleaAsps(e){return e.replace(/\*.*\*/,'').replace("*",'')}

// Funções Validações
  function KeyEnter(e){return (e.code === 'Enter' || e.keyCode === 13)}
  function AddRequired(e){e.forEach(e=>{QrySlt(e).required = true})}
  function EscRequired(e){e.forEach(e=>{QrySlt(e).required = false})}
  function temClass(e,Stg){e.classList.contains(Stg)}

// Funções Geradores
  function GerarID(){`ID-${Math.floor(Math.random()*900)+100}`}
  function GerarIT(){`IT-${Math.floor(Math.random()*900)+100}`}
  let NewDate = new Date().toISOString().split('T')[0]
  function RG(){return ConvertData(new Date(Date.now() + -3 * 60 * 60 * 1000).toISOString().replace(/T/, ' ').replace(/\..+/, ''))}
  const NewHora =  new Date(Date.now() + -3 * 60 * 60 * 1000).toISOString().replace(/T/, ' ').replace(/\..+/, '')

// Função de Ações e Simulações
  function Foco(e){QrySlt(e).focus()}
  function FocoCh0(e){QrySlt(e).children[0].focus()}
  function FocoIn(e){e.focus()}
  function FocoOut(e){e.focus();e.setSelectionRange(e.value.length,e.value.length)}
  const EventClick = new MouseEvent('click',{bubbles: true,cancelable: true,view: window})

// Funções de CSS
function ClasTog(e,Stg){e.classList.toggle(Stg)}
function ClasTog2(e,Stg){QrySlt(e).classList.toggle(Stg)}
function ClasTroc(e,Add,Rmv){QrySltAll(e).forEach(i=>{i.classList.add(Add) ; i.classList.remove(Rmv)})}
function FocoFilho(Pai,Filho){Array.from(Pai.children).forEach(e=>{None(e)});Show([Pai,Filho]);SairModal(Pai)}
function FazerArry(e){return Array.isArray(e)?e:e instanceof HTMLCollection||e instanceof NodeList?Array.from(e):/^\./.test(e)?ArySltAll(e):[e]}
function None(e,b){if(b){Show(b)};FazerArry(e).forEach(E=>{if(typeof E==='string'){const EE=QrySlt(E);EE.style.display='none'}else{E.style.display='none'}})}
function Show(e,b){if(b){None(b)};FazerArry(e).forEach(E=>{if(typeof E==='string'){const EE=QrySlt(E);EE.style.display='flex'}else{E.style.display='flex'}})}
function ShowTrue(e,Valid,b=null){if(Valid){Show(e);if(b!==null){None(b)}}else{None(e);if(b!==null){Show(b)}}}
function NoneTrue(e,Valid,b=null){if(Valid){None(e);if(b!==null){Show(b)}}else{Show(e);if(b!==null){None(b)}}}



// Funções Convert
  function TAble_to_Array(Stg){
    const ArryTable = []
    QrySltAll('tr',QrySlt(Stg)).forEach(R=>{
      const Linha = []
      QrySltAll("td",R).forEach(C=>{Linha.push(C.innerText)})
      ArryTable.push(Linha)})
    return ArryTable
  }

  // Mask Grandes
  function MaskNum(input) {
    var Vlr = input.value.replace(/\D/g, '').replace(/^0+(?=[1-9])/, '')
    var Mask = '' ; const VLR = Vlr.length

    var Mask = VLR === 1 ? '0.0'+Vlr :
              VLR === 2 ? '0.'+Vlr :
              VLR === 3 ? Vlr.charAt(0)+'.'+Vlr.substring(1) :
              VLR === 4 ? Vlr.substring(0, 2)+'.'+Vlr.substring(2) :
              VLR > 4 ? Vlr.substring(0, 2)+'.'+Vlr.substring(2, 4) : ''
      if (VLR > 5) {Mask = Mask.substring(0, 5)}
      input.value = Mask
  }
  function MaskCntt(e){
    // $(document).ready(()=>{$('input[name="Cntt"]').mask('(99) 99999-9999')})
    var Mask = ''
    var Val = e.target.value.replace(/\D/g, '')

    if(Val.length>0){Mask='('+Val.substring(0,2)+ ') '
    if(Val.length>2){Mask+=Val.substring(2,7)
    if(Val.length>7){Mask+='-'+Val.substring(7,11)}}}
   e.target.value=Mask
  }
  
//
// Funções CSS



  function ENone(e){let ee = null
    if(typeof e==='string'){ee=QrySlt(e)}else{ee=e}
    return window.getComputedStyle(ee).display === 'none'
  }
  function EShow(e){let ee = null
    if(typeof e==='string'){ee=QrySlt(e)}else{ee=e}
    return window.getComputedStyle(ee).display !== 'none'
  }

  function TrocaClass(Clas1,Clas2){
    const Add = QrySltAll('.'+Clas1).length===0?Clas1:Clas2
    const Rmv = QrySltAll('.'+Clas1).length!==0?Clas1:Clas2
    QrySltAll('.'+Rmv).forEach((e)=>{e.classList.remove(Rmv);e.classList.add(Add)})
  }

  function Rad0(e){e.style.borderRadius = '100px 100px 100px 100px'}
  function RadB(e){e.style.borderRadius = '25px 25px 0px 0px'}
  function Red(e){e.style.color = 'red'}
  function Bak(e){e.style.color = 'black'}
  function MouseXY(event){return [event.clientX, event.clientY]}

// Funções Pressets
    
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
    return Par.concat(Imp).join('')
  }


  
  function pressKey(keyCode, data) {
    const RecuperaDOM = document.querySelector(`#Grupo-Medidas input[data-tab="${data}"]`);
      RecuperaDOM.focus()

      const keydownEvent = new KeyboardEvent('keydown', { 'keyCode': keyCode });
      RecuperaDOM.dispatchEvent(keydownEvent);
      const keyupEvent = new KeyboardEvent('keyup', { 'keyCode': keyCode });
      RecuperaDOM.dispatchEvent(keyupEvent);

      RecuperaDOM.value += String.fromCharCode(keyCode)
      RecuperaDOM.dispatchEvent(new Event('input',{bubbles:true}))
  }
  function SairModal(Fundo) {
    document.addEventListener('keyup', e => {
      if (e.key === 'Escape') {
        None(Fundo)
      }
    })
  
    Fundo.addEventListener('click', e => {
      if (e.target === Fundo) {
        None(Fundo)
      }
    })
  }

  

  function Copy(e,btn){
    var temp = document.createElement('textarea')
    temp.value = CopyPresset[e] ?? e.split('/').join('\n') // (Primeiro aceita o obj, segundo se for array)
    document.body.appendChild(temp)
    temp.select()
    document.execCommand('copy')
    document.body.removeChild(temp)
    btn.innerText = 'Texto copiado!'
  }
  function ScrolRoll(px) {
    let posicaoAtual = window.pageYOffset
    const destino = posicaoAtual + px
  
    function animarScroll() {
      if (posicaoAtual < destino) {
        window.scrollBy(0, 5)
        posicaoAtual += 5
        if (posicaoAtual >= destino) {
          window.scrollTo(0, destino)
          return;
        }
        requestAnimationFrame(animarScroll)
      }
    }
  
    animarScroll()
  }
  function PrmssInnr(Tag) {
    return new Promise(resolve => {
    const observer = new MutationObserver((m, observer) => {
      if (Tag.innerHTML !== '') {observer.disconnect();resolve()}})
    observer.observe(Tag,{childList: true, subtree: true})})
  }
  
  function TabIndx(e,next){return parseInt(e.getAttribute("data-Tab"))+next}
  function delay(ms){return new Promise(resolve => setTimeout(resolve, ms))}

  function Snap(Modal,inpt){
    inpt.style.position = 'relative'
    Modal.style.width = `${inpt.offsetWidth}px`
    Modal.style.top = `${inpt.offsetTop + inpt.offsetHeight}px`
    Modal.style.left = `${inpt.offsetLeft}px`
  }


  let onOff = 'off'
  function AtivaDescM2(on,off){Show(off) ; None(on) ; onOff = 'on' ; FilTable()}
  function DstivDescM2(off,on){Show(on) ; None(off) ; onOff = 'off' ; FilTable()}

  function TotalCress(Vlr,e,type){
    if(type==='Recorte'){return Math.round(e*(Vlr+Vlr*Crecent2(e)))}
    else{return Math.round(e*(Vlr+Vlr*Crecent(e)))}
  }


  function TrocaPose(Div,Idx){
    const e = QrySlt(Div)
    const pai = e.parentNode
    const Filhos = Array.from(pai.children)
     
    if (Filhos.indexOf(e) === Idx){ return}
    if (Filhos.indexOf(e)  <  Idx){ pai.insertBefore(e,Filhos[Idx+1])}
    else{pai.insertBefore(e,Filhos[Idx])}
  }

function MaskRS(input) {
  // Remove todos os caracteres não numéricos
  var Vlr = input.value.replace(/\D/g, '');

  // Limita o valor máximo a R$ 10000
  Vlr = Math.min(parseInt(Vlr), 1000000).toString();

  // Formatação de acordo com o comprimento do valor
  if (Vlr.length <= 2) {
    Vlr = '0.' + Vlr;
  } else if (Vlr.length === 3) {
    Vlr = Vlr.charAt(0) + '.' + Vlr.substring(1);
  } else if (Vlr.length <= 5) {
    Vlr = Vlr.substring(0, Vlr.length - 2) + ',' + Vlr.substring(Vlr.length - 2);
  } else if (Vlr.length === 6) {
    Vlr = Vlr.substring(0, 3) + '.' + Vlr.substring(3, 5) + ',' + Vlr.substring(5);
  } else {
    Vlr = '1000000'; // Define um valor máximo de R$ 1.000.000,00
  }

  // Define o valor formatado de volta no campo de entrada
  input.value = 'R$ ' + Vlr;
}



function AnimaHeight(e,TargHeit,time,inOut){
  const StrtH = e.clientHeight
  const StrtT = performance.now()
  const update = timestamp=>{
    const elaps = timestamp-StrtT
    if (elaps<time) {
        let Value = 0
        if(inOut==='out'){Value = StrtH-(StrtH*(elaps/time))}
        else{Value = TargHeit*(elaps/time)}
      e.style.height = Value + 'px'
      requestAnimationFrame(update)
    } else {e.style.height = (inOut==='out'?0:TargHeit)+'px'}
  };requestAnimationFrame(update)
}


function ConvertData(dataString) {
  const data = new Date(dataString);
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear().toString();
  const hora = data.getHours().toString().padStart(2, '0');
  const minutos = data.getMinutes().toString().padStart(2, '0');
  const segundos = data.getSeconds().toString().padStart(2, '0');
  return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

function cvData(dataString) {
  const data = new Date(dataString);
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear().toString();
  return `${dia}/${mes}/${ano}`;
}

function LowCase(Arry){return Arry.filter(e=>e===e.toLowerCase())}
function UppCase(Arry){return Arry.filter(e=>e===e.toUpperCase())}


function InterCor(value) {
  value = Math.min(100, Math.max(0, value))

  const r = Math.floor((100 - value) * 255 / 100)
  const g = Math.floor((value) * 255 / 100)
  const b = 0

  return `rgb(${r}, ${g}, ${b})`
}

function RgbToHex(rgb){return`#${rgb.replace(/^rgb\(|\s+|\)$/g,'').split(',').map(x=>parseInt(x).toString(16).padStart(2,'0')).join('')}`}