// #dFeorS3m7u
console.log('------ TASK #1 ------');
// Знайти та вивести довижину настипних стрінгових значень
console.log('hello world'.length, 'lorem ipsum'.length, 'javascript is cool'.length);

// #8lld9HMxXWB
console.log('------ TASK #2 ------');
// Перевести до великого регістру наступні стрінгові значення
console.log('hello world'.toUpperCase(), 'lorem ipsum'.toUpperCase(), 'javascript is cool'.toUpperCase());

// #ClDsAm7xba7
console.log('------ TASK #3 ------');
// Перевести до нижнього регістру настипні стрінгові значення
console.log('HELLO WORLD'.toLowerCase(), 'LOREM IPSUM'.toLowerCase(), 'JAVASCRIPT IS COOL'.toLowerCase());

// #0b89BkYZwu
console.log('------ TASK #4 ------');
// Є "брудна" стрінга
let str = ' dirty string   ';
// Почистити її від зайвих пробілів.
console.log(str.trim());

// #bfoJuse4ZzP
console.log('------ TASK #5 ------');
// Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// str = 'Ревуть воли як ясла повні';
// arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.log(stringToArray('Ревуть воли як ясла повні'));

function stringToArray(str) {
    return str.split(' ');
}

// #Rbr5kEQ
console.log('------ TASK #6 ------');
// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(arr.map(i => '' + i));

// #5hqyKTfmc
console.log('------ TASK #7 ------');
// створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(nums, dir) {
    if (dir === 'ascending')
        return nums.sort((a, b) => a - b);
    else if (dir === 'descending')
        return nums.sort((a, b) => b - a);
    else return null;
}

console.log('ascending:', sortNums(nums, 'ascending'));
console.log('descending:', sortNums(nums, 'descending'));

// #yo06d74c1C
console.log('------ TASK #8 ------');
// є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let res = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(c => c.monthDuration > 5)
    .map((value, index) => {
        value.id = index + 1;
        return value;
    });
console.log('init:', coursesAndDurationArray);
console.log('result:', res);

// #bolvdlhP
console.log('------ TASK #9 ------');
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
let suits = ['spade', 'clubs', 'diamond', 'heart'];
let values = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king'];
let cards = [];
for (let i = 0; i < suits.length; i++) {
    for (let value of values) {
        cards.push({suit: suits[i], value: value, color: (i < 2) ? 'black' : 'red'});
    }
}

console.log('cards:', cards);
console.log('spade ace:', cards.filter(card => card.suit === 'spade' && card.value === 'ace'));
console.log('sixes:', cards.filter(card => card.value === 6));
console.log('reds:', cards.filter(card => card.color === 'red'));
console.log('diamonds:', cards.filter(card => card.suit === 'diamond'));
console.log('clubs over 9:', cards.filter(card => card.suit === 'clubs' && card.value > '9'));

// #EP5I1UUzAX
console.log('------ TASK #10 ------');
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let cardsPerSuits =
    cards.reduce((acc, card) => {
        switch (card.suit) {
            case 'spade':
                acc.spades.push(card);
                break;
            case 'clubs':
                acc.clubs.push(card);
                break;
            case 'diamond':
                acc.diamonds.push(card);
                break;
            case 'heart':
                acc.hearts.push(card);
                break;
        }
        return acc;
    }, {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    });
console.log(cardsPerSuits);

// #4LJn7zBx
console.log('------ TASK #11 ------');
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
console.log('all:', coursesArray);
console.log('includes sass:', coursesArray.filter(course => course.modules.includes('sass')));
console.log('includes docker:', coursesArray.filter(course => course.modules.includes('docker')));