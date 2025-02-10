'use strict';

// Task #1
document.write('<h2>------ TASK #1 ------</h2>')
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>${getRandomStr(8 + Math.random() * 7)}</div>`);
}

function getRandomStr(length, averageWordLength = 5) {
    let str = String.fromCharCode(65 + Math.random() * 26);
    for (let i = 1; i < length; i++) {
        str += (Math.random() * averageWordLength < 1) ? ' ' :
            String.fromCharCode(97 + Math.random() * 26);
    }
    return str;
}

// Task #2
document.write('<h2>------ TASK #2 ------</h2>')
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 1; i <= 10; i++) {
    document.write(`<div>${i}. ${getRandomStr(8 + Math.random() * 7)}</div>`);
}

// Task #3
document.write('<h2>------ TASK #3 ------</h2>')
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let counter = 0;
while (counter < 20) {
    document.write(`<h1>${getRandomStr(8 + Math.random() * 7)}</h1>`);
    counter++;
}

// Task #4
document.write('<h2>------ TASK #4 ------</h2>')
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
counter = 1;
while (counter <= 20) {
    document.write(`<h1>${counter}. ${getRandomStr(8 + Math.random() * 7)}</h1>`);
    counter++;
}

// Task #5
document.write('<h2>------ TASK #5 ------</h2>')
// Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
document.write('<ul>');
for (let item of listOfItems) {
    document.write(`<li>${item}</li>`);
}
document.write('</ul>');

// Task #6
document.write('<h2>------ TASK #6 ------</h2>')
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
document.write('<div class="cards-container">');
for (let product of products) {
    document.write('<div class="product-card">');
    document.write(`<h3 class="product-title">${product.title}. Price - ${product.price}</h3>`);
    document.write(`<img src="${product.image}" alt="${product.title}" class="product-image">`);
    document.write('</div>');
}
document.write('</div>');

// Task #7
document.write('<h2>------ TASK #7 ------</h2>')
// є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
//     - користувачів зі статусом false
//     - користувачів які старші за 30 років

document.write('<p>Користувачі зі статусом true:</p>');
document.write('<ol>');
for (let user of users) {
    if (user.status)
        document.write(`<li>${user.name}</li>`);
}
document.write('</ol>');

document.write('<p>Користувачі зі статусом false:</p>');
document.write('<ol>');
for (let user of users) {
    if (!user.status)
        document.write(`<li>${user.name}</li>`);
}
document.write('</ol>');

document.write('<p>Користувачі, які старші за 30 років:</p>');
document.write('<ol>');
for (let user of users) {
    if (user.age >= 30)
        document.write(`<li>${user.name}</li>`);
}
document.write('</ol>');


// additional3 Task #9
console.log('------ Additional3 TASK #9 ------')
// Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id". Записати цей об'єкт в новий масив
let result = [];
for (let user of usersWithId) {
    let newUser = {...user};
    for (let address of citiesWithId) {
        if (newUser.id === address.user_id) {
            newUser.address = {...address};
        }
    }
    result.push(newUser);
}
console.log(usersWithId, citiesWithId, result);