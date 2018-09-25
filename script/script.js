const button = document.querySelector(".tarefa-composer__button")
const inputTexto = document.getElementById("tarefaComposerInput")


//EVENTO DO BOTÃO
button.addEventListener("click", function (event) {
    event.preventDefault();
 
    if (inputTexto.value === undefined || inputTexto.value === null || inputTexto.value === "" || inputTexto.value === "                  "){
       inputTexto.focus();
       return false
    }

    //cria a div    
    const div= document.createElement("div");
    div.className = "tarefas"
    //cria um p e insete o valor do input
    const text= document.createElement("p")
    text.className = "tarefa-texto"
    text.innerHTML = inputTexto.value;
    //cria o botão de excluir
    const buttonDelete= document.createElement("button")
    buttonDelete.className = "tarefa-lista__delete-button"
    buttonDelete.innerHTML = `<button class="tarefa-lista__delete-button">x</button>`
    
    //insere na div o texto e o botão
    div.appendChild(text)
    div.appendChild(buttonDelete)

    //insere antes do ultimo elemento criado
    const tarefaLista = document.querySelector(".tarefas-caixa");
    tarefaLista.insertBefore(div, tarefaLista.childNodes[0]);

    //limpar o campo de texto
    inputTexto.value = null;

    //ação do botão excluir
    const botaoExcluir = document.querySelector(".tarefa-lista__delete-button");
    botaoExcluir.addEventListener("click", function(event){
        event.preventDefault();
        div.remove();
    })

text.addEventListener("click", function(event){
    event.preventDefault();

    if( text.classList.contains("tarefa-texto")){
        text.classList.remove("tarefa-texto")
        text.classList.add("tarefa-texto__checked")
    }else{
        text.classList.remove("tarefa-texto__checked")
        text.classList.add("tarefa-texto")
    }


})

    
})





