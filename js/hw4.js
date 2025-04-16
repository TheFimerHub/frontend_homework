// Task 1
const minValue = (a, b) => {
    const numA = Number(a);
    const numB = Number(b);
    
    if (isNaN(numA) || isNaN(numB)) {
        return "Пожалуйста, введите числовые значения";
    }
    
    if (numA < numB) {
        return numA;
    } else {
        return numB;
    }
}

const firstValue = prompt('Введите первое значение:');
const secondValue = prompt('Введите второе значение:');
console.log(minValue(firstValue, secondValue));

// // Task 2
// const evenOdd = (a) => {
//     const num = Number(a);

//     if (isNaN(num)) {
//         return "Пожалуйста, введите числовые значение";
//     }

//     if (num % 2) {
//         return 'Число нечетное'
//     } else {
//         return 'Число четное'
//     }
// }

// const number = prompt('Введите число:');
// console.log(evenOdd(number));

// // Task 3
// const squareNum = (a) => {
//     const num = Number(a);

//     if (isNaN(num)) {
//         return "Пожалуйста, введите числовое значение";
//     }

//     return console.log(num ** 2);
// }

// const squareNumReturn = (a) => {
//     const num = Number(a);

//     if (isNaN(num)) {
//         return "Пожалуйста, введите числовое значение";
//     }

//     return num ** 2;
// }

// const forSquare = prompt('Введите число:');
// squareNum(forSquare);
// console.log(squareNumReturn(forSquare));

// // Task 4
// const ageWelcome = () => {
//     age = prompt('Сколько вам лет?')
    
//     if (isNaN(age) || age < 0) {
//         alert("Пожалуйста, введите корректное значение");
//         return;
//     }

//     if (age <= 12) {
//         alert('Привет, друг!')
//     } else {
//         alert('Добро пожаловать!')
//     }
// }

// ageWelcome()

// // Task 5
// const multValue = (a, b) => {
//     const numA = Number(a);
//     const numB = Number(b);
    
//     if (isNaN(numA) || isNaN(numB)) {
//         return "Одно или оба значения не являются числом";
//     } else {
//         return numA * numB;
//     }
// }

// const multNum = prompt('Введите число:')
// console.log(multValue(multNum))

// // Task 6 
// const cubeNum = () => {
//     const num = Number(prompt('Введите число:'));

//     if (isNaN(num)) {
//         return 'Переданный параметр не является числом';
//     }

//     return `${num} в кубе равняется ${num ** 3}`;
// }

// console.log(cubeNum());

// // Task 7
// const circle1 = {
//     radius: 10,
//     getArea: function() {
//         return Math.PI * this.radius ** 2;
//     },
//     getPerimeter: function() {
//         return Math.PI * this.radius * 2;
//     }
// }

// const circle2 = {
//     radius: 20,
//     getArea: function() {
//         return Math.PI * this.radius ** 2;
//     },
//     getPerimeter: function() {
//         return Math.PI * this.radius * 2;
//     }
// }

// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());

