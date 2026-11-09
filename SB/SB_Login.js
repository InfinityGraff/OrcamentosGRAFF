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