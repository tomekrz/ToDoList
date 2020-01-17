const form = document.querySelector("form");
const input = document.getElementById("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
const span = document.querySelector("p+p");
const toDoList = []

const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, index) => {
        toDoElement.id = index;
        ul.appendChild(toDoElement)
    })
}

const serchElement = function (e) {
    let serchList = toDoList;
    serchList = serchList.filter((li) =>
        li.textContent.toLocaleLowerCase().includes(serch.value.toLocaleLowerCase())
    )
    ul.textContent = "";
    serchList.forEach((toDoElement, index) => {
        toDoElement.id = index;
        ul.appendChild(toDoElement)
    })
    updateTaskNumber()
};

const updateTaskNumber = () => {
    span.textContent = toDoList.length
}

const deleteTask = function (e) {

    toDoList.splice(e.target.parentNode.id, 1)
    renderList()
    updateTaskNumber()
}

const createTask = (e) => {
    e.preventDefault();
    if (input.value) {
        const liElement = document.createElement("li");
        liElement.classList.add("task");
        liElement.classList.add('list-group-item')
        liElement.innerHTML = `${ input.value }<button class="
        btn btn-secondary"><i class="fas fa-times"></i></button>`;
        toDoList.push(liElement);
        renderList()

        document.querySelectorAll("li button").forEach(button => {
            button.addEventListener("click", deleteTask)
        })

    }
    input.value = "";
    updateTaskNumber();
};




form.addEventListener("submit", createTask);
serch.addEventListener("input", serchElement);