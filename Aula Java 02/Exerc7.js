        let altura = Number(prompt("Digite sua altura em metros:"));
        let peso = Number(prompt("Digite seu peso em quilos:"));
        let imc = peso / (altura * altura);
        alert(`Seu IMC é de ${imc.toFixed(2)}`)
