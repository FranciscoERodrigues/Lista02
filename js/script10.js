let numero01 = parseInt(prompt("Digite um numero:"))
let numero02 = parseInt(prompt("Digite segundo numero:"))
let numero03 = parseInt(prompt("Digite terceiro numero:"))

if(numero01 < numero02 && numero01 < numero03 ){
 if (numero02 > numero03 ){
    alert(numero01 + " " + numero03 + " " + numero02)
 }else{

    alert(" A sequência é " + numero01 + " " + numero02+" " + numero03)
 }
}

if(numero02 < numero01 && numero02 < numero03 ){
 if (numero01 > numero03 ){
    alert(numero02 + " " + numero03 + " " + numero01)
 }else{
    alert(" A sequência é " + numero02 + " " + numero01+" " + numero03)
 }
}

if(numero03 < numero01 && numero03 < numero02) {
    if (numero01 > numero02) {

        alert(numero03 + " " + numero02 + " " + numero01)

    }else{

            alert(" A sequência é " + numero03 + " " + numero01+" " + numero02)
    }
}





