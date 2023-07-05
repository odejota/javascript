var prompt = require('prompt-sync');
var prompt = prompt();

// O programa terá um menu de opções que será executado enquanto a opção
// digitada for diferente de 3.
//
// - Opção I: O programa irá pedir 2 números e dar o resultado da potenciação,
//   do primeiro número elevado ao segundo;
// - Opção II: O programa irá pedir um número e dirá se é par ou ímpar;
// - Opção III: Finalizar programa.

// -- operador de potenciação: ** --

console.log('\nOlá!\n\nPor favor, escolha uma das seguintes opções:');

do {
    console.log('\n••••••••••| MENU |••••••••••');
    console.log('\n1. Cálculo de potenciação');
    console.log('2. Análise de par ou ímpar');
    console.log('3. Encerrar\n');

    var opt = prompt('Opção escolhida: ');

    if (opt == 1) {

        console.log('\n••••••••••| POTENCIAÇÃO |••••••••••');
        console.log('\nPor favor, informe dois números.');

        var n1 = prompt('1º número: ');
        var n2 = prompt('2º número: ');

        var ptc = n1 ** n2;

        console.log('\nO cálculo de potenciação dos números informados é ' + ptc + '.\n');
        console.log('\n••••••••••••••••••••••••••••••');
        console.log('\nVoltando ao menu de opções...');
        console.log('\n••••••••••••••••••••••••••••••');

    } else if (opt == 2) {

        console.log('\n••••••••••| ANÁLISE DE PAR OU ÍMPAR |••••••••••');
        console.log('\nPor favor, informe um número e saiba se é par ou ímpar:');
        var n = prompt();

        if (n % 2 == 0) {
            console.log('\nEste número é par!\n');
            console.log('\n••••••••••••••••••••••••••••••');
            console.log('\nVoltando ao menu de opções...');
            console.log('\n••••••••••••••••••••••••••••••');
        } else {
            console.log('\nEste número é ímpar!\n');
            console.log('\n••••••••••••••••••••••••••••••');
            console.log('\nVoltando ao menu de opções...');
            console.log('\n••••••••••••••••••••••••••••••');
        }

    } else if (opt == 3) {

        console.log('\nPrograma encerrado.\nVolte sempre!\n');
    
    } else {

        console.log('\nOpção inválida. Tente novamente!\n');

    }
} while (opt != 3);