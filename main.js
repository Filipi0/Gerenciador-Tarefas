const prompt = require('prompt-sync')({ sigint: true });

// Importa a classe TaskManager do arquivo GerenciadorTarefas.js
const GerenciadorTarefas = require('./GerenciadorTarefas');

// Função para exibir o menu de opções
function exibirMenu() {
  console.log("\nTaskMaster - Gerenciador de Tarefas");
  console.log("1 - Adicionar tarefa");
  console.log("2 - Listar Tarefas");
  console.log("3 - Marcar Tarefa como Concluída");
  console.log("0 - Sair");
}

// Função principal
function main() {
  // Cria uma instância de TaskManager
  const taskManager = new (GerenciadorTarefas);

  while (true) {
    // Exibe o menu de opções
    exibirMenu();

    // Obtém a escolha do usuário
    let escolha = parseInt(prompt("Escolha sua opção: "));

    switch (escolha) {
      case 0:
        console.log('\nSaindo...Volte sempre, amigo!');
        return; // Encerra o loop e sai da função main

      case 1:
        // Solicita título e descrição da tarefa
        const titulo = prompt("Digite o título da tarefa: ");
        const descricao = prompt("Digite a descrição da tarefa: ");
        
        // Adiciona a tarefa e exibe mensagem de sucesso
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
        // Solicita o índice da tarefa a ser marcada como concluída
        const indiceTarefa = parseInt(prompt("Digite o índice da tarefa a ser marcada como concluída: "));
        taskManager.marcarTarefaConcluida(indiceTarefa - 1); // Marca a tarefa
        console.log("\nTarefa marcada como concluída com sucesso!");
        break;

      default:
        console.log("\nOpção inválida. Tente novamente.")
    }
  }
}

main();



