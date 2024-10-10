let nota1, nota2, media
nota1 = number (prompt (`Qual foi sua primeira nota`))
nota2 = number (prompt (`Qual foi sua segunda nota`))

media = (nota1 + nota2) /2

let res = media => 8 ? `Aprovado` : `reprovado`

alert (`você está ${res}`)