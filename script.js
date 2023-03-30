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
let login = "admin"
let senha = "1234"

if(login == "admin" && senha == "1234"){
    console.log("O login foi realizado")
}else{
    console.log("Falha de autenticação")
}


// Exercício 6
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
const botao = document.getElementById('btn-alterar-cor');

 botao.addEventListener('click', () => {
   
   document.body.style.backgroundColor = 'green';
 });


 // Exercício 8
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
  const box = document.getElementById("box")

box.addEventListener("mouseover",function(){
    box.innerHTML === 'Olá' ? 'Tchau' : 'Olá';
    box.style.backgroundColor = "yellow"
})

box.addEventListener("mouseout",function(){
    box.innerHTML === 'Tchau' ? 'Tchau' : 'Olá';
    box.style.backgroundColor = "green"
})