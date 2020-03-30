'use strict'
const KEY = 'myProjects' ;
var gProj = [];

function createProject(id, name, title, desc, url, publishedAt, labels, img) {
    var project = {
        id: id,
        name: name,
        title: title,
        desc: desc,
        url: url,
        publishedAt: publishedAt,
        labels: labels,
        img: img
    }
    return project;
}
function addProjects() {
    var project = createProject('mine', 'MineSweepwer', 'Frozen | Miner', 'This is a game as a part of bootcamp course to become an Utzmati programmer', 'https://reemnx.github.io/Minesweeper-/', '30/03/2020', '["Photoshop"],["CSS"]', 'img/portfolio/Minesweeper.PNG');
    gProj.push(project);
    var project = createProject('todo', 'Todos', 'Todo List', 'This is an App as a part of bootcamp course to become an Utzmati programmer', 'https://reemnx.github.io/todoList/', '30/03/2020', '["Photoshop"],["CSS"]', 'img/portfolio/Todolist.PNG');
    gProj.push(project);


    saveToStorage(KEY, gProj);
}
function getProjects() {
    return gProj ;
}
function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}
function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}