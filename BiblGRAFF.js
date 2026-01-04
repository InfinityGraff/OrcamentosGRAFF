function ExieMais(E,Off){if(Off){MdalShow('#MdalLgin')}else{Show('#mmdal');Animar(E,$('#H_Lgin'))}}
function MdalShow(e){ShowModal($('#FModal'),$(e))}

// Bibliotecas Gambiarras! // criaCol_Col('Qnt','PDDS','Serv')
function criaCol_Typ(New,Typ    ){J[Typ].forEach(e=>{if(e[New]==null){e[New]=''}})}                                            // pra quando for Fora!
function criaCol_Col(New,Typ,Col){J[Typ].forEach(e=>{if(!e[Col]){return} ; e[Col].forEach(s=>{if(s[New]==null){s[New]=''}})})} // pra quando for Dentro!
function exclCol_Col(Del,Typ,Col){J[Typ].forEach(e=>e[Col]?.forEach(s=>delete s[Del]))}                                        // pra quando for Dentro!

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

function CrecentAntigo(MM2){
  /*Crescente:*/ var M = MM2
    var D = {Min:0.06,Med:0.25,Max:1.00}
    var V = {Min:1.70,Med:0.70,Max:0.00}
      var crecent = M> D.Med? M>=D.Max? V.Max:
      M< D.Med? V.Med: V.Med-((V.Med-V.Max)*((M-0.001)/D.Max)):
      M<=D.Min? V.Min: V.Min-((V.Min-V.Med)*((M-0.001)/D.Med))

  return crecent
}

const Crecent=(M,F=0.5,F2=1.8)=>{ // Mudar as Forças de Acordo com cada Produto
  if (M <= 0) return (F + F2) * 2
  if (M >= 1) return 0
  const t1 = 1 - Math.pow(M, F * 1.2);
  const gradual = F2 * Math.pow(Math.max(0, 0.25 - M) / 0.25, 2)
  return +(t1 * (F + 0.7) + gradual).toFixed(3);
}

function CrypPass(senha){ // Obsoleta
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

function GambiarraAdd(div){Add(_tr(div),'Hoov') ; $$(':scope > td',_tr(div)).forEach(e=>Add(e,'Hoov'))} // HOROZOZA fazer de tudo pra tirar!

function ShowBndj(div){                                                // Função que exibe/oculta o painel .BNdj dentro da div recebida
    if(!document.contains(event.target)){LOG('não ta mais no DOM') ; return} // interrompe se o target não estiver mais no DOM
    if(['IMG','I','BUTTON'].includes(event.target.tagName)){return}
    if(event.target.closest('svg')){return}
    const e = $('.BNdj',div)                                      // Seleciona o elemento .BNdj dentro da div Passada
    if(event.target.closest('.BNdj')){return}                     // Se o clique for dentro do .BNdj, interrompe (não fecha nem altera)
    else{                                                         // Caso contrário (clique fora do conteúdo interno)
        e.style.zIndex = $$('.BNdj:not(.none)').length + 500      // Define o z-index dinamicamente com base na quantidade de painéis visíveis
        if(Tecla('ctrl')){
            Tog_N(e);GambiarraAdd(div)}                           // Se a tecla CTRL estiver pressionada, apenas alterna o estado (mostra/oculta)
        else{                                                     // Caso não esteja com CTRL
            $$('.BNdj:not(.none)').forEach(E=>{                   // Percorre todos os painéis .BNdj que estão visíveis
            //    if(E==e){return}else{Add_N(E)}                  // Fecha (adiciona .none) em todos, exceto o atual
            })
            Tog_N(e);GambiarraAdd(div);                           // Alterna visibilidade do painel atual (mostra se estava oculto, e vice-versa)
        }
    }
    if(Tecla('ctrl')){return}                                     // Se CTRL estiver pressionado, interrompe (não aplica o fechamento automático)
    else if(e.contains(event.target)){return}                     // se o Click foi Interno
    else{ClickFora(div,()=>{Add_N(e)})}                           // Caso contrário (clique fora da div), ativa função para fechar o painel ao clicar fora
}

const BrevTitle = str => {
  try {
    const data = str.split(" | ").map(item => {
      let [q, ...rest] = item.split(" - ");
      if (isNaN(+q)) throw "NaN"; // se não for número, aborta
      let [nome, ...mdd] = rest.join(" - ").split(" ");
      return { q: +q, nome, mdd: mdd.join(" ") };
    });

    const agrupado = data.reduce((acc, { q, nome, mdd }) => {
      acc[nome] ??= { qtd: 0, mdd: new Set() };
      acc[nome].qtd += q;
      acc[nome].mdd.add(mdd);
      return acc;
    }, {});

    return Object.entries(agrupado)
      .map(([n, { qtd, mdd }]) =>
        `${qtd} - ${n}${mdd.size > 1 ? ` (${[...mdd].join(" / ")})` : " " + [...mdd][0]}`
      )
      .join(" | ");
  } catch {
    return str; // se der erro ou NaN, retorna string original
  }
}

function DarVAL(td,v,A){
    const R = D_R(td)
    const PP = $(':scope > div > .P-P',td)
    if(['Edit','Fixo'  ].includes(R.Tm)){Nm(PP,v)       ; Inn(PP,v)}
    if(['Auto'         ].includes(R.Tm)){Nm(PP,Num(v)) ; Inn(PP,v)}
    if(['Valr','Sync'  ].includes(R.Tm)){Nm(PP,v==''?'':Num(v))  ; Inn(PP,v==''?'':RS(v))}
    if(['Mdds'         ].includes(R.Tm)){Nm(PP,Num(v))  ; Inn(PP,v?Cm(v):'')}
    if(['Slct'         ].includes(R.Tm)){Nm(PP,v)       ; PP.value = v}
    if(['Data','Sugg','Link','Ssvg','Imgs','Chek','Likk'].includes(R.Tm)){Inn(Pai(PP),Tm_Tm[R.Tm](v,R,A))}
}
function DarVAL_Tm(td,v,A){ const R = D_R(td) ; Inn($(':scope > div',td),Tm_Tm[R.Tm](v,R,A))} // Parece q ela só é nessesária quando o valor é uma Bandeija, mas se n for Xuva, só a de cima Resolve

const VAAL = e => e?.value ?? e?.querySelector('input,select')?.value ?? null

function VAL(e){
    const td = e.tagName === 'TD' ? e : _td(e)
    const R = D_R(td) // se e for td entra 'e' se não for, faz o closeset('td') aqui dentro mesmo
    const val = ['Edit','Fixo','Sugg','Soma'].includes(R.Tm) ? $('.P-P',td).textContent.trim()
            : R.Tm==='Ssvg' ? Nm($('.P-P',td)).trim()
            : R.Tm==='Imgs' ? Nm($('.P-P',td)).trim()
            : R.Tm==='Link' ? Nm($('.P-P',td)).trim()
            : R.Tm==='Bndj' ? $('.P-P',td).textContent.trim()
                : R.Tm==='Valr' ? Num($('.P-P',td).textContent.trim())
                : R.Tm==='Mdds' ? Num($('.P-P',td).textContent.trim())
                : R.Tm==='Auto' ? Num($('.P-P',td).textContent.trim())
                : R.Tm==='Sync' ? Num($('.P-P',td).textContent.trim()) // mas vai ser Diferente!
            : R.Tm==='Data' ? $('input' ,td).value
            : R.Tm==='Slct' ? $('select',td).value
            : R.Tm==='Inpt' ? $('input' ,td).value
            : R.Tm==='Chek' ? $('input' ,td).checked
            : Is(td,'input')? td.value
            : R.Tm==='Lixo' ? '-'
            : null
    return val
    // a idéia é que esse argumento seja qualquer coisa q está dentro de um td q não seja uma tabela
}

const vAL=(s,e)=>
    s=='Imgs' ?     VAAL($('.oImgs',_tr(e)))  :
    s=='Serv' ?     VAAL($('.oServ',_tr(e)))  :
    s=='Tipo' ?     VAAL($('.oTipo',_tr(e)))  :
    s=='Matr' ?     VAAL($('.oMatr',_tr(e)))  : 
    s=='Cbmt' ?     VAAL($('.oCbmt',_tr(e)))  :
    s=='Lrg'  ? Num(VAAL($('.oLrg' ,_tr(e)))) :
    s=='Alt'  ? Num(VAAL($('.oAlt' ,_tr(e)))) :
    s=='Qnt'  ? Num(VAAL($('.oQnt' ,_tr(e)))) :
    s=='Qntt' ?     VAAL($('.oQnt' ,_tr(e)))  : null

const DarJJ = (M,T,R,C,V,Lv2=null)=>{
    const j = J[T], k = JJ[T]; if (!j || !k) return
    let o, jL, jjL, parent
    if (Lv2){
        parent = J[Lv2.pT]?.find(e => e.Id == Lv2.pR)
        if (!parent) return
        jL   = parent[Lv2.pC]?.find(e => e.Id == R)
        jjL  = JJ[Lv2.pT]?.[Lv2.pR]?.[Lv2.pC]?.find(e=>e.Id==R)
    } else o = j.find(e => e.Id == R)

    switch(M){
        case 'Add':{
            const n = typeof V=='object'?V:{Id:R,[C]:V}
            if(Lv2) { parent[Lv2.pC].push(n); if(!JJ[Lv2.pC]) JJ[Lv2.pC]={}; JJ[Lv2.pC][R]=n}
            else { j.push(n); k[R]=n}
            break;
        }
        case 'Edt':
            if(Lv2){if(jL)jL[C]=V ; if(jjL)jjL[C]=V}
            else { if(o) o[C]=V; if(k[R]) k[R][C]=V}
            break;
        case 'Del':
            if(Lv2) { const i=parent[Lv2.pC].findIndex(e=>e.Id==R); if(i>=0) parent[Lv2.pC].splice(i,1); if(JJ[Lv2.pC]) delete JJ[Lv2.pC][R]}
            else { const i=j.findIndex(e=>e.Id==R); if(i>=0) j.splice(i,1); delete k[R]}
    }
    const LOG1 = Lv2 ? jL : o
    const LOG2 = Lv2 ? jjL : k[R]
    const iguais = JSON.stringify(LOG1) === JSON.stringify(LOG2)
    LOG(`Const Atualizadas! ${M}, ${iguais}`)
}

const SplitAvanc=(Stg)=>{ // Funciona Apenas pra GABARITO
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

function Nome_Bxar(C1,und){return `${$Vl('#NomeCliente')}_ CAM `+C1.replace('C_','').replace('F_','').replace(/\d/g, "")+`_ ${und} UND.jpg`}

function Baixar_Cnvs(C1,C2,und){
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

function CopyGRAFF(e,btn){
    var temp = document.createElement('textarea')
    temp.value = CopyPresset[e] ?? e.split('/').join('\n') // (Primeiro aceita o obj, segundo se for array)
    document.body.appendChild(temp)
    temp.select()
    document.execCommand('copy')
    document.body.removeChild(temp)
    btn.innerText = 'Texto copiado!'
}

function PDDSconverterJSON(obj) {
    const camposParaConverter = ["Serv","Pgmt","Cust","Abcd"];
    for (const campo of camposParaConverter) {
        const valor = obj[campo];
        if (
            typeof valor === "string" &&
            (valor.trim().startsWith("{") || valor.trim().startsWith("["))
        ) {
            try {
                obj[campo] = JSON.parse(valor);
            } catch (e) {
                console.warn(`Erro ao converter o campo ${campo}:`, e);
            }
        }
    }
    return obj;
}

function Diferentes(b,a){ // REALTIME do SUPABASE comparar objetos se são iguais Usado
  const r = { Id: b.Id}
  for (const k in b) {
    if (k === 'Id') continue;
    if (Array.isArray(b[k]) && Array.isArray(a[k])) {
      const diffs = b[k].map((itemB, i) => {
        const itemA = a[k][i] || {};
        const d = {};
        if ('Id' in itemB) d.Id = itemB.Id;

        for (const chave in itemB)
          if (chave !== 'Id' && itemB[chave] !== itemA[chave])
            d[chave] = itemB[chave];

        return Object.keys(d).length > 1 ? d : null;
      }).filter(Boolean);

      if (diffs.length) r[k] = diffs;
    } else if (a[k] !== b[k]) {r[k] = b[k];}
  }
  return Object.keys(r).length > 1 ? r : null;
}

function flatenObject(obj,prefix){ // REALTIME do SUPABASE
  const result = []
  const idPai = obj.Id || ''

  for (const [key,val] of Object.entries(obj)){
    if (key === 'Id') continue; // Já usamos o ID do pai

    if (Array.isArray(val)) {
      for (const item of val) {
        const idFilho = item.Id || '';
        for (const [k, v] of Object.entries(item)) {
          if (k === 'Id') continue;
          result.push([key, idFilho, k, String(v)]);
        }
      }
    } else {result.push([prefix, idPai, key, String(val)])}
  }

  return result;
}

// Quando eu Upo Várias Imagens dentro de um input
function Promss_Imgs2(files,div){
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

// Aparentemente Jogar o gráfico na Biblioteca


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


// SavePDF
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

