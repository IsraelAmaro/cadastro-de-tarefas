
let mostraString = document.querySelector('#stringAleatory')

function stingAleatoria() {

    let email = document.querySelector('#email')
    let password = document.querySelector('#password')

    // Condiçoes para preenchimento de campos email e senha 
    if (email.value == '' || password.value == '') {
        alert("Campo vazio. Digite corretamente todos os dados para continhuar")
    } else {
        document.querySelector('#login').style.display = 'none'
        document.querySelector('#validador').style.display = 'block'

        console.log(email)
        console.log(password)
    }

    formaString(5)  //metodo para criação de string aleatoria para validação
}

function formaString(value) {
    let stringAleatoria = ''
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < value; i++) {

        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length))

    }
    mostraString.value = stringAleatoria
}

/*
setInterval(function(){
    mostraString.value = cadeiaCaracteres(quantidadeLetrasString)
    
},1500)   */



