var modal = document.getElementById("myModal");

let result = {};
result.status = true
result.hits = 0;
result.error = 0;

let results = [];
results['1'] = 12;
results['2'] = 8;
results['3'] = 3;
results['4'] = 29;
results['5'] = 57;
results['6'] = 6;
results['7'] = 7;
results['8'] = 74;
results['9'] = 2;
results['10'] = 71;

for (let index = 1; index <= 10; index++) {
    if (localStorage.hasOwnProperty(index) == false)
        result.status = false;

    if (results[index] == localStorage.getItem(index))
        result.hits++;
    else
        result.error++;
}

if(result.status === true) {
    modal.style.display = "block";

    if (result.error === 0)
        var resultText = "<strong style='color:#007bff'>parabéns</strong>, parece que voce não apresentou nenhum grau de daltonismo!";

    if (result.error >= 1 && result.error <= 3)
        var resultText = "<strong style='color:#007bff'>Ops!</strong>, você errou algumas perguntas, pode ser que você tenha algum tipo de daltonismo.";

    if (result.error >= 4 && result.error <= 6)
        var resultText = "<strong style='color:#007bff'>Atenção</strong>, você apresentou uma pontuação de acerto baixo,  aconselhamos a procura de um profissional (oftalmologista).";

    if (result.error > 6)
        var resultText = "<strong style='color:#007bff'>Sua pontuação de acerto foi consideravelmente baixa</strong>, aconselhamos a procura de um profissional (oftalmologista).";


    document.querySelector('#result-text').innerHTML = resultText;
    document.querySelector('#score').innerHTML = result.hits + '/10';
}

document.querySelector(".close-modal").addEventListener('click', () => {
    modal.style.display = "none";
    localStorage.clear();
});

document.querySelector('#start-test').addEventListener('click', () => {
    localStorage.clear();
});