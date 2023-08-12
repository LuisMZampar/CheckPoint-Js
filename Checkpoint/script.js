let listaArray = [];

const btnAddTarefa = document.querySelector("#btnAddTarefa");
const listaTarefasUL = document.querySelector("#lista-tarefas");
const inputTarefa = document.querySelector("#idTarefa");
const inputDescricao = document.querySelector("#idDescricao");
const inputAutor = document.querySelector("#idAutor");
const inputDepartamento = document.querySelector("#idDepartamento"); 
const inputImportancia = document.querySelector("#idImportancia"); 
const inputDuracao = document.querySelector("#idDuracao"); 

btnAddTarefa.addEventListener('click', (e) => {
    e.preventDefault();

/*------------Criação do Objeto (Nova tarefa)------------*/
    const novaTarefa = {
        tarefa: inputTarefa.value,
        descricao: inputDescricao.value,
        autor: inputAutor.value,
        departamento: inputDepartamento.value,
        importancia: inputImportancia.value,
        duracao: inputDuracao.value
    };

    listaArray.push(novaTarefa);
    
    let li = document.createElement("li");

/*------------Atribui um valor ao conteúdo de texto------------*/
    li.textContent =
    `Tarefa: ${novaTarefa.tarefa}, 
    Descrição: ${novaTarefa.descricao}, 
    Autor: ${novaTarefa.autor},
    Departamento: ${novaTarefa.departamento},
    Imporância: ${novaTarefa.importancia}',
    Duração: ${novaTarefa.duracao}`;
    
/*------------Adicionando o Botão apagar e atribuindo um envento "Click"------------*/
    let botaoApagaTarefa = document.createElement("button");
    botaoApagaTarefa.textContent = "Apagar";
    
    botaoApagaTarefa.addEventListener("click", (e) => {
        let indiceTarefa = listaArray.findIndex(tarefa => tarefa.tarefa === novaTarefa.tarefa);

        if (indiceTarefa !== -1) {
            listaArray.splice(indiceTarefa, 1);
            listaTarefasUL.removeChild(li);
        }
    });

    li.appendChild(botaoApagaTarefa);
    listaTarefasUL.appendChild(li);

/*------------Limpando os campos já usados------------*/
    inputTarefa.value = ""; 
    inputDescricao.value = "";
    inputAutor.value = "";
    inputDepartamento.value = "";
    inputImportancia.value = "";
    inputDuracao.value = "";
});