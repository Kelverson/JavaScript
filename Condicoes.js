let meteoros_trimestre_um     =  "Alfa Centaurideos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02\nPi Pupídeos começa em 25/03 e termina em 29/03";

let meteoros_trimestre_dois   =  "Líridas começa em 23/05 e termina em 26/05\nEta Aquáridas começa em 31/05 e termina em 02/06\nBootídeos de Junho começa em 16/06 e termina em 20/06";

let meteoros_trimestre_tres   =  "Eta Líridas começa em 19/08 e termina em 22/08\nAlfa Capricornídeos começa em 13/09 e termina em 17/09";

let meteoros_trimestre_quatro =  "Delta Aquáridas do Sul começa em 11/10 e termina em 15/10\nPiscis Austrinídeos começa em 04/12 e termina em 08/12\nPerseidas começa em 27/12 e termina em 31/12";

let data_atual = new Date();
let mes_atual = data_atual.getMonth();

/* if(mes_atual == 0 || mes_atual == 1 || mes_atual == 2 ){
    console.log("As chuvas de meteoros do primeiro trimestre são:\n" + meteoros_trimestre_um )
}
if(mes_atual == 3 || mes_atual == 4 || mes_atual == 5 ){
    console.log("As chuvas de meteoros do primeiro trimestre são:\n" + meteoros_trimestre_dois )
}
if(mes_atual == 6 || mes_atual == 7 || mes_atual == 8 ){
    console.log("As chuvas de meteoros do primeiro trimestre são:\n" + meteoros_trimestre_tres )
}
if(mes_atual == 9 || mes_atual == 10 || mes_atual == 11 ){
    console.log("As chuvas de meteoros do primeiro trimestre são:\n" + meteoros_trimestre_quatro )
}
else{
    console.log("Nenhuma chuva de meteoro no período informado");
}
*/

/*
var local = 2;

switch (local)
{
    case 1:
        console.log("Praia");
        break;
    case 2:
        console.log("Campo");
        break;
    case 3:
        console.log("Em casa");
        break;
}
*/

/*
let resultado = true;
let msg = "";

msg = (resultado) ? "Classificado" : false;
console.log(msg);
*/

/*
let resultado = false;
let msg = "";

msg = resultado && "Classificado";
console.log(msg);
*/

let resultado = true;
let msg = "";

msg = resultado && "Classificado";
//console.log(msg);


var encontrado = false

let retorno = encontrado&&"Item encontrado"

console.log(retorno)