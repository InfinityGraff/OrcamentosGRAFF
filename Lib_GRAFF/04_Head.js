let USUARIO = ''
const EntBlr2= e => e.tagName !== 'TEXTAREA' && KeyEntr(() => e.blur()); // fazer Blur caso enter seja pressionado
const TogCSSBody=(B,T,C)=>{$('body').dataset.base=B ; $('body').dataset.tema=T ; $('body').dataset.cor=C}
function ExieMais(E,Off){if(Off){MdalShow('#MdalLgin')}else{Show('#mmdal');Animar(E,$('#H_Lgin'))}}
function MdalShow(e){ShowModal($('#FModal'),$(e))}

const Tm_Head=Pag=>{return `
    <!-- Titulo --> <div id="Title" class="Ct"><img id="Logo" draggable="false" src="./Img/Logo_Infinity.webp" onclick=""><h1 class="PT" onclick=""></h1></div>
    <!-- Titulo2--> <h2 id="TitleTable" style="font-size:24px;color:#ffffff">Pedidos</h2>
    <!--Pesquisa--> <div class="w30 none"><div id="Div-Pesq" class="Rltv w100 hov"></div></div>
    <!--   Nav  --> <div id="DivNav"><nav class="Ct H_Nav"></nav></div>
    <!--  Nav2  --> ${Pag=='TBLA'?`<div>
                        <div class="SwithT Sw_PDDS none Switch Rltv Ct PT">${Tm_Switch3(['PDDS','SERV','PGMT'     ],'PDDS','80px','ExecSwith')}</div>
                        <div class="SwithT Sw_GRAD none Switch Rltv Ct PT">${Tm_Switch3(['GRAD','OS','UBER','GRD2'],'GRAD','55px','ExecSwith')}</div>
                    </div>`:''}
    <!-- Perfil --> <div id="H_Login" class="Ct">
                        <img id="LgMORE" src="./SVG/More.svg" class="Hov none" style="width:18px" onclick="Tog_N($('#MAIS'))">
                        <div id="LgNNome" class="Ct PT"  onclick="AbreLogin('Login')">Login</div>
                        <div id="LgNome"  class="Ct PT"  onclick="USUARIO!=''?NAVPAG('PRFL'):AbreLogin('Cdstr')">Cadastre-se</div>
                        <div id="LgFoto"><img draggable="false" class="NObj" onclick="Tog_N($('#MAIS'))"></div>
                    </div>
    <div id="MAIS" class="Abslt none bndj Ct">
        <div class="Start" onclick="NAVPAG('PRFL')    ;Tog_N($('#MAIS'))"><img draggable="false" src="./SVG/Mais_Edit.svg"><a> Ver Perfil       </a></div>
        <div class="Start" onclick="AbreLogin('Login');Tog_N($('#MAIS'))"><img draggable="false" src="./SVG/Mais_Troc.svg"><a> Trocar de Conta  </a></div>
        <div class="Start" onclick="NAVPAG('CONF')    ;Tog_N($('#MAIS'))"><img draggable="false" src="./SVG/Mais_Cnfg.svg"><a> Configurações    </a></div>
        <div class="Start" onclick="NAVPAG('SPRT')    ;Tog_N($('#MAIS'))"><img draggable="false" src="./SVG/Mais_Help.svg"><a> Central de Ajuda </a></div>
        <div class="Start" onclick="SB_LgOff()        ;Tog_N($('#MAIS'))"><img draggable="false" src="./SVG/Mais_LOff.svg"><a> Sair             </a></div>
        <div class="p10"><p>Confira os <a class="Link">Termos de Serviço</a> e as <a class="Link">Política de Privacidade</a></p></div>
    </div>`
}

function AbreLogin(stg){
    const Obj = {
        Login:{Tt:'Entre com sua Conta!',btn:'Entrar'   ,Ou:['Cdstr','Cadastre-se'        ],Fn:'SB_Login',p:'',},
        Cdstr:{Tt:'Cadastr-se Agora!'   ,btn:'Cadastrar',Ou:['Login','Já tenho uma Conta!'],Fn:'SB_Cdstr',p:'',},
        Reset:{Tt:'Esqueceu a Senha?'   ,btn:'Enviar'   ,Ou:['Login','Voltar!'            ],Fn:'SB_Reset',p:'digite seu Email para poder trocar a Senha!'},
    }
    const Stgg = `<div class="Cl Gap">
        <form id="ModalLogin" class="Cl Bt w100 Gap" onsubmit="${Obj[stg].Fn}(event,Vll($('.Email',this)),Vll($('.Senha',this)),$('.errPass',this),$('.UNome',this))">
            <h2>${Obj[stg].Tt}</h2><p>${Obj[stg].p}</p>
            ${stg=='Cdstr'?`<div class="Start2 w80"><label>Nome </label><input                 placeholder="Nome de Usuário..." class="UNome w100" required></div>` : ''} 
                            <div class="Start2 w80"><label>Email</label><input type="email"    placeholder="Seu Email...      " class="Email w100" required></div>
            ${stg!='Reset'?`<div class="Start2 w80"><label>Senha</label><input type="password" placeholder="Sua Senha...      " class="Senha w100" required>${stg=='Login'?`<a class="PT" onclick="XModal(this);AbreLogin('Reset')">Esqueceu a Senha?</a>`:''}</div>` : ''}
            <span class="errPass erro"></span>
            <div class="w80"><button class="w100" type="submit">${Obj[stg].btn}</button></div>
        </form>
            <p>---------------- OU ----------------</p>
            <button class="" onclick="XModal(this);AbreLogin('${Obj[stg].Ou[0]}')">${Obj[stg].Ou[1]}</button>
            <div style="padding:10px"><p>Confira os <a class="Link">Termos de Serviço</a> e as <a class="Link">Política de Privacidade</a></p></div>
        </div>`
    MODAL(Stgg)
}

function TrocaTitulo(titulo){document.title = titulo}

function TrocaFavCon(Url) {
    let fav = $("link[rel*='icon']")
    if (!fav) {fav = document.createElement("link");fav.rel = "icon";document.head.appendChild(fav)}
    fav.href = Url
}

function NavPag(Typ){
    LOG(Typ)
    if($(`#Pag_${Typ}`)){Atual.Pag=Typ ; Show(`#Pag_${Typ}`,$$('#PAGES > *'))}
    else{if(Typ=='SPRT'){window.location.href=`CONF.html?pag=${encodeURIComponent(Typ)}`}else{location.href=`${Typ}.html`}}
}

async function PosHead(U){
    USUARIO = U  ; LOG('✅ Perfil Logado!')
    Inn($('#LgNome'),U.Nome)  ;  Add_N($('#LgNNome'))  ;  $('#LgFoto img').src = Foto(U.User)
    Inn('.H_Nav',U.Nav.map(e=>`<div id="b1_HNVDv_${e=='|'?'LIN':e}" class="Ct PT HOV" onclick="NAVPAG('${e}');GetTable('${e}')"><img draggable="false" src="./SVG/${e=='|'?'LIN':e}.svg"><p>${D_Brev[e]}</p></div>`).join(''))

}