let atividades = []
let emailCadastro = document.getElementById('email')
let nomeCadastro = document.getElementById('nome')
let userCadastro = document.getElementById('user')
let senhaCadastro = document.getElementById('senha')
let emailArray = []
let nomeArray = []
let userArray = []
let senhaArray = []
let atividadeArray = [];
let dataAtividadeArray = [];
let nomeLogin = document.getElementById("email-login")
let senhaLogin = document.getElementById("senha-login")
let dataAtividade = document.getElementById("data")
let atividade = document.getElementById("atividade")
let pAtividades = document.getElementById('atividades')
 


function addAtividade() {
    //pega os itens do ls
    atividadeArray = JSON.parse(localStorage.getItem("atividade"));
    dataAtividadeArray = JSON.parse(localStorage.getItem('data_atividade'))
    //se não houver item
    if (atividadeArray == null){
        //recria os arrays
        let atividadeArray = [];
        let dataAtividadeArray = [];
        //empurra para dentro desses arrays os valores do inputs
        atividadeArray.push(atividade.value);
        dataAtividadeArray.push(dataAtividade.value);
        //empurra localstorage
        localStorage.setItem('atividade' ,JSON.stringify(atividadeArray));
        localStorage.setItem('data_atividade' ,JSON.stringify(dataAtividadeArray));
        // caso haja item
    }else{
        //empurra para dentro desses arrays os valores do inputs
        atividadeArray.push(atividade.value);
        dataAtividadeArray.push(dataAtividade.value);
        //empurra localstorage
        localStorage.setItem('atividade' ,JSON.stringify(atividadeArray));
        localStorage.setItem('data_atividade' ,JSON.stringify(dataAtividadeArray));
    }
    
    dataAtividade.value = "";
    atividade.value = "";
    alert("Atividade adicionada.");
    window.location.reload();
}

function mostraLista(){
    atividadeArray = JSON.parse(localStorage.getItem("atividade"));
    dataAtividadeArray = JSON.parse(localStorage.getItem("data_atividade"));
    for(i=0; i < atividadeArray.length ;i++){
        let indiceAtividade = i;
        let listaAtividades = document.getElementById('lista-atividade');
        let itensDeLista= document.createElement('li');
        itensDeLista.classList.add('li-lista');
        let atividadeDaLista = atividadeArray[i];
        let dataDaLista = dataAtividadeArray[i];
        let conteudoDoItem= `
        <div class='atividades-criadas'>
            <div class='task-box' id='task-box${indiceAtividade}'>
                <div class='texto-task-box'>
                    <h class='titulo-lista'>Atividade:</h>
                    <p class='p-itemLista'>${atividadeDaLista}</p>
                </div>
                <div class='data-task-box'
                    <h class='titulo-lista'>Data:</h>
                    <p class='p-itemLista'>${dataDaLista}</p>
                </div>
            </div>
            <div class='edit-task-box' id='edit-task-box${indiceAtividade}'>
                <div class='texto-task-box'>
                    <h class='titulo-lista'>Atividade:</h>
                    <input id='iptAtividade${indiceAtividade}' class='p-itemLista'>
                </div>
                <div class='data-task-box'
                    <h class='titulo-lista'>Data:</h>
                    <input id='iptDataAtividade${indiceAtividade}' class='p-itemLista'>
                    <button class='btn-editar' id='btnConfirm${indiceAtividade}' onclick='confirmaEdicao(${indiceAtividade})
                    '>confirmar</button>
                </div>
            </div>
            <div class='btns-box'>
                <button class='btn-editar' onclick='editarTarefa(${indiceAtividade})'>Editar</button>
                <button class='btn-excluir' onclick='excluir(${indiceAtividade})'>Excluir</button>
            </div>
        </div>`;

        itensDeLista.innerHTML = conteudoDoItem
        listaAtividades.appendChild(itensDeLista);
    }


}

 mostraLista();
        
        
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
        
        let divLogin = document.getElementById('container-login')
        let divCadastro = document.getElementById('container-cadastro')
        divLogin.style.display = 'block'
        divCadastro.style.display = 'none'
        localStorage.setItem("atividades", JSON.stringify(atividades))
        dataAtividade.value = ""
        atividade.value = ""
        	
}


function logar() {
    emailArray = JSON.parse(localStorage.getItem('emailCadastro'))
    senhaArray = JSON.parse(localStorage.getItem('senhaCadastro'))
        
    let logou = 0
    for(i=0; i < emailArray.length; i++){
        
        if(nomeLogin.value == emailArray[i] && senhaLogin.value == senhaArray[i]){        
                      
            logou = 1
       }        
        
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
function irPaginaLogin(){
    window.location.href="criarConta.html"
}
function excluir(indice){

    // Pega valores do LocalStorage (se tiver) e armazena
    atividadeArray = JSON.parse(localStorage.getItem("atividade"));
    dataAtividadeArray = JSON.parse(localStorage.getItem("data_atividade"));
    


     
        atividadeArray.splice(indice, 1)
        dataAtividadeArray.splice(indice, 1)

       
       alert("atividade excluído!")

     
       localStorage.setItem("atividade", JSON.stringify(atividadeArray))
       localStorage.setItem("data_atividade", JSON.stringify(dataAtividadeArray))

       window.location.reload();
    }

let editTarefa = '';
let tarefaCaixa = '';
for (let i = 0; i < atividadeArray.length; i++) {
    editTarefa=  document.getElementById(`edit-task-box${i}`);
    tarefaCaixa=  document.getElementById(`task-box${i}`);
    editTarefa.style.display = 'none';
    tarefaCaixa.style.display = 'block';
}
let btnConfirm = document.getElementById('btnConfirm');
let iptAtividade = '';
let iptDataAtividade = '';

function editarTarefa(indice){
    
    for (let i = 0; i < atividadeArray.length; i++) {
        iptAtividade = document.getElementById(`iptAtividade${indice}`);
        iptDataAtividade = document.getElementById(`iptDataAtividade${indice}`);
        if(i == indice){
            break;
        } 
    }
    iptAtividade.value = atividadeArray[indice];
    iptDataAtividade.value = dataAtividadeArray[indice];
    atividadeArray = JSON.parse(localStorage.getItem("atividade"));
    dataAtividadeArray = JSON.parse(localStorage.getItem("data_atividade")); 
    for (let i = 0; i < atividadeArray.length; i++) {
        editTarefa=  document.getElementById(`edit-task-box${i}`);
        tarefaCaixa=  document.getElementById(`task-box${i}`);
        if(i == indice){
            break;
        }
    }
    editTarefa.style.display = 'block';
    tarefaCaixa.style.display = 'none';
    editTarefa = '';
    tarefaCaixa = '';

}



function confirmaEdicao(indice){
    
    for (let i = 0; i < atividadeArray.length; i++) {
        iptAtividade = document.getElementById(`iptAtividade${indice}`);
        iptDataAtividade = document.getElementById(`iptDataAtividade${indice}`);
        if(i == indice){
            break;
        } 
    }
    atividadeArray = JSON.parse(localStorage.getItem("atividade"));
    dataAtividadeArray = JSON.parse(localStorage.getItem("data_atividade")); 
    
    atividadeArray.splice(indice, 1, iptAtividade.value);
    dataAtividadeArray.splice(indice, 1, iptDataAtividade.value);

    localStorage.setItem("atividade", JSON.stringify(atividadeArray))
    localStorage.setItem("data_atividade", JSON.stringify(dataAtividadeArray))
    
    window.location.reload();    
    iptAtividade = '';
    iptDataAtividade = '';
}



function sumir(){
    atividadeArray = JSON.parse(localStorage.getItem("atividade"));
    dataAtividadeArray = JSON.parse(localStorage.getItem('data_atividade'))
    let containerLista = document.getElementById('container-lista');
    if(atividadeArray == ""){
        containerLista.style.overflowY = 'unset';
    }
}
sumir()

