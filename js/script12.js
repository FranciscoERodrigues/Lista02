let codigo = parseInt(prompt("Digite o código do produto:"));
let quantidade = parseInt(prompt("Digite a quantidade:"));
let preco;

switch(codigo) {
    case 1:
        preco = 10;
        break;
    case 2:
        preco = 15;
        break;
    case 3:
        preco = 20;
        break;
    default:
        preco = 0;
        alert("Produto inválido");
}

let total = preco * quantidade;
alert("Valor total a pagar: R$ " + total);