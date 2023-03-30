// Exercício 1
// Como declarar uma variável com valor undefined em JavaScript?Exemplifique e demonstre a saída do valor da variável!
let nome = undefined; // Pode-se não adicionar "undefined" ou apenas não atribuir um valor.
console.log(nome); // Aparecerá: undefined.


// Exercício 2
// Como usar o operador % em JavaScript? Exemplifique e demonstre a saída!
// O operador % é o operador de resto ou módulo, que retorna o resto da divisão entre dois números.
let a = 10;
let b = 3;

let resultado = a % b;
console.log(resultado); // Aparecerá: 1
//Neste exemplo é demonstrado a divisão entre 10 e 3, onde é mostrado o resto dá divisão, que é 1.


// Exercício 3
/* 
 * Escreva  um  programa  que  calcula  o  índice  de  massa  corporal  (IMC)  de  uma  pessoa  e  exibe  uma
 * mensagem indicando se ela está abaixo, no peso ideal ou acima do peso. Considere as seguintes faixas de 
 * IMC:  abaixo  de  18,5  (abaixo  do  peso),  entre18,5  e  24,9  (peso  ideal)  e  acima  de  24,9  (acima  do  peso).
 * Exemplifique e demonstre a saída!
*/
let imc = 20

if(imc < 18.5) {
    console.log("abaixo  do  peso")
}else if(imc >= 18.5 && imc <= 24.9){
    console.log("peso ideal")
}else{
    console.log("Acima do peso")
}


// Exercício 4
/*
 * Faça um programa que receba idade de uma pessoa e exiba uma mensagem indicando em qual faixa
 * etária ela se encontra: criança (até 12 anos), adolescente (entre 13 e 18 anos), adulto (entre 19 e60 anos)
 * ou idoso (mais de 60 anos).Exemplifique e demonstre a saída
*/
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
/*
 * Crie um programa que receba um nome de usuário e uma senha e verifique se eles correspondem aos 
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


// Exercício 6
/*
 * Vamos criar um programa que calcule a média de 7 notas e exiba uma mensagem indicando se o aluno
 * foi aprovado ou reprovado. Considere que a média mínima para aprovação é 6.Exemplifique e demonstre
 * a saída!
 */
let nota1 = 6
let nota2 = 5
let nota3 = 8
let nota4 = 8
let nota5 = 5
let nota6 = 6
let nota7 = 7

let media = (nota1 + nota2 + nota3 + nota4 + nota5 +nota6 + nota7) / 7

if(media < 6){
    console.log("Reprovado")
}else{
    console.log("Aprovado")
}


// Exercício 7
/*
 * Crie um botão em HTML e utilize o evento de clique em Javascript para alterar a cor de fundo da página
 * para verde. Para isso, utilize o código document.body.style.backgroundColor = 'green';dentro da função
 * do evento de clique.Exemplifique e demonstre a saída!
 */
const botao = document.getElementById('btn-alterar-cor');

 botao.addEventListener('click', () => {
   
   document.body.style.backgroundColor = 'green';
 });


 // Exercício 8
/*
 * Crie um programa em Javascript que contenha um evento em que, ao passar o mouse sobre uma div,
 * o texto e a cor de fundo da div são alterados. O aluno deverá criar a estrutura do evento e declarar o id da
 * div no HTML. Dica: para alterar o texto e a cor de fundo da div, utilize o método innerHTML para modificar 
 * o  conteúdo  da  div  e  a  propriedade  style.backgroundColor  para  alterar  a  cor  de  fundo. Exemplifique  e
 * demonstre a saída!
 */
 const divExemplo = document.querySelector('#div-exemplo');
 divExemplo.addEventListener('mouseover', () => {
      divExemplo.innerHTML = 'Mouse passou por cima';
      divExemplo.style.backgroundColor = 'green';
  });
  divExemplo.addEventListener('mouseout', () => {
      divExemplo.innerHTML = 'Passe o mouse aqui';
     divExemplo.style.backgroundColor = 'blue';
  });


// Exercício 9
/*
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