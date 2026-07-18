//ARROW-FUNCTION
let olaMundo = () => { //cria uma função, que funciona da mesma forma.
    console.log("Olá Mundo")
}

let olaMundo2 = () => console.log("Olá Mundo 2") //quando a função só tem uma linha, posso omitir as chaves

let somar = (a, b) => a + b //não precisa do return, só precisa quandotiver mais de uma linha de código
console.log(somar(1, 4))

//ARRAY
const alunos = ["Julia", "Maria", "João", "Pedro"]
console.log("Quantidade de alunos: " + alunos.length)

console.log("Elemento array indici 2: " + alunos[2])

alunos[3] = "Carmen" //Mudou o valor do indíci 3
console.log("Elemento array indici 3: " + alunos[3])

for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i])
}

console.log("-------------------------------")
// MÉTODOS
let frutas = ["banana", "uva", "maçã", "laranja"]
console.log("Lista de frutas começo: " + frutas)

//Push: adiciona no final do array
frutas.push("manga", "limão")
console.log("Lista de frutas após push: " + frutas)

//Pop: remove o último elemento do array
frutas.pop()
console.log("Lista de frutas após pop: " + frutas)

//Unshift: coloca um novo elemento no array no começo
frutas.unshift("kiwi", "mamão")
console.log("Lista de frutas após unshift: " + frutas)

//Shift: remove o primeiro elemento
frutas.shift()
console.log("Lista de frutas após shift: " + frutas)

//IndexOf: procura no array o primeiro elemento que vc quiser.
frutas.indexOf("banana")
console.log("O índice do elemento banana: " + frutas.indexOf("banana")) //Quando não encontra retorna -1

//Includes: verifica se tem o elemento no array
frutas.includes("laranja")
console.log("Tem o elemento laranja: " + frutas.includes("laranja"))

//Splice: remove, adiciona ou substitui elementos
//o primeiro paramatro: a partir de onde quero começar;
//segundo parametro: quantos eu quero remover
let letras = ["a", "b", "c", "d", "e"]
letras.splice(1, 2) //vai remover 2 itens a partie do indici 1
console.log(letras)

let produtos = ["camisa", "calça"]
produtos.splice(1, 0, "meia", "boné") 
console.log(produtos)

let cores = ["amarelo", "azul", "verde"]
cores.splice(1, 1, "roxo") // vai substituir o elemeto do indici 1
console.log(cores)

console.log("-------------------------------")
//EXERCICÍOS
//ex1:
let cadastrarProduto = (produto) => `Produto ${produto} cadastrado com sucesso!`
console.log(cadastrarProduto("Notebook"))

console.log("-------------------------------")
//ex2:
const diciplinas = ["matamática", "português", "física", "biología", "química"]
console.log("Totas as diciplinas: " + diciplinas)
console.log("Primeira diciplina: " + diciplinas[0])
console.log("Última diciplina: " + diciplinas[diciplinas.length - 1])
console.log("Total de diciplinas: " + diciplinas.length)

console.log("-------------------------------")
//ex3:
function listaFuncionarios (funcionarios){
    let nomes = ""
    for(let i = 1; i <= funcionarios.length; i++){
        nomes += `Funcionário ${i}: ${funcionarios[i - 1]}\n`
    }
    return nomes
}
console.log(listaFuncionarios(["Ana", "Carlos", "Mariana"]))

console.log("-------------------------------")
//ex4:
let filmes = ["a", "b", "c", "d", "e"]
console.log("Terceiro filme: " + filmes[2])
filmes.splice(3, 1, "Minions")
console.log("Lista atualizada: " + filmes)
