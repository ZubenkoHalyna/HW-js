// #I2XsG6f
// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log('rectArea(10, 4) = ' + rectArea(10, 4)); // 40
// #ETGAxbEn8l
// створити функцію яка обчислює та повертає площу кола з радіусом r
console.log('circleArea(1) = ' + circleArea(1)); // 3,1415926535897932384626433832795
// #Mbiz5K4yFe7
// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
console.log('cylinderArea(1, 1) = ' + cylinderArea(1, 1)); // 12,566370614359172953850573533118
// #SIdMd0hQ
// створити функцію яка приймає масив та виводить кожен його елемент
printArray([1, 'ABC', [1, 2, 3], true, null, 3]);
printArray([]);
printArray([
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
    }]);
// #59g0IsA
// створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
appendText("#59g0IsA");
// #hOL6126
// створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
appendList("#hOL6126");
// #0Kxco1edSN
// створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
appendListElements("#0Kxco1edSN", 5);
// #gEFoxMMO
// створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список (ul li)
// та виводить його через document.write
appendArray([1, 3, "qwertty", 86, true, "cba", false, false, 10]);
// #bovDJDTIjt
// створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
// Для кожного об'єкту окремий блок.
appendUsers([{id: 1, name: "John", age: 21}, {id: 2, name: "Jack", age: 21}]);
// #pghbnSB
// створити функцію яка повертає найменьше число з масиву
console.log(min([2, 8, 6, 0, 1, -2, 4])); //-2
// #EKRNVPM
// створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
console.log(sum([1, 2, 10])); //13
console.log(sum([])); //0
console.log(sum(null)); //NaN
// #kpsbSQCt2Lf
// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
console.log(swap([11, 22, 33, 44], 0, 1)); //[22,11,33,44]
// #mkGDenYnNjn
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD')); //400
console.log(exchange(10000, [{currency: 'EUR', value: 42}], 'USD')); //undefined
console.log(exchange(10000, [{currency: 'USD', value: 0}], 'USD')); //NaN