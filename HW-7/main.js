// #XjJuucOMR0
console.log('------ TASK #1 ------');
// - Створити функцію конструктор для об'єктів User з полями id, name, surname, email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(name, surname, email, phone, id = getRandomId()) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];
let names = ["Harry", "Hermione", "Ron", "Albus", "Severus", "Draco", "Minerva", "Sirius", "Bellatrix", "Neville"];
let surnames = ["Potter", "Granger", "Weasley", "Dumbledore", "Snape", "Malfoy", "McGonagall", "Black", "Lestrange", "Longbottom"];
let emails = [
    "harry.potter@hogwartsmail.com",
    "hermione.granger@hogwartsmail.com",
    "ron.weasley@hogwartsmail.com",
    "albus.dumbledore@hogwartsmail.com",
    "severus.snape@hogwartsmail.com",
    "draco.malfoy@hogwartsmail.com",
    "minerva.mcgonagall@hogwartsmail.com",
    "sirius.black@hogwartsmail.com",
    "bellatrix.lestrange@hogwartsmail.com",
    "neville.longbottom@hogwartsmail.com"
];
let phones = [
    "+44 7700 900001",
    "+44 7700 900002",
    "+44 7700 900003",
    "+44 7700 900004",
    "+44 7700 900005",
    "+44 7700 900006",
    "+44 7700 900007",
    "+44 7700 900008",
    "+44 7700 900009",
    "+44 7700 900010"
];
for (let i = 0; i < 10; i++) {
    users.push(new User(names[i], surnames[i], emails[i], phones[i]));
}
console.log(users);

// #2ikXsE2WiKZ
console.log('------ TASK #2 ------');

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
function predicate(u) {
    return u.id % 2 === 0;
}

console.log(users.filter(predicate));

// #pOeHKct
console.log('------ TASK #3 ------');

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
function sorter(u1, u2) {
    return u1.id - u2.id;
}

console.log(users.slice().sort(sorter)); //використала slice, щоб зберегти невідсортований масив для 1-го таску

// #nkMXISv
console.log('------ TASK #4 ------');
// - створити класс для об'єктів Client з полями
// id, name, surname, email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client extends User{
    constructor(user, products) {
        super(user.name, user.surname, user.email, user.phone, user.id);
        this.id = getRandomId();
        this.order = products;
    }
}

let clients = [];
for (let u of users) {
    let products = [];
    for (let i = 0; i < getRandom(5); i++)
        products.push(getRandomProduct());
    clients.push(new Client(u, products));
}
console.log(clients);

// #8abtVjRv
console.log('------ TASK #5 ------');
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.slice().sort((c1, c2) => c1.order.length - c2.order.length));

// #vV9a6584I5
console.log('------ TASK #6 ------');
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufacturer, releaseYear, maximumSpeed, engineDisplacement, driver = null) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.releaseYear = releaseYear;
    this.maximumSpeed = maximumSpeed;
    this.engineDisplacement = engineDisplacement;
    this.driver = driver;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)
    }

    this.info = function () {
        for (let field in this)
            if (typeof this[field] !== 'function')
                console.log(`${field} - ${this[field]}`);
    }

    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > this.maximumSpeed)
            this.maximumSpeed = newSpeed;
    }

    this.changeYear = function (newValue) {
        if (newValue > 2000)
            this.releaseYear = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let models = ["Toyota Supra", "Ford Mustang", "BMW M3", "Audi R8", "Porsche 911"];
let manufacturers = ["Toyota", "Ford", "BMW", "Audi", "Porsche"];
let releaseYears = [2020, 2021, 2022, 2023, 2024];
let maximumSpeeds = [250, 260, 290, 330, 340]; // Speed in km/h
let engineDisplacements = [3.0, 5.0, 3.0, 5.2, 3.8];

let cars = [];
for (let i = 0; i < 5; i++) {
    cars.push(new Car(models[i], manufacturers[i], releaseYears[i], maximumSpeeds[i], engineDisplacements[i]));
}
console.log(cars);

// #5kla3yMpgp
console.log('------ TASK #7 ------');
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarObj {
    constructor(model, manufacturer, releaseYear, maximumSpeed, engineDisplacement, driver = null) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.releaseYear = releaseYear;
        this.maximumSpeed = maximumSpeed;
        this.engineDisplacement = engineDisplacement;
        this.driver = driver;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)
    }

    info() {
        for (let field in this)
            console.log(`${field} - ${this[field]}`);
    }

    increaseMaxSpeed(newSpeed) {
        if (newSpeed > this.maximumSpeed)
            this.maximumSpeed = newSpeed;
    }

    changeYear(newValue) {
        if (newValue > 2000)
            this.releaseYear = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let objCars = [];
for (let i = 0; i < 5; i++) {
    objCars.push(new CarObj(models[i], manufacturers[i], releaseYears[i], maximumSpeeds[i], engineDisplacements[i]));
}
console.log(objCars);

// #zg6Fifnqig
console.log('------ TASK #8 ------');
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Cinderella(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
}

names = ["Anna", "Bella", "Clara", "Diana", "Eva", "Fiona", "Giselle", "Hanna", "Isla", "Jasmine"]
let cinderellas = [];
for (let i = 0; i < 10; i++) {
    cinderellas.push(new Cinderella(names[i], getRandom(25, 18), getRandom(42, 25)));
}
console.log("cinderellas", cinderellas);

function Prince(name, age, foundShoeSize) {
    this.name = name;
    this.age = age;
    this.foundShoeSize = foundShoeSize;
}

let prince = new Prince("Edward", getRandom(25, 18), cinderellas[getRandom(9)].shoeSize);
console.log("prince", prince);

for (let i = 0; i < 10; i++) {
    if (cinderellas[i].shoeSize === prince.foundShoeSize) {
        console.log("cinderella for match", cinderellas[i]);
        break;
    }
}

let callback = c => c.shoeSize === prince.foundShoeSize;
console.log("cinderella find match", cinderellas.find(callback));

// #gsKLAsNWM
console.log('------ TASK #9 ------');
// *Через Array.prototype. створити власний foreach, filter
Array.prototype.myForEach = function (callback) {
    for (let item of this)
        callback(item);
}
let arr = [12, 86, 4];
arr.myForEach((n) => console.log(n));

Array.prototype.myFilter = function (predicate) {
    let res = [];
    for (let item of this)
        if (predicate(item)) res.push(item);
    return res;
}
console.log(arr.myFilter((n) => n < 20));

//------------ additional functions ------------
function getRandom(max, min = 0) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function getRandomId() {
    return getRandom(999_999, 100_000);
}

function getRandomProduct() {
    const colors = ["Red", "Blue", "Green", "Yellow", "Black", "White", "Gray", "Brown", "Purple", "Orange"];
    const products = ["Wand", "Broom", "Hat", "Robe", "Potion", "Spellbook", "Cauldron", "Crystal Ball", "Ring", "Amulet"];

    return `${colors[getRandom(9)]} ${products[getRandom(9)]}`;
}
