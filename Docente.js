import User from "./User.js"

export default class Docente extends User{
    constructor(nome, email, nascimento, role = "Docente", ativo = "true"){
        super(nome, email, nascimento,role,ativo)
    }
    aprovarEstudante(estudante, curso){
        return `estudante ${estudante} passou no curso de ${curso}, responsável: ${this.nome}`

    }
}


