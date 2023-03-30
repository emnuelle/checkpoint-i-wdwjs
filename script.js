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

/** Exercicio 4 
 * Faça um programa que receba idade de uma pessoa e exiba uma mensagem indicando em qual faixa
 * etária ela se encontra: criança (até 12 anos), adolescente (entre 13 e 18 anos), adulto (entre 19 e60 anos)
 * ou idoso (mais de 60 anos).Exemplifique e demonstre a saída
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
 * Crie um programa que recebaum nome de usuário e uma senha e verifique se eles correspondem aos 
 * dados de um usuário cadastrado. Considere que o usuário cadastrado possui nome de usuário "admin" e
 * senha "1234". O programa deve exibir uma mensagem indicando se o login foi realizado com sucesso ou 
 * se houve falha de autenticação.Exemplifique e demonstre a saída!
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
 * foi aprovado ou reprovado. Considere que a média mínima para aprovação é 6.Exemplifique e demonstre
 * a saída!
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
 * do evento de clique.Exemplifique e demonstre a saída!
 */

const btn = document.getElementById("btn");

    btn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
});

/**Exercicio 8
 * Crie um programa em Javascript que contenha um evento em que, ao passar o mouse sobre uma div,
 * o texto e a cor de fundo da div são alterados. O aluno deverá criar a estrutura do evento e declarar o id da
 * div no HTML. Dica: para alterar o texto e a cor de fundo da div, utilize o método innerHTML para modificar 
 * o  conteúdo  da  div  e  a  propriedade  style.backgroundColor  para  alterar  a  cor  de  fundo. Exemplifique  e
 * demonstre a saída!
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
 * qual conteúdo deve ser exibido e qual cor de fundo deve ser aplicada. Exemplifique e demonstre a saída!
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


