var produto = {
    id: 9,
    nome: "Cafeteira Elétrica",
    valor: 99.00
};

//console.log(produto.id)
//console.log(produto.nome)
//console.log(produto.valor)


//===========================================================================================================================================================//
var usuario = {
    id: 2,
    nome: "Rafael Nogueira Lemos",
    idade: 17
};

/*
var atendeAClassificacaoEtaria = usuario.idade >= 18

if ( atendeAClassificacaoEtaria === true ) {

    console.log("O usuário ainda pode assistir o conteúdo");

} else {

    console.log("O usuário ainda não pode assistir o conteúdo");

}
*/

//===========================================================================================================================================================//
var colecao_disciplinas = [
    { id: 1, nome: "Português",     carga_horaria: 240 }, // índice 0
    { id: 2, nome: "Matemática",    carga_horaria: 220 }, // índice 1
    { id: 3, nome: "História",      carga_horaria: 160 }, // índice 2
    { id: 4, nome: "Geografia",     carga_horaria: 140 }, // índice 3
    { id: 5, nome: "Química",       carga_horaria: 160 }, // índice 4
    { id: 6, nome: "Física",        carga_horaria: 150 }, // índice 5
    { id: 7, nome: "Inglês",        carga_horaria: 120 }  // índice 6
];

//console.log( colecao_disciplinas[0].id ); // 1

//console.log( colecao_disciplinas[4].nome ); // Química

//console.log( colecao_disciplinas[6].carga_horaria ); // 120


//===========================================================================================================================================================//
var colecao_series_programacao = [
    { nome: "Breaking Bad",           horario: "21h",     sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
    { nome: "Fargo",                  horario: "22h",     sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
    { nome: "Lost",                   horario: "20h",     sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    { nome: "Prison Break",           horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
    { nome: "Black Mirror",           horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    { nome: "Pessoa de interesse ",   horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},
    { nome: "Dark",                   horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
];

var data_atual = new Date(); //guardando o valor da data atual em uma variável

var dia_semana = data_atual.getDay(); //getDay() retorna dia da semana com valores de 0 a 6,usamos o valor retornado para acessar um objeto da coleção

var serie_do_dia = colecao_series_programacao[dia_semana];

var nome_serie = serie_do_dia.nome;
var horario_serie = serie_do_dia.horario;
var sinopse_serie = serie_do_dia.sinopse;

//console.log("Hoje é dia de " + nome_serie + " às " + horario_serie);
//console.log("A seguir uma visão geral da série: " + sinopse_serie);

//===========================================================================================================================================================//

var curiosidades_chuck_norris = [
    {titulo: "Cuidados com a higiene bucal",    conteudo: "Chuck Norris usa arame farpado como fio dental."},
    {titulo: "Fórmula para maratonar séries",   conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos."},
    {titulo: "Suicida que não morre",           conteudo: "Chuck Norris foi homem-bomba 34 vezes."},
    {titulo: "Olhos que tudo veem",             conteudo: "Chuck Norris já viu o homem invisível."},
    {titulo: "Manipulando o tempo",             conteudo: "Chuck Norris não usa relógio. Ele decide que horas são."},
    {titulo: "Praticando esportes radicais",    conteudo: "Chuck Norris faz bungee jump sem corda."},
    {titulo: "Não vale chorar",                 conteudo: "Chuck Norris faz cebolas chorarem."},
    {titulo: "Tempero de fogo",                 conteudo: "Chuck Norris usa pólvora como tempero."},
    {titulo: "Extinção dos dinossauros",        conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma."},
    {titulo: "Contando sem parar",              conteudo: "Chuck Norris contou até o infinito. Duas vezes."},
];

var tamanho_colecao = curiosidades_chuck_norris.length;//OBTEMOS O TOTAL DE OBJETO DA COLEÇÃO E ARMAZENAMOS NA VARIÁVEL "tamanho_colecao"

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);//AQUI ESTAMOS USANDO DUAS FUNÇÕES: Math.floor() e Math.random()
// Math.floor() arredonda um número para baixo para o número inteiro mais próximo
// Math.random() retorna um número aleatório entre 0 e <1
// Math.random() Números que podem ser retornados 
// 0.92921 
// 0.65824
// 0.43913
// Math.random() Possíveis operações 
// 0.92921 * 10 = 9.2921
// 0.65824 * 10 = 6.5824
// 0.43913 * 10 = 4.3913
// Math.floor(Math.random() * tamanho_colecao), arredondando os possíveis resultados
// Math.floor(0.92921) = 9
// Math.floor(0.65824) = 6
// Math.floor(0.43913) = 4

// Dessa forma temos um número aleatório de 0 a 9
var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];

var titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.conteudo;

//console.log("CURIOSIDADE SOBRE CHUCK NORRIS");
//console.log("Título: " + titulo_curiosidade);
//console.log("Conteudo: " + conteudo_curiosidade);


var programadores = [
    { nome: "Ramon",    linguagem: "PHP" },
    { nome: "Mateus",   linguagem: "Python" },
    { nome: "Régis",    linguagem: "JavaScript" },
    { nome: "André",    linguagem: "Java" },
    { nome: "Josué",    linguagem: "C#" }
];

//console.log(programadores[4])
//console.log(programadores[2])

var numero_1 = 10;
var numero_2 = 6;
var numero_3 = 4;

//console.log( ++numero_1 <= (numero_3 + numero_2));

//var aprovado = false;
var aprovado = true;

//aprovado && console.log("Parabéns");

//console.log(aprovado);//se for false

const nome = "Camila"

//const nomeValido = nome.length > 0

nome.length > 0 && console.log(nome);

