//EXERCICIO REVISÃO
let nota1 = 1
let nota2 = 2
let cauculoMedia = (nota1 + nota2)/2
console.log(cauculoMedia)

console.log("-------------------------")
//FUNÇÕES

function saudacao(nome){
    console.log("Bem-vinda " +  nome)
}
saudacao("Julia")//Chama e executa a função

function soma(num1, num2){
    return num1 + num2
}
console.log(soma(2, 8))

function sacarDinheiro(saldo, valorSaque){
   let saldoAtual = saldo - valorSaque
    if(valorSaque > saldo){
        return "saldo insuficiente"
    }
    else{
        return "saque realizado com sucesso! Saldo atual: " + saldoAtual
    }
}

let resultado = sacarDinheiro(5000, 1000)
console.log(resultado)

function caucularMedia(nota1, nota2){
    return (nota1 + nota2)/2
}

console.log("A média das notas é: " + caucularMedia(1, 2))
console.log("A média das notas é: " + caucularMedia(3, 6))
console.log("A média das notas é: " + caucularMedia(10, 20))

//ESCOPO DE VARIAVEIS

const empresa = "senai" //Escopo global, pode ser chamada de qualquer lugar do código.

function nomeCompleto(){
    let nome = "Julia" //Escopo de função, pode ser usada somente pela função.
}

if(true){
    let numero = 1 //Escopo de bloco, só existe dentro do bloco onde foi criada, entre chaves.
} 

//Var, Let e Const
//var:
if(true){
    var nome = "julia"
}
console.log(nome)//Um problema da var é que eu consigo utilizar uma variavel de bloco fora do blco

//let:
if(true){
    let nome2 = "julia"
}
//O let respeita o escopo de bloco.
//Não permite redleclarações de variavel, repetir o mesmo nome.
//permite alterar o valor da variavel.

//const:
//Não posso alterar o valor.
//Respeita o escopo de bloco.

console.log("-------------------------")
//EXERCÍCIOS

function dobro(numero){
    return numero * 2
}
console.log("Exercício 2: " + dobro(6))

function verificarIdade(idade){
    return (idade >= 18 ? "Maior de idade" : "Menor de idade")
}
console.log("Exercício 4: " + verificarIdade(13))

 function caucularDesconto(valor){
    return(valor > 500? "Desconto de 20%" : valor > 200? "Desconto de 10%" : "Sem desconto")
 }
 console.log("Exercício 5: " + caucularDesconto(300))
