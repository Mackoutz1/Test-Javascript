function carregar() {
    var img = window.document.getElementById("imagem")
    var msg = window.document.getElementById('mensagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.<br>`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += `Bom dia !!`
        img.src = 'manhã.jpg'
        document.body.style.background = '#a3e2d0'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += `Boa Tarde !!`
        img.src = 'tarde.jpg'
        document.body.style.background = '#ff9c0d'
    } else {
        msg.innerHTML += `Boa Noite !!`
        img.src = 'noite.jpg'
        document.body.style.background = '#414348'
    }
}