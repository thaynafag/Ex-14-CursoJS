function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 7 && hora <= 12) {
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#ee9883'
    }else if (hora > 12 && hora < 18) {
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#3f8ca9'
    }else if (hora > 1 && hora <= 6) {
        //BOA MADRUGADA
        img.src = 'madrugada.png'
        document.body.style.background = '#634c6e'
    }else {
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#394c71'
    }
        
}
