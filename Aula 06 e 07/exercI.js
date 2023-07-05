// ? Crie uma nova página com uma lista para ser alimentada usando appendChild.

function inserir() {
    let entrada = document.getElementById('produto').value;

    let item = document.createTextNode(entrada);

    let li = document.createElement('li');
    li.appendChild(item);

    let lista = document.getElementById('lista');
    lista.appendChild(li);

    document.getElementById('produto').focus();
}

function removerPrimeiro() {
    let lista = document.getElementById('lista');

    let removeFirst = lista.firstElementChild;
    lista.removeChild(removeFirst);
}

function removerUltimo() {
    let lista = document.getElementById('lista');

    let removeLast = lista.lastElementChild;
    lista.removeChild(removeLast);
}

function limparLista() {
    let lista = document.getElementById('lista');

    while(lista.hasChildNodes()) {
        lista.removeChild(lista.firstChild);
    }
}

function removerItem() {
    let lista = document.getElementById('lista');

    let itemLista = document.getElementById('itemDaLista').value;

    if(lista.hasChildNodes()) {
        lista.removeChild(lista.children[itemLista - 1]);
    }
}