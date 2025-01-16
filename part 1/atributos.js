//Criar a classe livro com três atributos
//        Titulo, autor e numero de paginas
//Adicionar os metodos
//        Descrever e atualizar paginas

class livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    descrever() {
        return `Titulo: ${this.titulo}\nAutor: ${this.autor}\nPaginas: ${this.paginas}`;
    }

    atualizarPaginas(novasPaginas) {
        this.paginas = novasPaginas;
    }
}

const meuLivro = new livro("O Senhor dos Aneis", "JRR Tolkien", 1000);

console.log(meuLivro.descrever());
meuLivro.atualizarPaginas(2000);
console.log(meuLivro.descrever());