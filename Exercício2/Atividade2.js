let idade = 0

do{
    idade = parseInt(prompt("insira sua idade (maior que 0)"))

} while (idade <= 0 ||  isNaN(idade))
console.log(`idade valida :` +idade);