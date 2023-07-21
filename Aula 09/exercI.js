const num = document.querySelector('#numero');
const botao = document.querySelector('.btn');

const resultado = document.createTextNode('');

const li = document.createElement('li');
li.appendChild(resultado);

const tab = document.querySelector('#tabuada');
tab.appendChild(li);

botao.addEventListener('click', tabuada);

function tabuada() {
    for(let i=0; i <= 10; i++) {
        resultado = `${num} x ${i} = ${num * i}` 
    }

    console.log(resultado);
};