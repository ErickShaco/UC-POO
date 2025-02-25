import { ProfessoresModel } from "../models/index.js";
import { Professores } from "../../../config/database.js";

export class ProfessoresController {
  criar(matricula, nome, email, telefone, senha) {
    try {
      const novoProfessor = new ProfessoresModel(
        matricula,
        nome,
        email,
        telefone,
        senha
      );
      Professores.push(novoProfessor);
      console.table(novoProfessor);
    } catch (error) {
      console.error("Erro ao tentar criar Professor", error.message);
    }
  }

  editar(matricula, novoNome, novoTelefone, novoEmail, novaSenha) {
    try {
      const professor = Professores.find(
        (professor) => professor.getMatricula === matricula
      );
      if (!professor) {
        return console.log("Professor não encontrado!");
      }
      professor.nome = novoNome || professor.nome;
      professor.telefone = novoTelefone || professor.telefone;
      professor.email = novoEmail || professor.email;
      professor.senha = novaSenha || professor.senha;
    } catch (error) {
      console.error("Erro ao tentar atualizar o Professor", error.message);
    }
  }
  1;

  deletarPorMatricula(matricula) {
    try {
      const index = Professores.findIndex(
        (professor) => professor.getMatricula === matricula
      );
      if (index === -1) {
        return console.log("Professor não encontrado");
      }
      Professores.splice(index, 1);
      console.log("Professor excluido com sucesso!");
    } catch (error) {
      console.error("Erro ao tentar excluir o Professor", error.message);
    }
  }
  deletarTodos() {
    try {
      Professores.length = 0;
      console.log("Todos os Professores excluidos!");
    } catch (error) {
      console.error(
        "Erro ao tentar excluir todos os Professores",
        error.message
      );
    }
  }

  listaPorMatricula(matricula) {
    try {
      const professor = Professores.find(
        (professor) => professor.getMatricula === matricula
      );
      if (!professor) {
        return console.log("Aluno não encontrado");
      }
      console.table(professor);
    } catch (error) {
      console.error("Erro ao tentar exibir o Professor", error.message);
    }
  }
  listarTodos() {
    try {
      if (Professores.length === 0) {
        return console.log("Não existe Professores a serem exibidos!");
      }
      console.table(Professores);
    } catch (error) {
      console.error("Erro ao tentar exibir os Professores", error.message);
    }
  }
}
