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

// ex 5 verificando senha e usuário
let login = "97973"
let senha = "meurm"

if(login == "97973" && senha == "meurm"){
    console.log("login realizado - Bem Vinda!")
}
else{
    console.log("falha")
}

// ex 6 calculando a média de 7 notas etc...
let nota1 = 10
let nota2 = 10
let nota3 = 10
let nota4 = 10
let nota5 = 10
let nota6 = 10
let nota7 = 10

let media = (nota1 + nota2 + nota3 + nota4  + nota5 + nota6 + nota7) / 7

if(media < 6){
    console.log("nota:", media,"reprovado")
}
else{
    console.log("nota:", media, "aprovado")
}

//  ex 7 botao HTML ** poxa esse verde ferrou a estética rosa :(
const btn = document.getElementById("btn");
    btn.addEventListener('click', function(){
        document.body.style.backgroundColor = "green";
    })

//  ex 8 abrindo uma div ao passar o mouse 
const txt = document.getElementById("texto")

txt.addEventListener("mouseover", function(){
    txt.innerHTML = "OI!";
    txt.style.backgroundColor = "#E4D0D0"
    txt.style.color = "#867070"
})

//  ex 9 eventos ao passar o mouse
const box = document.getElementById("box")
box.addEventListener("mouseover", function(){
    box.innerHTML === 'olá' ? 'tchau' : 'olá';
    box.style.backgroundColor = "yellow"
})

box.addEventListener("mouseout", function(){
    box.innerHTML === 'tchau' ? 'tchau' : 'olá';
    box.style.backgroundColor = "green";
})
// n foi direito :(((