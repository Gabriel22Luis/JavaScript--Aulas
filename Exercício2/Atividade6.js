
let numeroSorteado = Math.floor(Math.random() * 11);

let acertou = false; 

while (!acertou) {

    let palpite = prompt("Digite um número de 0 a 10:");

    palpite = parseInt(palpite);

    if (isNaN(palpite) || palpite < 0 || palpite > 10) {
        alert("Por favor, digite um número válido entre 0 e 10.");
    } else if (palpite === numeroSorteado) {

        alert("Parabéns, você acertou!");
        acertou = true; 
    } else {
   
        alert("Tente novamente.");
    }
}
