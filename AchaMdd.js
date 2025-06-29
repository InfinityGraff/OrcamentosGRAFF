 function EscolheCalc(){
    const Qnt = $('#Div-Inpt-Qnt input')
    const Alt = ParsMil('#Div-Inpt-Alt input')
    const Lag = ParsMil('#Div-Inpt-Larg input')
    const [A_Lag,A_Alt] = [ParsMil('#I_AreaX'),ParsMil('#I_AreaY')]

    if($('#BtnMddArea').innerHTML==='Achar Qnt'){return}
    if(Alt===0||Lag===0){return}

    const C1 = CalcAreaQnt(Lag,Alt,A_Lag,A_Alt)
    const C2 = CalcAreaQnt(Alt,Lag,A_Lag,A_Alt)

    Qnt.value = C1===0?'':C1>C2?C1:C2
    $('#LoadCanvaaas').innerHTML =`<button id="LoadCanvaaas" onclick="
    CriaCanvas(${C1>C2?`${Lag},${Alt}`:`${Alt},${Lag}`},${A_Lag},${A_Alt})">Load Canvas</button>`
  }
  function CalcAreaQnt(Lag,Alt,A_Lag,A_Alt){
    const QntLag = Ared(A_Lag/Lag)
    const QntAlt = Ared(A_Alt/Alt)
      const SobraV = A_Lag-QntLag*Lag
      const SobraH = A_Alt-QntAlt*Alt

    const Origen = [] ; const Invert = []

    for(let i=0;i<QntLag;i++){for(let j=0;j<QntAlt;j++){Origen.push(1)}}
    if(SobraH>SobraV && SobraH>Lag){for(let i=0;i<Ared(A_Lag/Alt);i++){for(let j=0;j<Ared(SobraH/Lag);j++){Invert.push(1)}}}
    else if(SobraV>Alt){for(let i=0;i<Ared(A_Alt/Lag);i++){for(let j=0;j<Ared(SobraV/Alt);j++){Invert.push(1)}}}
    
    return Origen.length+Invert.length
  }
  function CriaCanvas(Lag,Alt,A_Lag,A_Alt){
    const QntLag = Ared(A_Lag/Lag)
    const QntAlt = Ared(A_Alt/Alt)
      const SobraV = A_Lag-QntLag*Lag
      const SobraH = A_Alt-QntAlt*Alt
    const StrX = QntLag*Lag
    const StrY = QntAlt*Alt

    const Cnvs = $('#CanvasMedidas')
    Cnvs.width = A_Lag ; Cnvs.height = A_Alt
    Cnvs.style.width = A_Lag/3 ; Cnvs.style.height = A_Alt/3
  
    const ctx = Cnvs.getContext('2d')
    ctx.strokeStyle = 'white'
    ctx.fillStyle = 'purple'
    ctx.lineWidth = 3
    
    for(let i=0;i<QntLag;i++){for(let j=0;j<QntAlt;j++){
      const[x,y]=[i*Lag,j*Alt] ; ctx.fillRect(x,y,Lag,Alt) ; ctx.strokeRect(x,y,Lag,Alt)}}
  
    if(SobraH>SobraV && SobraH>Lag){
      for(let i=0;i<Ared(A_Lag/Alt);i++){for(let j=0;j<Ared(SobraH/Lag);j++){const[Xv,Yv]=[i*Alt,j*Lag]
        ctx.fillRect(Xv,Yv+StrY,Alt,Lag);ctx.strokeRect(Xv,Yv+StrY,Alt,Lag)}}
    }else if(SobraV>Alt){
      for(let i=0;i<Ared(A_Alt/Lag);i++){for(let j=0;j<Ared(SobraV/Alt);j++){const[Xv,Yv]=[j*Alt,i*Lag]
        ctx.fillRect(Xv+StrX,Yv,Alt,Lag);ctx.strokeRect(Xv+StrX,Yv,Alt,Lag)}}
    }
    
  }