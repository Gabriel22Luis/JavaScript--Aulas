let Saldo = 600
let ensolarado = false
//se saldo maior que 1500 e ensolarado
if(Saldo >= 1600 && ensolarado){
    console.log("VAMO PRA PRAIA CARALHO");
}
//se saldo maior que 1500 ou ensolarado
else if(Saldo >= 1500 || ensolarado == true){
    console.log("Ah, vamos lá né");
}
//Se o saldo for menor ou igual a 500, mas se etiver ensolarado
else if (Saldo >= 500){
    console.log("Ta sol mesmo, vamos lá");
}