var prompt = require('prompt-sync')();

console.log('Olá eu sou o POKEDEX seja bem vindo! Vamos testar seu conhecimentos sobre POKEMONS! Após um longo tempo em sua jornada procurando novos POKEMONS e batalhando com amigos e metres de ginásios, preciso que responda a essas 5 perguntas para saber se é um verdadeiro mestre POKEMON! ');

console.log('---------------------------------')

let question = prompt('Na sua jornada capturou um POKEMON tipo sombrio? ');
let question1 = prompt('Viu um POKEMON raro? ')
let question2 = prompt('Conseguiu alguma insgnia no ginasio de KANTO? ')
let question3 = prompt('Você tem um Picachu? ')
let question4 = prompt('Os POKEMONS terrestres tem vantagem sobre os POKEMONS eletricos? ')
while (question,question1,question2,question3,question4){
    question++;

    if (question === "sim"|| question === "nao"){
        continue;
    }
 else if("sim" === 0){
    console.log('Voçê falha miseravalmente.');
} else if("sim" <=2){
    console.log('Você falha, mas ainda consegue fugir da situação.');
} else if("sim" === 3){
    console.log('Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.');
} else if("sim" === 4){
    console.log('Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.');
} else{
    console.log('Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.');
} break
} 