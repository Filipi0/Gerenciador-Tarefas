class GerenciadorTarefas {
  constructor() {
    this.tasks = [];
  }

  adicionarTarefa(titulo, descricao) {
    const novaTarefa = {
      titulo,
      descricao,
      concluida: false,
    };
    this.tasks.push(novaTarefa);
  }

  listarTarefas() {
    return this.tasks;
  }

  marcarTarefaConcluida(indice) {
    if (indice >= 0 && indice < this.tasks.length) {
      this.tasks[indice].concluida = true;
    }
  }
}

module.exports = GerenciadorTarefas;

  