// #I2XsG6f
// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectArea(a, b) {
    return a * b;
}

// #ETGAxbEn8l
// створити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea(r) {
    return Math.PI * Math.pow(r, 2);
}

// #Mbiz5K4yFe7
// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderArea(h, r) {
    return rectArea(h, 2 * Math.PI * r) + 2 * circleArea(r);
}

// #SIdMd0hQ
// створити функцію яка приймає масив та виводить кожен його елемент
function printArray(array) {
    for (let item of array) {
        console.log(item);
    }
    document.write('<p>');
    printItem(array);
    document.write('</p>');
}

// recursive
function printItem(obj) {
    if (typeof obj === 'object' && obj) {
        let isArray = Array.isArray(obj);
        isArray ? document.write('[') : document.write('{');

        let isFirst = true;
        for (let field in obj) {
            if (!isFirst) document.write(', '); else isFirst = false;
            if (!isArray) document.write(field + ': ');
            printItem(obj[field]);
        }

        isArray ? document.write(']') : document.write('}');
    } else
        (typeof obj === 'string') ? document.write(`'${obj}'`) : document.write(obj);
}

// #59g0IsA
// створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function appendText(text) {
    let p = document.createElement('p');
    p.textContent = text;
    document.body.append(p);
}

// #hOL6126
// створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
function appendList(text) {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}

// #0Kxco1edSN
// створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function appendListElements(text, numberOfElements) {
    document.write('<ul>');
    for (let i = 0; i < numberOfElements; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

// #gEFoxMMO
// створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список (ul li)
// та виводить його через document.write
function appendArray(arr) {
    document.write('<ul>');
    for (let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

// #bovDJDTIjt
// створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function appendUsers(users) {
    document.write('<div class="users-container">');
    for (let user of users) {
        document.write('<div class="user-card">');
        for (let field in user) {
            document.write(`<p><strong>${field}:</strong> ${user[field]}</p>`);
        }
        document.write('</div>');
    }
    document.write('</div>');
}

// #pghbnSB
// створити функцію яка повертає найменьше число з масиву
function min(arr) {
    if (!arr || arr.length === 0)
        return null;
    let min = arr[0];
    for (let item of arr) {
        if (item < min) min = item;
    }
    return min;
}

// #EKRNVPM
// створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sum(arr) {
    if (!arr) return NaN;
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    return sum;
}

// #kpsbSQCt2Lf
// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, n1, n2) {
    if (!arr || arr.length < Math.max(n1, n2))
        return null;
    let buff = arr[n1];
    arr[n1] = arr[n2];
    arr[n2] = buff;
    return arr;
}

// #mkGDenYnNjn
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let currencyValue;
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            currencyValue = item.value;
        }
    }
    if (currencyValue === 0) return NaN;
    if (!currencyValue) return undefined;
    return sumUAH / currencyValue;
}