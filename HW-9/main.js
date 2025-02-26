// #8Nmt60ZT
addTaskTitleToDOM('Task 1');
// - створити блок,
const div = document.createElement('div');
// - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
// - додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
document.body.append(div);
// - клонувати його повністю, та додати клон в body.
const p = document.createElement('p'); //to test
p.innerText = 'test';
div.appendChild(p);
document.body.append(div.cloneNode(true));

// #OPLI89c9G
addTaskTitleToDOM('Task 2');
// - Є масив:
let arr = ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const menu = document.createElement('ul');
for (let item of arr) {
    const li = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li);
}
document.body.append(menu);

// #jeBqHV525U5
addTaskTitleToDOM('Task 3');
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
const container1 = document.createElement('div');
container1.classList.add('container');
for (let item of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.innerText = `${item.title} - ${item.monthDuration}`;
    container1.appendChild(div);
}
document.body.append(container1);

// #Kx1xgoKy8
addTaskTitleToDOM('Task 4');
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'>, в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
const container2 = document.createElement('div');
container2.classList.add('container');
for (let item of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.classList.add('item');

    const title = document.createElement('h1');
    title.classList.add('heading');
    title.innerText = item.title;

    const p = document.createElement('p');
    p.classList.add('description');
    p.innerText = item.monthDuration;

    div.append(title, p);
    container2.appendChild(div);
}
document.body.append(container2);

function addTaskTitleToDOM(title) {
    let h2 = document.createElement('h2');
    h2.innerText = title;
    document.body.appendChild(h2);
}