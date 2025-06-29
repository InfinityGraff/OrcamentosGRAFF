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

const SplitAvanc=(Stg)=>{
    const partes = Stg.replace('.png','').split(/[\s]*[-_,\t][\s]*/).map(p=>p.trim())
    let [nome,qnt,tamn] = ['','','']
    partes.forEach(e=>{
        if(O['Cams'].includes(e.toUpperCase())){tamn=e.toUpperCase()} 
        else if(/^\d+\s*und?$/i.test(e)){qnt = parseInt(e)}
        else if(/^\d+$/.test(e)){qnt = parseInt(e)} 
        else {nome += (nome ? ' ' : '') + e}
    })
    return {Nome:nome.trim(),Tamn:tamn,Qnt:qnt}
}

// DEGRADE================================================================================================
// DEGRADE================================================================================================
// DEGRADE================================================================================================
// DEGRADE================================================================================================

let GlobDegrade = null; // Variável global para armazenar a cor do degradê

function LoadDegade(CCnvs) {
    const gCnvs = $('#gradientCanvas'),
        gCtx = gCnvs.getContext('2d')
    const CCtx = CCnvs.getContext('2d')
    const colorPicker1 = $('#colorPicker1')
    const colorPicker2 = $('#colorPicker2')
    const alignX = $('#alignX')
    const alignY = $('#alignY')

    let BllRd = 10,
        Bll1 = { x: CCnvs.width * 0.1, y: CCnvs.height * 0.1, color: '#ff0000' }, // Cor em formato hexadecimal
        Bll2 = { x: CCnvs.width * 0.8, y: CCnvs.height * 0.8, color: '#0000ff' }, // Cor em formato hexadecimal
        dgBll = null;

    const drawBall = (ball) => {
        CCtx.beginPath();
        CCtx.arc(ball.x, ball.y, BllRd, 0, Math.PI * 2);
        CCtx.fillStyle = ball.color;
        CCtx.fill();
        CCtx.strokeStyle = '#fff';
        CCtx.stroke();
        CCtx.closePath();
    };

    const drawControlPanel = () => {
        CCtx.clearRect(0, 0, CCnvs.width, CCnvs.height);
        const Mini = CCtx.createLinearGradient(Bll1.x, Bll1.y, Bll2.x, Bll2.y);
        Mini.addColorStop(0, Bll1.color);
        Mini.addColorStop(1, Bll2.color);
        CCtx.fillStyle = Mini;
        CCtx.fillRect(0, 0, CCnvs.width, CCnvs.height);
        drawBall(Bll1);
        drawBall(Bll2);
    
        // Armazena as posições e cores para recriar o gradiente
        GlobDegrade = {
            x1: Bll1.x,
            y1: Bll1.y,
            x2: Bll2.x,
            y2: Bll2.y,
            color1: Bll1.color,
            color2: Bll2.color
        };
    };
    

    const drawGradient = () => {
        /*
        const g = gCtx.createLinearGradient(
            (Bll1.x / CCnvs.width) * gCnvs.width,
            (Bll1.y / CCnvs.height) * gCnvs.height,
            (Bll2.x / CCnvs.width) * gCnvs.width,
            (Bll2.y / CCnvs.height) * gCnvs.height
        );
        g.addColorStop(0, Bll1.color);
        g.addColorStop(1, Bll2.color);
        gCtx.fillStyle = g;
        gCtx.fillRect(0, 0, gCnvs.width, gCnvs.height);
        */
    };

    const isBallClicked = (ball, x, y) => Math.sqrt((x - ball.x) ** 2 + (y - ball.y) ** 2) < BllRd;

    CCnvs.addEventListener('mousemove', (e) => {
        if (dgBll) {
            const { left, top } = CCnvs.getBoundingClientRect();
            dgBll.x = Math.max(BllRd, Math.min(CCnvs.width - BllRd, e.clientX - left));
            dgBll.y = Math.max(BllRd, Math.min(CCnvs.height - BllRd, e.clientY - top));
            drawControlPanel();
            drawGradient();
            Read_Canvs()
        }
    });

    CCnvs.addEventListener('mouseup', () => (dgBll = null));

    alignX.addEventListener('click', () => {
        Bll1.x = Bll2.x = CCnvs.width / 2;
        drawControlPanel();
        drawGradient();
        Read_Canvs()
    });
    alignY.addEventListener('click', () => {
        Bll1.y = Bll2.y = CCnvs.height / 2;
        drawControlPanel();
        drawGradient();
        Read_Canvs()
    });

    CCnvs.addEventListener('mousedown', (e) => {
        const rect = CCnvs.getBoundingClientRect();
        const X = e.clientX - rect.left,
            Y = e.clientY - rect.top;

        if (isBallClicked(Bll1, X, Y)) {
            dgBll = Bll1;
        } else if (isBallClicked(Bll2, X, Y)) {
            dgBll = Bll2;
        }
    });

    // Adiciona o evento de clique duplo
    CCnvs.addEventListener('dblclick', (e) => {
        const rect = CCnvs.getBoundingClientRect();
        const X = e.clientX - rect.left,
            Y = e.clientY - rect.top;

        if (isBallClicked(Bll1, X, Y)) {
            showColorPicker(colorPicker1, Bll1, e);
        } else if (isBallClicked(Bll2, X, Y)) {
            showColorPicker(colorPicker2, Bll2, e);
        }
    });

    drawControlPanel();
    drawGradient();
    Read_Canvs()

    function showColorPicker(colorPicker, ball, e) {
        colorPicker.value = ball.color; // Atualiza o seletor com a cor atual da bolinha

        // Posiciona o seletor de cores exatamente onde o mouse está
        colorPicker.style.position = 'absolute';
        colorPicker.style.left = `${e.clientX}px`;
        colorPicker.style.top = `${e.clientY}px`;
        colorPicker.style.display = 'block';

        // Mostra o painel de cores para o usuário
        colorPicker.click();

        // Atualiza a cor da bolinha enquanto o usuário escolhe uma nova cor
        colorPicker.addEventListener('input', function updateColor() {
            ball.color = colorPicker.value;
            drawControlPanel(); // Redesenha o painel após a mudança de cor
            drawGradient(); // Redesenha o degradê
            Read_Canvs()
        });

        // Após selecionar, esconde o seletor de cores novamente
        colorPicker.addEventListener('change', function hideColorPicker() {
            colorPicker.style.display = 'none';
        });
    }
    
}


// GABARITO================================================================================================
// GABARITO================================================================================================
// GABARITO================================================================================================
// GABARITO================================================================================================

function Promss_Src(files){
  const srcList = []
  const promises = Array.from(files).map(File=>{
    return new Promise(r=>{
      const Rend = new FileReader()
      Rend.onload=e=>{srcList.push(e.target.result);r()}
      Rend.readAsDataURL(File)})
  });return Promise.all(promises).then(()=>srcList)
}

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
        const MoldeF = new Image() ; MoldeF.src = `./Moldes/F_${tamn}.png`
        const MoldeV = new Image() ; MoldeV.src = `./Moldes/C_${tamn}.png`
        const FundoF = new Image() ; FundoF.src =  ObjFundo['F'] || './Testes/Fundo.jpg'
        const FundoV = new Image() ; FundoV.src =  ObjFundo['V'] || './Testes/Fundo.jpg'

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
