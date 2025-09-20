import User from "./User.js"

export default class admin extends User{
    constructor(nome, email, nascimento, role = "admin", ativo = "true"){
        super(nome, email, nascimento,role,ativo)
    }
    

    criarCusos(nomeCurso, qtdVagas){
        return `curso ${nomeCurso} criado com ${qtdVagas} vagas`

    }

    exibirNome(){
        
    }
}


