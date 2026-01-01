let VarDropImg = {} // uma Váriavel Global q talvez possa ficar dentro do PreScript Destinada a Receber os Files pra serem usados Depois
function PrepDrop(Eu,nome,Call=null){
    Inn(Eu,'<a>Adicionar Imagem</a><input type="file" accept="image/*" class="none">')
    const f=$('input',Eu),d=$('a',Eu)
    const Import=F=>{if (!F) return
        const ext  = F.name.split('.').pop()
        const Nome = `${nome}.${ext}`
        Inn(d,`<img Name="${Nome}" src="${URL.createObjectURL(F)}">`)
        VarDropImg[Nome]=F
    }
    Eu.onclick    =()=> f.click(),f.onchange=e=>Import(e.target.files[0]),
    Eu.ondragover =e=>(Prvn2(e),Add(Eu,'hover')),
    Eu.ondragleave=_=> Rmv(Eu,'hover'),
    Eu.ondrop     =e=>(Prvn2(e),Rmv(Eu,'hover'),Import(e.dataTransfer.files[0]))
}

const Dispinput=e=>e.dispatchEvent(new Event('input', { bubbles: true }))
function Selecty(Eu){const I = $('input',_td(Eu)) ; Vll(I,Eu.innerText) ; Dispinput(I) ; /*Add_N(Pai(Eu))*/}

// Fazer ele transitar com as SETAS
const Tm_Select=(Eu,e,lista)=>{
    Eu.classList.add('Rltv','MySelect','Rltv','w100')
    // Atualizar span Baseado na Lista
    const ExibSpan = `Rmv_N($('span',Pai(this)))`
    Inn(Eu,`<input class="Stky" placeholder="${D_Brev[e]}" onfocus="${ExibSpan}" oninput="PesqOpt(this,'List')">
        <span class="Abslt Cl Sugg" style="z-index:10">${Tm_MyOpts(lista,'List')}</span>`
    )
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


// dexia os Selects Cinza caso não tenha nada (Mudar isso pra o INPUT)
function ValidOpts(){$$('#ORC select').forEach(e=>$$('option',e).length==1 ? Add(e,'sOFF') : Rmv(e,'sOFF'))}

function exibirObjeto() {
    function adicionaID(arr) {return arr.map((obj, i) => ({ id: i, ...obj }))}
    const saida = document.getElementById("saida")
    saida.innerHTML = `<pre>${JSON.stringify(adicionaID(BaseIMG), null, 2)}</pre>`
}