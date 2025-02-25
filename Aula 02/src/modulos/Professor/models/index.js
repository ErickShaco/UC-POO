import { Pessoa } from "./Pessoa.js";

export class ProfessoresModel extends Pessoa {
    constructor(matricula, turma, nome, telefone, email, senha){
      super(matricula, nome, telefone, email, senha)
        this.turma = turma
    }
    }