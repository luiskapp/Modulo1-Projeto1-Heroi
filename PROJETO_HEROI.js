var prompt = require('prompt-sync')();

var sim = 0;
var s = "sim";

console.log('Olá eu sou o POKEDEX seja bem vindo! Após um longo tempo em sua aventura para se tornar um mestre Pokémon, com seu amigos que o acompanharam durannte diversas batalhas nessa jornada que foi passando por varias regiões da cidade de Kanto.  Preciso que responda a essas 5 perguntas para saber se é um verdadeiro mestre Pokémon! Responda com sim ou nao.');

console.log('--------------------------------------------------------------');

const pergunta = prompt('Na sua jornada capturou um POKEMON tipo sombrio? ');
if (pergunta == s){
    sim++
} 
const pergunta1 = prompt('Viu um POKEMON raro? ');
if (pergunta1 == s){
    sim++
} 
const pergunta2 = prompt('Conseguiu alguma insgnia em algum ginasio de KANTO? ');
if (pergunta2 == s){
    sim++
} 

const pergunta3 = prompt('Você tem um Picachu? ');
if (pergunta3 == s){
    sim++
} 
const pergunta4 = prompt('Os POKEMONS terrestres tem vantagem sobre os POKEMONS eletricos? ');
if (pergunta4 == s){
    sim++
} 

if (sim == 0){
    console.log('Você falha miseravelmente.')
} else if (sim <=2){
    console.log('Você falha, mas ainda consegue fugir da situação.')
} else if (sim == 3){
    console.log('Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.')
} else if (sim == 4){
    console.log('Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.')
} else {
    console.log('Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.')
}