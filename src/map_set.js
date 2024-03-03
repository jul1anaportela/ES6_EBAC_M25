//map

let meuMap = new Map()
meuMap.set("nome", "juliana")
meuMap.set("stack", "html, css, js")

console.log(meuMap)

const nome = meuMap.get("nome")
console.log(nome)

console.log(meuMap.size)

console.log(meuMap.has("sobrenome"))


console.log(meuMap.size)

for(let chave of meuMap.keys()) {
    console.log(`chave: ${chave}`)
}

for(let valor of meuMap.values()) {
    console.log(`valor: ${valor}`)
}

for(let entrada of meuMap.entries()) {
    console.log(`entrada: ${entrada}`)
}

for(let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`)
}

meuMap.delete("stack")
console.log(meuMap)


//set
const cpfs = new Set()
cpfs.add('70471015008')
cpfs.add('42004150033')
cpfs.add('79021818035')

console.log(cpfs)
console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor)
})

//listagem de itens únicos
const array = ['gian souza', 'josé paulo', 'maria isabel', 'luana', 'luana', 'gian souza']

const arrayComoSet = new Set([...array])
console.log(arrayComoSet)

//transformar um Set em um Array
const arraySemItensDuplicados = [...arrayComoSet]
console.log(arraySemItensDuplicados)

