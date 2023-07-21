// TODO: Criar uma página HTML que receba o vetor de objetos de produtos e imprima cada uma das propriedades e valores de cada um dos objetos.

const marca = document.querySelector('#marca');
const modelo = document.querySelector('#modelo');
const ano = document.querySelector('#ano');
const btn = document.querySelector('#btn');

// while (marca != '' && modelo != '' && ano != '') {
    btn.addEventListener('click', cadVeiculo);
// }
// else {
//     console.log('Dados nulos. Cadastro não criado.')
// };

function Veiculo(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
};

function cadVeiculo() {
    let cadVeiculo = new Veiculo(marca.value, modelo.value, ano.value);

    // console.log(cadVeiculo);

    let veiculosCadastrados = [];

    veiculosCadastrados.push(cadVeiculo);

    console.log(veiculosCadastrados);

    // for (let linha of veiculosCadastrados) {
    //     for (let info in linha) {
    //         // console.log(info, linha[info]);
    //         // infoCar = linha[info];

    //         const infoCar = document.createTextNode(linha[info]);

    //         const li = document.createElement('li');
    //         li.appendChild(infoCar);

    //         const ul = document.createElement('ul');
    //         ul.appendChild(li);

    //         const containerTab = document.querySelector('#containerTab');
    //         containerTab.appendChild(ul);
    //     };
    // };

    veiculosCadastrados.forEach(car => {
        const infoCar = document.createTextNode(`${car.brand} | ${car.model} | ${car.year}`);

        const li = document.createElement('li');
        li.appendChild(infoCar);

        const ul = document.createElement('ul');
        ul.appendChild(li);

        const containerTab = document.querySelector('#containerTab');
        containerTab.appendChild(ul);
    });
};