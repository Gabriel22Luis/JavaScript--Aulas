let Carro = ['Celta', 'Fusca', 'Gol', 'Chevette']

let novosCarros = Carro.map((carro) => {
return carro.toLocaleLowerCase()
})
Carro.forEach ((Carro, numeração, todoscarros) => {
    console.log(`Nome do veiculo: ${Carro}`);
    console.log(`Numeração: ${numeração}`);
    console.log(`Todos os carros: ${todoscarros}`);
    console.log(novosCarros);
    console.log(novosCarros[numeração]);
    console.log(`---------------------------------`);
})
let novosCarros = 
let novosCarros = carro.filter