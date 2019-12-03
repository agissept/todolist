let todos = [{
    id: 1,
    text: 'todo 1',
    completed: false
}, {
    id: 2,
    text: 'todo 2',
    completed: true
}];

const generateUncompletedTodo = function (todo) {
    const buttonCompleted = document.createElement('button');
    buttonCompleted.className = "btn btn-success float-right mr-2";
    buttonCompleted.textContent = "Selesai";
    buttonCompleted.id = "complete";
    buttonCompleted.name = todo.id;


    const buttonDelete = document.createElement('button');
    buttonDelete.className = "btn btn-danger float-right";
    buttonDelete.textContent = "Hapus";
    buttonDelete.id = "delete";
    buttonDelete.name = todo.id;

    const p = document.createElement('p');
    p.textContent = todo.text;

    const cardBody = document.createElement('div');
    cardBody.className = "card-body";

    const card = document.createElement('div');
    card.className = "card";


    card.appendChild(cardBody);
    cardBody.appendChild(p);
    cardBody.appendChild(buttonDelete);
    cardBody.appendChild(buttonCompleted);

    return card;
};

const renderUncompltedTodos = function (todos) {
    document.querySelector('#uncompletedTodos').innerHTML = "";
    todos.forEach(function (todo) {
        if (todo.completed == false) {
            document.querySelector("#uncompletedTodos").appendChild(generateUncompletedTodo(todo));
        }
    });
};



document.querySelector("#new-todos").addEventListener('submit', function (e) {
    e.preventDefault();

    let id = 0;
    if (todos.length > 0) {
        id = todos[todos.length - 1].id + 1;
    }


    if (e.target.elements.text.value != "") {
        todos.push({
            id: id,
            text: e.target.elements.text.value,
            completed: false
        });
        renderAllTodos(todos);
        e.target.elements.text.value = "";
    } else {
        alert("Todo tidak boleh kosong");
    }
});

function deleteTodos(id) {
    todos.forEach(function (todo, index) {
        if (id === todo.id) {
            todos.splice(index, 1);
            console.log(todo.id);
            renderAllTodos(todos);
        }
    });
}

function completeTodos(id) {
    todos.forEach(function (todo) {
        if (id === todo.id) {
            todo.completed = true;
            console.log(todo);
            renderAllTodos(todos);
        }
    });
}


const generateCompletedTodo = function (todo) {
    const buttonDelete = document.createElement('button');
    buttonDelete.className = "btn btn-danger float-right";
    buttonDelete.textContent = "Hapus";
    buttonDelete.id = "delete";
    buttonDelete.name = todo.id;

    const p = document.createElement('p');
    p.textContent = todo.text;

    const cardBody = document.createElement('div');
    cardBody.className = "card-body";

    const card = document.createElement('div');
    card.className = "card";

    card.appendChild(cardBody);
    cardBody.appendChild(p);
    cardBody.appendChild(buttonDelete);

    return card;
};

const renderCompletedTodos = function (todos) {
    document.querySelector('#completedTodos').innerHTML = "";
    todos.forEach(function (todo) {
        if (todo.completed === true) {
            document.querySelector("#completedTodos").appendChild(generateCompletedTodo(todo));
        }
    });
};

function renderAllTodos(todos) {
    renderUncompltedTodos(todos);
    renderCompletedTodos(todos);

    let countCompletedTodos = 0;
    let countUncompletedTodos = 0;
    todos.forEach((todo) => {
        if (todo.completed === true) {
            countCompletedTodos++;
        } else {
            countUncompletedTodos++;
        }
    });


    if (todos.length > 0) {
        document.querySelector("#delete").addEventListener('click', function (e) {
            deleteTodos(parseInt(e.target.name));
        });
    }


    if (countUncompletedTodos > 0) {
        console.log(countCompletedTodos);
        document.querySelector("#complete").addEventListener('click', function (e) {
            completeTodos(parseInt(e.target.name));
        });
    }
}

renderAllTodos(todos);