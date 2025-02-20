import prompt from "prompt-sync";
import { TurmaController } from "../controllers/index.js";
import { menuPrincipal } from "../../../index.js";

const turmaController = new TurmaController();
const input = prompt();

export class TurmaView {
  listarTurmas() {
    console.log("\nLista de alunos:");
    turmaController.listarTodos();

    const opcao = input(`Deseja voltar ao menu principal? 1 = Sim 0 Não`);
    switch (opcao) {
      case "1":
        menuPrincipal();
        break;
      case "0":
        break;
      default:
        break;
    }
  }
  
  criarTurma() {
    const cod = input("Digite o Codigo: ");
    const nome = input("Digite o nome: ");
    const sala = input("Digite a Sala: ");
    const capacidade = input("Digite a Capacidade: ");
    turmaController.criar(cod, nome, sala, capacidade);

    const opcao = input(`Deseja voltar ao menu principal? 1 = Sim 0 Não`);
    switch (opcao) {
      case "1":
        menuPrincipal();
        break;
      case "0":
        break;
      default:
        break;
    }
  }
  editarTurma() {
    const codEditar = input("Digite o Codigo da Turma: ");

    const novoNome =
      input("Novo nome (deixe em branco para manter o mesmo): ") || null;

    const novaSala =
      input("Novo email (deixe em branco para manter o mesmo): ") || null;

    const novaCapacidade =
      input("Nova senha (deixe em branco para manter a mesma): ") || null;

    turmaController.editar(codEditar, novoNome, novaSala, novaCapacidade);

    const opcao = input(`Deseja voltar ao menu principal? 1 = Sim 0 Não: `);
    switch (opcao) {
      case "1":
        menuPrincipal();
        break;
      case "0":
        break;
      default:
        break;
    }
  }

  excluirPorcod() {
    const codDeletear = input("Digite o Codigo da Turma a ser deletada: ");
    turmaController.deletarPorCod(codDeletear);

    const opcao = input(`Deseja voltar ao menu principal? 1 = Sim 0 Não: `);
    switch (opcao) {
      case "1":
        menuPrincipal();
        break;
      case "0":
        break;
      default:
        break;
    }
  }
  excluirTodos() {
    turmaController.deletarTodos();

    const opcao = input(`Deseja voltar ao menu principal? 1 = Sim 0 Não: `);
    switch (opcao) {
      case "1":
        menuPrincipal();
        break;
      case "0":
        break;
      default:
        break;
    }
  }
}
