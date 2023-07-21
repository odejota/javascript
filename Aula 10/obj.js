// let nome = 'dejota';
// let valor = 33;
// let ligado = true;
// let corSelecionada = null;
// let idade = undefined;

console.log('Hoje veremos métodos de vetores, objetos e funções.');
// -> string utilizando template literal (entre acentos crase):
console.log(`Vamos criar um vetor (note que utilizamos colchetes).
Em seguida vamos percorrer os valores e imprimir cada um utilizando forEach.`);

let listaVetor = ['banana', 'maçã', 'pêra', 'morango', 'lichia', 'uva', 'melancia'];
let itemNum = 1;

listaVetor.forEach((item) => {
    console.log(`Fruta ${itemNum}: ${item}`);
    itemNum++;
});

console.log(`A lista possui ${listaVetor.length} itens.`);
console.log(`O quinto item é: ${listaVetor[4]}`);

// -----------------------------------------------------

console.log(`Agora vamos filtrar os itens que começam com a letra 'M', utilizando o método 'filter'.`)

let itemLetraM = listaVetor.filter(function (item) {
    return item.startsWith('m');
});

console.log(itemLetraM);

// -----------------------------------------------------

let numeros = [7, 3, 5, 8, 9, 6];

numeros.forEach((numero) => { console.log(numero) });

console.log(`Agora vamos dobrar cada um dos valores do veto usando 'map'.`);

let numerosDobro = numeros.map(function (numero) {
    return numero * 2;
});

numerosDobro.forEach((numero) => { console.log(numero) });

// -----------------------------------------------------

console.log(`Agora vamos inserir um elemento no array utilizando 'push'.`);

numeros.push(`Uma string em um array de números (tipagem dinâmica)`);
numeros.forEach((numero) => { console.log(numero) });


// ---------------------- Objetos ----------------------

let endereco = {
    rua: 'Dos Bobos',
    numero: '0',
    cep: '12345-678',
    bairro: 'Alameda dos Anjos',
    cidade: 'Hawkins'
};

// -> bracket notation (notação de colchetes):
console.log('Rua: ' + endereco['rua']);
console.log('Número: ' + endereco['numero']);
// -> dot notation (notação de ponto):
console.log('Bairro: ' + endereco.bairro);
console.log('Cidade: ' + endereco.cidade);

// -----------------------------------------------------

console.log(`Vamos declarar uma função que percorra e imprima o nome de cada propriedade e seu valor utilizando 'for-in'`);

function mostrarEndereco(listaDeDados) {
    for (let campo in listaDeDados) {
        console.log(campo, listaDeDados[campo]);
    };
};

mostrarEndereco(endereco);

// -----------------------------------------------------

// Aula 11 | continuação

// -> factory function (função fábrica): serve para criar objetos:
function criarEndereco(rua, numero, CEP, bairro, cidade) {
    return { rua, numero, CEP, bairro, cidade };
};

console.log('\n --- objetos criados usando função fábrica --- \n');

// -> criando um novo objeto usando a função fábrica:
let endereco2 = criarEndereco('Nazare', '123', '00998877', 'Mooca', 'Rio de Janeiro');
let endereco3 = criarEndereco('das Laranjas', 333, 87658766, 'Limão', 'Curitiba');

mostrarEndereco(endereco2);
mostrarEndereco(endereco3);

// -> constructor function (função construtor) !atenção: pascal-case, uso de THIS e ponto e vígula!:
function Endereco(banana, numero, cep, bairro, cidade) {
    this.rua = banana;
    this.numero = numero;
    this.cep = cep;
    this.bairro = bairro;
    this.cidade = cidade;
};
console.log('--- objetos criados usando função construtor ---');

//chamar a função construtor: 

let endereco4 = new Endereco('das bananas', 123, 98765433, 'Bananal', 'Porto Alegre');
let endereco5 = new Endereco('Abacaxi', 12, 98765438, 'Uva', 'Fenda do Bikini');

mostrarEndereco(endereco4);
mostrarEndereco(endereco5);

console.log('\n também podemos ter listas de objetos: ');

let produtos = [
    { id: 1, nome: 'sapato', preco: 100.00 },
    { id: 2, nome: 'sandalia', preco: 250.00 },
    { id: 3, nome: 'cinto', preco: 450.00 }
];

// -> percorrendo cada propriedade e cada valor de cada objeto do vetor produto:

function mostrarProduto(listaDeProds) {
    for (let campo of listaDeProds) {
        for (let item in campo) {
            console.log(item, campo[item]);
        };
        console.log('----------');
    };
};

mostrarProduto(produtos);

// -> solução com função reduzida:
produtos.forEach(produtos => mostrarEndereco(produtos));