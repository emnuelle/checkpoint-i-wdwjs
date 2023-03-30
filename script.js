// Exercício 1
let variavel = undefined; // Pode-se não adicionar "undefined" ou apenas não atribuir um valor.
console.log(variavel); // Aparecerá: undefined.


// Exercício 2
// O operador % é o operador de resto ou módulo, que retorna o resto da divisão entre dois números.
let a = 10;
let b = 3;

let resultado = a % b;
console.log(resultado); // Aparecerá: 1
//Neste exemplo é demonstrado a divisão entre 10 e 3, onde é mostrado o resto dá divisão, que é 1.


// Exercício 3
// Cálculo de Índice de Massa Corporal
let imc = 20

if(imc < 18.5) {
    console.log("abaixo  do  peso")
}else if(imc >= 18.5 && imc <= 24.9){
    console.log("peso ideal")
}else{
    console.log("Acima do peso")
}


// Exercício 4
let idade = 25

if(idade <= 12) {
    console.log("Criança")
}else if(idade >= 13 && idade <= 18){
    console.log("Adolecente")
}else if(idade >= 19 && idade <= 60){
    console.log("Adulto")
}else {
    console.log("Idoso")
}


// Exercício 5
