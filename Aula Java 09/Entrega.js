//QUESTÃO 1 E 2

let Jogos = ['The last of us', 'Resident evil 4', 'Minecraft', 'GTA 5', 'Fortnite']

Jogos.forEach ((jogo, id, listegames) => {
console.log(`Games maneiros: ${jogo}`);
console.log(`Numero do game: ${id}`);
console.log(`Todos os games: ${listegames}`);

console.log(`-----------------------------------------`);
})

//QUESTÃO 3

const Numero = [1, 2, 3, 4, 5];

const doubled = Numero.map(num => num * 2);

console.log(doubled);

console.log('----------------------------------');

//QUESTÃO 4

let idade = [12, 2, 22, 8]

let games = idade.filter((idade)=>{
    return idade > 8
})
console.log(idade);
console.log(games);

console.log('---------------------------------');

//QUETÃO 5

let Fruta = ['apple', 'banana', 'orange', 'kiwi']

Fruta.forEach ((elemento, index, listacompleta) => {
    console.log(`Essa fruta é ${elemento}`);
    console.log(`Posição desta fruta ${index}`);
    console.log(`Lista ${listacompleta}`);
    console.log('--------------------------------');
})

//QUETÃO 6

let idades = [16, 48, 23, 22, 45, 8, 12];

let IdadeMaior = idades.filter(idade => idade >= 18);

console.log(IdadeMaior);

IdadeMaior.forEach(idade => {
    console.log(`Sua idade é: ${idade}`);
});

    