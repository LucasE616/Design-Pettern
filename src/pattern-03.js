// Design Pattern -> Factory
// Arquitetura Inception
// Principios S.O.L.I.D
// Função é o centro do Universo
// Exemplo de API que utiliza esse padrão: github.com/BrasilAPI/cep-promise

function fabricarPessoaDois(nome, sobrenome) {
    let pessoa = {};
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;

    function nomeCompleto() {
        return `${pessoa.nome} ${pessoa.sobrenome}`;
    }

    pessoa.nomeCompleto = nomeCompleto;

    return pessoa;
}

pessoaC = fabricarPessoaDois('Lucas', 'Emanuel');

console.log(pessoaC.nomeCompleto());