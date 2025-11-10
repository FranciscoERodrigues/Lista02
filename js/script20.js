let n1 = parseFloat(prompt("Digite o primeiro número:"));
let n2 = parseFloat(prompt("Digite o segundo número:"));
let n3 = parseFloat(prompt("Digite o terceiro número:"));

let media = (n1 + n2 + n3) / 3;

if (media >= 7) {
    alert("Média: " + media.toFixed(2) + " - Aprovado");
} else {
    alert("Média: " + media.toFixed(2) + " - Reprovado");
}