import { Pessoa } from "../../Professor/models/Pessoa.js";

export class AlunoModel extends Pessoa {
  constructor(matricula, nome, telefone, email, senha) {
    super(matricula, nome, telefone,  email, senha)
  }
}
