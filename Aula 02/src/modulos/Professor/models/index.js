class Professores {
    #matricula
    constructor(matricula, turma, senha){
        this.#matricula = matricula
        this.turma = turma
        this.senha = senha
    }
    get getMatricula() {
        return this.#matricula;
      }
    }