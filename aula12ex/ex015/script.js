function  somar(){ 
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 ||  Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente !')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 3) {
                //bebe
                img.setAttribute('src', 'bebe.png')
            } else if (idade >= 3 && idade < 12) {
                //criança
                img.setAttribute('src', 'criaça1.png')
            } else if (idade >= 13 && idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem1.png')
            } else if (idade >= 22 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'superman-negro.png')
            } else {
                //Idoso
                img.setAttribute('src', 'velho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 3) {
                //bebe
                img.setAttribute('src', 'bebef1.png')
            } else if (idade >= 3 && idade < 12) {
                //criança
                img.setAttribute('src', 'menina1.png')
            } else if (idade >= 13 && idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem2.png')
            } else if (idade >= 22 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher2.png')
            } else {
                //Idoso
                img.setAttribute('src', 'velha1.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
    
}

