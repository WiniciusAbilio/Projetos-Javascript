const buttonElement = document.querySelector('#app button');
const listElement = document.querySelector('#app ol');

function calc(currentPoints, metaPoints, pointsPerTenMinutes) {
    let time = 0;
    let timeString = '';
    for (var i = currentPoints; i < metaPoints; i += pointsPerTenMinutes) {
        time += 600;//Tempo em Segundos
    }
    const dias = parseInt(time / 86400);
    const horas = parseInt((time / 3600) % 24);
    const minutos = parseInt((time / 60) % 60);
    const segundos = parseInt(time % 60);
    if (dias > 0 || horas > 0 || minutos > 0 || segundos > 0) {
        timeString = `${dias} Dias ${horas} Horas ${minutos} Minutos ${segundos} Segundos`;
    }
    renderTodos(timeString)
}


function renderTodos(timeString) {
    listElement.innerHTML = '';

    let todoText = document.createTextNode(timeString);

    listElement.appendChild(todoText);
}



buttonElement.onclick = function () {
    const inputElementCurrentPoints = document.getElementById('current');
    const inputElementMetaPoints = document.getElementById('meta');
    const inputElementPointsPerTenMinutes = document.getElementById('points');

    const currentPoints = parseInt(inputElementCurrentPoints.value);
    const metaPoints = parseInt(inputElementMetaPoints.value);
    const pointsPerTenMinutes = parseInt(inputElementPointsPerTenMinutes.value);

    if (pointsPerTenMinutes < 0) {
        alert('Quantidade de pontos a cada 10 minutos menor que zero!');
    } else if (currentPoints > metaPoints) {
        alert('Quantidade de pontos atual maior que a meta!');
    } else if (currentPoints < 0) {
        alert('Quantidade de pontos atual menor que zero!');
    } else {
        calc(currentPoints, metaPoints, pointsPerTenMinutes);
    }
}
