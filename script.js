// começando os exercicios,como declara variavel com valor undefined
let num
console.log(num) 

// Exercicio 2 / Como usar o operador % em JavaScript
let num1 = 20
let num2 = 10

resultado = !(num1 % num2)

if(resultado != 0){
    console.log("O numero é par")
}else{
    console.log("O numero é impar")
}

/** Exercicio 3 
 * Escreva  um  programa  IMC 
*/

let imc = 25

if(imc < 18.5){
    console.log("abaixo  do  peso")
}else if(imc >= 18.5 && imc <= 24.9){
    console.log("peso ideal")
}else{
    console.log("Acima do peso")
}

/** Exercicio 4 
 * Faça um programa idade 
*/

let idade = 25

if(idade <= 12){
    console.log("Criança")
}else if(idade >= 13 && idade <= 18){
    console.log("Adolecente")
}else if(idade >= 19 && idade <= 60){
    console.log("Adulto")
}else{
    console.log("Idoso")
}

/**Execicio 5
 * Crie um programa que receba um nome de usuário com senha
 */

let login = "admin"
let senha = "1234"

if(login == "admin" && senha == "1234"){
    console.log("O login foi realizado")
}else{
    console.log("Falha de autenticação")
}
