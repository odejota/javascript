// ? Crie uma nova página com 3 campos para o usuário digitar 3 notas e, ao clicar no botão, será informada a média e se está aprovado ou não.

function mediaAluno() {
    let nota1 = parseFloat(document.getElementById('n1').value);
    let nota2 = parseFloat(document.getElementById('n2').value);
    let nota3 = parseFloat(document.getElementById('n3').value);

    let media = parseFloat(nota1 + nota2 + nota3) / 3;

    if(media >= 6) {
        document.getElementById('md').value = media;
        document.getElementById('sit').value = 'Aprovado';
        document.getElementById('sit').style.border.color = 'green';
    } else {
        document.getElementById('md').value = media;
        document.getElementById('sit').value = 'Não aprovado';
        document.getElementById('sit').style.border.solid = 'red';
    }
}