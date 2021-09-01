const buttonElement = document.querySelector('#app button');
const listElement = document.querySelector('#resultado');

function calcLastStand(hp, damage, morale) {
    let result;
    const operationOne = damage - hp
    const operationTwo = hp * morale / 100
    if (operationOne < operationTwo) {
        result = "Ficara em last stand!!!";
    } else {
        result = "Nao ficara em last stand!";
    }
    alert(result)
}

buttonElement.onclick = function () {
    const inputElementHp = document.getElementById('hp');
    const inputElementDamage = document.getElementById('damage');
    const inputElementMorale = document.getElementById('morale');

    const hp = parseInt(inputElementHp.value);
    const damage = parseInt(inputElementDamage.value);
    const morale = parseInt(inputElementDamage.value);


    calcLastStand(hp, damage, morale);

}
