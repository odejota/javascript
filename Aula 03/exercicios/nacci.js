var prompt = require('prompt-sync');
var prompt = prompt();

// Crie uma função encapsulada que peça para o usuário digitar um número
// e o programa irá imprimir na tela a Sequência Fibonacci com o número de
// etapas que o usuário digitou.
//
// Ex.: usuário digitou 8, logo, 8 ciclos Fibonacci.
// A saída será: 0, 1, 2, 3, 5, 8, 13, 21

console.log('\nOlá!\n\nPor favor, informe um número para a Sequência Fibonacci:');
fibo();

function fibo() {
    var sqc = prompt('');
    console.log('\n')

    // var n = 0;
    // var n1 = 1;
    // var n2 = 0;
    // var i = 0;
    //
    // while(i < sqc) {
    //     console.log(n1 + ', ');
    //    
    //     n = n1 + n2;
    //     n2 = n1;
    //     n1 = n;
    //     i++;
    // }

    // Adaptação da solução do professor:

    let ult = 1;
    let penult = 0;
    let atual;

    console.log(0);

    for(i = 1; i <= sqc-1; i++) {
        atual = ult + penult;
        penult = ult;
        ult = atual;

        console.log(atual);
    }

    console.log('\n')
}