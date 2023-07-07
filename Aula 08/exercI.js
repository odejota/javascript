const entrada = document.querySelector('#medida');
const de = document.querySelector('#de');
const para = document.querySelector('#para');
const botao = document.querySelector('.btn');
const saida = document.querySelector('#resultado');
const msg = document.querySelector('#msg');

botao.addEventListener('click', conversor);

function conversor() {
    const valorDe = de.value;
    const valorPara = para.value;

    if(valorDe == valorPara) {
        saida.value = entrada.value
        msg.textContent = '';
        return; 
    }

    let metros;

    switch(valorDe) {
        case 'mm':
            metros = entrada.value / 1000;
            break;
        case 'cm':
            metros = entrada.value / 100;
            break;
        case 'm':
            metros = entrada.value;
            break;
        case 'km':
            metros = entrada.value * 1000;
            break;
    }

    let resultado;

    switch(valorPara) {
        case 'mm':
            resultado = metros * 1000;
            break;
        case 'cm':
            resultado = metros * 100;
            break;
        case 'm':
            resultado = metros;
            break;
        case 'km':
            resultado = metros / 1000;
            break;
    }

    saida.value = resultado;

    const deOpcao = document.querySelector('#de').options;
    const deIndex = document.querySelector('#de').selectedIndex;

    const paraOpcao = document.querySelector('#para').options;
    const paraIndex = document.querySelector('#para').selectedIndex;

    msg.textContent = entrada.value + ' ' + deOpcao[deIndex].text + ' equivalem a ' + resultado + ' ' + paraOpcao[paraIndex].text + '.';
}