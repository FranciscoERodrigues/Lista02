let mes = prompt("Digite o nome do mês:")

if (mes == "Abril" || mes == "Junho" || mes == "Setembro" || mes == "Novembro") {

    alert("Esse mês tem somente 30 dias !")

} else if (mes == "Janeiro" || mes == "Março" || mes == "Maio" || mes == "Julho" || mes == "Agosto" || mes == "Outubro" || mes == "Dezembro"){

    alert ("Esse mês tem somente 31 dias ")

} else if( mes == "Fevereiro"){

    alert("Esse mês tem somente 28 dias (29 dias em ano bissexto). ")

}else{

    alert("Mês Incorreto !!")
}