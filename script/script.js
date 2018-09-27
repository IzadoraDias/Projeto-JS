const button = document.querySelector(".tarefa-composer__button")
const inputTexto = document.getElementById("tarefaComposerInput")


//EVENTO DO BOTÃO ADD 
button.addEventListener("click", function (event) {
    event.preventDefault();

    if (inputTexto.value === undefined || inputTexto.value === null || inputTexto.value === "" || inputTexto.value === " ") {
        inputTexto.focus();
        return false
    }
    const re = /\w+/ig
    if (!re.test(inputTexto.value)) {
        inputTexto.focus();
        return false
    }

    //cria a div    
    const div = document.createElement("div");
    div.className = "tarefas"
    //cria um p e insete o valor do input
    const text = document.createElement("p")
    console.log("text")
    text.className = "tarefa-texto"
    text.innerHTML = inputTexto.value;
    //cria o botão de excluir
    const buttonDelete = document.createElement("button")
    buttonDelete.className = "tarefa-lista__delete-button"
    buttonDelete.innerHTML = `<button class="tarefa-lista__delete-button">x</button>`

    //insere na div o texto e o botão
    div.appendChild(text)
    div.appendChild(buttonDelete)

    //insere antes do ultimo elemento criado
    const tarefaLista = document.querySelector(".tarefas-caixa");
    tarefaLista.insertBefore(div, tarefaLista.childNodes[0].nextSibling);

    //limpar o campo de texto
    inputTexto.value = null;

    //ação do botão excluir
    const botaoExcluir = document.querySelector(".tarefa-lista__delete-button");

    botaoExcluir.addEventListener("click", function (event) {
        event.preventDefault();
        div.remove();
    })

    text.addEventListener("click", function (event) {
        event.preventDefault();
        text.classList.toggle("checked")
        })

    const tarefas = document.querySelector(".tarefas")
    const botaoRemover = document.querySelector(".tarefa-lista__remove-button");

    botaoRemover.addEventListener("click", function (event) {
        event.preventDefault();
        tarefas.remove();
    })
})

    const botaoConcluir = document.querySelector(".tarefa-lista__completed-button");

    botaoConcluir.addEventListener("click", function (event) {
    event.preventDefault();
    const allItens = document.querySelectorAll("p")
    for( i of allItens)
        if(i.classList.contains("checked")){ 
        }else{
            i.classList.toggle("checked")
        }        
    })




