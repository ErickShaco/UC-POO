import { Pessoa } from "./Pessoa.js";

export class ProfessoresModel extends Pessoa {
    constructor(matricula, turma, disciplina, nome, telefone, email, senha){
      super(matricula, nome, telefone, email, senha)
        this.turma = turma
        this.disciplina = disciplina
    }
    }