// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при
// натисканні на кнопку зникав елемент з id="text".
document.getElementById('btn_hide').onclick = function () {
    document.getElementById('text').style.display = 'none';
}

// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію. При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
document.getElementById('btn_send').onclick = function () {
    document.getElementById('age_result').innerText =
        document.getElementById('i_age').value < 18 ? 'Age less than 18' : 'Sufficient age';
}

// #ymAmN2xJ
// Стоврити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати данні з полів, та
// вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form = document.forms.task3;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('form_result').innerText =
        `${form.name.value} - ${form.surname.value} - ${form.age.value}`;
});


// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1
let currentNumber = localStorage.getItem('number');
currentNumber++;
localStorage.setItem('number', currentNumber);

document.getElementById('task4_target').innerText = currentNumber;


// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається
// інформація про дату та час відвідування сторінки. Є сторінка sessionsListPage.html (назва довільна), при
// відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в
// консоль, а малювати в DOM
let sessionList = JSON.parse(localStorage.getItem('sessions-list')) || [];
sessionList.push(new Date());
localStorage.setItem('sessions-list', JSON.stringify(sessionList));

// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво,
// без натискань додаткових кнопок
let kgInput = document.getElementById('i_kg');
kgInput.oninput = function () {
    document.getElementById('task6_target').innerText = `Pounds: ${kgInput.value * 2.2}`;
}
// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та
// додає в нього об'єкт сигнатура функції - addToLocalStorage(arrayName:string,objToAdd:any{}):void
function addToLocalStorage(arrayName, objToAdd) {
    let arr = JSON.parse(localStorage.getItem(arrayName));
    if (!arr) throw new Error(`Array ${arrayName} not found`);
    arr.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(arr));
}

// addToLocalStorage('arr', true);
localStorage.setItem('arr2', JSON.stringify([1, 2, 3]));
addToLocalStorage('arr2', 5);


// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let tableForm = document.forms.table_form;
tableForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let table = document.getElementById('task8_table');
    table.innerText = '';
    let rows = tableForm.rows.value;
    let columns = tableForm.columns.value;
    let text = tableForm.text.value;
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            let cell = document.createElement('td');
            cell.innerText = text;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
});

// #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого
// є значення "100грн" при перезавантаженні сторінки до значаення додається по 10грн, але !!!
// зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
let price = +localStorage.getItem('price');
let priceDiv = document.getElementById('price');
let currentDate = Date.now();
if (!price)
    price = 100;
else if (currentDate - localStorage.getItem('previous-date') > 10_000)
    price += 10;

localStorage.setItem('price', price);
localStorage.setItem('previous-date', currentDate);
priceDiv.innerText = price + ' грн';


// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let items = [];
let currentPage = 0;
for (let i = 0; i < 100; i++) {
    items.push(`item ${i + 1}`);
}
let container = document.getElementById('task10-container');
showPage(container, 0, items);
document.getElementById('btn_next').onclick = function () {
    if (currentPage < 9)
        showPage(container, ++currentPage, items);
}
document.getElementById('btn_prev').onclick = function () {
    if (currentPage >0)
        showPage(container, --currentPage, items);
}

function showPage(container, pageNumber, items) {
    container.innerText = '';
    let startItem = pageNumber * 10;
    for (let i = startItem; i < startItem + 10; i++) {
        let p = document.createElement('p');
        p.innerText = items[i];
        container.appendChild(p);
    }
}

