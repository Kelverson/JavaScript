/*
let valor_produto = 500;

for ( let contador = 1; contador <= 5; contador++ )
{
    let valor_parcela = valor_produto / contador;
    console.log("Nº de parcelas: " + contador + " - Valor da parcela: R$" + valor_parcela.toFixed(2));
}
*/
/*
let numero = 3;
let contador = 0;

console.log("Tabuada de multiplicação - Nº " + numero);

while ( contador <= 10 ) {

    let resultado = numero * contador;

    console.log( numero + " x " + contador + " = " + resultado );

    contador++;

}
*/
// Tabuada de multiplicação - Nº 3
// 3 x 0 = 0
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30

/*
let capital_emprestado = 3000;
let taxa_juros = 0.02; // 2%

let contador = 1;
let parcelas_totais = 5;

while ( contador <= parcelas_totais ) {

    let numero_parcela = contador;

    let juros_emprestimo = capital_emprestado * taxa_juros * numero_parcela;

    console.log("A taxa de juros no período de " + numero_parcela + " mes(es) é de R$" + juros_emprestimo + ",00");

    contador++;

}
*/
/*
let numeros = [10, 5, 7, 8, 9, 6, 12, 4];

let total_impares = 0;
let total_pares = 0;

let contador = 0;

while ( contador < numeros.length ) {

    if( numeros[contador] % 2 == 0 ){
        total_pares++;
    } else {
        total_impares++;
    }

    contador++;

}

console.log(" O total de números ímpares é: " + total_impares);
console.log(" O total de números pares é: " + total_pares);

// O total de números ímpares é: 3
// O total de números pares é: 5
*/

let alunos = ["Diogo","Carlos","Danilo","Pedro","César"];

let contador = 0;

while ( contador < alunos.length ) {

    let aluno_nome = alunos[contador];

    console.log( "Aluno: " + aluno_nome );
    contador++;

}

// Aluno: Diogo
// Aluno: Carlos
// Aluno: Danilo
// Aluno: Pedro
// Aluno: César
