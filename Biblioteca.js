// Biblioteca
  // Básicas
  function QrySlt(e){return document.querySelector(e)}
  function QrySltAll(e){return document.querySelectorAll(e)}
  function CreateTag(e){return document.createElement(e)}
  function Reais(e){return e.toFixed(2).replace('.',',')}
  function AddRequired(e){e.forEach(e=>{QrySlt(e).required = true})}
  function EscRequired(e){e.forEach(e=>{QrySlt(e).required = false})}
  function Rad0(e){e.style.borderRadius = '100px 100px 100px 100px'}
  function RadB(e){e.style.borderRadius = '25px 25px 0px 0px'}
  function MouseXY(event){return [event.clientX, event.clientY]}
  function KeyEnter(e){return (e.code === 'Enter' || e.keyCode === 13)}
  function IptsDIV(String){return Array.from(document.querySelectorAll(String))}
  function GerarID(){`ID-${Math.floor(Math.random()*900)+100}`}
  function GerarIT(){`IT-${Math.floor(Math.random()*900)+100}`}
  var NewDate = new Date().toISOString().split('T')[0]

  function None(e) {
    const ee = Array.isArray(e) ? e : [e]
    ee.forEach(E=>{if(typeof E==='string'){
      const EE = QrySlt(E)
      EE.style.display = 'none'}
      else {E.style.display = 'none'}
    })
  }

  function Show(e){
    const ee = Array.isArray(e) ? e : [e]
    ee.forEach(E=>{if(typeof E==='string'){
      const EE = QrySlt(E)
      EE.style.display = 'flex'}
      else {E.style.display = 'flex'}
    })
  }

  function Trogl(a,b){
    const aa = Array.isArray(a) ? a : [a]
    const bb = Array.isArray(b) ? b : [b]
      aa.forEach(E => {E.style.display = 'flex'})
      bb.forEach(E => {E.style.display = 'none'})}
  
  function ToggleShowNone(e,valid){
    if(valid){e.style.display = 'flex'}
    else{e.style.display = 'none'}
  }



  function QryArryAll(e,string){
    return Array.from(e.querySelectorAll(string))
    }
  



  function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
  }





// Avançadas
  function SairModal(Fundo){
    document.addEventListener('keyup',e=>e.key === 'Escape' && None(Fundo))
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
  function TagSVG(Icon,Cls,Alt,On,Stl){
    return `<img class="${Cls}" style="${Stl}" src="data:image/svg+xml;base64,${btoa(Icon)}" alt="${Alt}" onclick="${On}">`}


// Testando
  function Red(e){e.style.color = 'red'}
  function Bak(e){e.style.color = 'black'}
  function SemLogin(){return QrySlt('#Login-Top').innerHTML === 'Login'}
  
  function AbrirModalHTML(Fundo,Modal){
    Array.from(Fundo.children).forEach(e=>{None(e)}) // oculta todos os Filhos
    Show([Fundo,Modal]) ; SairModal(Fundo)
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
  
  