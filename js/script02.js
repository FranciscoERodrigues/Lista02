let nome1 = prompt("Digite o nome da primeira pessoa:");
let idade1 = parseInt(prompt("Digite a idade de " + nome1 + ":"));

let nome2 = prompt("Digite o nome da segunda pessoa:");
let idade2 = parseInt(prompt("Digite a idade de " + nome2 + ":"));


if (idade1 > idade2) {
    alert(nome1 + " é mais velho que " + nome2 + ".");
} else if (idade2 > idade1) {
    alert(nome2 + " é mais velho que " + nome1 + ".");
} else {
    alert(nome1 + " e " + nome2 + " têm a mesma idade.");
}