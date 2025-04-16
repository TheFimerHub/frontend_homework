// Task 1
let i = 0;
while (i < 2) {
    console.log('Привет')
    i++
};

// Task 2
for (let a = 1; a <= 5; a++) {
    console.log(a);
}

// Task 3
for (let b = 7; b <= 22; b++) {
    console.log(b)
}

// Task 4
const obj = {
    "Коля": '200',
    "Вася": '300', 
    "Петя": '400'
};

for (let key in obj) {
    console.log(key + ' — ' + obj[key] + '$')
}

// Task 5
let c = 1000;
while (c >= 50) {
    c /= 2;
}
console.log(c)

// Task 6
let firstFriday = 5;
let currentDate = firstFriday;

while (currentDate <= 31) {
    console.log(`Сегодня пятница, ${currentDate}-е число. Необходимо подготовить отчет.`);
    currentDate += 7;
}

