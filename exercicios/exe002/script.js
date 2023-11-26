function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 18){
                //jovem
                img.setAttribute('src', 'imagens/foto-homem-adolecente.png')
            } else if(idade >= 18 && idade < 60){
                //adulto
                img.setAttribute('src', 'imagens/foto-homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-homem-idoso.png')
            }
        } else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 18){
                //jovem
                img.setAttribute('src', 'imagens/foto-mulher-adolecente.png')
            } else if(idade >= 18 && idade < 60){
                //adulto
                img.setAttribute('src', 'imagens/foto-mulher-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-mulher-idosa.png')
            }
        }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${genero} com ${idade} anos`
         res.appendChild(img)
        
    }
}