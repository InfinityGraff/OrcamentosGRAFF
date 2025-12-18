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

// Fazer ele transitar com as SETAS

const Tm_Select=(Eu,e,lista,Modo)=>{
    Eu.classList.add('Rltv','MySelect','Rltv','w100')
    // Atualizar span Baseado na Lista
    const ExibSpan = `Show($('span',Pai(this)))` 
    Inn(Eu,`<input class="Stky" placeholder="${D_Brev[e]}" onfocus="${ExibSpan}" oninput="PesqOpt(this,'List')">
        <span class="Abslt Cl Sugg" style="z-index:10">${Tm_MyOpts(lista,'List')}</span>`
    )
}

function Tm_MyOpts(Arr,Modo){
    const Previw = {
        List   :e=>`<p>${e}</p>`,
        LstClr :e=>`<p class="RD" style="background:${GetycCores[e]}">${e}</p>`,
        Table  :e=>'',
        Card   :e=>''}
    return Arr.map(e=>`<a class="PT w100 Ct" onclick="Selecty(this)">${Previw[Modo](e)}</a>`).join('')
    // se esta função Receber algum ajuste, conferir o Select pai pra ver se o Texto Digitado pertence ao q tem aqui!
    // se não pertence, então Apaga, se pertencer mantem
}

const PesqOpt=(Inpt,Modo)=>{ // Essa função de Pesquisa Pode ser Util em Todos os Tipos de Campos de Pesquisas (Basta eu Passar o Input e o Conteudo a ser Grifado)
    const Span = $('span',Pai(Inpt))
    const Val  = Inpt.value
    const Regx = new RegExp(`(${aa(Val)})`,'gi')
    const Griff=e=>`${e}`.replace(Regx,'<b class="My-Griff" style="background:#8f007c;color:white">$1</b>')
    const TipoFilt = {List:(e,Val)=>aa(e).includes(aa(Val))}
    $$('a', Span).forEach(a=>{
        Inn(a,a.innerHTML.replace(/<b[^>]*class=["']My-Griff["'][^>]*>|<\/b>/gi,''))// remove os Grifs Anteiriores
        if(Val==''){Rmv_N(a);return}                                                // Exibe tudo se o campo for Vazio
        if (TipoFilt[Modo](a.innerText,Val)){Rmv_N(a);Inn(a,Griff(a.innerHTML))}    // Exibe se der Regex
        else{Add_N(a)}                                                              // Oculta
    })
    // Preenchimento automatico e auto correção na hora de Digitar
    // selecionar option automaticamente caso tenha apeans 1
}

// As Gambiarra pra fazer o MySelect Funcionar, depois Imbutir tudo dentro dele msm
function Selecty(Eu){Vll($('input',_td(Eu)),Aa(Eu.innerText)) ; SERVChang($('input',_td(Eu))) ; None(Pai(Eu))}

// dexia os Selects Cinza caso não tenha nada
function ValidOpts(){$$('#ORC select').forEach(e=>$$('option',e).length==1 ? Add(e,'sOFF') : Rmv(e,'sOFF'))}

function exibirObjeto() {
    function adicionaID(arr) {return arr.map((obj, i) => ({ id: i, ...obj }))}
    const saida = document.getElementById("saida")
    saida.innerHTML = `<pre>${JSON.stringify(adicionaID(BaseIMG), null, 2)}</pre>`
}