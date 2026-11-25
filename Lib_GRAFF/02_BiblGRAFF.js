function WheelH(e,el){ // Mudar Orientação do Scroll
    e.preventDefault();
    cancelAnimationFrame(el._w);
    el._dest=(el._dest??el.scrollLeft)+e.deltaY;

    (function anim(){
        el.scrollLeft+=(el._dest-el.scrollLeft)*.15;
        if(Math.abs(el._dest-el.scrollLeft)>0.5)
            el._w=requestAnimationFrame(anim);
    })();
}

const UniqSplit=Arry=>{ // Acho que OBSOLETA
  const    N = e=>RxAcento(RxRepeti(RxEspaco(e))).toLowerCase()
  const  arr = [...new Map(Arry.map(e=>[N(e),e.trim()])).values()]
  return arr.filter(a=>!arr.some(b=>{
    if(a===b) return false ; const na=N(a), nb=N(b) ; if(nb.includes(na)) return true
    if(Math.abs(nb.length-na.length)<=2 && nb.length>na.length) return true
    return false
  }))
}

function ClickForaa(el,div,fn){ // ir pra biblioteca PreScript
    const handler = (e)=>{if(el.contains(e.target) || div.contains(e.target)) return
        fn() ; document.removeEventListener('click', handler)}
    setTimeout(()=>document.addEventListener('click', handler),0)
}

function LocAno(Email){ // Acho que OBSOLETA
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

const BrevTitle = (Typ,Stg)=>{
    if(Typ=='PDDS') return  `${Stg.replace(/#/g,'').split('|').length}`
    if(Typ=='CLNT') return    (Stg.split('#')[0]+` (${Stg.split('#')[1]})`).replace(' \(\)','')
    if(Typ!='SERV') return     Stg.replace(/#/g,'')
    try{const g={}
        Stg.split('|').forEach(s=>{
            let [Serv,Qnt,Lag,Alt,Desc]=s.split('#')
            if(!Serv){g[Desc]??={q:0,m:new Set()};return g[Desc].q++}
            let m=Lag&&Alt?`${Cm(Lag)} x ${Cm(Alt)}`:`${Lag||''}${Alt||''}`
            g[Serv]??={q:0,m:new Set()}
            g[Serv].q+=+Qnt
            g[Serv].m.add(m)
        })
        let r = Object.entries(g).map(([n,{q,m}])=>`${q} - ${n}${m.size>1?` (${[...m].join(' / ')})`:" "+[...m][0]}`).join(' | ')
        if(r.length<=80) return r
        return Object.entries(g).map(([n,{q}])=>`${q} - ${n}`).join(' | ')
    }catch{return Stg.replace(/#/g,'')}
}

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
function Promss_Src(files){
  const srcList = []
  const promises = Array.from(files).map(File=>{
    return new Promise(r=>{
      const Rend = new FileReader()
      Rend.onload=e=>{srcList.push(e.target.result);r()}
      Rend.readAsDataURL(File)})
  });return Promise.all(promises).then(()=>srcList)
}
function Load_Cnvs(div){ // dar p Inner nos Input Canvas
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
function Read_Canvs(){  // Atualizar a Parte Interna do Canvas
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
function CopyGRAFF(e,btn){
    var temp = document.createElement('textarea')
    temp.value = CopyPresset[e] ?? e.split('/').join('\n') // (Primeiro aceita o obj, segundo se for array)
    document.body.appendChild(temp)
    temp.select()
    document.execCommand('copy')
    document.body.removeChild(temp)
    btn.innerText = 'Texto copiado!'
}
function Promss_Imgs2(files,div){ // Quando eu Upo Várias Imagens dentro de um input
  const arry = []
  for (const file of files) {
      const reader = new FileReader()
      const promise = new Promise(r => {
          reader.onload = e => {
              const Div = document.createElement('div')
              const img = document.createElement('img')
              Div.classList.add('DivImgRsut','Ct','Rltv')
              img.src = e.target.result
              img.name = file.name
              Div.appendChild(img)
              $(div).appendChild(Div)
              r()
          };reader.readAsDataURL(file)
      });arry.push(promise)
  };return Promise.all(arry)
}
const criarThumbnail = (file, pixel) =>
  new Promise((res, rej) => {
    const img = new Image()
    img.onload = () => {
      let [w, h] = [img.width, img.height]
      if (w > h) h = Math.round((h / w) * pixel), w = pixel
      else w = Math.round((w / h) * pixel), h = pixel
      const canvas = Object.assign(document.createElement('canvas'), { width: w, height: h })
      canvas.getContext('2d').drawImage(img, 0, 0, w, h)
      canvas.toBlob(res, file.type)
    }
    img.onerror = rej
    img.src = URL.createObjectURL(file)
})
function RodaCanvMdds(Eu){ // Conciderar que eu as vezes pode ser a área
    function CalcAreaQnt(Lag,Alt,A_Lag,A_Alt){
        const QntLag = Ared(A_Lag/Lag)  ; const QntAlt = Ared(A_Alt/Alt)
        const SobraV = A_Lag-QntLag*Lag ; const SobraH = A_Alt-QntAlt*Alt
        const Origen = [] ; const Invert = []
        for(let i=0;i<QntLag;i++){for(let j=0;j<QntAlt;j++){Origen.push(1)}}
        if(SobraH>SobraV && SobraH>Lag){for(let i=0;i<Ared(A_Lag/Alt);i++){for(let j=0;j<Ared(SobraH/Lag);j++){Invert.push(1)}}}
        else if(SobraV>Alt){for(let i=0;i<Ared(A_Alt/Lag);i++){for(let j=0;j<Ared(SobraV/Alt);j++){Invert.push(1)}}}
        return Origen.length+Invert.length
    }
    const Pars = e=>parseFloat(Num(e.value))*200
    const TrID = Array.from(Eu.closest('.ORC_tr').classList).find(c => c.startsWith('ORC_tr-'))?.replace('ORC_tr-','') // Pega o ID independente se é no ORC ou se é no Detalhe
    const tr   = $(`#ORC .ORC_tr-${TrID}`)
    const Dtlhe= $(`#Div-Detalhes .ORC_tr-${TrID}`)

    if(!tr.classList.contains('CanvMddsATV')){return}
    const Qnt  = $('.oQnt input',tr)
    const [Alt  ,Lag  ] = [Pars($('.oAlt',tr)),Pars($('.oLrg',tr))]
    const [A_Lag,A_Alt] = [Pars($('.I_AreaX',Dtlhe)),Pars($('.I_AreaY',Dtlhe))]
    
    const C1 = !Lag||!Alt ? 0 : CalcAreaQnt(Lag,Alt,A_Lag,A_Alt)
    const C2 = !Lag||!Alt ? 0 : CalcAreaQnt(Alt,Lag,A_Lag,A_Alt)
    Qnt.value = C1===0?'':C1>C2?C1:C2
    const dad = C1>C2? [Lag,Alt] : [Alt,Lag]
    
    const Cnvs = $(`.CanvasMedidas`,Dtlhe)
    Show(Cnvs)
    GeraCanvMdds(Cnvs,dad[0],dad[1],A_Lag,A_Alt)
}
function GeraCanvMdds(Cnvs,Lag,Alt,A_Lag,A_Alt){
    
    function mostrarAviso(msg){
        Cnvs.width = 200; Cnvs.height = 200
        const ctx = Cnvs.getContext('2d')
        ctx.clearRect(0, 0, Cnvs.width, Cnvs.height)
        ctx.fillStyle = '#000'
        ctx.font = '16px Arial'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(msg, Cnvs.width / 2, Cnvs.height / 2)
    }

    // Retornar quando tiver fora dos Limites
    const Cabe1 = (Alt <= A_Alt && Lag <= A_Lag) // só pra conferir se cabe pelomenos 1
    const Cabe2 = (Lag <= A_Alt && Alt <= A_Lag) // só pra conferir se cabe pelomenos 1
    if(Alt==2|| Lag==2 ){mostrarAviso('1cm não permitido'        ) ; return}
    if(!Alt  || !Lag   ){mostrarAviso('Insira as Medidas do Item') ; return}
    if(!A_Lag|| !A_Alt ){mostrarAviso('Insira as Medidas da àrea') ; return}
    if(!Cabe1 && !Cabe2){mostrarAviso('Não cabe na Área'         ) ; return}

    if(A_Lag>A_Alt){Trc(Cnvs,'Wmax','Hmax')}else{Trc(Cnvs,'Hmax','Wmax')} // Trocar Modo de Exibição

    const QntLag = Ared(A_Lag/Lag)  ; const QntAlt = Ared(A_Alt/Alt)
    const SobraV = A_Lag-QntLag*Lag ; const SobraH = A_Alt-QntAlt*Alt
    const StrX = QntLag*Lag         ; const StrY = QntAlt*Alt

    Cnvs.width = A_Lag ; Cnvs.height = A_Alt
    Cnvs.style.width = A_Lag/3 ; Cnvs.style.height = A_Alt/3

    const ctx = Cnvs.getContext('2d')
    ctx.strokeStyle = 'white'
    ctx.fillStyle = 'purple'
    ctx.lineWidth = 1

    for(let i=0;i<QntLag;i++){for(let j=0;j<QntAlt;j++){const[x,y]=[i*Lag,j*Alt] ; ctx.fillRect(x,y,Lag,Alt) ; ctx.strokeRect(x,y,Lag,Alt)}}
    if(SobraH>SobraV && SobraH>Lag){for(let i=0;i<Ared(A_Lag/Alt);i++){for(let j=0;j<Ared(SobraH/Lag);j++){const[Xv,Yv]=[i*Alt,j*Lag]
        ctx.fillRect(Xv,Yv+StrY,Alt,Lag);ctx.strokeRect(Xv,Yv+StrY,Alt,Lag)}}
    }else if(SobraV>Alt){for(let i=0;i<Ared(A_Alt/Lag);i++){for(let j=0;j<Ared(SobraV/Alt);j++){const[Xv,Yv]=[j*Alt,i*Lag]
        ctx.fillRect(Xv+StrX,Yv,Alt,Lag);ctx.strokeRect(Xv+StrX,Yv,Alt,Lag)}}
    }
}

// Calculo do SVG
const readSVGFiles=(Arr,Call)=>Arr.forEach(file=>{const r=new FileReader();r.onload=({target:{result:svg}})=>{Call(svg)};r.readAsText(file)})
const InvRoot=(v,d=0.07,k=1)=>Math.sqrt(v)*k/(1+d*Math.sqrt(v))
const ContPth=p=>((p.getAttribute('d') || '').match(/[Mm]/g) || []).length
const ContPly=p=>p?Math.floor(p.trim().split(/[\s,]+/).length/2):0
const contNos=d=>{
    const cmds = d.match(/[a-zA-Z]|-?\d*\.?\d+/g)
    if (!cmds) return 0
    let totalNos = 0 ; let i = 0
    while (i < cmds.length) {const cmd = AA(cmds[i++]);switch (cmd) {
        case 'M':
        case 'L':
        case 'T': while (i + 1 < cmds.length && !isNaN(Number(cmds[i])) && !isNaN(Number(cmds[i + 1]))) {totalNos++;i += 2;}break;
        case 'H':
        case 'V': while (i < cmds.length && !isNaN(Number(cmds[i]))){totalNos++;i++;}break;
        case 'C': while (i + 5 < cmds.length) {totalNos++;i += 6;} break;
        case 'S':
        case 'Q': while (i + 3 < cmds.length) { totalNos++; i += 4; } break;
        case 'A': while (i + 6 < cmds.length) {totalNos++; i += 7; }break;
        case 'Z': break; /*não conta nó*/
        default : if (!isNaN(Number(cmd))) {i++;}}
    }return totalNos
}
function CalcSVG(svgTxt,Mdds,mat){
    const svg = new DOMParser().parseFromString(svgTxt,'image/svg+xml')
    const [path,poly] = [$$('path',svg),$$('polygon',svg)]
    const nos = path.reduce((s,p)=>s+contNos(p.getAttribute('d'     )||''),0) +
                poly.reduce((s,p)=>s+ContPly(p.getAttribute('points')||''),0)
    const Pth = path.reduce((s,e)=>s+ContPth(e),0)+poly.length
    const m2  = Mdds[0]*Mdds[1]*Mdds[2]
    const tmp = nos*m2*Pth*mat.Maq
    return {Nos:nos,Path:Pth,Temp:tmp.toFixed(2),
        Cort : InvRoot(tmp*mat.Val,0.03),                       // Corte com a distorção do seu Proprio Crecent
        Mtrl : ((m2*mat.Mat)+(m2*mat.Mat*Crecent(m2,0.5,1.8))), // Material + a % do Crecent
    }
}
function CheckLimit(Variant,La,Al,Lrg,Alt){ // ⚠️ Da pra SIMPLIFICAR a parte do DOM
    const AVISO = (v,i,t) => {Add(i,'Error');Rmv_N($('span',Pai(i)));Inn($('span',Pai(i)),`${t}: ${Cm(v)}`)}
    [La, Al].forEach(i => { Rmv(i,'Error'); Add_N($('span',Pai(i))) }) // Limpeza
    const { Min={}, Max={} } = Variant?.Limit || {}
    const chk = (v,min,max,i) => {if(!v) return
        if(min && v<min) AVISO(min,i,'Min')
        if(max && v>max) AVISO(max,i,'Max')}
    chk(Lrg, Min.L, Max.L, La) ; chk(Alt, Min.A, Max.A, Al) // Limites individuais
    const x = Max.x || 0 ; const X = Max.X || 0             // Limite compartilhado x / X
    if(x && X){if(!((Lrg <= x && Alt <= X) || (Lrg <= X && Alt <= x))){[La, Al].forEach(i => AVISO(i===La ? x : X, i, 'Max'))}} // Caso específico: limite separado para cada lado, mas orientação não importa
    else if(x && !X){if(Lrg && Alt && Lrg > x && Alt > x) [La, Al].forEach(i => AVISO(x, i, 'Max'))} // Caso compartilhado: apenas um lado precisa obedecer
}

// Trexo relacionado a Mover os Botões das Fotinhas
let alvo,dx,dy
document.querySelectorAll('.movel').forEach(el => el.onmousedown = e => {alvo = el; dx = e.clientX - el.offsetLeft; dy = e.clientY - el.offsetTop})
document.onmousemove = e => {if(alvo) {const x = e.clientX - dx, y = e.clientY - dy; alvo.style.left = x + 'px'; alvo.style.top = y + 'px'; $('.dimens',alvo).textContent = `${x}, ${y}`}}
document.onmouseup = () => {if (alvo) {navigator.clipboard.writeText(`top: ${alvo.style.top}; left: ${alvo.style.left};`); alvo = null}}

//  PREPARAR pra o DESMANCHE
function Tm_OptsGraff(Ary,Stg=null){ //  Função que Carrega os Serviços dentro dos Grupos
    const GpIt={}, GpOF={}
    ObjEtr(Prod).forEach(([k,v])=>{GpIt[k] = v.Calc ; GpOF[k] = v.Stts})

    return `<option value="" disabled selected>${Ary[0]}</option>
        ${Object.entries(Ary.slice(1).reduce((a,e)=>{
            (a[GpIt[e]]||=[]).push(`<option value=\"${e}\" ${Stg === e ? 'selected' : ''} ${GpOF[e] === 'Offf' ? 'style=\"color:red;\"' : ''}>${e}</option>`);return a
        },{})).map(([g,o]) => `<optgroup label=\"${g}\">${o.join('')}</optgroup>`).join('')}
    `
}
const SavePDF = async (Div, Nome="download.pdf") => {
    const { jsPDF } = window.jspdf;

    // 1️⃣ Renderiza a Div em canvas
    const canvas = await html2canvas(Div, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    // 2️⃣ Cria o PDF
    const pdf = new jsPDF("p", "pt", "a4");

    // 3️⃣ Adiciona a imagem como fundo
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    // 4️⃣ Adiciona o conteúdo editável por cima
    await pdf.html(Div, {
        x: 0,
        y: 0,
        html2canvas: { scale: 0.5 }, // captura menor para performance
        callback: () => pdf.save(Nome)
    });
}
const SavePDF2 = async (Div, Nome = "download.pdf") => {
    const { jsPDF } = window.jspdf
    const pdf = new jsPDF("p", "pt", "a4")
    await pdf.html(Div,{x: 20,y: 20,autoPaging: "text",callback: (doc) => doc.save(Nome)});
}


// GRAFICO------------------------------------------------------

function Load_Grfc(tipo,div,base,Opt={}){
    const mapa={Barra:'bar',Linha:'line',Pizza:'pie',Rosca:'doughnut',Radar:'radar',Polar:'polarArea'};
    div.chartInstance?.destroy();

    const pluginValor={
        id:'valoresBarras',
        afterDatasetsDraw(chart){
            if(!Opt.valores)return;
            const {ctx,chartArea}=chart;
            ctx.save();
            ctx.font='bold 12px Arial';
            ctx.textBaseline='middle';
            ctx.fillStyle='#fff';

            chart.data.datasets.forEach((ds,i)=>{
                chart.getDatasetMeta(i).data.forEach((barra,j)=>{
                    const valor=ds.data[j];
                    const txt=Opt.moeda
                        ? Number(valor).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
                        : String(valor);

                    ctx.textAlign='right';
                    const largura=ctx.measureText(txt).width;
                    if(barra.x-barra.base>largura+16){
                        ctx.fillStyle='#fff';
                        ctx.fillText(txt,barra.x-8,barra.y);
                    }else{
                        ctx.textAlign='left';
                        ctx.fillStyle='#fff';
                        ctx.fillText(txt,Math.min(barra.x+8,chartArea.right-largura-2),barra.y);
                    }
                });
            });
            ctx.restore();
        }
    };

    div.chartInstance=new Chart(div,{
        type:mapa[tipo],
        data:base,
        plugins:[pluginValor],
        options:{
            indexAxis:Opt.horizontal?'y':'x',
            responsive:true,
            maintainAspectRatio:false,
            animation:{duration:1000,easing:'easeOutBounce'},
            plugins:{
                legend:{display:!Opt.horizontal,labels:{color:'#fff'}},
                title:{display:true,text:`Gráfico de ${tipo}`,color:'#ff79c6'}
            },
            scales:{
                x:{
                    ticks:{color:'#c084fc'},
                    grid:{color:'#2a2a40'},
                    ...(Opt.horizontal?{grace:'25%'}:{})
                },
                y:{
                    ticks:{color:'#f97316'},
                    grid:{color:'#2a2a40'}
                }
            }
        }
    });
}
function Charte(labels,data,labelGrafico,cor='#c084fc'){ 
    return {labels,datasets: [{
            label: labelGrafico,
            data,
            backgroundColor: isArr(cor) ? cor : [cor],
            borderColor: '#fff',
            borderWidth: 1,
            tension: 0.4
        }]
    }
}
const CharteGrup = (obj,labelGrafico,cores)=>{
    const labels = ObjKey(obj)
    const grupos = [...new Set(ObjVal(obj).flatMap(e=>ObjKey(e)))]
    return {
        labels,
        datasets: grupos.map((g,i)=>({
            label: `${labelGrafico} — ${g}`,
            data: labels.map(l=>obj[l]?.[g] || 0),
            backgroundColor: cores[i % cores.length],
            borderColor: '#fff',
            borderWidth: 1
        }))
    }
}

// OUTROS------------------------------------------------------
function BtnOff(btn,stg,Tru){AddTrue(btn,'BrnOff',Tru) ; btn.textContent=stg}

function CopyTagImg(btn,div,scale=1) { // btn=Botão q clikei , e=Div  s= Escala 1 ou eu escolho
  if (!btn || !div) return ; if (!document.hasFocus()) return
  BtnOff(btn,'Copiando...',true)
  html2canvas(div, {scale,backgroundColor: null,useCORS: true})
  .then(c => new Promise(r => c.toBlob(r)))
  .then(b => navigator.clipboard.write([new ClipboardItem({'image/png':b})]))
  .then(()=> {BtnOff(btn,'Copiado!',false)})
  .catch(()=>{BtnOff(btn,'Erro',false)})
}

function Calc_Prcnt_COR(e){
    return new Promise(resolve=>{
        const calc=img=>{
            const c=document.createElement('canvas'),x=c.getContext('2d')
            c.width=img.naturalWidth||img.width
            c.height=img.naturalHeight||img.height
            x.drawImage(img,0,0,c.width,c.height)
            const d=x.getImageData(0,0,c.width,c.height).data
            const r=Object.fromEntries(Object.keys(HH.CORES).map(k=>[k,0]))
            let px=0
            for(let i=0;i<d.length;i+=4){
                if(d[i+3]<10) continue
                px++
                let m=1e9,k
                for(const n in HH.CORES){
                    const v=Math.abs(d[i  ]-HH.CORES[n][0])+
                            Math.abs(d[i+1]-HH.CORES[n][1])+
                            Math.abs(d[i+2]-HH.CORES[n][2])
                    if(v<m){m=v;k=n}
                } ; r[k]++
            }
            const outs={}
            for(const k in r){const v=+(r[k]/px*100).toFixed(2) ; if(v>0.1) outs[k]=v}
            return outs
        }

        const img=new Image()
        img.src=URL.createObjectURL(e.target.files[0])
        img.onload=()=>resolve([calc(img),img])
    })
}

// Obssoletas mas Boas
const ContFrq2=(a,k)=>Object.fromEntries(Object.entries(a.reduce((o,e)=>(e?.[k]?.trim()&&(o[e[k].trim()]=(o[e[k].trim()]||0)+1),o),{})).sort(([,x],[,y])=>y-x))
const IntrvlData=(arr,ini,fim)=>arr.filter(o=>{const d = o?.Data ; if(!d) return false ; const D = new Date(d) ; return !isNaN(D) && D >= new Date(ini) && D <= new Date(fim)})





