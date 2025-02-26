import { alunos, Professores, turmas } from "../../../config/database.js";
import { TurmaModel } from "../models/index.js";
import { AlunoModel } from "../../Aluno/models/index.js";
import { ProfessoresModel } from "../../Professor/models/index.js";
import { AlunoView } from "../../Aluno/views/index.js";
import { ProfessorView } from "../../Professor/views/index.js";

const alunoView = new AlunoView()
const professorView = new ProfessorView()

export class TurmaController {
  criar(cod, nome, sala, capacidade, aluno, professor) {
    
    const aluno = alunos.find((aluno) => aluno.getMatricula === matricula);
    if(!aluno || !aluno instanceof AlunoModel){
      alunoView.criarAluno()
      return console.log("ALuno Invalido ou Não encontrado")
    }

    const professor = Professores.find((professor) => professor.getMatricula === matricula);
    if(!professor || !professor instanceof ProfessoresModel){
      professorView.criarProfessor()
     return console.log("Professor Invalido ou Não encontrado")
    }

    try {
      const novaTurma = new TurmaModel(cod, nome, sala, capacidade);
      turmas.push(novaTurma);
      console.table(novaTurma);
    } catch (error) {
      console.error("Erro ao tentar criar Turma", error.message);
    }
  }

  editar(cod, novoNome, novaSala, novaCapacidade) {
    try {
      const turma = turmas.find((turma) => turmas.getcod === cod);
      if (!turma) {
        return console.log("Turma não encontrado!");
      }
      turma.nome = novoNome || turma.nome;
      turma.sala = novaSala || turma.sala;
      turma.capacidade = novaCapacidade || turma.capacidade;
    } catch (error) {
      console.error("Erro ao tentar atualizar a Sala", error.message);
    }
  }

deletarPorCod(cod) {
    try {
      const index = turmas.findIndex((turma) => turma.getcod === cod);
      if (index === -1) {
        return console.log("Turma não encontrado");
      }
      turmas.splice(index, 1);
      console.log("Turma excluida com sucesso!");
    } catch (error) {
      console.error("Erro ao tentar excluir a Turma", error.message);
    }
  }

    deletarTodos() {
    try {
      turmas.length = 0;
      console.log("Todos as turmas excluidas!");
    } catch (error) {
      console.error("Erro ao tentar excluir todas Turmas", error.message);
    }
  }

  listaPorCod(cod) {
      try {
        const turma = turmas.find((turma) => turma.getcod === cod);
        if (!turma) {
          return console.log("Turma não encontrado");
        }
        console.table(turma);
      } catch (error) {
        console.error("Erro ao tentar exibir a Turma", error.message);
      }
    }
    
    listarTodos() {
      try {
        if (turmas.length === 0) {
          return console.log("Não existe Turmas a serem exibidos!");
        }
        console.table(turmas);
      } catch (error) {
        console.error("Erro ao tentar exibir as Turmas", error.message);
      }
    }
    adcionarAluno(){
       
    }

    adcionarProfessor(){


    }

    mudarProfessor(){

    }

    mudarAluno(){

    }

}

