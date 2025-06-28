// isso é pra ir pra o PreScript
    const RgbToHex =rgb=>`#${rgb.replace(/^rgb\(|\s+|\)$/g,'').split(',').map(x=>parseInt(x).toString(16).padStart(2,'0')).join('')}`
    const hexToRGB =hex=>{const [r,g,b]=hex.slice(1).match(/.{2}/g).map(h=>parseInt(h,16)) ; return `rgb(${r},${g},${b})`}
    const hexToRGB2=hex=>{const [r,g,b]=hex.slice(1).match(/.{2}/g).map(h=>parseInt(h,16)) ; return `${r},${g},${b}`}


function LocAno(Email){
    const nome = Email.match(/\d+°\s*(.*?)\s*-\s*\d+/)?.[1] || ""
    const id   = Email.match(/^(\d+)°/)?.[1] || 0
    const Dados = {
        'Grafit':{'001-07' :'2022', '008-235':'2023', '236-432':'2024', '433-_':'2025'},
        'BPrint':{'001-099':'2024', '100-_' :'2025'},
        'Inová': {'001-_'  :'2025'}
    }
    for (let faixa in Dados[nome] || {}) {
        let [ini,fim] = faixa.split('-').map(x => x === '_' ? Infinity : +x)
        if (id >= ini && id <= fim) return Dados[nome][faixa]
    }
    return ""
}

