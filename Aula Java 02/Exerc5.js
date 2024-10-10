        //Peça ao usuário para inserir dois números. Utilize operadores aritméticos para calcular a soma, a subtração, a multiplicação e a divisão desses números.

        let num1, num2

        num1 = Number(prompt(`Qual o 1º número: `))

        num2 = Number(prompt(`Qual o 2º número: `))
        
        alert(`O calculo da soma, subtração, multiplicação e divisão é: `)
        
        alert(`Soma: ${num1 + num2}. \nSubtração: ${num1 - num2}. \nMultiplicação: ${num1 * num2}. \nDivisão: ${num1 / num2}`)