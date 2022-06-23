let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')
let nomeOk = false
let emailOk = false
let assuntook = false

nome.style.width = '100%'
email.style.width = '100%'

function validarNome(){
    let TxtNome = document.querySelector('#TxtNome')
    if(nome.value.length < 3){
         TxtNome.innerHTML = 'Nome inválido!'
         TxtNome.style.color = 'red'
         nomeOk = false
    }else{
        TxtNome.innerHTML = 'Nome válido!'
        TxtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail(){
    let TxtEmail = document.querySelector('#TxtEmail')
    if(email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0){
            TxtEmail.innerHTML = 'E-mail válido!'
            TxtEmail.style.color = 'green'  
            emailOk = true   
    }else{
        TxtEmail.innerHTML = 'E-mail inválido!'
        TxtEmail.style.color = 'red'  
        emailOk = false
        
    }
}

function validarAssunto(){
    let TxtEmail = document.querySelector('Txtassunto')
 if (assunto.value.length >=100){
    TxtAssunto.innerHTML = 'Permitido até 100 caracteres!'
    TxtAssunto.style.color = 'red'
    TxtAssunto.style.display ='none'
    assuntook = false
 } else{
    TxtAssunto.style.display ='none'
    assuntook = true
 }
}

function Enviar(){
    if(nomeOk == true && emailOk == true && assuntook == true){
        alert('preenchido corretamente, enviado!!')
    }else{
        alert('preencha o campo corretamente!')
    }
}

function mapaZoom(){
 mapa.style.width= '200%'
 mapa.style.height = '100%'
}

function nmapaNormal(){
    mapa.style.width= '200%'
    mapa.style.height = '100%'
}
