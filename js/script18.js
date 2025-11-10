let nome = prompt("Digite o nome do aluno:");
let turno = prompt("Digite o turno (M ou V):").toUpperCase();

if (turno === "M") {
    alert("Bom dia, " + nome);
} else if (turno === "V") {
    alert("Boa tarde, " + nome);
} else {
    alert("Turno inválido");
}