let idade = parseInt(prompt("Digite sua idade:"));

if (idade >= 18 && idade <= 70) {
    alert("Voto obrigatório");
} else if ((idade >= 16 && idade < 18) || idade > 70) {
    alert("Voto facultativo");
} else {
    alert("Não pode votar");
}