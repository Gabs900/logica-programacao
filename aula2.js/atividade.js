let nomes = ["Arthur","Ingyd","kelly"]; 
let idades = [15,16,17]; 
let profissoes = ["desempregado","maquiadora","secretaria"]

function criarPessoaFN(nomes,idades,profissoes){
    const pessoa = {
        nome: nomes[Math.random() * nomes.length | 0],
        idade: idades[Math.random() * idades.length | 0],
        profissao: profissoes[Math.random() * profissoes.length | 0]
    }
    return pessoa;
}
let pessoa = criarPessoaFN(nomes, idades,profissoes)
console.log(nomes[0])
console.log(pessoa.idade);


