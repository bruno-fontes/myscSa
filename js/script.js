let atividades =[]


function addAtividade() {
    let dataAtividade = document.getElementById("data")
    let atividade = document.getElementById("atividade")
    if (localStorage.getItem("atividades") != null)
    atividades = JSON.parse(localStorage.getItem("atividades"))
    atividades.push([dataAtividade.value, atividade.value])
    localStorage.setItem("atividades", JSON.stringify(atividades))
    dataAtividade.value = ""
    atividade.value = ""
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
    
}
