const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

// passar pelo array da forma antiga
for (let i = 0; i < redesSociais.length; i++) {
    console.log(`eu tenho perfil na rede social: ${redesSociais[i]}`)
}

// passar pelos itens do array com ES6+
//=================== FOREACH =================================//
// o for each apenas itera, ele não modifica nada
redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} eu tenho perfil na rede social ES6: ${nomeDaRedeSocial}`)
})
//=================== FIM FOREACH =================================//

//====================== MAP ==================================//
// consegue modificar o array e ter um novo array como retorno
const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner']

const alunos2 = alunos.map(function(itemAtual){
    return{
        nome: itemAtual, 
        curso: 'Frontend'
    }
})

console.log(alunos2)


//====================== FIM MAP ==================================//

//====================== FIND ==================================//
const paula = alunos2.find(function(item){
    return item.nome =='Paula' //true ou false
})

console.log(paula)

//====================== FIM FIND ==================================//

//====================== FIND INDEX ==================================//
const indeiceDapaula = alunos2.findIndex(function(item){
    return item.nome =='Paula' //true ou false
})

console.log(indeiceDapaula)
//====================== FIM FIND INDEX ==================================//

//====================== EVERY ==================================//
alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})

const todosAlunosSaoDeFrontend = alunos2.every(function(item){
    return item.curso === 'Frontend'
})

console.log(todosAlunosSaoDeFrontend)
//====================== FIM EVERY ==================================//

//====================== SOME ==================================//
const existeAlgumAlunoDeBackend = alunos2.some(function(item){
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(existeAlgumAlunoDeBackend)
//====================== FIM SOME ==================================//


//====================== FILTER ==================================//
function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend'
}

//arrow function
const filtraAlunosDeBackend2 = (aluno) => aluno.curso === 'Backend'
// quando só tem apenas um argumento, não precisa usar os parênteses, então ficaria:
const filtraAlunosDeBackend3 = aluno => aluno.curso === 'Backend'

const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend)


console.log(alunosDeBackend)
//====================== FIM FILTER ==================================//



//====================== REDUCER ==================================//
// agregação de valores
// carrinho de compras
const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual
    return acumulador
}, 0)

console.log(soma)
//====================== FIM REDUCER ==================================//


let somaComFor = 0

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}

console.log(somaComFor)


// reduce

const nomeDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    return acumulador += `${itemAtual.nome} - `
}, '')

console.log(nomeDosAlunos)