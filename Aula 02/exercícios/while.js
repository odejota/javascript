var prompt = require('prompt-sync');
var prompt = prompt();

// Usuário digita 3 notas de 0 a 10. O programa retorna uma resposta dizendo a média
// e se está aprovado ou reprovado, sendo:
//
// - Aprovado: média >= 6
// - Reprovado: média < 6
//
// -- Enquanto a nota < 0 ou > 10, continue pedindo --

console.log('Olá!\nPara saber sua média, por favor, informe suas 3 notas:\n');

do {
    var n1 = prompt('Informe a 1ª nota: ');
} while (n1 < 0 || n1 > 10);

do {
    var n2 = prompt('Informe a 2ª nota: ');
} while (n2 < 0 || n2 > 10);

do {
    var n3 = prompt('Informe a 3ª nota: ');
} while (n3 < 0 || n3 > 10);

var media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;

if (media >= 6) {
    console.log('\nSua média é ' + media + '. Você foi aprovado!\n');
} else {
    console.log('\nSua média é ' + media + '. Você não foi aprovado.\n');
}