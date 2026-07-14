// TIPOS DE DADOS ARMAZENADOS EM VARIAVEIS

let simbolo = Symbol("id"); //cria um id único

let aluno = { //variavel objeto
    nome : "Julia",
    idade : 17,
    escola : "Elisa Andreoli",
    ativo : true
}

let alunos = ["Julia", "Mendes", "DaCorregio", "Meier"] //variavel objeto arrei: valores ordenados, comessa no 0

let valorBigInt = 1234567892435465735273n //para valores muito grandes

let naoENumero = 20 * "julia" //volta NaN (not a number), significa um erro durante a operação metematica

let quadrado = 20 ** 2 // eleva o número ao outro
let resto = 20 % 3 // vota o resto da operação

console.log("alunos : " + typeof alunos)
console.log("aluno : " + typeof aluno)
console.log("simbolo : " + typeof simbolo)
console.log("valorBigInt : " + typeof valorBigInt)
console.log("naoENumero : " + naoENumero)

console.log("--------------------------------")
// OPERADORES DE ATRIBUIÇÃO

let valorA = 2
let valorB = 5

console.log ("Atual valorA : " + valorA)
console.log ("Atribuição de adição: " + (valorA += valorB))//o valor a vai receber a soma do valor a + b (ex: x = x + 5) funciona para as outras operações
console.log ("Atribuição de multiplicação: " + (valorA *= valorB))
console.log ("Atribuição de subtração: " + (valorA -= valorB))
console.log ("Atribuição de divisão: " + (valorA /= valorB))
console.log ("Novo valorA : " + valorA) 

console.log("--------------------------------")
//OPERADORES LÓGICOS

let verdadeiro = true;
let falso = false;

console.log ("AND && : " + (verdadeiro && falso)) //verdadeiro só se os dois forem verdadeiros
console.log ("OR ||: " + (verdadeiro || falso)) //verdadeiro se pelo menos um for verdadeiro
console.log ("NOT ! : " + (!verdadeiro)) //valor contrario do atribuido

console.log("--------------------------------")
//OPERADORES DE COMPARAÇÃO

let num1 = 2
let num2 = `2`

console.log ("Maior : " + (num1 > num2))
console.log ("Valor : " + (num1 == num2))
console.log ("Valor e tipo de dado : " + (num1 === num2))
console.log ("Valor diferente : " + (num1 != num2))
console.log ("Valor e tipo de dado diferente : " + (num1 !== num2))

console.log("--------------------------------")
//OPERADORES UNITÁRIOS

let contador = 4

console.log ("Acrecenta  : " + (contador++)) //vai exibir o valor atual (muda o valor mas não mostra)
console.log ("Novo valor : " + contador ) //vai exibir o valor somado em 1 (novo valor armazenado)
console.log ("diminui  : " + (contador--))
console.log ("Novo valor : " + contador )

//Exemplo
let teste1 = 30
let teste2 = teste1++

console.log (teste1) // mortra o valor atualizado (31)
console.log (teste2) // mostra o valor anterior (30)

console.log("--------------------------------")
console.log("-----EXERCICIOS DE FIXAÇÃO.-----")
console.log("--------------------------------")

//exercicio três
let nota1 = 20
let nota2 = 30
let nota3 = 40

console.log ("EX 3 : " + (nota1 + nota2 + nota3) / 3)

//exercicio cinco
let idade = 18
let possuiCNH = false

console.log("EX 5 : " + ((idade => 18) && (possuiCNH == true)))















