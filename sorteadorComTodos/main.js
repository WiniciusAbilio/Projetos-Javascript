const listElement = document.querySelector('#app ul');
const inputElement = document.getElementById('element');
const inputQntd = document.getElementById('qntd')
const buttonElement = document.getElementById('add');
const buttonQntd = document.getElementById('get');

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        let index = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + index + ')');

        let linkText = document.createTextNode(' Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);

    }
}

renderTodos();

function addTodo() {
    const qntd = inputQntd.value || 1;
    const todoText = inputElement.value;
    if (todoText != '') {
        for (let i = 0; i < qntd; i++) {
            todos.push(todoText);
        }
        inputElement.value = '';
        renderTodos();
        saveToStorage();
    }
}

buttonElement.onclick = addTodo;

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

function sortiador() {
    const valor = Math.floor(Math.random() * todos.length);
    const ganhador = todos[valor];
    alert(ganhador);
}

buttonQntd.onclick = sortiador;


