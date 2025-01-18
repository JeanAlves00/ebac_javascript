//Crie uma classe pessoa
//        com os atributos privados nome e idade
// crie atributos getnome, getidade e setnome, set idade
// crie uma instancia para devolver os valores

//definição da classe pessoa
class pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    getnome() {
        return this._nome;
    }
    getidade() {
        return this._idade;
    }
    setnome(novoNome) {
        this._nome = novoNome;
    }
    setidade(novaIdade) {
        this._idade = novaIdade;
    }
}

//instancia da classe pessoa
const p1 = new pessoa("Lucas", 20);
console.log(`Nome: ${p1.getnome()}, Idade: ${p1.getidade()}`);

p1.setnome("Joaquim");
p1.setidade(30);
console.log(`Nome: ${p1.getnome()}, Idade: ${p1.getidade()}`);