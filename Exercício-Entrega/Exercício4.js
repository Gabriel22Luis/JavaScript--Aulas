let peso = parseFloat(prompt(`Qual seu peso`));
let altura = parseFloat(prompt(`Qual sua altura`));
let imc = peso / (altura * altura);

if(imc >= 18.6 && imc < 24.8) {
    alert(`Está Saudável\nSeu IMC: ${imc.toFixed(2)}`);
}

else {
    alert(`Não está saudável\nSeu IMC: ${imc.toFixed(2)}`);
}