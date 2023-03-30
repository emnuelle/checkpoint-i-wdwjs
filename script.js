// Exercicio 1 / Como declarar uma variável com valor undefined em JavaScript?Exemplifique e demonstre a saída do valor da variável!
let num
console.log(num)

// Exercicio 2 / Como usar o operador % em JavaScript? Exemplifique e demonstre a saída!
let num1 = 20
let num2 = 10

resultado = !(num1 % num2)

if(resultado != 0){
    console.log("O numero é par")
}else{
    console.log("O numero é impar")
}

/** Exercicio 3 
 * Escreva  um  programa  que  calcula  o  índice  de  massa  corporal  (IMC)  de  uma  pessoa  e  exibe  uma
 * mensagem indicando se ela está abaixo, no peso ideal ou acima do peso. Considere as seguintes faixas de 
 * IMC:  abaixo  de  18,5  (abaixo  do  peso),  entre18,5  e  24,9  (peso  ideal)  e  acima  de  24,9  (acima  do  peso).
 * Exemplifique e demonstre a saída!
*/

let imc = 25

if(imc < 18.5){
    console.log("abaixo  do  peso")
}else if(imc >= 18.5 && imc <= 24.9){
    console.log("peso ideal")
}else{
    console.log("Acima do peso")
}
