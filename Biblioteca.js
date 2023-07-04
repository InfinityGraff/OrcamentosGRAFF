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
    return new Promise(resolve => setTimeout(resolve, ms))
  }

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
