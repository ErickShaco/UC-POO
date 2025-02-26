import prompt from "prompt-sync";
import { menuProfessor } from "../../../index.js";
import { ProfessoresController } from "../controllers/index.js";


const professorController = new ProfessoresController();
const input = prompt();

export class ProfessorView {
  listarProfessor() {
    console.log("/n Lista de Professores: ");
    professorController.listarTodos();

    const opcao = input(`Deseja voltar ao menu? 1 = Sim 0 Não: `);
    switch (opcao) {
      case "1":
        menuProfessor();
        break;
      case "0":
        break;
      default:
        break;
    }
  }

  criarProfessor() {
    const matricula = input("Digite a matrícula: ");
    const turma = input("Digite a turma:")
    const disciplina = input("Digite a Disciplina:")
    const nome = input("Digite o Nome: ");
    const telefone = input("Digite o Telefone");
    const email = input("Digite o Email: ");
    const senha = input("Digite a Senha: ");
    professorController.criar(matricula,turma, disciplina, nome, telefone, email, senha);

    const opcao = input(`Deseja voltar ao menu? 1 = Sim 0 Não: `);
    switch (opcao) {
      case "1":
        menuProfessor();
        break;
      case "0":
        break;
      default:
        break;
    }
  }

  editarProfessor() {
    const matriculaEditar = input("Digite a matrícula do Professor: ");
    const novoNome =
      input("Novo nome (deixe em branco para manter o mesmo): ") || null;
    const novoTelefone =
      input("Novo Telefone (deixe em branco para manter o mesmo): ") || null;
    const novoEmail =
      input("Novo email (deixe em branco para manter o mesmo): ") || null;
    const novaSenha =
      input("Nova senha (deixe em branco para manter a mesma): ") || null;

    professorController.editar(
      matriculaEditar,
      novoNome,
      novoTelefone,
      novoEmail,
      novaSenha
    );

    const opcao = input(`Deseja voltar ao menu? 1 = Sim 0 Não: `);
    switch (opcao) {
      case "1":
        menuProfessor();
        break;
      case "0":
        break;
      default:
        break;
    }
  }

  excluirPorMatricula() {
    const matriculaDeletar = input(
      "Digite a matrícula do Professor a ser deletado: "
    );

    professorController.deletarPorMatricula(matriculaDeletar);

    const opcao = input(`Deseja voltar ao menu? 1 = Sim 0 Não: `);
    switch (opcao) {
      case "1":
        menuProfessor();
        break;
      case "0":
        break;
      default:
        break;
    }
  }

  excluirTodos() {
    professorController.deletarTodos();

    const opcao = input(`Deseja voltar ao menu? 1 = Sim 0 Não: `);
    switch (opcao) {
      case "1":
        menuProfessor();
        break;
      case "0":
        break;
      default:
        break;
    }
  }
}
