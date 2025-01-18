//Crie a classe animal
//  Metodo emitirsom
//Crie duas classes derivadas cachorro e gato
//Altere a emitirsom para cachoro e gato
//Crie a funcao fazer barulho

class animal {
    emitirsom() {
        
    }
}

class cachorro extends animal {
    emitirsom() {
        return 'au au au';
    }
}

class gato extends animal {
    emitirsom() {
        return 'miau miau';
    }
}

function fazerBarulho(animal) {
    console.log(animal.emitirsom());
}

const meuCachorro = new cachorro();
const meuGato = new gato();

fazerBarulho(meuCachorro);
fazerBarulho(meuGato);