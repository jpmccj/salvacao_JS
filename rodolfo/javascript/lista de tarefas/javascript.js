
function adicionarTarefa(){
    const input= document.getElementById('inputTarefa')
    const texto= input.value.trim()
    if(texto ===''){
        alert('hey, Digite alguma coisa ai')
        return
    }
    const li = document.createElement('li')

    li.innerHTML=`${texto} <button class="remove" onclick="removerTarefa(this)">x</button>`

    document.getElementById('listaTarefa').appendChild(li)

    input.value=''
}
function removerTarefa(botao){
    const li = botao.parentElement
    li.remove()
}