let idade = parseInt(prompt("Digite sua idade:"));
let sexo = prompt("Digite seu sexo (M/F):").toUpperCase();

if ((sexo === "M" && idade >= 65) || (sexo === "F" && idade >= 60)) {
    alert("Você pode se aposentar.");
} else {
    alert("Você não pode se aposentar.");
}