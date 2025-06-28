// dar p Inner nos Input Canvas
function Load_Cnvs(div){
    if(InptsVazio('#Lista-001 input,#Lista-001 select')){return}      
    Read_Obj_Ipt()
    $(div).innerHTML = ObjCanvs.map((e,x)=>{
        const obj = OBJOBJ.find(arr=>arr[0].id.replace('C_','').replace('F_','')===e.tamn) // Encontra o tamanho correspondente em OBJOBJ
        return `<div class="CanvBox Ct" id="Box${obj[1].id}">
                    <h1 class="H1">${e.qnt} - ${obj[1].id.replace('F_','')}</h1>
                    <div>${e.nome}</div>
                    <div class="Ct">
                        <canvas id="${obj[1].id}${x}" width="${obj[1].W}" height="${obj[1].H}"></canvas>
                        <canvas id="${obj[0].id}${x}" width="${obj[0].W}" height="${obj[0].H}"></canvas>
                    </div>
                    <div class="Ct">
                        <button class="none" onclick="Baixar_Cnvs('${obj[1].id}','${obj[1].id}','${e.qnt}')">Baixar Frente JPG</button>
                        <button class="none" onclick="Baixar_Cnvs('${obj[0].id}','${obj[0].id}','${e.qnt}')">Baixar Costas JPG</button>
                        <button onclick="Baixar_Cnvs('${obj[1].id}${x}','${obj[0].id}${x}','${e.qnt}')">Baixar Gabarito</button>
                    </div>
                    <div class="box-qnt none">${e.qnt} Unidades</div>
                </div>`
            
            }).join('')
    Read_Canvs()
}

// Atualizar a Parte Interna do Canvas
function Read_Canvs(){
    ObjCanvs.forEach(({qnt,tamn,nome,src},x)=>{

        console.log(ObjFundo)
        
        const image  = new Image() ; image.src =  src && src !== '' ? src : './Testes/Edson.png'
        const FundoF = new Image() ; FundoF.src =  ObjFundo.some(e=>e.lado==='F') ? ObjFundo.filter(e=>e.lado==='F').map(e=>e.src) : './Testes/Fundo.jpg'
        const FundoV = new Image() ; FundoV.src =  ObjFundo.some(e=>e.lado==='C') ? ObjFundo.filter(e=>e.lado==='C').map(e=>e.src) : './Testes/Fundo.jpg'
        const MoldeF = new Image() ; MoldeF.src = `./Moldes/F_${tamn}.png`
        const MoldeV = new Image() ; MoldeV.src = `./Moldes/C_${tamn}.png`

        function drawCanvas(cnvs,ctx,F_C,nome){
            const Crop = $('#Crop').checked
            const cW = cnvs.width, cH = cnvs.height;
            const newW = $('#size').value/100 * cW
            const newH = (newW/image.width) * image.height
            const newL = $('#left').value/100 * cW - (newW/2)
            const newT = $('#top' ).value/100 * cH - (newH/2)
            ctx.clearRect(0,0,cW,cH)
            
            const fundo = F_C === "F" ? FundoF : FundoV
            const [fundoW, fundoH] = [fundo.width, fundo.height]

            if (Crop){
                const scale = Math.max(cW / fundoW, cH / fundoH)
                const cropX = (fundoW * scale - cW) / 2
                const cropY = (fundoH * scale - cH) / 2
                ctx.drawImage(fundo, -cropX, -cropY, fundoW * scale, fundoH * scale)
            }else{ctx.drawImage(fundo,0,0,cW,cH)}

            if(F_C==="C"){
                if(image.src.match(/Edson\.png$/i)){
                    const newCanvas = document.createElement('canvas') ; const newCtx = newCanvas.getContext('2d')
                    newCanvas.width = newW ; newCanvas.height = newH

                    // Ajustar o tamanho da fonte para preencher o canvas
                    let fontSize = 1; // Iniciar com um tamanho de fonte pequeno
                    newCtx.font = `${fontSize}px ${$Vl('#fontFamily')}`;
                    while (newCtx.measureText(nome).width < newW && fontSize < newH){fontSize++ ; newCtx.font = `${fontSize}px ${$Vl('#fontFamily')}`}
                    fontSize--; newCtx.font = `${fontSize}px ${$Vl('#fontFamily')}`

                    ctx.shadowColor = $Vl('#shadowColor')
                    ctx.shadowBlur = $Vl('#shadowBlur')*10

                    const Zoom = 5                     
                    const newGradient = newCtx.createLinearGradient(
                        (GlobDegrade.x1*Zoom),(GlobDegrade.y1* Zoom),
                        (GlobDegrade.x2*Zoom),(GlobDegrade.y2* Zoom))

                    newGradient.addColorStop(0, GlobDegrade.color1)
                    newGradient.addColorStop(1, GlobDegrade.color2)

                    // Aplica o gradiente no novo canvas
                    newCtx.fillStyle = $('#TypeColor').innerHTML ==='Cor:' ? $Vl('#FontColor') : newGradient
                    newCtx.strokeStyle  = $Vl('#outlineColor')
                    newCtx.lineWidth    = $Vl('#outlineWidth')*10
                    newCtx.lineJoin     = 'round'        // Configurar para cantos arredondados
                    newCtx.textBaseline = 'middle'   // Centraliza verticalmente o texto

                    // Desenhar contorno e texto no novo contexto
                    newCtx.save() // Salva o estado atual do contexto
                    newCtx.textAlign = 'center'; // Centraliza horizontalmente
                    newCtx.strokeText(nome,newW/2,newH/2) // Desenhar contorno
                    newCtx.fillText(  nome,newW/2,newH/2)   // Desenhar texto com gradiente
                    newCtx.restore() // Restaura o estado anterior do contexto

                    // Desenhar o novo canvas no contexto original
                    ctx.drawImage(newCanvas, newL, newT, newCanvas.width, newCanvas.height);
                }else{
                    ctx.drawImage(image,newL,newT,newW,newH)
                }
            }
            ctx.drawImage(F_C==="F"?MoldeF:MoldeV,0,0,cW,cH)
        }
        Promise.all([
            new Promise(r=>image.onload  =r),
            new Promise(r=>FundoF.onload =r),
            new Promise(r=>FundoV.onload =r),
            new Promise(r=>MoldeF.onload =r),
            new Promise(r=>MoldeV.onload =r),
        ]).then(()=>{
            drawCanvas($(`#F_${tamn}${x}`),$(`#F_${tamn}${x}`).getContext('2d'),'F',nome)
            drawCanvas($(`#C_${tamn}${x}`),$(`#C_${tamn}${x}`).getContext('2d'),'C',nome)
        })
    })
}

function JuntarCanvas(C1,C2){
    const c1 = $('#'+C1)
    const c2 = $('#'+C2)
    const space = 10

    const newCanvas = document.createElement('canvas')
    newCanvas.width = c1.width + c2.width + space
    newCanvas.height = Math.max(c1.height, c2.height)

    const ctx = newCanvas.getContext('2d')

    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, newCanvas.width, newCanvas.height)

    const c1Y = newCanvas.height - c1.height
    const c2Y = newCanvas.height - c2.height

    ctx.drawImage(c1, 0, c1Y)
    ctx.drawImage(c2, c1.width + space, c2Y)

    return newCanvas
}

function Nome_Bxar(C1,und){
    return `${$Vl('#NomeCliente')}_ CAM `+C1.replace('C_','').replace('F_','').replace(/\d/g, "")+`_ ${und} UND.jpg`
}

function Baixar_Cnvs(C1,C2,und){
    console.log(C1,C2)
    if($Vl('#NomeCliente')===''){ alert('Falta Nome do Pedido');return}
    const link = document.createElement('a')
    link.href = JuntarCanvas(C1,C2).toDataURL('image/jpeg')
    link.download = Nome_Bxar(C1,und)
    link.click()
}

function saveCanvasAsZip(){
    if($Vl('#NomeCliente')===''){alert('Falta Nome do Pedido');return}
    const zip = new JSZip()
    $$('#AllCanvas .CanvBox').forEach(box=>{
        const Canvas = $$(`#${box.id} canvas`)
        const und = $(`#${box.id} .box-qnt`)
        const imgData = JuntarCanvas(Canvas[0].id,Canvas[1].id).toDataURL('image/png').split(',')[1]
        zip.file(Nome_Bxar(Canvas[0].id,und), imgData, {base64:true})
    })
    zip.generateAsync({type:'blob'}).then(e=>saveAs(e,'CAMISAS.zip'))
}
