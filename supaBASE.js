const SUPABASE_URL      = "https://adxigvfxtafvlmpvwwvb.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkeGlndmZ4dGFmdmxtcHZ3d3ZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1Njc1NTEsImV4cCI6MjA2NzE0MzU1MX0.wc90qDuSNhtolJBd4qLEux3xCwJwPuTTFb3gZMKUBYU"
const supaBASE          = window.supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY)
const BASE_URL          = `https://adxigvfxtafvlmpvwwvb.supabase.co/storage/v1/object/public/uploads/`

const SB_ERRORS={
    "New password should be different from the old password":"A nova senha deve ser diferente da atual",
    "Password should be at least 6 characters":"A senha deve ter no mínimo 6 caracteres",
    "User not found":"Usuário não encontrado",
    "Invalid JWT":"Sessão inválida",
    "JWT expired":"Sessão expirada",
    "Auth session missing":"Sessão não encontrada",
    "Token has expired or is invalid":"Link expirado ou inválido",
    "Failed to update password":"Erro ao atualizar senha",
    "Network request failed":"Erro de conexão",
    "Database error updating user":"Erro ao salvar usuário",
    "Password is too weak":"Senha muito fraca"
}

async function SB_Resetar(Pass1,Pass2){
    if(Pass1!==Pass2 ){msg.textContent='As senhas não coincidem' ; return}
    if(Pass1.length<6){msg.textContent='Senha muito curta'       ; return}
    msg.textContent='Salvando...'
    const {error}= await supaBASE.auth.updateUser({password:Pass1})
    msg.textContent = error ? (SB_ERRORS[error.message] || error.message) : '✅ Senha redefinida com sucesso!'
}