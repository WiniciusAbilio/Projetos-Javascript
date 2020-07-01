const buttonElement = document.querySelector('#app button');
const listElement = document.querySelector("#app ul");


function nameRepos(user) {
    let names = [];
    axios.get(`https://api.github.com/users/${user}/repos`)
        .then(function (response) {
            const arrayData = response.data;
            for (let i = 0; i < arrayData.length; i++) {
                names[i] = arrayData[i].name;
            }
            renderTodos(names);
        })
        .catch(function (error) {
            alert(error);
        });
}

function renderTodos(todos) {
    listElement.innerHTML = '';
    for (todo of todos) {
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);

        listElement.appendChild(todoElement);

    }
}


buttonElement.onclick = function () {
    const inputElement = document.querySelector('#app input');
    const user = inputElement.value;
    nameRepos(user);
}