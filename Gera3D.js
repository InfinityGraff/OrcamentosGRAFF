const Dist = 4 ; let AngX = 0 ; let AngY =  70 ; let LastCUB;
function SetCor(e){return new THREE.MeshBasicMaterial({color:e})}

function Gera3d(div){
  const altura  = $('#Div-Inpt-Alt input')
  const Largur  = $('#Div-Inpt-Larg input')
  const Comprm  = $('#Compmnt')
  const BackCub = $('#BackCub')

  // Desistência
  if(parseFloat(Largur.value)===0||parseFloat(altura.value)===0||parseFloat(Comprm.value)===0){return}
  
  

  const scene = new THREE.Scene()
  const Cam   = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
  const Ct    = new THREE.Vector3(0,0,0)
  const GtyBox= new THREE.BoxGeometry()
  const Render= new THREE.WebGLRenderer({antialias:true,alpha:true})
  scene.background = null;

   // Criar Eixos // vermelha (X), verde (Y) e azul (Z)
   const axesHelper = new THREE.AxesHelper(5)
   //scene.add(axesHelper)
  
  //Render.setSize(canvas.clientWidth,canvas.clientHeight)
  Render.setSize(500,500)
  Cam.position.set(0,0,90)
  div.innerHTML = ''
  div.appendChild(Render.domElement)

  // Define Cores
  const Alpha = new THREE.Color(SetCor('red'))
  const Trprt = new THREE.MeshStandardMaterial({color:Alpha,transparent:true,opacity:0.0})
  const CorRoxo = SetCor('#43006d')
  const CorLrnj = SetCor('#ff6200') 
  const CorRosa = SetCor('#a0007b')
  const CorRedd = SetCor('red')

  const iX = parseFloat(Largur.value)+0.1
  const iY = parseFloat(altura.value)+0.1
  const iZ = parseFloat(Comprm.value)+0.1

  // Cria Empt
  const empt = new THREE.Mesh(GtyBox,Trprt)
  if(LastCUB){empt.rotation.copy(LastCUB)}else{empt.position.copy(Ct)}
  CriaPlaca(empt)
  scene.add(empt)

 
  function CriaPlaca(empt){
    const cube = new THREE.Mesh(GtyBox,Trprt)
    cube.scale.set(iX, iY, iZ)
    cube.position.copy(empt.position)
    empt.add(cube)

    const CuboX = cube.position.x
    const CuboY = cube.position.y
    const CuboZ = cube.position.z

    const QntX = QtnCstl(cube,'x')
    const QntY = QtnCstl(cube,'y')
    const QntZ = QtnCstl(cube,'z')

    function QtnCstl(e,XYZ){
      return Math.max(Math.round(e.scale[XYZ])-1,0)
    }
    function Desloc(e,XYZ,Test) {
      const multiplier = Test === '-' ? -1 : 1
      return e.position[XYZ] + multiplier * e.scale[XYZ] / 2
    }
    function Space(XYZ){
      return cube.scale[XYZ] > 1 ? cube.scale[XYZ] / (QtnCstl(cube,XYZ)+1) : 0
    }

    // Cria os Quadros
    for(let i = 0; i < 12; i++){
      const Vara = new THREE.Mesh(GtyBox,Trprt)
      Vara.scale.set(0.1, 0.1, 0.1)

      switch (i) {
        // Face Principal
        case 0: // vértices (0, 1) | 'Roxo' Direita
          Vara.position.set(cube.scale.x / 2, 0, cube.scale.z / 2)
          Vara.scale.y = cube.scale.y-0.1
          Vara.material = CorRoxo
          break;
        case 1: // vértices (1, 2) | 'Laranja' Cima
          Vara.position.set(0, cube.scale.y / 2, cube.scale.z / 2)
          Vara.scale.x = cube.scale.x+0.1
            Vara.material = CorLrnj
          break
        case 2: // vértices (2, 3) | 'Roxo' Esquerda
          Vara.position.set(-cube.scale.x / 2, 0, cube.scale.z / 2)
          Vara.scale.y = cube.scale.y-0.1
          Vara.material = CorRoxo
          break
        case 3: // vértices (3, 0) | 'Laranja' Baixo
          Vara.position.set(0, -cube.scale.y / 2, cube.scale.z / 2)
          Vara.scale.x = cube.scale.x + 0.1
            Vara.material = CorLrnj
          break
        //  
        // Face Oposta
        case 4: // vértices (4, 5)
          if(Comprm.value=='0'){break}
          Vara.position.set(cube.scale.x / 2, 0, -cube.scale.z / 2)
          Vara.scale.set(0.1, cube.scale.y-0.1, 0.1)
            Vara.material = CorRoxo
          break
        case 5: // vértices (5, 6)
          if(BackCub.value=='0'){break}
          Vara.position.set(0, cube.scale.y / 2, -cube.scale.z / 2);
          Vara.scale.set(cube.scale.x - 0.1, 0.1, 0.1);
            Vara.material = CorRedd      
          break
        case 6: // vértices (6, 7)
          if(Comprm.value=='0'){break}
          Vara.position.set(-cube.scale.x / 2, 0, -cube.scale.z / 2);
          Vara.scale.set(0.1, cube.scale.y-0.1, 0.1);
            Vara.material = CorRoxo
          break
        case 7: // vértices (7, 0)
          if(BackCub.value=='0'){break}
          Vara.position.set(0, -cube.scale.y / 2, -cube.scale.z / 2);
          Vara.scale.set(cube.scale.x - 0.1, 0.1, 0.1);
            Vara.material = CorRedd
          break
        //
        // Laterais
        case 8: // vértices (0, 4)
          if(Comprm.value == '0'){break}
          Vara.position.set(cube.scale.x / 2, cube.scale.y / 2, -0.05)
          Vara.scale.set(0.1, 0.1,cube.scale.z)
            Vara.material = CorRosa
          break
        case 9: // vértices (1, 5)
          if(Comprm.value == '0'){break}
          Vara.position.set(-cube.scale.x / 2, -cube.scale.y / 2, -0.05)
          Vara.scale.set(0.1, 0.1, cube.scale.z)
          Vara.material = CorRosa
          break
        case 10: // vértices (2, 6)
          if(Comprm.value == '0'){break}
          Vara.position.set(-cube.scale.x / 2, cube.scale.y / 2, -0.05)
          Vara.scale.set(0.1, 0.1, cube.scale.z)
          Vara.material = CorRosa
          break
        case 11: // vértices (3, 7)
          if(Comprm.value == '0'){break}
          Vara.position.set(cube.scale.x / 2, -cube.scale.y / 2, -0.05)
          Vara.scale.set(0.1, 0.1, cube.scale.z)
          Vara.material = CorRosa
          break
        default:break
      }
      empt.add(Vara)
    }

    // Cria as Costelas
    function CmamaCostelas(V,H,x,y,z){
      if(BackCub.value!=='0'){
      CriaCostela(V,QntX,x,CuboX,CuboZ,Desloc(cube,z,'-'))} // Costas
      CriaCostela(V,QntX,x,CuboX,CuboZ,Desloc(cube,z,'+')) // Frente
      CriaCostela(V,QntZ,z,Desloc(cube,x,'-'),CuboY,CuboZ) // Esquerda
      CriaCostela(V,QntZ,z,Desloc(cube,x,'+'),CuboY,CuboZ) // Direita

      if(BackCub.value!=='0'){
      CriaCostela(H,QntY,x,CuboX,CuboX,Desloc(cube,z,'-'))} // Costa
      CriaCostela(H,QntY,x,CuboX,CuboX,Desloc(cube,z,'+')) // Frente
      CriaCostela(H,QntY,y,Desloc(cube,x,'-'),CuboX,CuboZ) // Esquerda
      CriaCostela(H,QntY,y,Desloc(cube,x,'+'),CuboX,CuboZ) // Direita
    }function CriaCostela(VH,Qtn,XYZ,posX,posY,posZ){
      for (let i = 0; i < Qtn; i++) {
        const Cstl = new THREE.Mesh(GtyBox,CorRoxo)
        
        const PosXYZ = {
          'x' : posX + (i + 1) * Space(XYZ) - cube.scale.x / 2,
          'y' : posY + (i + 1) * Space(XYZ) - cube.scale.y / 2,
          'z' : posZ + (i + 1) * Space(XYZ) - cube.scale.z / 2,
        }

        if(VH==='V'){
          if(XYZ==='x'){Cstl.position.set(PosXYZ[XYZ],0,posZ)}
          if(XYZ==='z'){Cstl.position.set(posX,0,PosXYZ[XYZ])}
          Cstl.scale.set(0.1,0.1,0.1)
          Cstl.scale.y = cube.scale.y - 0.1
        }
        if(VH==='H'){
          if (XYZ === 'y'){
            Cstl.position.set(posX, PosXYZ[XYZ], posZ)
            Cstl.scale.set(0.099,0.099,0.099)
            Cstl.scale.z = cube.scale.z - 0.1
            Cstl.material = CorRosa
          }
  
          if (XYZ === 'x') {
            Cstl.position.set(posX, PosXYZ['y'], posZ)
            Cstl.scale.set(0.099,0.099,0.099)
            Cstl.scale.x = cube.scale.x - 0.1
            Cstl.material = CorLrnj
          }
        }

        empt.add(Cstl)
      }
    }CmamaCostelas('V','H','x','y','z')
  }

  let zoomCur = 1.0

  // Atualiza Posição da Câmera
  function UpCam(){
    const x = Dist * zoomCur * Math.sin(AngX) * Math.cos(AngY);
    const y = Dist * zoomCur * Math.sin(AngY);
    const z = Dist * zoomCur * Math.cos(AngX) * Math.cos(AngY);
    Cam.position.set(x, y, z);
    Cam.lookAt(Ct) // pra onde ela ta olhando
  }

  /*

  // EventListeners para o movimento do Mouse
  let Drag = false  ;  let PvX = 0  ;  let PvY = 0 ; const Sensibily = 0.002
  canvas.addEventListener('mousedown',(e)=>{
    Drag = true ; PvX = e.clientX ; PvY = e.clientY
  });document.addEventListener('mouseup',()=>{
    Drag = false
  });document.addEventListener('mousemove',(e)=>{
    if (Drag){ // este 0.01 é a Sensibilidade
      AngX += (e.clientX - PvX) * Sensibily
      AngY += (e.clientY - PvY) * Sensibily
      PvX = e.clientX ; PvY = e.clientY
      UpCam()}
  })
  
  // chamada do zom
  //canvas.addEventListener("wheel", onMouseWheel, false)

  function onMouseWheel(event) {
    const Sensibily = 0.1
    const delta = Math.sign(event.deltaY)
    zoomCur += delta * Sensibily
    zoomCur = Math.min(Math.max(zoomCur, 0.1), 3.0)
    UpCam()
    animate()
  }

  */

  function animate() {
    requestAnimationFrame(animate)
    empt.rotation.y += 0.01
    LastCUB = empt.rotation.clone()
    Render.render(scene,Cam)
  }animate();UpCam()
}