//Definição de classe
class pessoa {
    constructor(nome, idade) {
        this.nome = nome; //propriedade
        this.idade = idade; //propriedade
    }

    //metodo
    comprimentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

//criando uma instancia da classe pessoa
const p1 = new pessoa("Lucas", 20);
p1.comprimentar();