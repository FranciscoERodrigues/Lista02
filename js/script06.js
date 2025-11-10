let nota1 = parseFloat(prompt("Digite a sua primeira nota:"))
let nota2 = parseFloat(prompt("Digite a sua segunda nota:"))
let nota3 = parseFloat(prompt("Digite a sua terceira nota:"))

let media = (nota1+nota2+nota3)/3

if (media < 7) {

    alert("Reprovado")

} else {

    alert("Aprovado")
}