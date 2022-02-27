let atividades = []
let emailCadastro = document.getElementById('email')
let nomeCadastro = document.getElementById('nome')
let userCadastro = document.getElementById('user')
let senhaCadastro = document.getElementById('senha')
let emailArray = []
let nomeArray = []
let userArray = []
let senhaArray = []
let nomeLogin = document.getElementById("email-login")
let senhaLogin = document.getElementById("senha-login")
let dataAtividade = document.getElementById("data")
let atividade = document.getElementById("atividade")
let pAtividades = document.getElementById('atividades')

function addAtividade() {
     if (localStorage.getItem("atividades") != null)

        atividades = JSON.parse(localStorage.getItem("atividades"))
        atividades.push([atividade.value, dataAtividade.value])

        localStorage.setItem("atividades", JSON.stringify(atividades))
        dataAtividade.value = ""
        atividade.value = ""
            alert("Atividade adicionada.")
             window.location.reload();
}


function lista() {

        pAtividades.innerHTML = ""
         if (localStorage.getItem("atividades") != null)
        atividades = JSON.parse(localStorage.getItem("atividades"))
        atividades.forEach(atividade => 
        pAtividades.innerHTML += (atividade[0] + ":" + atividade[1] + "<br>" + "<br>"))
}   

 
        
        
function deletarTudo() {
    localStorage.clear();
    alert("Atividades removidas.")
    location.reload()
}


function criarConta() {
    emailArray = JSON.parse(localStorage.getItem('email'))
    nomeArray = JSON.parse(localStorage.getItem('nome'))
    userArray = JSON.parse(localStorage.getItem('user'))
    senhaArray = JSON.parse(localStorage.getItem('senha'))
        
    if (userArray == null) {
        emailArray = []
        nomeArray = []
        userArray = []
        senhaArray = []
        emailArray.push(email.value)
        nomeArray.push(nome.value)
        userArray.push(user.value)
        senhaArray.push(senha.value)
        localStorage.setItem("emailCadastro",JSON.stringify(emailArray))
        localStorage.setItem("nomeCadastro",JSON.stringify(nomeArray))
        localStorage.setItem("userCadastro",JSON.stringify(userArray))
        localStorage.setItem("senhaCadastro",JSON.stringify(senhaArray))
        
    }else{
        
        emailArray.push(email.value)
        nomeArray.push(nome.value)
        userArray.push(user.value)
        senhaArray.push(senha.value)
        localStorage.setItem("emailCadastro",JSON.stringify(emailArray))
        localStorage.setItem("nomeCadastro",JSON.stringify(nomeArray))
        localStorage.setItem("userCadastro",JSON.stringify(userArray))
        localStorage.setItem("senhaCadastro",JSON.stringify(senhaArray))
                
    }
        alert('Conta criada com sucesso')
        
}


function logar() {
    emailArray = JSON.parse(localStorage.getItem('emailCadastro'))
    senhaArray = JSON.parse(localStorage.getItem('senhaCadastro'))
        
    let logou = 0
    for(i=0; i < emailArray.length; i++){
        
        if(nomeLogin.value == emailArray[i] && senhaLogin.value == senhaArray[i]){        
                      
             logou = 1
        }        
    } 
    if (logou == 1){
        alert("Login efetuado!")
        window.location.href="listaAtividade.html"

    }else{
        
            alert("Login falhou!")
            window.location.href="criarconta.html"
        
    }   
        
}
        
        
function irCadastro() {
    let divLogin = document.getElementById('container-login')
    let divCadastro = document.getElementById('container-cadastro')
    divLogin.style.display = 'none'
    divCadastro.style.display = 'block'
}


function voltarLogin() {
    let divLogin = document.getElementById('container-login')
    let divCadastro = document.getElementById('container-cadastro')
    divLogin.style.display = 'block'
    divCadastro.style.display = 'none'
    localStorage.setItem("atividades", JSON.stringify(atividades))
    dataAtividade.value = ""
    atividade.value = ""
}