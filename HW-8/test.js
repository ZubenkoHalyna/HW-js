let nextId = 0;

class Base {
    constructor(id) {
        this.id = id;
    }

    getId() {
        return this.id
    }
}

class Author extends Base {
    constructor(name, age, id) {
        super(id);
        this.name = name;
        this.age = age;
    }

    info() {
        return JSON.stringify(this);
    }
}

function Publisher(name, location, id) {
    this.name = name;
    this.location = location;
    this.id = id;

    this.info = function () {
        return JSON.stringify(this);
    }

    this.getId = function () {
        return this.id;
    }
}

let book = {
    title: 'The Talisman',
    pageCount: 352,
    genre: 'Literary nonsense',
    authors: [new Author('Stephen King', 77, nextId++), new Author('Peter Straub', 79, nextId++)],
    publishers: [new Publisher('Viking Press', 'New York, USA', nextId++),
        new Publisher('Gollancz', 'London, UK', nextId++)],

    info() {
        return JSON.stringify(this);
    }
}


console.log('------ TASK #1 TESTS ------');
let bookCopy = deepCopy(book);
// let bookCopy = {...book};
// let bookCopy = JSON.parse(JSON.stringify(book));
console.log("book", book);
console.log("bookCopy", bookCopy);

console.log("--------- Equals check ---------");
isEqual("book", book, bookCopy);
isEqual("author", book.authors, bookCopy.authors);
isEqual("publisher", book.publishers, bookCopy.publishers);

function isEqual(objName, obj1, obj2) {
    console.log(`${objName} equal test: `);
    let flag = false;
    if (Array.isArray(obj1)) {
        for (let i = 0; i < obj1.length; i++) {
            if (obj1[i] === obj2[i]) flag = true;
        }
    }
    if (obj1 === obj2)
        console.error(`${objName}s are equal`);
    else if (flag)
        console.error(`Array contains equal elements`);
    else console.log(`${objName}s aren't equal`);
}

console.log("--------- Field changing check ---------");
fieldCheck("book", book, bookCopy, "title");

console.log("--------- Embedded array element changing check (element created through class) ---------");
fieldCheck("author", book.authors[0], bookCopy.authors[0], "name");

console.log("--------- Embedded array element changing check (element created through function) ---------");
fieldCheck("publisher", book.publishers[0], bookCopy.publishers[0], "name");
fieldCheck("publisher", book.publishers[0], bookCopy.publishers[0], "id");

console.log("--------- Embedded array, element's base class field changing check ---------");
fieldCheck("author", book.authors[0], bookCopy.authors[0], "id");

function fieldCheck(objName, initObj, copyObj, key) {
    console.log(`${objName} current ${key}:`, initObj[key]);
    console.log(`${objName} copy current ${key}:`, copyObj[key]);

    console.log(`Changing ${objName} ${key} ...`);
    console.log(`Changing ${objName} copy ${key} ...`);
    if (typeof initObj[key] === 'string') {
        initObj[key] += " init";
        copyObj[key] += " copy";
    } else if (typeof initObj[key] === 'number') {
        initObj[key] = nextId++;
        copyObj[key] = nextId++;
    }

    if (copyObj[key] === initObj[key]) {
        console.error(`${key}s are the same for ${objName} and ${objName} copy:`, initObj[key]);
    } else {
        console.log(`${objName} current ${key}:`, initObj[key]);
        console.log(`${objName} copy current ${key}:`, copyObj[key]);
    }
}

console.log("--------- Method call check ---------");

methodCheck("book", book, bookCopy, "info");
methodCheck("author", book.authors[0], bookCopy.authors[0], "info");
methodCheck("publisher", book.publishers[0], bookCopy.publishers[0], "info");
methodCheck("author", book.authors[0], bookCopy.authors[0], "getId");
methodCheck("publisher", book.publishers[0], bookCopy.publishers[0], "getId");

function methodCheck(objName, initObj, copyObj, key) {
    console.log(`${objName}.${key} test:`);
    console.log("Call on initial obj:", initObj[key]());
    try {
        console.log("Call on copy obj:", copyObj[key]());
    } catch (e) {
        console.error("Call on copy obj:", "ERROR - " + e.message.replace("copyObj", objName).replace("key", key));
    }
}
