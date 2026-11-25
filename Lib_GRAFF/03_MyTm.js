function Selecty(Eu){const I = $('input',_td(Eu)) ; Vll(I,Eu.innerText) ; Dispchange(I) ; /*Add_N(Pai(Eu))*/}

// Fazer ele transitar com as SETAS
const Tm_Select=(Eu,e,lista,val)=>{
    Eu.classList.add('Rltv','MySelect','Rltv','w100')
    // Atualizar span Baseado na Lista
    const ExibSpan = `Rmv_N($('span',Pai(this)))`
    Inn(Eu,`<input class="Stky" placeholder="${D_Brev[e]}" onfocus="${ExibSpan}" value="${val}" oninput="PesqOpt(this,'List')">
        <span class="Abslt Cl Sugg" style="z-index:10">${Tm_MyOpts(lista,'List')}</span>`
    )
}
function ReadProx(inpt,Prox,R){
    if(Prox==null){return}
    const nR = R.replace('Serv',Prox)
    LOG('ReadProx',nR,$(`.Myselt_${Prox}`,_tr(inpt)))
    Inn(Pai($(`.Myselt_${Prox}`,_tr(inpt))),Tm_Select2("",nR,Buxa[inpt.value]||[""]))
    
}
const Tm_Select2=(val,R,lista,Prox)=>{
    const func = "Tog_N($('span',Pai(this)))"
    return `<input class="P-P Ct Stky InptCrop Myselt_${d_r(R).Cl}" data-R="${R}" name="${val}" placeholder="${D_Brev[d_r(R).Cl]}" onclick="${func}" value="${val}" oninput="PesqOpt(this,'List')" onchange="${Prox ? `ReadProx(this,'${Prox}','${R}');` : ''}EditCell(this)">
            <span class="Abslt Cl Sugg none" style="z-index:10">${Tm_MyOpts(lista,'List')}</span>`
}
function Tm_MyOpts(List,Modo){
    const Previw = {
        List :e=>`<p style="pointer-events: none">${e}</p>`,
        Cors :e=>`<p class="RD" style="background:${GetycCores[e]}">${e}</p>`,
        Table:e=>``,
        Card :e=>``}
    return List.map(e=>`<a class="PT w100 Ct" style="display:flex" onclick="Selecty(this)">${Previw[Modo](e)}</a>`).join('')
}

const PesqOpt = (Inpt, Modo) => { // Essa função de Pesquisa Pode ser Util em Todos os Tipos de Campos de Pesquisas (Basta eu Passar o Input e o Conteudo a ser Grifado)
    const Span = $('span', Pai(Inpt)), Val = Inpt.value, Regx = new RegExp(`(${aa(Val)})`, 'gi'),
          Griff = e => e.textContent.replace(Regx, '<b class="My-Griff" style="background:#8f007c;color:white">$1</b>'),
          TipoFilt = { List: (e, Val) => aa(e).includes(aa(Val)) };
    $$('a', Span).forEach(a => {
        Inn(a, a.textContent);                                    // Remove grifs anteriores
        if (Val == '') { Rmv_N(a); return }                       // Exibe tudo se campo vazio
        if (TipoFilt[Modo](a.textContent, Val)) { Rmv_N(a); Inn(a, Griff(a)) } else { Add_N(a) } // Grifado ou oculta
    });
    // Preenchimento automatico e auto correção na hora de Digitar
    // selecionar option automaticamente caso tenha apeans 1
    // quando pesquiso um nome como "Brilho" em "brilho Local" grifa o brilho e acaba perdendo o espaço
    // quando vai inserir o valor fica 'BrilhoLocal'
}

function Tm_DataNatora(){
    return `<div class="Rltv">
        <input placeholder="dd/mm/aaaa" onclick="Tog_N($('.calendar',Pai(this)));Calendario(this,$('.calendar',Pai(this)))">
        <div class="Box1 calendar Abslt Cl none"></div>
    </div>`
}
const Tm_Interup2=(v1,v2   ,Call)=>`<div class="Interup Rltv Bt PT" onclick="TOV(this);${Call}"><i></i><a>${v1}</a><a>${v2}</a></div>`
const Tm_Check2  =(Stg,nome,Call)=>`<div class="Chek Ct" onclick="SynChk(this);${Call}"><input class="NONE" type="checkbox"><a class="Ct">${Stg}</a>${nome?`<p>${nome}</p>`:''}</div>`

const Tm_Switch2=(e,l=[],p,px,Call)=>{
    e.className+=" Switch Rltv Ct PT"
    e.innerHTML=`<style>${l.map((_,i)=>`#opt_${p}_${i}:checked~i{transform:translateX(${i*100}%)}#opt_${p}_${i}:checked~label[for="opt_${p}_${i}"]{color:#fff}`).join("")}</style>
    ${l.map((_,i)=>`<input type=radio name=${p} class="NONE" id=opt_${p}_${i} ${!i?"checked":""} onchange="${Call}('${p}','${_}')">`).join("")}
    ${l.map((t,i)=>`<label style="width:${px}" for=opt_${p}_${i}>${t}</label>`).join("")}
    <i style="width:calc(100%/${l.length})"></i>`
}

const Tm_Switch3=(Arr,p,px,Call)=>{
    return `<style>${Arr.map((_,i)=>`#opt_${p}_${i}:checked~i{transform:translateX(${i*100}%)}#opt_${p}_${i}:checked~label[for="opt_${p}_${i}"]{color:#fff}`).join("")}</style>
    ${Arr.map((_,i)=>`<input type=radio name=${p} class="NONE" id=opt_${p}_${i} ${!i?"checked":""} onchange="${Call}('${p}','${_}')">`).join("")}
    ${Arr.map((t,i)=>`<label style="width:${px}" for=opt_${p}_${i}>${t}</label>`).join("")}
    <i style="width:calc(100%/${Arr.length})"></i>`
}