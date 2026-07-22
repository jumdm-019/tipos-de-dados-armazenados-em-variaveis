//OBJETOS
const produto = {  //diferente do rrey que usa[], o objeto usa{}
   nome: "Notebook",
   preco: 3400,
   estoque: true,
   "fornecedor principal": "Dell",
   12345: "Código do produto"
}
console.log("Nome: " + produto.nome) //acessando a propriedade
console.log("Preço: " + produto.preco)
console.log("Estoque: " + produto.estoque)
console.log("Acesso diferente: " + produto["fornecedor principal"]) //usar quando tiver algum nuance no nome

console.log(" ")

//alterar propriedades
produto.preço = 5000
console.log("Objeto alterado: " + produto.preco)

produto["fornecedor principal" ] = "Lenovo"
console.log("Objeto alterado: " + produto["fornecedor principal"])

console.log(" ")

//adicionar proprirdades
produto.cor = "branco"
produto.peso = 3.7
produto.memoria = "16GB"
produto["tamanho de tela"] = 34
console.log("Objeto após adição: " + produto.cor)

console.log(" ")

//remoção de propriedade
delete produto.estoque
console.log("Propriedade removida: " + produto.estoque)

console.log("-----------------------------")
// arrey de objetos

const arrayprodutos = [
   {
   nome: "Notebook",
   preco: 3400,
   estoque: true,
   },
   {
   nome: "Computador",
   preco: 9000,
   estoque: true,
   }
]
console.log("Acessando um obnjeto dentro do array: " + arrayprodutos[0].nome)
console.log("Acessando um obnjeto dentro do array: " + arrayprodutos[1].preco)

console.log(" ")

//adicionar um objeto dentro do arrei
arrayprodutos.push(
   {
   nome: "Novo",
   preco: 6500,
   estoque: true,
   }
)
console.log("Adição de um novo preduto no arrey: " + arrayprodutos[2].nome)

console.log(" ")

//percorrer um array de objetos
for(let i = 0; i < arrayprodutos.length; i++){
   console.log("Percorrendo o array de produtos: " + arrayprodutos[i].nome + "-" + arrayprodutos[i].preco)
}

console.log("-----------------------------")
//EXEMPLOS
//ex0:
let livro = {
   titulo: "O iluminado",
   autor: "Stephen King"
}
livro.genero = "Mistério"
console.log("Genero livro: " + livro.genero)

console.log("-----------------------------")
//ex1:
let alunos = [
   {
      nome : "Lucas",
      idade : 19,
      curso :"Enfermagem"
   },
    {
      nome : "Adriana",
      idade : 25,
      curso :"Medicina"
   },
    {
      nome : "João",
      idade : 46,
      curso :"Ciência da computação"
   }
]
console.log(alunos)

console.log("-----------------------------")
//ex2:
const colaboradores = [
   {
      nome: "João",
      setor: "RH",
   },
   {
      nome: "Maria",
      setor: "Finaceiro",
   },
   {
      nome: "Pedro",
      setor: "TI",
   }
]

for(let i = 0; i < colaboradores.length; i++){
   console.log("Nome: " + colaboradores[i].nome + ", Setor: " + colaboradores[i].setor)
}

console.log("-----------------------------")
//ex4:
let veiculo = {
   marca: "a",
   modelo: "b",
   ano: 2020
}
veiculo.cor = "vermelho"
veiculo.ano = 2025
console.log("Objeto completo: " + " \n" + veiculo.marca + " \n" + veiculo.modelo + " \n" + veiculo.ano + " \n" + veiculo.cor)

