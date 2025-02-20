

class Pessoa {
    constructor(nome, telefone, senha){
        this.nome = nome
        this.telefone = telefone
        this.senha = senha
    }
    get getMatricula() {
        return this.#matricula;
      }
}

nome telefone e senha