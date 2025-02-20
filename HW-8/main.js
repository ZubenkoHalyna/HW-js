// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
function addFunctions(objFrom, objTo) {
    if (typeof objFrom === 'object')
        if (Array.isArray(objFrom)) {
            for (let i = 0; i < objFrom.length; i++)
                addFunctions(objFrom[i], objTo[i]);
        } else {
            Object.setPrototypeOf(objTo, Object.getPrototypeOf(objFrom));

            for (let key in objFrom)
                if (typeof objFrom[key] === 'object')
                    addFunctions(objFrom[key], objTo[key]);
                else if (typeof objFrom[key] === 'function')
                    objTo[key] = objFrom[key].bind(objTo);
        }
}

function deepCopy(obj) {
    let objCopy = JSON.parse(JSON.stringify(obj));
    addFunctions(obj, objCopy);
    return objCopy;
}

// #iz6emEsP2BA
console.log('------ TASK #2 ------');
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

console.log(coursesAndDurationArray.map((v, k) => ({...v, id: k + 1})));