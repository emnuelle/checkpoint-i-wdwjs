// Exercicio 1 / Como declarar uma variável com valor undefined 
let num
console.log(num)

// Exercicio 2 / Como usar o operador % em JavaScript
let num1 = 20
let num2 = 10

resultado = !(num1 % num2)

resultado = !(num1 % num2)

if(resultado != 0){
    console.log("O numero é par")
}else{
    console.log("O numero é impar")
}

/** Exercicio 3 
 * Escreva  um  programa  que  calcula  o  índice  de  massa  corporal  (IMC) 
*/

let imc = 25

if(imc < 18.5){
    console.log("abaixo  do  peso")
}else if(imc >= 18.5 && imc <= 24.9){
    console.log("peso ideal")
}else{
    console.log("Acima do peso")
}
