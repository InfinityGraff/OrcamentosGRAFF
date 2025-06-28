function LocAno(Email){
    const nome = Email.match(/\d+°\s*(.*?)\s*-\s*\d+/)?.[1] || ""
    const id   = Email.match(/^(\d+)°/)?.[1] || 0
    const Dados = {
        'Grafit':{'001-07' :'2022', '008-235':'2023', '236-432':'2024', '433-_':'2025'},
        'BPrint':{'001-099':'2024', '100-_' :'2025'},
        'Inová': {'001-_'  :'2025'}
    }
    for (let faixa in Dados[nome] || {}) {
        let [ini,fim] = faixa.split('-').map(x => x === '_' ? Infinity : +x)
        if (id >= ini && id <= fim) return Dados[nome][faixa]
    }
    return ""
}

function Crecent(MM2){
  /*Crescente:*/ var M = MM2
    var D = {Min:0.06,Med:0.25,Max:1.00}
    var V = {Min:1.70,Med:0.70,Max:0.00}
      var crecent = M> D.Med? M>=D.Max? V.Max:
      M< D.Med? V.Med: V.Med-((V.Med-V.Max)*((M-0.001)/D.Max)):
      M<=D.Min? V.Min: V.Min-((V.Min-V.Med)*((M-0.001)/D.Med))

  return crecent
}

function Crecent2(MM2){
  /*Crescente:*/ var M = MM2
    var D = {Min:0.05,Med:0.20,Max:0.50}
    var V = {Min:2.10,Med:0.70,Max:0.00}
      var crecent = M> D.Med? M>=D.Max? V.Max:
      M< D.Med? V.Med: V.Med-((V.Med-V.Max)*((M-0.001)/D.Max)):
      M<=D.Min? V.Min: V.Min-((V.Min-V.Med)*((M-0.001)/D.Med))

  return crecent
}

function CrypPass(senha){
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

function ShowBndj(div){
    if(event.target.tagName=='IMG'){return}
    if(event.target.tagName== 'I' ){return}
    const e = $('.BNdj',div)
    if(e.contains(event.target)){return}else{ // esse IF ta dando erro se não existir eu acho (este if tem que seguir em frente caso seja o Svg da Seta)
        e.style.zIndex = $$('.BNdj:not(.none)').length + 500
        if(Tecla('ctrl')){Tog_N(e)}else{$$('.BNdj:not(.none)').forEach(E=>{if(E==e){return}else{Add_N(E)}});Tog_N(e)}}
    if(Tecla('ctrl')){return}
    else{ClickFora(div,()=>{Add_N(e)})}
}

function DarVAL(td,v,A){const dR = ['Rastr',...D_Rastr(td)] ; Inn(td,Tm_Tm[dR[4]](v,dR,A))}
function VAL(e){
    const td = e.tagName === 'TD' ? e : _td(e)
    const R = D_Rastr(td) // se e for td entra 'e' se não for, faz o closeset('td') aqui dentro mesmo
    const val = ['Edit','Fixo','Sugg','Auto','SVG','Soma'].includes(R[3]) ? $('.P-P',td).textContent.trim()
            : R[3]==='Data' ? Nm($('.P-P',td)).trim()
            : R[3]==='Bndj' ? $('.P-P',td).textContent.trim()
            : R[3]==='Valr' ? Num2($('.P-P',td).textContent.trim())
            : R[3]==='Slct' ? $('select',td).value
            : R[3]==='Inpt' ? $('input' ,td).value
            : R[3]==='Chek' ? $('input' ,td).checked
            : is(td,'input')? td.value
            : R[3]==='Lixo' ? '-'
            : null
    return val
    // a idéia é que esse argumento seja qualquer coisa q está dentro de um td q não seja uma tabela
}