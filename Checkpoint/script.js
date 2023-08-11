let listaTarefasArray = [];

/*----------Criando o botão Adicionar----------*/

btnAddTarefa = document.querySelector("#btnAddTarefa");

btnAddTarefa.addEventListener('click',(e) =>{
   const inputTarefa = document.querySelector("#idTarefa") 
   listaTarefasArray.push(inputTarefa.value);

   const listaTarefasUL = document.querySelector("#lista-tarefas");

/*----------Criando o li----------*/

   let li = document.createElement("li");
    li.textContent = inputTarefa.value;
    listaTarefasUL.appendChild(li);

/*----------Criando o botão apagar----------*/

let botaoApagaTarefa = document.createElement("button");

botaoApagaTarefa.textContent = " Apagar ";

li.appendChild(botaoApagaTarefa);
    botaoApagaTarefa.addEventListener("click",(e)=>{
       let conteudoTarefa = e.target.parentNode.textContent.split(" ")[0];

       listaTarefasArray.map( (tarefa,index) =>{

        if(tarefa == conteudoTarefa ){
            listaTarefasArray.splice(index,1);
        } 
 })
})
})
