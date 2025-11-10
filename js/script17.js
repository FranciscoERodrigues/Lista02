let salarioMinimo = parseFloat(prompt("Digite o valor do salário mínimo:"));
let salarioFuncionario = parseFloat(prompt("Digite o salário do funcionário:"));

let qtdSalarios = salarioFuncionario / salarioMinimo;
alert("O funcionário recebe " + qtdSalarios.toFixed(2) + " salários mínimos.");