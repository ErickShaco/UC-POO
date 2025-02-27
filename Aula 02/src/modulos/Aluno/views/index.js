import prompt from "prompt-sync";
import { AlunoController } from "../controllers/index.js";
import { menuAluno, menuPrincipal } from "../../../index.js";

const alunoController = new AlunoController();
const input = prompt();

export class AlunoView {

  listarAlunos() {
    console.log("\nLista de alunos:");
    alunoController.listarTodos();

    const opcao = input(`Deseja voltar ao menu? 1 = Sim 0 Não: `);
    switch (opcao) {
      case "1":
        menuAluno();
        break;
      case "0":
        break;
      default:
        break;
    }
  }

  criarAluno() {
    const matricula = input("Digite a matrícula: ");
    const nome = input("Digite o Nome: ");
    const telefone = input("Digite o Telefone")
    const email = input("Digite o Email: ");
    const senha = input("Digite a Senha: ");
    alunoController.criar(matricula, nome, telefone, email, senha);

    const opcao = input(`Deseja voltar ao menu ? 1 = Sim 0 Não: `);
    switch (opcao) {
      case "1":
        menuAluno();
        break;
      case "0":
        break;
      default:
        break;
    }
  }

  editarAluno() {
    const matriculaEditar = input("Digite a matrícula do aluno: ");
    const novoNome =
      input("Novo nome (deixe em branco para manter o mesmo): ") || null;
    const novoTelefone =
      input("Novo Telefone (deixe em branco para manter o mesmo): ") || null;
    const novoEmail =
      input("Novo email (deixe em branco para manter o mesmo): ") || null;
    const novaSenha =
      input("Nova senha (deixe em branco para manter a mesma): ") || null;

    alunoController.editar(matriculaEditar, novoNome,novoTelefone, novoEmail, novaSenha);

    const opcao = input(`Deseja voltar ao menu ? 1 = Sim 0 Não: `);
    switch (opcao) {
      case "1":
        menuAluno();
        break;
      case "0":
        break;
      default:
        break;
    }
  }

  excluirPorMatricula() {
    const matriculaDeletar = input(
      "Digite a matrícula do aluno a ser deletado: "
    );
    alunoController.deletarPorMatricula(matriculaDeletar);

    const opcao = input(`Deseja voltar ao menu? 1 = Sim 0 Não: `);
    switch (opcao) {
      case "1":
        menuAluno();
        break;
      case "0":
        break;
      default:
        break;
    }
  }
  excluirTodos() {
    alunoController.deletarTodos();

    const opcao = input(`Deseja voltar ao menu? 1 = Sim 0 Não: `);
    switch (opcao) {
      case "1":
        menuAluno();
        break;
      case "0":
        break;
      default:
        break;
    }
  }
}
