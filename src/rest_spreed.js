function somar() {
    let soma = 0

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i]
    }

    return soma
    //arguments é uma propriedade que já vem dentro de qualquer função
    // console.log(arguments)
    //return a + b
}

console.log(somar(10,20,30))

// utilizando o rest
function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10,20,30))

//spread
const numeros = [1, 2, 3, 4]
console.log(...numeros)

const timesDeFutebolDeSP = ['corinthians', 'santos', 'palmeiras', 'são paulo']
const timesDeFutebolDoRio = ['flamengo', 'vasco', 'fluminense', 'botafogo']

// const timesDeFutebol = timesDeFutebolDeSP.concat(timesDeFutebolDoRio)
const timesDeFutebol = [...timesDeFutebolDeSP, ...timesDeFutebolDoRio]
console.log(timesDeFutebol)


const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna)

// desestruturação
// const motorDoCarroDaAna = carroDaAna.motor;
const { motor: motorDoCarroDaAna } = carroDaAna
const { motor: motorDocarroDaJulia } = carroDaJulia

console.log(motorDoCarroDaAna)
console.log(motorDocarroDaJulia)

// desestruturação de um array
const [item1, item2, item3, ...outrosTimes] = timesDeFutebol

console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)