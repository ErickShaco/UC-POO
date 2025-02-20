import prompt from "prompt-sync";
import { TurmaController } from "../controllers";

const turmaController = new TurmaController();
const input = prompt();

export class TurmaView {
  listarTurmas() {
    console.log("\nLista de alunos:");
    turmaController.listarTodos();
  }
  criarTurma() {
    const cod = input("Digite o Codigo: ");
    const nome = input("Digite o nome: ");
    const sala = input("Digite a Sala: ");
    const capacidade = input("Digite a Capacidade: ");
    alunoController.criar(cod, nome, sala, capacidade);
  }
  editarTurma() {
    const codEditar = input("Digite a matrícula do aluno: ");
    const novoNome = input("Novo nome (deixe em branco para manter o mesmo): ") || null;
    const novaSala = input("Novo email (deixe em branco para manter o mesmo): ") || null;
    const novaCapacidade = input("Nova senha (deixe em branco para manter a mesma): ") || null;

    turmaController.editar(codEditar, novoNome, novaSala, novaCapacidade);
  }

  excluirPorcod() {
    const codDeletear = input(
      "Digite o Codigo da Turma a ser deletada: "
    );
    turmaController.deletarPorCod(codDeletear);
  }
  excluirTodos() {
    turmaController.deletarTodos();
  }
}
