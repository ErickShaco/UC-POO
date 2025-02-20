import prompt from "prompt-sync";
import { AlunoView } from "./modulos/Aluno/views";
import { TurmaView } from "./modulos/Turma/views";

const turmaView = new TurmaView();
const alunoView = new AlunoView();

const input = prompt();

function menuPrincipal() {
  console.log("\n######### MENU #############");
  console.log("1 - Menu de Alunos");
  console.log("2 - Menu de Turmas");
  console.log("3 - Menu de Professores");
  console.log("##############################");

  const opcao = input(`Digite A Opçao Desejada!`);
  switch (opcao) {
    case "1":
      menuAluno();
      break;
    case "2":
      menuTurma();
      break;

    default:
      break;
  }
}

function menuTurma() {
  console.log("\n######### MENU #############");
  console.log("1 - Criar Turma");
  console.log("2 - Listar Todas as Turmas");
  console.log("3 - Deletar Turma por Codigo");
  console.log("4 - Deletar todos");
  console.log("5 - Editar Turma");
  console.log("0 - Sair");
  console.log("##############################");

  const opcao = input(`Digite A Opçao Desejada!`);
  switch (opcao) {
    case "1":
      turmaView.criarTurma();
      break;
    case "2":
      turmaView.listarTurmas();
      break;
    case "3":
      turmaView.excluirPorcod();
      break;
    case "4":
      turmaView.excluirTodos;
      break;
    case "5":
      turmaView.editarTurma();
      break;
    default:
      break;
  }
}

function menuAluno() {
  console.log("\n######### MENU #############");
  console.log("1 - Criar aluno");
  console.log("2 - Listar todos os alunos");
  console.log("3 - Deletar aluno por matrícula");
  console.log("4 - Deletar todos");
  console.log("5 - Editar aluno");
  console.log("0 - Sair");
  console.log("##############################");
}

function main() {
  let controle;
  do {
    menuAluno();
    controle = input("Escolha uma opção: ");
    switch (controle) {
      case "1":
        alunoView.criarAluno();
        break;
      case "2":
        alunoView.listarAlunos();
        break;
      case "3":
        alunoView.excluirPorMatricula();
        break;
      case "4":
        alunoView.excluirTodos();
        break;
      case "5":
        alunoView.editarAluno();
        break;
      case "0":
        console.log("Saindo...");
        break;
      default:
        console.log("Opção invalida, digitte um numero do menu!");
    }
  } while (controle !== "0");
}

menuPrincipal();
