class Pilha {
    constructor() {
        this.nomes = [];
    }

    adicionar(nome) {
        return this.nomes.push(nome);
    }

    remover() {
        if (this.nomes.length > 0) {
            return this.nomes.pop();
        }
    }
}

let pilha = new Pilha();

pilha.adicionar('teste');
pilha.adicionar(4341);
pilha.adicionar('sabado');

console.log(pilha.nomes);

pilha.remover();

console.log(pilha.nomes);