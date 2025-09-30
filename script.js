class jogador{
    constructor(id, nome, pontos, status = true) {
this.id = id;
this.nome = nome;
this.pontos = pontos;
this.status = status;
    }

getData(){
console.log(`
    -----Dados do Jogador-----
    ID: ${this.id}
    Nome: ${this.nome}
    Pontos: ${this.pontos}
    ${this.status ? Ativo: Inativo}
    -------------------------------`)
   }
}

let jogador1 = new jogado(1, "Labubu", 578);

console.table(jogador1);