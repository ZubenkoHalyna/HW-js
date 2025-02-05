// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. .
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

{
    let firstName = 'Галина';
    let middleName = 'Андріївна';
    let lastName = 'Зубенко';

    let person = `${lastName} ${firstName} ${middleName}`;
    console.log(person);
}