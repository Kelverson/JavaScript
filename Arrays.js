/*
var notas_bimestre = [
    7,6,8,5
];

var total_notas = 4;

var soma_notas = notas_bimestre[0] + notas_bimestre[1] + notas_bimestre[2] + notas_bimestre[3]

var media_aluno = soma_notas / total_notas;

console.log("Média do aluno: "+media_aluno);
*/

/*
var disciplinas = [
    "Português",    // índice 0
    "Matemática",   // índice 1
    "História",     // índice 2
    "Geografia",    // índice 3
    "Química",      // índice 4
    "Física",       // índice 5
    "Inglês"        // índice 6
];

disciplinas[6] = "Francês";

console.log(disciplinas);

*/

/*
var funcionarios = [
    "Bárbara",
    "Carlos",
    "Helena",
    "Maria",
    "Rogério"
];

console.log(funcionarios);

// [ 'Bárbara', 'Carlos', 'Helena', 'Maria', 'Rogério' ]

var novos_funcionarios = [
    "Guilherme",
    "Jéssica"
];

funcionarios[0] = novos_funcionarios[1];
funcionarios[4] = novos_funcionarios[0];

console.log(funcionarios);

// [ 'Jéssica', 'Carlos', 'Helena', 'Maria', 'Guilherme' ]
*/

/*
var signos = [
    "Áries",
    "Touro",
    "Gêmeos",
    "Câncer",
    "Leão",
    "Virgem",
    "Libra",
    "Escorpião",
    "Sagitário",
    "Capricórnio",
    "Aquário",
    "Peixes"
];

console.log(signos.length); // 12
*/

/*
var times_rj = [
    "Botafogo",
    "Flamengo",
    "Fluminense",
    "Vasco",
    "Volta Redonda"
];

var total_times_rj = times_rj.length;

console.log("Total de Times: " + total_times_rj);

// Total de Times: 5


var times_sp = [
    "Bragantino",
    "Corinthians",
    "Palmeiras",
    "Ponte Preta",
    "São Paulo",
    "Santos"
];

var total_times_sp = times_sp.length;

console.log("Total de Times: " + total_times_sp);

// Total de Times: 6

*/

var frases_do_dia = [
    "Sorte é o resultado de muito esforço, trabalho e dedicação",
    "Imagine uma nova história para sua vida e acredite nela",
    "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo",
    "Se existe uma forma de fazer melhor, descubra-a",
    "Seja a mudança que você deseja ver no mundo.",
    "Um objetivo nada mais é do que um sonho com limite de tempo",
    "Você precisa fazer aquilo que pensa que não é capaz de fazer",
    "A persistência é o caminho do êxito.",
    "Concentre-se naquilo que você é bom, delegue todo o resto",
    "A amizade duplica as alegrias e divide as tristezas",
    "O que quer que você lute, você fortalece, e o que você resiste, persiste",
    "Lembre-se: sua verdadeira força, vem de dentro",
    "Nada acontece a menos que sonhemos antes",
    "Para quem ama, qualquer sacrifício é alegria",
    "A paz é a única forma de nos sentirmos realmente humanos",
    "Não existe um caminho para a felicidade. A felicidade é o caminho",
    "O amor é a alegria acompanhada da ideia de uma causa exterior",
    "A criatividade é ilimitada, pois a arte só precisa de motivação",
    "Fé, duas letras que podem mudar sua vida, acredite",
    "Que a vontade de vencer seja minha maior motivação",
    "Nunca subestime o poder de sua visão para mudar o seu mundo",
    "Não coloque limites em seus sonhos. Coloque fé",
    "Tenho certeza de que se eu sorrisse menos teria menos amigos",
    "Não espere por uma crise para descobrir o que é importante em sua vida",
    "Quem sorri sem parar não é alegre, é falso",
    "A alegria de fazer o bem é a única felicidade verdadeira",
    "A alegria evita mil males e prolonga a vida",
    "Coloque fé onde falta coragem",
    "Levanta, sacode a poeira e dá a volta por cima",
    "O que vale a pena possuir, vale a pena esperar",
    "A esperança é o sonho do homem acordado"
];

var data_atual = new Date();
var numero_escolhido = data_atual.getDate();

console.log("Número sorteado: "+ numero_escolhido);

var frases_do_dia = frases_do_dia[numero_escolhido];

console.log("Frase do dia");
console.log("Messagem: "+frases_do_dia)

/*
console.log(5 + null);

console.log(null + false);

console.log(true + null);
*/

/*
var numero_1 = 10;
var numero_2 = 15;

numero_1 += numero_2;

console.log( numero_1 >= numero_2 );
*/
/*
console.log(false + false);

console.log(null + null);
*/

/*
var signos = [
    "áries",
    "touro",
    "gêmeos",
    "câncer",
    "leão",
    "virgem",
    "libra",
    "escorpião",
    "sagitário",
    "capricórnio",
    "aquário",
    "peixes"
];

console.log(signos[8]);

console.log(signos[11]);

console.log(signos[1]);
*/

/*
var nome = null;
console.log(nome.length);
*/

var numero_1 = 7;
var numero_2 = 3;
var numero_3 = 5;

var resultado = ( numero_3 - numero_2 ) * numero_1;

console.log(resultado);