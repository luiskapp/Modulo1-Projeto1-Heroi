var prompt = require('prompt-sync')();

console.log('Olá eu sou o POKEDEX seja bem vindo! Vamos testar seu conhecimentos sobre POKEMONS! Após um longo tempo em sua jornada procurando novos POKEMONS e batalhando com amigos e metres de ginásios, preciso que responda a essas 5 perguntas para saber se é um verdadeiro mestre POKEMON! ');

console.log('---------------------------------')

let question = prompt('Na sua jornada capturou um POKEMON tipo sombrio? ');
let question1 = prompt('Viu um POKEMON raro? ')
let question2 = prompt('Conseguiu alguma insgnia? ')
let question3 = prompt('Você tem um Picachu? ')
let question4 = prompt('Os POKEMONS terrestres tem vantagem sobre os POKEMONS eletricos? ')
while (question,question1,question2,question3,question4){
    question++;

    if (question === "sim"|| question === "nao"){
        continue;
    }
}

