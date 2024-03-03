// • Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;
// • Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;
// • Crie uma branch exercicio_es6 no repositório do curso, armazene o código nesta branch e nos envie o link através da plataforma. 

let alunos = [
    {
        "nome": "alana",
        "nota": 9
    },
    {
        "nome": "joão",
        "nota": 5
    },
    {
        "nome": "beatriz",
        "nota": 6
    },
    {
        "nome": "antonio",
        "nota": 4
    },
    {
        "nome": "ana",
        "nota": 8
    }
]



const notasBoas = aluno => aluno.nota >= 6
const alunosComNotasBoas = alunos.filter(notasBoas)

console.log(alunosComNotasBoas)