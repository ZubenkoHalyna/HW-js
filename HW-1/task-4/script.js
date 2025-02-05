// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// та вивести в консоль
{
    let info = getInfo();

    if (typeof info === 'string')
        appendText(`⚠️ ${info} Будь ласка, перезавантажте сторінку, щоб спробувати ще раз`);
    else {
        msg = `🎉 Вітаю, ${info.name}` + (info.middleName ? ' ' + info.middleName : '') +
            `, ваш вік - ${info.age}. Дякую за реєстрацію!`;
        appendText(msg);
        console.log(msg);
    }
}

function getInfo() {
    let name = prompt('Введіть своє ім\'я (це обов\'язкове поле)').trim();
    if (!name) return "Ім\'я не може бути пустим.";
    name = name[0].toUpperCase() + name.slice(1);

    let middleName = prompt('Введіть своє по-батькові (якщо є)').trim();
    if (!middleName && 'не маю' !==
        prompt('Якщо Ви не маєте по-батькові за документами, введіть "не маю" для підтвердження').trim())
        return "Сталася помилка при введенні по-батькові.";
    if (middleName)
        middleName = middleName[0].toUpperCase() + middleName.slice(1);

    let age = parseInt(prompt('Введіть свій вік цифрами', 18));
    if (!age) return "Вік введено не коректно.";
    return {name: name, middleName: middleName, age: age};
}

function appendText(msg) {
    let p = document.createElement('p');
    p.textContent = msg;
    document.body.append(p);
}