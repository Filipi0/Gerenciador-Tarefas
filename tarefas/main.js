const prompt = require('prompt-sync')({ sigint: true });
const GerenciadorTarefas = require('./GerenciadorTarefas');


function exibirMenu() {
  console.log("\nTaskMaster - Gerenciador de Tarefas");
  console.log("1 - Adicionar tarefa");
  console.log("2 - Listar Tarefas");
  console.log("3 - Marcar Tarefa como Concluída");
  console.log("0 - Sair");
}


function main() {
 
  const taskManager = new (GerenciadorTarefas);

  while (true) {
   
    exibirMenu();

    let escolha = parseInt(prompt("Escolha sua opção: "));

    switch (escolha) {
      case 0:
        console.log('\nSaindo...Volte sempre, amigo!');
        return;

      case 1:

        const titulo = prompt("Digite o título da tarefa: ");
        const descricao = prompt("Digite a descrição da tarefa: ");
        
        taskManager.adicionarTarefa(titulo, descricao);
        console.log("\nTarefa adicionada com sucesso!");
        break;

      case 2:
        const tarefas = taskManager.listarTarefas();
        if (tarefas.length === 0) {
          console.log("Não tem tarefas cadastradas.");
        } else {
         console.log("\nLista de Tarefas:");
          tarefas.forEach((tarefa, indice) =>
            console.log(`${indice + 1}. [${tarefa.concluida ? 'Concluída' : 'Pendente'}] - ${tarefa.titulo}`));
          }
          break;

      case 3:
    
        const indiceTarefa = parseInt(prompt("Digite o índice da tarefa a ser marcada como concluída: "));
        taskManager.marcarTarefaConcluida(indiceTarefa - 1); // Marca a tarefa como concluída
        console.log("\nTarefa marcada como concluída com sucesso!");
        break;

      default:
        console.log("\nOpção inválida. Tente novamente.")
    }
  }
}

main();



