const J={},JJ={},JJJ={},BS={},ALL={},PreTbl={},RT_Add=new Set(),RT_Rmv=new Set()

const _Bol   =v=> v !== '_'
const _par   =s=>(([Ty,Id,Cl,Tm,Bj,Sc]) => ({Ty,Id,Cl,Tm,Bj:_Bol(Bj),Sc:_Bol(Sc)}))(s.split('-'))
const d_r    =e=>_par(typeof e == "string" ? e : e.dataset.r)
const d_R    =e=>     typeof e == "string" ? e : e.dataset.r
const RR     =(r)=>$$(`td${(isArr(r)?r:[r]).map(k=>`[data-r*="${k}"]`).join('')}`)
const rr     =(r)=> $(`td${(isArr(r)?r:[r]).map(k=>`[data-r*="${k}"]`).join('')}`)
const $r     =(...arr)=>{const K=arr.filter(v=>v!=null&&v!=="").join('-') ; return K ? $(`[data-r="${K}"]`) : null} // da pra simplificar esta Limpeza
const Rx7    =(...arr)=>`.P-P${(arr).map(k=>`[data-r*="${k}"]`).join('')}` // nem todos tem .P-P isso pode dar BO depois
const Rx8    =(...arr)=>    `${(arr).map(k=>`[data-r*="${k}"]`).join('')}` // esse é pra usar em Tfoot justamente pq ele não tem .P-P
const __tr   =e=>e.closest('[class^="tr-"]')
const PrePos =(div,Clone,Ps)=>Ps == "<" ? After(div,Clone) : Befor(div,Clone)
const SELE   =(ev,Eu)=>{ev.preventDefault() ; Tog(Eu,'SEL')}
const ClnObjs=(obj,bs)=>CleanObj(Object.fromEntries(ObjEtr(obj).filter(([k])=>{const r = bs[k] ; return r && r[1] !== 'I' && r[0] !== 'X' && r[1] !== 'A'})))
const MyEval =(Stg,e)=>Function('e',`return ${Stg}`)(e) // chamar o Eval
const BSJsn  =(Typ,Col)=>BS[Typ].Json[Col]
const BsJs   =(Typ,Col,Mod)=>BSJsn(Typ,Col)[Mod] // Acessar o Json do BS
const OjKy   =Typ=>ObjKey(BS[Typ].Json)

    const DarJJ = (M,T,R,C,V,Lv2Arr)=>{
        const Lv2 = Lv2Arr && (([pT,pR,pC]) => ({pT,pR,pC}))(Lv2Arr)
        const j = J[T], k = JJ[T]; if (!j || !k) return
        let o, jL, jjL, parent
        if (Lv2){
            parent = J[Lv2.pT]?.find(e => e.Id == Lv2.pR)
            if (!parent) return
            if(M!=='Add'){
                jL   = parent[Lv2.pC]?.find(e => e.Id == R)
                jjL  = JJ[Lv2.pT]?.[Lv2.pR]?.[Lv2.pC]?.find(e=>e.Id==R)
            }
        } else o = j.find(e => e.Id == R)

        switch(M){
            case 'Add':{
                const n = typeof V=='object'?V:{Id:R,[C]:V}
                if(Lv2) {   if(!parent[Lv2.pC]) parent[Lv2.pC]=[] ; parent[Lv2.pC].push(n)
                            if(    !JJ[Lv2.pC]) JJ[Lv2.pC]={}     ;     JJ[Lv2.pC][R]=n}
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
        //LOG(`Const Atualizadas! ${M}, ${iguais}`)
    }
    function ReOpt(Sel,arr){ // arr = valores Disponiveis (precisa ser no DOM) (✔️ SB agora disponível)
        if(arr.length==1)         {EditCell(Sel,arr[0])} // Troca pra o Unico option, se Tiver
        if(!arr.includes(Nm(Sel))){EditCell(Sel,""    )} // se o valor atual não Existir dar valor "Vazio"
        setTimeout(()=>{$$('option',Sel).forEach(o=>{Add_N(o);if(arr.includes(o.value)){Rmv_N(o)}})},500) // Ocultar os Options Ausentes
    }
    function VAL(e){
        const R = d_r(e)
        const val = 
                ['Edit','Fixo','Sugg','Soma','Bndj'].includes(R.Tm) ?     e.textContent.trim()
                : ['Ssvg','Imgs','Link'              ].includes(R.Tm) ?  Nm(e).trim()
                : ['Valr','Mdds','Auto','Sync'       ].includes(R.Tm) ? Num(e.textContent.trim())
                : ['Data','Inpt','Slct','Text'       ].includes(R.Tm) ?     e.value
                : R.Tm==='Chek' ? e.checked
                : Is(e,'input') ? e.value
                : R.Tm==='Lixo' ? '-'
                : null
        return val
    }
    function DarVAL(e,V){
        const R = d_r(e)
        if(['Edit','Fixo'  ].includes(R.Tm)){Nm(e,V)       ; Inn(e,V)}
        if(['Slct'         ].includes(R.Tm)){Nm(e,V)       ; e.value = V}
        if(['Auto'         ].includes(R.Tm)){Nm(e,Num(V))  ; Inn(e,V)}
        if(['Mdds'         ].includes(R.Tm)){Nm(e,Num(V))  ; Inn(e,V?Cm(V):'')}
        if(['Valr','Sync'  ].includes(R.Tm)){Nm(e,V==''?'':Num(V)) ; Inn(e,V==''?'':RS(V))}
        if(['Data','Link','Ssvg','Imgs','Chek'].includes(R.Tm)){Inn(Pai(e),Tm_Tm[R.Tm](V,e.dataset.r))} // Parece q Sugg n existe mais
    }

//===========================TEMPLATE===========================
    function RenderSVVG(td){Inn($('span',td),Nm($('svg.P-P',td)))}//(GAMBIARRA) (Outras Formas de Exibir Bandeijas) isso talvez deva entrar em (BjIN)
    const IcnEtp=Etp=>{
        if(!Etp){return ''}
        return `<div class="Rltv" onclick="ShowBndj(_td(this));RenderSVVG(_td(this))" style="fill:rgb(${Etp.Dark})">${SVGEtapas[Etp.Stts]}</div>
                <div class="BndjTBL MySelect BNdj Abslt none Cl"><a>${SVG.Ponta}</a><span class="Cl"></span></div>`
    }
    function Destak(j,R){ // Pintar o Destak
        if(!j.Stts){return ''}
        return BSJsn(d_r(R).Ty,d_r(R).Cl).CLS.includes('Destk') ? `style="background:rgb(${j.Stts.Dark});color:${j.Stts.Texto}"` : ''
    }
    const Tm_RangNUM=(Typ,Col)=>
    `<div class="RangeNum">
        <div class="Bt">
            <div class="Rang-Min" contenteditable>0</div>
            <div class="Rang-Max" contenteditable>1000</div>
        </div>
        <div class="Range">
            <input class="R1" type="range" max="1000" value="0"    oninput="SyncRangNum(this)">
            <input class="R2" type="range" max="1000" value="1000" oninput="SyncRangNum(this)">
        </div>
        <button onclick="FiltrarNum('${Typ}','${Col}',Inn($('.Rang-Min',Pai(this))),Inn($('.Rang-Max',Pai(this))))">RODAR</button>
    </div>`
    const Tm_Tm = {
        Lixo:(e,R,Rgx  )=>`<img      data-R="${R}" name="${e}" class="P-P PT HOV"  onclick="SB_RmvROW(this,'${d_r(R).Ty}','${d_r(R).Id}')" src="./CrudSB/Lixo.webp">`,
        Fixo:(e,R,Rgx  )=>`<p        data-R="${R}" name="${e}" class="P-P Ct" >${GrifTxt(e,Rgx)}</p>`,
        Ssvg:(e,R,Rgx  )=>`<p        data-R="${R}" name="${e}" class="P-P Ct" ></p>${IcnEtp(e)}`,
        Auto:(e,R,Rgx,j)=>`<p        data-R="${R}" name="${e}" class="P-P Ct" onclick="CtrlSoma(this)" ${Destak(j,R)}>${j,GrifTxt(e?RS(e):'-',Rgx)}</p>`,
        Edit:(e,R,Rgx  )=>`<p        data-R="${R}" name="${e}" class="P-P Ct" contenteditable onkeydown="EntBlr(this)" onblur="DTV(this);EditCell(this)" oncontextmenu="SELE(event,this)" onfocus="ATV(this)">${GrifTxt(e,Rgx)}</p>`,
        Valr:(e,R,Rgx  )=>`<p        data-R="${R}" name="${e}" class="P-P Ct" contenteditable onkeydown="EntBlr(this)" onblur="DTV(this);EditCell(this)" oncontextmenu="SELE(event,this)" onfocus="ATV(this);CurAll(this)" oninput="Mask.RS(this) ">${GrifTxt(e?RS(e):'R$ -',Rgx)}</p>`,
        Mdds:(e,R,Rgx  )=>`<p        data-R="${R}" name="${e}" class="P-P Ct" contenteditable onkeydown="EntBlr(this)" onblur="DTV(this);EditCell(this)" oncontextmenu="SELE(event,this)" onfocus="ATV(this);CurAll(this)" oninput="Mask.Num(this)">${GrifTxt(e?Cm(e):''    ,Rgx)}</p>`,
        Text:(e,R,Rgx  )=>`<textarea data-R="${R}" name="${e}" class="P-P Ct" onclick="!this.closest('.FModal') && MODAL(Inn(Pai(this)))" onkeydown="EntBlr(this)" onblur="DTV(this);EditCell(this)" oncontextmenu="SELE(event,this)" onfocus="ATV(this)">${e}</textarea>`, // só deve entrar no Modal TextArea se der 2 Clicks
        Imgs:(e,R,Rgx  )=>`<img      data-R="${R}" name="${e}" class="P-P"    loading="lazy" draggable="false" src="${SrcsIMG(e,d_r(R))}" onclick="AbrirImg(this,'${e}','${R}')">`, // essa só carrega mas não pode Upar
        ImUP:(e,R,Rgx  )=>`<img      data-R="${R}" name="${e}" class="P-P"    loading="lazy" draggable="false" src="${SrcsIMG(e,d_r(R))}" onclick="AbrirImg(this,'${e}','${R}')">`, // essa é com Opção de UPAR
        Chek:(e,R,Rgx  )=>`<input    data-R="${R}" name="${e}" class="P-P Ct" onchange="EditCell(this)" type="checkbox" ${ArrBolean(e)?'checked':Bool(e)?'checked':''}>`,
        Slct:(e,R,Rgx  )=>`<select   data-R="${R}" name="${e}" class="P-P Ct" onchange="EditCell(this)">${Tm_Opt(O[BsJs(d_r(R).Ty,d_r(R).Cl,'TH').split('-')[1]]||[],e)}</select>`,
        Data:(e,R,Rgx  )=>`<div class="Ct"><div class="Rltv"><input style="width:90px" placeholder="-" data-R="${R}" class="P-P"  name="${e}" value="${e?BrevData(DMY(e)):e}"  onchange="EditCell(this)" onclick="Calendario(this,$('.calendar',Pai(this)));ShowBndj(_td(this))"><div class="Box1 calendar BNdj Abslt Cl none"></div></div></div>`,
        OKAY:(e,R,Rgx  )=>['Add','Rmv'].map(E=>`<img data-R="${R}" class="P-P PT HOV" name="${e}" onclick="LinkaR(this,'${E=='Rmv'?'null':d_r(R).Id}')" src="./CrudSB/${E}Link.webp">`).join(''),
        Link:(e,R,Rgx  )=>{
            const Place = d_r(R).Cl
            return e!=''? Tm_Bndj(R,getArr(e))
            : `<div class="Rltv">
                    <p class="P-P" data-R="${R}" onclick="ShowBndj(_td(this));Tm_Sugg($('input',Pai(this)),'${R}')" name="${e}">${e==''?'-':e}</p>
                    <div class="BndjSUG MySelect BNdj Abslt none Cl">
                        <a>${SVG.Ponta}</a>
                        <input class="Stky" placeholder="${Place}" onkeydown="KeyEntr(()=>Tm_Sugg(this,'${R}'))">
                        <span class="Sugg Cl"></span>
                        <button onclick="SB_Link($('input',Pai(this)),'${R}')">Adicionar +</button>
                    </div>
                </div>`
        },// onkeydown="KeyEntr(()=>NewLink('${TYP2[0]}',this))"

        Lnk2:(e,R,Rgx)=>Tm_Bndj(R,getArr(e)),
        Slc2:(e,R)=>`MySelect()`,
        Bndj:(e,R)=>Tm_Bndj(R,getArr(e)),
        BjIn:(e,R)=>Tm_Bndj(R,getArr(e)),
    }
    const CSS_Stts  =e=>{if(TemKey(e,'Stts') && IsObj(e.Stts)){return `style="background:${e.Stts.BkPcy};color:${e.Stts.TxPcy}"`}else{return ''}}
    const Tm_Sklt   =Typ=>For(16).map(()=>`<tr>${For(10).map(()=>`<td><div class="Sklt"></div></td>`).join('')}</tr>`).join('') // Esqueleto
    const Tm_R      =(Typ,Id,Col)=>`${Typ}-${Id}-${Col}-${BSJsn(Typ,Col)?.TM}-_-_` // esses 2 Ultimos _-_ acho q ja da pra remover
    const Tm_Td     =(Typ,Id,Col,Val,x,Rgx,j)=>{const _R=Tm_R(Typ,Id,Col) ; return `<td class="${BSJsn(Typ,Col)?.CLS} Rltv" style="grid-area:${ABC[x]}">${Tm_Tm[d_r(_R).Tm](Val,_R,Rgx,j)}</td>`}
    const Tm_Tr     =(Typ,Arr,Rgx)=>Arr.map(j=> j ? `<tr class="tr-${j.Id}" ${CSS_Stts(j)}>${OrdCols(j,BS[Typ].Orden).map(([Col,Val],x)=>Tm_Td(Typ,j.Id,Col,Val,x,Rgx,j)).join('')}</tr>`:'').join('')
    const Tm_tdFoot =(Typ,Arr    )=>Arr.map(col=> `<td data-R="${Tm_R(Typ,'Foot',col)}" class="Rltv ${BSJsn(Typ,col)?.CLS.includes('none')?'none':''}"></td>`).join('')
    const Tm_tbody  =(Typ,Arr,Rgx)=>Inn($(`#H_${Typ} > tbody`),Tm_Tr(Typ,Arr||J[Typ],Rgx))

//===========================IMAGENS===========================
    async function ImgLowQuality(src,mod='Low'){
        const CFG = {Low: { w: 35,  h: 17,  q: 0.3 },
                     Med: { w: 300, h: 300, q: 0.7 },
                     HD:  { w: null, h: null, q: 0.9 } /*tamanho real*/};
        const cfg = CFG[mod] || CFG.Low;
        return new Promise(res => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => {
                const r = (cfg.w && cfg.h) ? Math.min(cfg.w / img.width, cfg.h / img.height, 1) : 1; // HD → escala real
                const canvas = document.createElement('canvas');
                canvas.width  = img.width  * r; ; canvas.height = img.height * r;
                canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
                res(canvas.toDataURL('image/webp', cfg.q));
            };img.onerror = () => res(null) ; img.src = src;
        });
    }
    async function ImgUPP(Inpt,Nome,R){  // ⭐⭐⭐⭐_ (ver se ta funcionando Bonitinho com SVG)
        const Eximg = ["jpg","jpeg","png","gif","webp","svg"]
        const _R  = d_r(R)
        const f   = Inpt.files[0]                          // Pega o único arquivo
        const Ext = RxExt(f.name)                          // Pega a Extensão do Arquivo
        const src = URL.createObjectURL(f)                 // src temporário
        const PP  = $(`table ${Rx7(`${_R.Id}-${_R.Cl}`)}`) // tem que ser o ID e depois a Coluna
        const Pay = _td(Pai(_td(PP)))                      // encontrar o td pai se ele for dentro da Bndj
        const T_T = Pay ? Pai($('.T-T',Pay)) : null        // Localiza o T-T se existir
        //J.IMGS[Nome] = f.name
        if(_R.Bj && T_T){T_T.innerHTML += `<img loading="lazy" onclick="AbrirImg('${d_r(PP).Id}',this)" src="${src}">`}
        if(Eximg.includes(Ext)){
            EditCell(PP,`${Nome}.${Ext}`)
            DarVAL(PP,src)
            Sb_UPLOAD(supaBASE,await fetch(await ImgLowQuality(src,'Low')).then(r=>r.blob()),`Low/${Nome}.webp`,true)
            Sb_UPLOAD(supaBASE,await fetch(await ImgLowQuality(src,'Med')).then(r=>r.blob()),`Med/${Nome}.webp`,true)
            if(Ext=='svg'){Sb_UPLOAD(supaBASE,f,`Img/${Nome}.svg` ,true)
            }else{Sb_UPLOAD(supaBASE,await fetch(await ImgLowQuality(src,'HD' )).then(r=>r.blob()),`Img/${Nome}.webp`,true)}
        }else{LOG('não é nem Img nem Svg é um arquivo!')}
    }
    function SrcsIMG(src,R){
        return `${src}`.includes('blob:') ? src : src ? `${BASE_URL}Low/${src.replace('.svg','.webp')}?v=${Date.now()}` : `./CrudSB/${R.Cl=='Arte'?'Upld':'Plce'}.webp`
    }
    function SellFilesIMG(Inpt){ // Fazer isso Ficar imbutido dentro da Função do input Files
        const file = Inpt.files[0]
        $('img',Pai(Pai(Inpt))).src = URL.createObjectURL(file)
        $('span',Pai(Inpt)).textContent = file.name
    }
    function AbrirImg(img,Nome,R){
        const X   = Nome ? 'Plc' : 'Up'
        const _R  = d_r(R)
        const Pre = BSJsn(_R.Ty,_R.Cl).SRC ?? '' // Prefixo de Imagens se Tiver
        const W   = img.naturalWidth > img.naturalHeight
        MODAL(`<div class="MdalIMG ${W ? 'Cl':'Ct'}">
                    <img src="${BASE_URL}Img/${Nome}">
                    <div class="casusa Cl ${W ? 'w100':'h100'}">
                        <span>Nome: ${Nome}</span> <div>Id: ${_R.Id}</div>
                        <span>SALVAR COM NOME: ${Pre}${_R.Id}</span>
                        <input type="file" class="w80" onchange="SelectFiles(this,SellFilesIMG)" accept="image/*">
                        <button onclick="XModal(this);ImgUPP($('input',Pai(this)),'${Pre}${_R.Id}','${R}')">${Nome?'Trocar Imagem':'Enviar'}</button>
                    </div>
                <div>`)
        if(X=='Up'){$('.MdalIMG input').click()}
    }
    async function ImgUPP2(Inpt,Nome,R){
        const Eximg = ["jpg","jpeg","png","gif","webp","svg"]
        // const _R  = d_r(R)
        // const PP  = $(`table ${Rx7(`${_R.Id}-${_R.Cl}`)}`)
        // const Pay = _td(Pai(_td(PP)))
        // const T_T = Pay ? Pai($('.T-T',Pay)) : null

        for(let i=0;i<Inpt.files.length;i++){
            const f   = Inpt.files[i]
            const Ext = RxExt(f.name)
            const src = URL.createObjectURL(f)
            const NomeFinal = `${Nome}_${i}` // evita sobrescrever
            J.IMGS[NomeFinal] = f.name
            // if(_R.Bj && T_T){T_T.innerHTML += `<img loading="lazy" onclick="AbrirImg('${_R.Id}',this)" src="${src}">`}

            if(Eximg.includes(Ext)){
                //EditCell(PP,`${NomeFinal}.${Ext}`)
                //DarVAL(PP,src)

                Sb_UPLOAD(supaBASE,await fetch(await ImgLowQuality(src,'Low')).then(r=>r.blob()),`Low/${NomeFinal}.webp`,true)
                Sb_UPLOAD(supaBASE,await fetch(await ImgLowQuality(src,'Med')).then(r=>r.blob()),`Med/${NomeFinal}.webp`,true)

                if(Ext=='svg'){Sb_UPLOAD(supaBASE,f,`Img/${NomeFinal}.svg`,true)
                }else{Sb_UPLOAD(supaBASE,await fetch(await ImgLowQuality(src,'HD')).then(r=>r.blob()),`Img/${NomeFinal}.webp`,true)}
            }else{LOG('não é nem Img nem Svg é um arquivo!')}
        }
    }
    async function FileUP(Inpt,Nome,R){
        //const _R=d_r(R),PP=$(`table ${Rx7(`${_R.Id}-${_R.Cl}`)}`)
        for(let i=0;i<Inpt.files.length;i++){
            const f=Inpt.files[i],Ext=RxExt(f.name),NomeFinal=`${Nome}_${i}`
            J.ARQS ??= {}
            J.ARQS[NomeFinal]=f.name
            Sb_UPLOAD(supaBASE,f,`Files/${NomeFinal}.${Ext}`,true)
        }
    }
//===========================LINK===========================
    function NewLink(Typ,Ipt){          // ⭐⭐⭐_ _ Perguntar antes se quer Adicionar Nova Linha
        if(Ipt.value){
            if(confirm(`Tem Certeza que quer salvar: ${Ipt.value} em ${Typ}?`)){
                const df = AddROW(AA(Typ),'<',{[Aa(Typ)]:Ipt.value})
                Linkar(Ipt,`${AA(Typ)}-${df.Id}`)
            }
        }
        // Opção de Unir Mesclar ou Fundir Links diretamente pelo Sugg
        // NewLink apenas para os que Permitem NewLink
    }
    function ShowBndj(div,Typ){ //Typ ? RFresh(Typ,_tr(div)) : null // (antes tinha isso mas n sei se é bom usar?)
        function GambiarraAdd(div){Add(_tr(div),'Hoov') ; $$(':scope > td',_tr(div)).forEach(e=>Add(e,'Hoov'))} // HOROZOZA fazer de tudo pra tirar! (remover o hov q faz a saturação da tr)
        function GambiarraRmv(div){Rmv(_tr(div),'Hoov') ; $$(':scope > td',_tr(div)).forEach(e=>Rmv(e,'Hoov'))} // HOROZOZA fazer de tudo pra tirar! (adicionar o hov q faz a saturação da tr)
        const el = $('.BNdj', div)
        Tog_N(el);GambiarraAdd(div)
        ClickForaa(el,div,()=>{Add_N(el);/*GambiarraRmv(div)*/}) // não remover a GAMBIARRA se a próxima bandeija estiver na msm tr
    }
//===========================CRUD===========================
    const getRG=df=>{                    // ⭐_ _ _ _ (Da Pra Melhorar)
        const pc = GetPC() ; const Ag = AGORA().split(' ')
        return [{'Rg':df.Id,'Data':Ag[0],'Hora':Ag[1],'User':Inn($('#LgNome')),'PC':pc.PC,'Navgd':pc.Navgd}]
    }
    async function SB_GETT(Typ,Limit,Slct,Ordn){ // ⭐⭐⭐⭐⭐
        if(Limit==null){
            let todas = [], lim = 1000, ofs = 0, data
            do{({data}=await supaBASE.from(Typ).select(Slct||'*').order((Ordn||'Id'),{ascending:false,nullsFirst:false}).range(ofs,ofs+lim-1))
                if (!data) return ERR('Erro ao carregar dados')
                todas.push(...data) ; ofs+=lim
            }while(data.length===lim)
            MyAlert(`✔️ Get(${Typ})`) ; return todas
        }else{
            const {data,error}= await supaBASE.from(Typ).select(Slct||'*').order((Ordn||'Id'),{ascending:false,nullsFirst:false}).limit(Limit)
            if(error)return LOG(error)            
            MyAlert(`✔️ Get(${Typ})`) ; return data
        }
    }
    function EdtCel_DOM(Typ,Id,Cl){LOG('Editar várias colunas no DOM')}
    function RmvRow_DOM(Typ,Id   ){$$(`#H_${Typ} .tr-${Id}`).forEach(tr=>{tr.remove()})}
    function AddRow_DOM(Typ,Arr  ){PrePos($(`#H_${Typ} > tbody`),Tm_Tr(Typ,Arr),'<')} // Adicionar em todas tbm (Inclui Bndj e Fora da Bndj)
    async function SB_AddROW(Typ,obj={}){     // ⭐⭐⭐⭐⭐
        if(['PDDS','CLNT','ARTE'].includes(Typ)){ // essas são Int8
            const {data,error}=await supaBASE.rpc('add_row',{tbl:Typ,dados:obj})
            AddRow_DOM(Typ,[data])
            RT_Add.add(`${Typ}_${data.Id}`) ; MyAlert(`SB_ADD(${Typ},${data.Id})`)
        }
    }
    async function SB_RmvROW(Eu,Typ,Id){         // ⭐⭐⭐⭐⭐
        await supaBASE.from(Typ).delete().eq('Id',Id) //.rpc('del_row',{tbl:Typ,uid:Id})
        _tr(Eu).remove() ; RmvRow_DOM(Typ,Id)
        RT_Rmv.add(`${Typ}_${Id}`) ; MyAlert(`SB_DLT(${Typ},${Id})`)
    }
    function EditCell(e,val=null,RT){        // ⭐⭐⭐⭐⭐
        const V = val == "" ? "" : val =='null' ? null : (val || VAL(e))
        if(V==Nm(e)){return} // não foi Aterado
        const R = d_r(e)
        LOG(e,val)
        if(!RT){Sb_EDIT(R.Ty,R.Id,{[R.Cl]:V})}
    }
    async function Sb_EDIT(Typ,Id,Obj,Alert){ // ⭐⭐⭐⭐⭐
        try{const {error}=await supaBASE.from(Typ).update(Obj).eq('Id',Id)
            if(error){ERR('Erro ao atualizar:',error)}
            else     {MyAlert(Alert||`✏️ SB_EDIT(${Typ},${Id},${JSON.stringify(Obj)})`)}
        } catch(err) {ERR('Erro:',err) ; MyAlert('Erro ao atualizar Celula')}
    }
    function Supa_RealTime(crud,New,Typ,Old){ // ⭐⭐⭐⭐⭐
        if(crud==='INSERT'){
            const k=`${Typ}_${New.Id}` ; if(RT_Add.has(k)){RT_Add.delete(k) ; return}
            AddRow_DOM(Typ,[New])      ; MyAlert(`🌐 Rt_NewRow(${Typ },${New.Id})`)
        }   
        if(crud==='DELETE'){
            const k=`${Typ}_${Old.Id}` ; if(RT_Rmv.has(k)){RT_Rmv.delete(k) ; return}
            RmvRow_DOM(Typ,Old.Id)     ; MyAlert(`🌐 Rt_NewRow(${Typ },${Old.Id})`)
        }
        if(crud==='UPDATE'){
            RmvRow_DOM(Typ,New.Id,Cols)
        }
    }

    // A linha se altera por completo quando eu não estou usando, e se eu tiver com ela Aberta espera até eu sair! assim que sair atualiza
    function MesclaRow(Typ,bs){          // ⭐⭐⭐⭐_   isso vai pra o SQL
        const SEL = $$(`#H_${Typ} tbody .SEL`) // pega todas as Células Selecionadas
        const Fim = SEL.at(-1)                 // pega Ultimo Item do Array
        const _Rf = d_r(Fim)                   // pega o _R do Ultimo
        let    Jn = ObjValToArr(ClnObjs(JJ[Typ][_Rf.Id],bs)) // criar o Def
        SEL.forEach(p=>{                       // pra cada Célula
            const _R = d_r(p)                  // pega o _R de cada um
            if(p!==Fim){                                                           // se for Diferente da Ultima
                const Ids_PDDS = ContCLNT[_R.Id]?.List||[]                         // Pega a Lista de Pedidos
                Ids_PDDS.forEach(ID=>{Sb_EDITy('PDDS',ID,Aa(Typ),_Rf.Id)}) // Editar PDDS
                ObjEtr(ClnObjs(JJ[Typ][_R.Id],bs)).forEach(([k,v])=>Jn[k].push(v)) // Concatena as Informações
            }else{ObjEtr(Jn).forEach(([k,v])=>{Sb_EDITy('CLNT',_Rf.Id,k,UniqSplit(v).join(' || '))})} // Editar o Ultimo
        })
    }
// ===========================SUPABASE===========================
    async function Sb_EDITJSON(tbl,uid,col,path,Valor){
        try{const {error}=await supaBASE.rpc('editar_json',{tbl,uid,col,path,valor:Valor})
            if(error){ERR('Erro ao atualizar:',error) ; MyAlert('Erro ao atualizar JSON')}
            else     {LOG(`💾✏️ SB_EDITJSON(${tbl},${uid},${col})`) ; MyAlert(`"${path.at(-1)}" Editado!`)}
        }catch(err)  {ERR('Erro:',err) ; MyAlert('Erro ao atualizar JSON')}
    }
    async function Sb_UPLOAD(SB,file,nome,Upst){ // Upst true e false Permitir ou n Subistituir Img
        let {error} = await SB.storage.from('uploads').upload(nome,file,{upsert:Upst}) 
        if  (error) {ERR("Erro no upload:", error.message) ; alert("Erro ao enviar: "+error.message)}
        else{LOG('✔️ Arquivo enviado!',nome)}
    }
    async function Sb_DELIMG(SB,nome){
        const paths = ['Img','Med','Low'].map(p=>`${p}/${nome}`)
        let {error} = await SB.storage.from('uploads').remove(paths)
        if  (error) {ERR("Erro ao excluir:",error.message) ; alert("Erro ao excluir: "+error.message)}
        else {LOG('🗑️ Arquivos excluído! Img,Med,Low',nome)}
    }
// LOGIN--------------------------------------------------
    async function Get_User(){
        const { data:userData } = await supaBASE.auth.getUser()
        if(!userData.user)return
        const { data:User,error } = await supaBASE.from('USER').select('*').eq('Id',userData.user.id).single()
        if(error)return console.log(error)
        PosLogin(User)
        MyAlert('DEUCERTO!')
    }
    async function SB_Cdstr(e,email,password,msg,nome){e.preventDefault()
        const { error } = await supaBASE.auth.signUp({email,password})
        msg.textContent = error ? error.message : 'Conta criada! Confirme seu email.'
        MyAlert('DEUCERTO!')
    }
    async function SB_Login(e,email,password,msg,nome){e.preventDefault()
        const { data, error } = await supaBASE.auth.signInWithPassword({email,password})
        msg.textContent = error ? error.message : `Seja Bem-Vindo! ${data?.user?.email}`
        MyAlert('DEUCERTO!')
    }
    async function SB_Reset(e,email,password,msg,nome){e.preventDefault()
        const {error} = await supaBASE.auth.resetPasswordForEmail(email, {redirectTo:'https://www.infinitygraff.com.br/reset'})
        msg.textContent = error ? error.message : 'Link Enviado! Verifique seu email.'
        MyAlert('DEUCERTO!')
    }
    async function SB_LgOff(msg){
        await supaBASE.auth.signOut() ; msg ? msg.textContent = 'Perfil Desconectado!' : null
        MyAlert('DEUCERTO!')
    }
    async function Upload_Foto(File){
        let {data:{user}}=await supaBASE.auth.getUser() ; if(!user)return
        let Img=new Image(),Cnv=document.createElement('canvas'),Ctx=Cnv.getContext('2d')
        Img.src=URL.createObjectURL(File)
        await new Promise(ok=>Img.onload=ok)
        Cnv.width=500 ; Cnv.height=500
        Ctx.drawImage(Img,0,0,500,500)
        let Blob=await new Promise(ok=>Cnv.toBlob(ok,'image/webp',0.8))
        let Nome=`${user.id}.webp`
        let {error}=await supaBASE.storage.from('uploads').upload(`User/${Nome}`,Blob,{upsert:true,contentType:'image/webp'})
        if(error)return LOG(error)
        MyAlert('Foto Upada com Sucesso!')
        return Nome
    }
    async function GetDsngUsers(){
        let {data,error}=await supaBASE.rpc('getdsngusers')
        if(error){ERR('Erro:',error); return []}
        LOG('✔️ Designers Carregadors')
        return data
    }