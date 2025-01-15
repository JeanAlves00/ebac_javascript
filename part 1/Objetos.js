//Criar uma classe chamada retangulo
//ela deve conter as propriedades largura e altura
//crie um metodo para a area

//criando a classe retangulo
class retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    //metodo para calcular a area
    calcularArea() {
        return this.largura * this.altura;
    }
}

//instancia da classe retangulo que chama o metodo calcularArea e retorna para o usuario a area
const meuRetangulo = new retangulo(5, 3);
console.log(meuRetangulo.calcularArea());//retorno ao usuario