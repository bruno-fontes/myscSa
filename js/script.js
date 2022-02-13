let atividades =[]


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
    window.location.href="./index.html"
}
function lista(){
let pAtividades = document.getElementById('atividades')
pAtividades.innerHTML = ""
if (localStorage.getItem("atividades") != null)
atividades = JSON.parse (localStorage.getItem("atividades"))
atividades.forEach(atividade =>{
    pAtividades.innerHTML += atividade[0] + ":" + atividade[1] + "<br>" + "<br>"
});}


function deletarTudo() {
    localStorage.clear();
    alert("Atividades removidas.")
    location.reload()
}
function criarConta(){
    window.location.href="./index.html"
    //fazer funçao
    
}
function logar() {
    window.location.href="./index.html"
    //fazer funçao   
}
