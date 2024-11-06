// media aluno:
// nota1 e nota2;

function calcularMedia(nota1 = 0, nota2 = 0) {
    let media = (nota1 + nota2) / 2
    return media `A média do aluno é:
 ${media}`
}
console.log(calcularMedia(6,9));