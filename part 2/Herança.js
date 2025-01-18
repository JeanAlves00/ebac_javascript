//Crie a classe animal
//   Atributos: nome, idade e tipo
//Metodo animal
//Classe cachorro qie herde de animal
//Crie instancia cachoro para exibir resultados

class animal {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    descrever() {
        return `Nome: ${this.nome}\nIdade: ${this.idade}\nTipo: ${this.tipo}`
    }
}

//classe cachoro que herda a classe animal
class cachorro extends animal {
    constructor(nome, idade, raca) {
        super(nome, idade, 'cachorro');
        this.raca = raca
    }

    latir() {
        return `${this.nome} esta latindo!`
    }
}

//instancia cachoro para exibir resultados
const meuCachorro = new cachorro('rex', 5, 'poodle');
console.log(meuCachorro.descrever());
console.log(meuCachorro.latir());