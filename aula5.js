//ESTRUTURAS DE REPETIÇÃO
//FOR: sei quantas vezes o código vai ser execurado.

//for(inicialização; condição; incremento){}
console.log("Início laço for")
for(let i = 1; i <= 5; i++){
    console.log("Valor variavel de controle i:" + i)
}
console.log("Fim laço for")
/**
 let i = 1; o loop começa com 1
 i <= 5; da uma parada e um começo para o loop, só vai até o 5,precisa atenter a condição
 i++; garante que o valor volte diferente em cada repetição,nesse caso adiciona 1
 
 iterou = reptiu
 ctrl C - para parar caso seja um loop infinito.
 */

 console.log("--------------------------")
 //EXERCÍIO
 function calcularMediaRestaurante(notas){
   let soma = 0;
  
   for(let i = 0; i < notas.length; i++){
     soma += notas[i] //paga cada um dos elementos do arrey e soma na variavel.
   } 

   let media = soma / notas.length
   return "A média das notas é : " + media
 }

 let restaurante = [1,2,4,4,3,5]
 console.log(calcularMediaRestaurante(restaurante))

 for(let i = 10; i >= 1; i-- ){
  console.log("Contagem regressiva : " + i)
 }

 console.log("--------------------------")
 //WHILE : loop tipo indefinido

//while(condição){}; executa a condição até ser falsa.

let contador = 1
while(contador <= 5){
  console.log("Contador: " + contador)
  contador++ //condição de parada, sem isso vira loop infinito.
}

//do{}while(condição) o código vai ser executado pelo menos uma ves
let numero = 1
do{
  console.log("Número: " + numero)
  numero++
}
while(numero < 5)
 
  console.log("--------------------------")
  //BREAK: para a execução do código quando chega na condição.

  for(let i = 1; i <= 10; i++){
    if(i === 6){
      break //parou o código no 6
    }
  console.log("Contagem até: " + i)
  }

   console.log("--------------------------")
  //CONTINUE: faz a execução do loop porém pula o valor que coloquei na condição.

  for(let i = 1; i <= 10; i++){
    if(i === 6){
      continue //pulou o 6
    }
  console.log("Contagem pula: " + i)
  }

  console.log("--------------------------")
  //EXERCICÍOS

  for(let i = 1; i <= 20; i++){
    if((i % 2) === 0){
      continue
    }
    console.log("Némero impar: " + i)
  }
 
  let contador2 = 0
  while(contador2 < 10){
    contador2++

    if(contador2 === 3){
      continue;
    }
    if(contador2 === 5){
      break
    }
    console.log(`Número: ${contador2}`)

  }
  
  //ex1:
  function mostrarRanking(nome){
    let lugar = ""
    for(let i = 1; i <= nome.length; i++){
      lugar += `${i} Lugar: ${nome[i - 1]}\n`
    }
    return lugar
  }
 
  console.log(mostrarRanking(["julia","joão","maria","marcos"]))

 console.log("--------------------------")

  //ex2:
  function enviarArquivos(arquivos){
    let exibir = ""
    let i = 0
    while(i < arquivos.length){
      exibir += `Enviando arquivo: ${arquivos[i]}\n`
      i++
    }
     return exibir 
  }
 console.log(enviarArquivos(["a","b","c"]))
 console.log("Todos os arquivos foram enviados.")

 console.log("--------------------------")

 //ex3:
 function buscarFilme(filmes){
  let fil = ""
  let mensagem = ""
  for(let i = 0; i < filmes.length; i++ ){
    fil += `${filmes[i]}\n`
    
    if(filmes[i] === "d"){
     mensagem +=`Filme encontrado!, Esta na ${i + 1} posição.`
      break
    }
  }
  return fil + mensagem
 }
 console.log(buscarFilme(["a", "b", "c", "d", "e", "f"]))