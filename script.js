

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




let valor = Number(prompt("Digite o valor da compra:"));

if (valor > 100) {
    let desconto = valor * 0.10;
    let valorFinal = valor - desconto;
    alert("Valor com desconto: R$ " + valorFinal);
} else {
    alert("Valor normal: R$ " + valor);
}


// usuário senha



let usuario = prompt("Digite o nome de usuário:");
let senha = prompt("Digite a senha:");

if (usuario === "admin" && senha === "1234") {
    alert("Login bem-sucedido");
} else {
    alert("Acesso negado");
}


// AVANÇADO

// VALOR FRETE

let valorCompra = Number(prompt("Digite o valor da compra:"));

if (valorCompra >= 100) {
    alert("Frete grátis");
} else if (valorCompra >= 50) {
    alert("Frete: R$ 10,00");
} else {
    alert("Frete: R$ 20,00");
}


// CONVITE E IDADE

let idade = Number(prompt("Digite sua idade:"));
let temConvite = prompt("Você tem convite? (sim/nao)") === "sim";

if (idade >= 18 || temConvite) {
    alert("Pode entrar");
} else {
    alert("Barrado");
}



// NOTAS EM CONCEITOS

let nota = Number(prompt("Digite a nota (0-100):"));

if (nota >= 90) {
    alert("Conceito: A");
} else if (nota >= 80) {
    alert("Conceito: B");
} else if (nota >= 70) {
    alert("Conceito: C");
} else if (nota >= 60) {
    alert("Conceito: D");
} else {
    alert("Conceito: F");
}



// IMC

let peso = Number(prompt("Digite seu peso (kg):"));
let altura = Number(prompt("Digite sua altura (ex: 1.75):"));

let imc = peso / (altura * altura);

if (imc < 18.5) {
    alert("Abaixo do peso");
} else if (imc < 25) {
    alert("Peso normal");
} else if (imc < 30) {
    alert("Sobrepeso");
} else {
    alert("Obesidade");
}



// ESTOQUE

let estoque = Number(prompt("Digite a quantidade em estoque:"));

if (estoque >= 10) {
    alert("Produto disponível");
} else if (estoque >= 1) {
    alert("Últimas unidades");
} else {
    alert("Esgotado");
}