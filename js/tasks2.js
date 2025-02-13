// Task 1
let password = 'password123';
let user_password = prompt('Введите пароль');
if (user_password === password) {
    alert('Пароль введен верно')
} else {
    alert('Пароль введен неправильно')
};

// Task 2
let с = prompt('Введите число');
if (c > 0 && c < 10) {
    alert('Верно')
} else {
    alert('Неверно')
}

// Task 3
let d = prompt('Введите число');
let e = prompt('Введите число');
if (d > 100 || e > 100) {
    alert('Верно')
} else {
    alert('Неверно')
}

// Task 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));


// Task 5
let monthNumber = prompt('Напишите номер месяца')

if (monthNumber > 12) {
    console.log('Неверный номер месяца')
} else {
    switch (Number(monthNumber)) {
        case 1:
        case 2: 
        case 12:
            console.log('Зима')
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна')
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето')
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень')
            break;
        default:
            console.log('Неверный номер месяца')
    }
}