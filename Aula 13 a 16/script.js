// * 1. Criar uma página HTML que receba o vetor de objetos de produtos e imprima cada uma das propriedades e valores de cada um dos objetos.
// * 2. Atualizar um registro no array de objeto.
// * 3. Deletar um registro no array de objeto.

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

    veiculosCadastrados.push(cadVeiculo);

    console.log(veiculosCadastrados);

    limpar();
    listVeiculo();
};

let veiculosCadastrados = [];

const containerTab = document.querySelector('#containerTab');

function listVeiculo() {

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

        let indexVeiculoCad = veiculosCadastrados.indexOf(car);

        const li = document.createElement('li');
        li.appendChild(infoCar);

        li.innerHTML += ` <i class="bi bi-pencil-square" onclick="editVeiculo(${indexVeiculoCad})"></i> <i class="bi bi-trash3" onclick="delVeiculo(${indexVeiculoCad})"></i>`;

        const ul = document.createElement('ul');
        ul.appendChild(li);

        containerTab.appendChild(ul);

        // let delIcone = document.querySelector('.bi-trash3');

        // delIcone.addEventListener('click', delVeiculo(indexVeiculoCad));
        // delIcone.setAttribute(`onclick`, `delVeiculo(${indexVeiculoCad})`);

        console.log(indexVeiculoCad);
    });
};

function limpar() {
    while (containerTab.hasChildNodes()) {
        containerTab.removeChild(containerTab.firstChild);
    };
};

// let editIcone = document.querySelector('.bi-pencil-square');

// editIcone.addEventListener('click', editVeiculo);

function delVeiculo(posicaoVetor) {
    // if (containerTab.hasChildNodes()) {
    //     containerTab.removeChild(containerTab.children[posicaoVetor]);
    // };

    veiculosCadastrados.splice(posicaoVetor, 1);

    limpar();
    listVeiculo();
};

function editVeiculo(posicaoVetor) {
    const containerEdit = document.querySelector('.containerEdit');
    const containerCad = document.querySelector('.containerCad');

    if (containerEdit.style.display = 'none') {
        containerCad.style.display = 'none';
        containerEdit.style.display = 'block';
    };

    const index = posicaoVetor;
    const editVeiculo = veiculosCadastrados[index];
    idx = index;

    document.querySelector('#editMarca').value = editVeiculo.brand;
    document.querySelector('#editModelo').value = editVeiculo.model;
    document.querySelector('#editAno').value = editVeiculo.year;

    console.log(editVeiculo);
    console.log(index);

    const editBtn = document.querySelector('#editBtn');
    editBtn.addEventListener('click', salvarEdit);
};

let idx;

function salvarEdit() {
    const containerEdit = document.querySelector('.containerEdit');
    const containerCad = document.querySelector('.containerCad');
    const editMarca = document.querySelector('#editMarca').value;
    const editModelo = document.querySelector('#editModelo').value;
    const editAno = document.querySelector('#editAno').value;

    let veicEditado = { brand: editMarca, model: editModelo, year: editAno };

    console.log(veicEditado);
    console.log(idx);

    veiculosCadastrados.splice(idx, 1, veicEditado);

    if (containerCad.style.display = 'none') {
        containerEdit.style.display = 'none';
        containerCad.style.display = 'block';
    };

    limpar();
    listVeiculo();
};