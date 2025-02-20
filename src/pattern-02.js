// Design Pattern -> Factory
// Arquitetura Inception
// Principios S.O.L.I.D
// Função é o centro do Universo
// Exemplo de API que utiliza esse padrão: github.com/BrasilAPI/cep-promise

function fabricarPessoa(nome, sobrenome) {
    let pessoa = {};
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;

    return pessoa;
}

let pessoaA = fabricarPessoa('Lucas', 'Emanuel');
let pessoaB = fabricarPessoa('Lucas', 'Martins');

console.log(pessoaA);
console.log(pessoaB);

console.log(pessoaA.sobrenome);
console.log(pessoaB.sobrenome);
