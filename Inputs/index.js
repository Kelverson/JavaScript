/*
// Iniciando com inputs  
import entradaDados from 'readline-sync';

let nome = entradaDados.question('Digite seu nome: ');
console.log("Olá, " + nome)
*/

/*
// Iniciando com números
import entradaDados from 'readline-sync'

console.log('Calculadora de soma entre x e y: \n')

let x = entradaDados.question("Informe o número de x: ")
let y = entradaDados.question("Informe o número de y: ")


let soma = Number(x) + Number(y)

console.log(soma)
*/

/*
import entradaDados from 'readline-sync'

console.log('Conversor de milhas para quilometros: \n')

let mi = entradaDados.question("Informe o valor de milhas: ")

let km = mi / 0.62137;

console.log(mi+ 'mi equivale a ' + km +'km')
*/

/*
import entradaDados from 'readline-sync'

console.log('Conversor de Celsius para Kelvin: \n')

let c = entradaDados.question("Informe o valor de Celsius: ")

let k = Number(c) + 273.15;

console.log(c+ '°C Celsius equivale a ' + k +' Kelvin')
*/

import entradaDados from 'readline-sync'

console.log('Área do triangulo: \n')

let base = entradaDados.question("Informe o valor de Base: ")
let altura = entradaDados.question("Informe o valor de Altura: ")

let area = (base*altura)/2;

console.log('A área do triangulo é: ' + area)