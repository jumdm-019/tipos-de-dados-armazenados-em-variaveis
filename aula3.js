//ESTRUTURAS CONDICIONAIS
  //EXERCICÍO 1
let nota = 7

if (nota >= 9){
    console.log("Aprovado.")
}
else if(nota >= 6){
    console.log("Quase ficou.")
}
else{
    console.log("Reprovado")
}

console.log("----------------------------")
 //EXERCICÍO 2

let usuario = "admin"
let senha = 123456

if(usuario == "admin" && senha == 123456){
    console.log("Login realizado com sucesso!")
}
else {
    console.log("Usuario ou senha inválidos.")
}

 let idade = 37

 if(idade < 12){
    console.log("Criança")
 }
 else if(idade <= 17){
    console.log("Adolescente")
 }
 else if(idade <= 59){
    console.log("Adulto")
 }
 else{
    console.log("Idoso")
 }


console.log("----------------------------")
 //OPRADOR TERNÁRIO
 //OUTRA MANEIRA DE ESCREVER O IF E ELSE

 //condição ? valor : valor

 let respostaidade = idade < 18 ? "Menor de idade" : "Maior de idade";
 console.log(respostaidade)
 
let respostaNota = nota < 6 ? "Reprovado" : nota === 6 ? "Quase ficou" : "Passou"
console.log(respostaNota)

console.log("----------------------------")
//switch comparação de variaveis com vários valores possiveis
//obrigatório o uso do break
let dia = 3
switch(dia){
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda")
        break;
    case 3:
        console.log("Terça")
        break;
    default : console.log("Dia inválido")
}

let frutas = "maçã"
switch(frutas){
    case "banana" :
    case "maçã" :
    case "uva" :
        console.log("tudo é fruta")
        break;
    default :
    console.log("não é fruta")
}
