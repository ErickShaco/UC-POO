
export class Pessoa {
    #matricula
    constructor(matricula, nome, telefone, email, senha){
        this.#matricula = matricula
        this.nome = nome
        this.telefone = telefone
        this.senha = senha
        this.email = email
    }
    get getMatricula() {
        return this.#matricula;
      }
}

