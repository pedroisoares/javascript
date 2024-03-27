const prompt = require("prompt-sync")()      // adiciona pacote para entrada de dados
const num1 = Number(prompt("1º Número: "))   // lê os números
const num2 = Number(prompt("2º Número: "))

function soma(a,b) {
    return a+b;
}

console.log(`Soma é: ${soma(num1,num2)}`)               // exibe o resultado