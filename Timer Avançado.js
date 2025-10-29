class OperadorTimer {
  constructor(lim=45){this.lim=lim*60; this.seg=0; this.int=null; this.periodo="1º Tempo"; this.pausado=true;}
  start(){if(!this.pausado){this.pausado=false; this.int=setInterval(()=>{if(!this.pausado&&this.seg<this.lim)this.seg++;},1000);}}
  pause(){this.pausado=true;}
  reset(lim){this.seg=0; if(lim)this.lim=lim*60;}
  trocarPeriodo(p,lim){this.periodo=p; this.reset(lim); this.start();}
  format(){return `${String(Math.floor(this.seg/60)).padStart(2,'0')}:${String(this.seg%60).padStart(2,'0')}`;}
}

class TelaoTimer {
  constructor(sel="#telao"){this.seg=0; this.sel=sel;}
  start(seg=0){this.seg=seg; setInterval(()=>this.render(),1000);}
  update(seg){this.seg=seg; this.render();}
  render(){let m=String(Math.floor(this.seg/60)).padStart(2,'0'),s=String(this.seg%60).padStart(2,'0'); document.querySelector(this.sel).textContent=`${m}:${s}`;}
}

// === USO ===
const operador=new OperadorTimer(45),telao=new TelaoTimer();
operador.start();
telao.start();
setInterval(()=>telao.update(operador.seg),5000);