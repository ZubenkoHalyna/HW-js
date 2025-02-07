'use strict';

// Task #1
console.log('------ TASK #1 ------')
// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let a = [];
for (let i = 0; i < 10; i++) {
    a.push(i + 1); // or a[i] = i + 1;
    console.log(a[i]);
}

// Task #2
console.log('------ TASK #2 ------')
// Створити 3 об'єкти які описують книги. Поля об'єкту : title, pageCount, genre.

let books = [
    {
        title: 'Alice\'s Adventures in Wonderland',
        pageCount: 352,
        genre: 'Literary nonsense'
    },
    {
        title: 'Harry Potter and the Philosopher\'s Stone',
        pageCount: 368,
        genre: 'Fantasy'

    },
    {
        title: 'Atomic Habits',
        pageCount: 320,
        genre: 'self-help book'

    }]

// Task #3
console.log('------ TASK #3 ------')
// Створити 3 об'єкти які описують книги. Поля об'єкту : title, pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let booksWithAuthors = [
    {
        title: 'The Talisman',
        pageCount: 352,
        genre: 'Literary nonsense',
        authors: [{name: 'Stephen King', age: 77}, {name: 'Peter Straub', age: 79}]
    },
    {
        title: 'Harry Potter and the Philosopher\'s Stone',
        pageCount: 368,
        genre: 'Fantasy',
        authors: [{name: 'Joanne Rowling', age: 59}]
    },
    {
        title: 'Atomic Habits',
        pageCount: 320,
        genre: 'self-help book',
        authors: [{name: 'James Clear', age: 39}]
    }]

// Task #4
console.log('------ TASK #4 ------')
// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username, password.
// Вивести в консоль пароль кожного користувача

let users = [
    {name: 'John', username: 'John_L', password: 'Yoko'},
    {name: 'Paul', username: 'Paul_M', password: 'Nancy'},
    {name: 'Ringo', username: 'Ringo_S', password: 'Barbara'},
    {name: 'George', username: 'George_H', password: 'Olivia'},
    {name: 'Stuart', username: 'Stuart_S', password: 'Astrid'},
    {name: 'Tommy', username: 'Tommy_M', password: '1931'},
    {name: 'Norman', username: 'Norman_C', password: 'Anne-Marie'},
    {name: 'Pete', username: 'Pete_B', password: 'Kathy'},
    {name: 'Chas', username: 'Chas_N', password: 'Margaret'},
    {name: 'Jimmie', username: 'Jimmie_N', password: 'Josefina'},
]

for (let i = 0; i < users.length; i++) {
    console.log(users[i].password);
}

// Task #5
console.log('------ TASK #5 ------')
// описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let temperatureArray =
    [[21, 32, 27], [25, 38, 30], [23, 35, 29], [20, 32, 26], [19, 30, 25], [22, 34, 28], [21, 35, 29]]

let temperatureDayPhases =
    [{morning: 21, noon: 32, evening: 27},
        {morning: 25, noon: 38, evening: 30},
        {morning: 23, noon: 35, evening: 29},
        {morning: 20, noon: 32, evening: 26},
        {morning: 19, noon: 30, evening: 25},
        {morning: 22, noon: 34, evening: 28},
        {morning: 21, noon: 35, evening: 29}]

let temperaturePedDays =
    [{Sunday: 21, Monday: 25, Tuesday: 23, Wednesday: 20, Thursday: 19, Friday: 22, Saturday: 21},
        {Sunday: 32, Monday: 38, Tuesday: 35, Wednesday: 32, Thursday: 30, Friday: 34, Saturday: 35},
        {Sunday: 27, Monday: 30, Tuesday: 29, Wednesday: 26, Thursday: 25, Friday: 28, Saturday: 29}]

// Task #6
console.log('------ TASK #6 ------')
// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

let values = [1, 0, -3];

values.forEach((x) => {
    console.log(x !== 0 ? 'Вірно' : 'Невірно')
})

// Task #7
console.log('------ TASK #7 ------')
// Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число

let time = getRandom(59);
let quarter;
if (time < 0 || time > 59)
    console.log('Incorrect input')
else {
    let ending;
    switch (time % 10) {
        case 1:
            ending = time === 11 ? '' : 'а';
            break;
        case 2:
        case 3:
        case 4:
            ending = ('' + time).charAt(0) === '1' ? '' : 'и';
            break;
        default:
            ending = '';
    }
    quarter = Math.ceil((time + 1) / 15);
    console.log(`${time} хвилин${ending} - ${quarter}-а чверть години`);
}

function getRandom(max, min = 0) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

// Task #8
console.log('------ TASK #8 ------')
// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).

let day = getRandom(31, 1);
if (day < 1 || day > 31)
    console.log('Incorrect input');
else {
    let decade;
    if (day < 11)
        decade = 1;
    else if (day < 21)
        decade = 2;
    else decade = 3;
    console.log(`${day} день - ${decade}-а декада місяця`);
}


// Task #9
console.log('------ TASK #9 ------')
// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
switch (+prompt('Введіть цифру від 1 до 7')) {
    case 1:
        showText('Monday');
        break;
    case 2:
        showText('Tuesday');
        break;
    case 3:
        showText('Wednesday');
        break;
    case 4:
        showText('Thursday');
        break;
    case 5:
        showText('Friday');
        break;
    case 6:
        showText('Saturday');
        break;
    case 7:
        showText('Sunday');
        break;
    default:
        showText('Error');
}

function showText(msg) {
    let p = document.createElement('p');
    p.textContent = msg;
    document.body.append(p);
    console.log(msg);
}

// Task #10
console.log('------ TASK #10 ------')
// Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох.
// Також потрібно врахувати коли введені рівні числа.
let n1 = getRandom(100, -100);
let n2 = getRandom(100, -100);

if (n1 === n2) console.log(`${n1} = ${n2}`);
else console.log(`${n1 > n2 ? n1 : n2} is max in (${n1}, ${n2})`);

// Task #11
console.log('------ TASK #11 ------')
// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// буде присвоювати змінній х значення "default" якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
values = ['стрінг', '', ' ', 0, 1, 2, 3, NaN, undefined, null];
let x = values[getRandom(values.length - 1)];
console.log(`initial x = ${wrapIfString(x)}`)
if (!x) x = 'default';
console.log(`x = ${wrapIfString(x)}`)

function wrapIfString(x) {
    return typeof x === 'string' ? `'${x}'` : x
}

// Task #12
console.log('------ TASK #12 ------')
// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за
// 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    if (coursesAndDurationArray[i].monthDuration > 5)
        console.log('Супер');
}

//or without for
console.log('without for');
if (coursesAndDurationArray[0].monthDuration > 5)
    console.log('Супер');
if (coursesAndDurationArray[1].monthDuration > 5)
    console.log('Супер');
if (coursesAndDurationArray[2].monthDuration > 5)
    console.log('Супер');
if (coursesAndDurationArray[3].monthDuration > 5)
    console.log('Супер');
if (coursesAndDurationArray[4].monthDuration > 5)
    console.log('Супер');
if (coursesAndDurationArray[5].monthDuration > 5)
    console.log('Супер');