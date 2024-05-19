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

export function getCategoryList() {
    let localCategoryList = localStorage.getItem('categoryList');

    if (!localCategoryList) {
        localStorage.setItem('categoryList', '[]');
        return [];
    }
    else {
        return JSON.parse(localCategoryList);
    }
}

export function setTodoList(todoList) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

export function setPolyList(polyList) {
    localStorage.setItem('polyList', JSON.stringify(polyList));
}

export function setCategoryList(categoryList) {
    localStorage.setItem('categoryList', JSON.stringify(categoryList));
}