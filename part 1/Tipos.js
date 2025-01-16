//Crie uma classe "aluno"
//        Ela deve ter três propriedades nome, idade e notas
//Crie tres metodos
//        Adicionar notas, calcuçar media e escrever
//Crie uma instancia com valores de exemplo

//criando a classe aluno
class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.notas = [];
    }

    // Adicionar notas
    adicionarNota(nota) {
        this.notas.push(nota);
    }

    // Calcular média
    calcularMedia() {
        if (this.notas.length === 0) return 0; // Prevenção contra divisão por zero
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }

    descrever() {
        const media = this.notas.length ? this.calcularMedia().toFixed(2) : 0;
        return `Nome: ${this.nome}\nIdade: ${this.idade}\nMédia das notas: ${media}`;
    }
}

// Instância para mostrar ao usuário
const p1 = new Aluno("Lucas", 20);
p1.adicionarNota(10);
p1.adicionarNota(5);
p1.adicionarNota(8);

console.log(p1.descrever());
