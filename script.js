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

/** Exercicio 4 
 * Faça um programa que receba idade de uma pessoa e exiba uma mensagem indicando em qual faixa
 * etária ela se encontra
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
 * Crie um programa que receba um nome de usuário e uma senha e verifique se eles correspondem aos 
 * dados de um usuário cadastrado
 */

let login = "admin"
let senha = "1234"

if(login == "admin" && senha == "1234"){
    console.log("O login foi realizado")
}else{
    console.log("Falha de autenticação")
}

/**Exercicio 6
 * Vamos criar um programa que calcule a média de 7 notas e exiba uma mensagem indicando se o aluno
 * foi aprovado ou reprovado. 
 */

let nota1 = 7
let nota2 = 9
let nota3 = 8
let nota4 = 8
let nota5 = 4
let nota6 = 6
let nota7 = 7

let media = (nota1 + nota2 + nota3 + nota4 + nota5 +nota6 + nota7) / 7

if(media < 6){
    console.log("Reprovado")
}else{
    console.log("Aprovado")
}

/**Exercicio 7
 * Crie um botão em HTML e utilize o evento de clique em Javascript para alterar a cor de fundo da página
 * para verde. Para isso, utilize o código document.body.style.backgroundColor = 'green';dentro da função
 * do evento de clique.
 */

const btn = document.getElementById("btn");

    btn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
});

/**Exercicio 8
 * Crie um programa em Javascript que contenha um evento em que, ao passar o mouse sobre uma div,
 * o texto e a cor de fundo da div são alterados. O aluno deverá criar a estrutura do evento e declarar o id da
 * div no HTML. 
 */

const txt = document.getElementById("texto")

txt.addEventListener("mouseover",function(){

    txt.innerHTML = "NOVO TEXTO!";
    txt.style.backgroundColor = "grey"
    txt.style.color = "white"
})

/**
 * Exercicio 9
 * Crie eventos que  ao  passar  o  mouse  sobre  a  div  "box"e  ao  deixar  ela,  o  seu  conteúdo  seja trocado 
 * entre  "Olá"  e  "Tchau"  e  a  cor  de  fundo seja  alterada  entre  verde  e  amarelo(Você  já  tem  as  dicas  das 
 * questões anteriores que podem te auxiliar a resolver essa parte). Utilize o operador ternário para verificar 
 * qual conteúdo deve ser exibido e qual cor de fundo deve ser aplicada.
 */

const box = document.getElementById("box")
box.addEventListener("mouseover",function(){
    box.innerHTML === 'Olá' ? 'Tchau' : 'Olá';
    box.style.backgroundColor = "yellow"
})

box.addEventListener("mouseout",function(){
    box.innerHTML === 'Tchau' ? 'Tchau' : 'Olá';
    box.style.backgroundColor = "green"
})