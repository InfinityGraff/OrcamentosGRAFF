function AbrirMiniTeclado(DOM){
  None('#Grupo-Servicos')
  const Teclado = QrySlt('#Modal-Teclado')
  const inpt = DOM.dataset.tab
  
  Teclado.innerHTML = `
    <div class="">
    <div onclick="pressKey(49,'${inpt}')">1</div>
    <div onclick="pressKey(50,'${inpt}')">2</div>
    <div onclick="pressKey(51,'${inpt}')">3</div>
    </div>
    
    <div class="">
      <div onclick="pressKey(52,'${inpt}')">4</div>
      <div onclick="pressKey(53,'${inpt}')">5</div>
      <div onclick="pressKey(54,'${inpt}')">6</div>
    </div>
    
    <div class="">
      <div onclick="pressKey(55,'${inpt}')">7</div>
      <div onclick="pressKey(56,'${inpt}')">8</div>
      <div onclick="pressKey(57,'${inpt}')">9</div>
    </div>

    <div class="">
      <div style="background: #ff7700;">Voltar</div>
      <div onclick="pressKey(48,'${inpt}')">0</div>
      <div style="background: #ff7700;" onclick="pressKey(13,'${inpt}')">Prox</div>
    </div>
    `




  AbrirModalHTML(FundoModal,Teclado)
  

//  inpt.value = ''
}

`<div id="Modal-Teclado" class="ModalItem Rltv Modalzinho Ct Cl none">

<div class="">
  <div onclick="pressKey(49)">1</div>
  <div onclick="pressKey(50)">2</div>
  <div onclick="pressKey(51)">3</div>
</div>

<div class="">
  <div onclick="pressKey(52)">4</div>
  <div onclick="pressKey(53)">5</div>
  <div onclick="pressKey(54)">6</div>
</div>

<div class="">
  <div onclick="pressKey(55)">7</div>
  <div onclick="pressKey(56)">8</div>
  <div onclick="pressKey(57)">9</div>
</div>

<div class="">
  <div style="background: #ff7700;">Voltar</div>
  <div onclick="pressKey(48)">0</div>
  <div style="background: #ff7700;" onclick="pressKey(13)">Prox</div>
</div>

</div>`



if(I_Serv.value==="Placa"){Gera3d(QrySlt('#NewCanvas'))}
  if(Calc.match(/\sF\s/)){
    QNT.forEach((Qnt,x)=>{ // Para Calcular Ferro
      const Lag_ = Num(LAG[x]) ; const Alt_ = Num(ALT[x])
      const desc   = I_Ferr.match(/..$/)/1000 * 2
      const PE     = Serv.match(/Cav/) ? 0.15:0
      const CkCstl = Tipo.match(/Lumi/)
      const FFVV = Tipo.match(/2/) ? 2 : 1
      const CkLarg = Lag_ > Alt_

      const F_L = CkLarg ? Lag_+PE : Lag_-desc
      const F_A = CkLarg ? Alt_-desc : Alt_+PE
      const C_L = CkCstl ? 2 : CkLarg ? 2 : Math.round(Alt_)+1 // Costelas
      const C_A = CkCstl ? 2 : CkLarg ? Math.round(Lag_)+1 : 2 // Costelas
      const Solda = C_A > C_L ? C_A*2*Sold : C_L*2*Sold //Pontos de Solda
  
      const FM1 = Qnt * (F_L*C_L + F_A*C_A)
      const AM1 = Calc.match(/A/)? Num(Qnt?Qnt:0) * (Lag_+Alt_)*2 : 0
  
      Coment.push(`${C_L} Varas de ${Cm(F_L)} | ${(C_A)} Costelas de ${Cm(F_A)} | ${Cm(FM1)}M¹ | ${RS(FM1*Ferro)}
      ${Calc.match(/A/)?`(Almn: ${Cm(AM1)}M¹ ${RS(AM1*Alumn)})`:''}`)
      VlrExtra+= (FM1*Ferro+AM1*Alumn+Solda)*FFVV
    })
  }


  function DescPrazo(){
  let valor = 40.00
  let prazo = new Date(Prazo.value)
  let hoje = new Date()
  
  let diffTime = Math.abs(prazo - hoje)
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  let desconto = 2.00 * diffDays
  let valorFinal = valor - desconto
  
  QrySlt('#innerdesc').innerHTML = 'Desconto: '+valorFinal
}

async function PesquisaKM(inpt){
  const listaLugares = {'Camaragibe':20,'São Lourenço':10,'Recife':40}
  Show([RsutFrete,RsutFrete.parentNode])
  if(inpt in listaLugares){await delay(2000)
  RsutFrete.innerHTML = listaLugares[inpt]
  }else{RsutFrete.innerHTML = 'Lugar não Encontrado'}
  }




