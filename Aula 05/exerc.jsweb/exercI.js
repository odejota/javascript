    //? Crie um input que informe se o número digitado é par ou ímpar.

    function parimpa() {
        let nmb = parseInt(document.getElementById('nmb').value);

        if(nmb % 2 == 0) {
            document.getElementById('result').value = 'par';
        } else {
            document.getElementById('result').value = 'ímpar';
        }
    };