let readline = require("readline-sync");
let nome = readline.question("Qual é o seu nome? ");
console.log("Prazer meu nome é",nome,"!")

let idade = readline.question("Digite seu ano de nascimento? ");
console.log("Meu ano de nascimento é", idade, "!")

let anopenal = 2025 - idade


if(anopenal>=18){
console.log("Cuidado com suas ações! Você tem idade penal!")
}else{
    console.log("Você não tem idade penal. Não pode ser preso.")
}