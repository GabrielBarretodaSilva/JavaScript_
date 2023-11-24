function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('foto')
    var data = new Date()
    //var hora = data.getHours()//
    hora = 11
    msg.innerText = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        imagem.src = 'dia.jpg'
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'fim-de-tarde.jpg'
    } else {
        imagem.src = 'dia.jpg'
    }
}

