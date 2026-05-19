

let idade = prompt("Digite sua idade:");

if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}



let numero = prompt("Digite um número:");

if (numero > 0) {
    alert("O número é positivo");
} else {
    alert("O número é negativo");
}


let nota = prompt("Digite a nota (0 a 100):");

if (nota >= 60) {
    alert("Aprovado");
} else {
    alert("Reprovado");
}


let numero = prompt("Digite um número:");

if (numero > 0) {
    alert("O número é positivo");
} else if (numero < 0) {
    alert("O número é negativo");
} else {
    alert("O número é zero");
}



let idade = prompt("Digite sua idade:");

if (idade <= 12) {
    alert("Criança");
} else if (idade <= 17) {
    alert("Adolescente");
} else {
    alert("Adulto");
}




let numero = prompt("Digite um número:");

if (numero % 2 === 0) {
    alert("O número é par");
} else {
    alert("O número é ímpar");
}




// CALCULADORA


let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação (+, -, *, /):");
let resultado;

if (operacao === "+") {
    resultado = n1 + n2;
} else if (operacao === "-") {
    resultado = n1 - n2;
} else if (operacao === "*") {
    resultado = n1 * n2;
} else if (operacao === "/") {
    resultado = n1 / n2;
} else {
    resultado = "Operação inválida";
}

alert("Resultado: " + resultado);






