let readline = require("readline-sync");

// 1a ATIVIDADE - CRIAR FORMULÁRIO 

let nome = readline.question("Digite seu nome completo: ");
let idade = readline.question("Digite sua idade: ");
let endereco = readline.question("Onde voce mora: ");
let corPreferida = readline.question(" Qual sua cor preferida? ");
let escolaridade = readline.question("Qual seu grau de escolaridade? ");
let hobby = readline.question("Qual o seu hobby: ");
let filhos = readline.question("Voce tem filhos? se sim, quantos? caso nao, digite 0: ");

let numfilhos =parseInt(filhos);

if (isNaN(numfilhos)){
    console.log("Você não digitou um número válido para filhos.");    
}else if (numfilhos === 0){
    console.log("Você não tem filhos.");
}else if (numfilhos ===1){
    console.log("Você tem 1 filho.");
}else if (numfilhos >1){
    console.log(`Você tem ${numfilhos} filhos.`);
}else{
    console.log("Resposta inválida.");
}

console.log(`
------Resumo do Formulário ------

Nome:          ${nome}
Idade:         ${idade}
Endereço:      ${endereco}
Cor Preferida: 
`);