class Fila {
    constructor() {
        this.nomes = [];
    }

    adicionar(nome) {
        return this.nomes.push(nome);
    }

    remover() {
        if (this.nomes.length > 0) {
            return this.nomes.shift();
        }
    }
}

let fila = new Fila();

fila.adicionar('teste');
fila.adicionar(4341);
fila.adicionar('sabado');

console.log(fila.nomes);

fila.remover();

console.log(fila.nomes);