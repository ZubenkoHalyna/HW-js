// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// та вивести в консоль
{
    let name = prompt('Введіть своє ім\'я').trim();
    while (!name) {
        name = prompt('Введіть своє ім\'я (це обов\'язкове поле)').trim();
    }
    name = name[0].toUpperCase() + name.slice(1);

    let middleName;
    let confirmation = false;
    do {
        middleName = prompt('Введіть своє по-батькові (якщо є)').trim();
        if (!middleName)
            confirmation = 'не маю' ===
                prompt('Якщо ви не маєте по-батькові за документами, введіть "не маю" для підтвердження')
                    .trim().toLowerCase();
    } while (!middleName && !confirmation);
    if (middleName)
        middleName = middleName[0].toUpperCase() + middleName.slice(1);

    let age;
    do {
        let msg = (age === undefined) ? 'Введіть свій вік:' : 'Введіть свій вік цифрами:';
        let ageString = prompt(msg, '18');
        age = parseInt(ageString);
    } while (!age);

    let output = (middleName) ?
        `Привіт, ${name} ${middleName}, ваш вік - ${age}. Дякуємо за реєстрацію!`
        : `Привіт, ${name}, ваш вік - ${age}. Дякуємо за реєстрацію!`;
    console.log(output);
}