export function getTodoList() {
    let localTodoList = localStorage.getItem('todoList');

    if (!localTodoList) {
        localStorage.setItem('todoList', '[]');
        return [];
    }
    else {
        return JSON.parse(localTodoList);
    }
}

export function getPolyList() {
    let localPolyList = localStorage.getItem('polyList');

    if (!localPolyList) {
        localStorage.setItem('polyList', '[]');
        return [];
    }
    else {
        return JSON.parse(localPolyList);
    }
}

export function setTodoList(todoList) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}