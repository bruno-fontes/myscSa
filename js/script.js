let atividades = []


function addAtividade() {
    let dataAtividade = document.getElementById("data")
    let atividade = document.getElementById("atividade")
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
    let pAtividades = document.getElementById('atividades')
    pAtividades.innerHTML = ""
    if (localStorage.getItem("atividades") != null)
        atividades = JSON.parse(localStorage.getItem("atividades"))
    atividades.forEach(atividade => {
        pAtividades.innerHTML += atividade[0] + ":" + atividade[1] + "<br>" + "<br>"
    });
}


function deletarTudo() {
    localStorage.clear();
    alert("Atividades removidas.")
    location.reload()
}
function criarConta() {

    //fazer funçao

}
function logar() {
    window.location.href = "./ListaAtividade.html"
    //fazer funçao   
}
function add() {
    let divMostraAtividades = document.getElementById('container-lista');
    let divListaDeAtividades = document.getElementById('adicionar-atividades');
    divMostraAtividades.style.display = 'none';
    divListaDeAtividades.style.display = 'block';


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
}