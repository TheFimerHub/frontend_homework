// Task 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
console.log(people.sort((a, b) => a.age - b.age));


// Task 2
function isPositive(num) {
    if (num > 0) {
        return true;
    }
    return false;
}
function isMale(person) {
    if (person.gender === 'male') {
        return true;
    }
    return false;
}
function filter(array, callback) {
    let output = [];
    for (value of array) {
        if (callback(value)) {
            output.push(value)
        }
    }
    return output
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter(people2, isMale));

// Task 3
const timer3X30 = () => {
    let timerInteraval = setInterval(() => {
        console.log(new Date())
    }, 3000)
    
    setTimeout(() => {
        clearInterval(timerInteraval)
        console.log('Время истекло!')
    }, 1000 * 30)
}

timer3X30()

// Task 4
function delayForSecond(callback) {
    setTimeout(() => {
        callback()
    }, 1000)
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

// Task 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'))