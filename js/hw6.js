// Task 1
let jstroke = 'js';
console.log(jstroke.toUpperCase());

// Task 2
const secondString = (array, string) => {
    return array.filter(item => item.toLowerCase().startsWith(string.toLowerCase()))
}

array = ['Сокол', 'Сова', 'Курица'];
string = 'Со';
console.log(secondString(array, string));

// Task 3
let digit = 32.58884;
console.log(Math.floor(digit));
console.log(Math.ceil(digit));
console.log(Math.round(digit));

// Task 4
let digits = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...digits));
console.log(Math.max(...digits));

// Task 5
const randomRange1to10 = () => {
    return Math.floor(Math.random() * 10) + 1
}

console.log(randomRange1to10());

// Task 6
const randomArrayRange0to = (num) => {
    let array = [];
    let i = 0;
    while (i < Math.round(num / 2)) {
        array.push(Math.floor(Math.random() * (num + 1)));
        i++;
    }
    return array;
}

console.log(randomArrayRange0to(33));

// Task 7
const randomDigitFromRange = (x, y) => {
    firstNum = Math.min(x, y);
    secondNum = Math.max(x, y);

    return Math.floor(Math.random() * secondNum) + firstNum;
}

console.log(randomDigitFromRange(5, 1));

// Task 8
let now = new Date();
console.log(now);

// Task 9
let currentDate = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000

let dateAgo73 = new Date(+currentDate + days73)
console.log(dateAgo73)

// Task 10
const dateFormatRu = (date) => {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
        "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let day = date.getDate()
    let month = months[date.getMonth()]
    let year = date.getFullYear()
    let dayName = days[date.getDay()]
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    return `Дата: ${day} ${month} ${year} — это ${dayName}.\nВремя: ${hour}:${min}:${sec}.`
}
let curDate = new Date();
console.log(dateFormatRu(curDate))