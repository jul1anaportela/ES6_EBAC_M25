// const minhaFuncao = () => {
//     return"Diz olá"
// }

const minhaFuncao = () => "Diz olá";

console.log(minhaFuncao())

//========================================================================================
// modo mais longo

// const retornaUmCarro = () => {
//     return {
//         modelo: 'ka',
//         fabricante: 'ford'
//     }
// }

//modo mais curto
const retornaUmCarro = () => ({
        modelo: 'ka',
        fabricante: 'ford'    
    })

console.log(retornaUmCarro())


const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        console.log(this)
        this.velocidadeAtual += 10
    },
    freiar: () => {
        console.log(this)
        this.velocidadeAtual -=10
    }
}

carro.acelerar()
carro.freiar()

console.log(carro.velocidadeAtual)