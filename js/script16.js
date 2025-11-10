let quantidade = parseInt(prompt("Digite a quantidade de maçãs:"));
let preco = quantidade < 12 ? 0.5 : 0.4;
let total = quantidade * preco;

alert("O valor total a pagar é: R$ " + total.toFixed(2));