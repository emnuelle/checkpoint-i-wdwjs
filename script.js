// ex 1 declarando uma variavél no valor undefined
let num 
console.log(num)
// ex 2 usando operador %
let num1 = 25
let num2 = 11

resultado =! (num1 % num2)

if(resultado != 0){
    console.log("É par!")
}
else{
    console.log("É impar!")
}

// ex 3 calculando imc 

let imc = 20.6

if(imc < 18.5){
    console.log("Abaixo do peso")
}
else if (imc >= 18.5 && imc <= 24.9){
    console.log("Peso ideal")
}
else{
    console.log("Acima do peso")
}

// ex 4 indicando a faixa etária
let idade = 56

if(idade <= 12){
    console.log("Criança")
}
else if(idade >= 13 && idade <=18){
    console.log("Adolescente")
}
else if(idade >= 19 && idade <=60){
    console.log("Adulto")
}
else{
    console.log("Idoso")
}

// 