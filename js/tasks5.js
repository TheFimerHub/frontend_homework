// Task 1
let list1 = [1, 5, 4, 10, 0, 3];

for (let i of list1) {
    console.log(i)
    if (i === 10) {
        break
    }
}

// Task 2
let list2 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i <= list2.length; i++) {
    if (list2[i] === 4) {
        console.log(i);
    }
}

// Task 3
let list3 = [1, 3, 5, 10, 20];
console.log(list3.join(' '));

// Task 4
let multiArray = []

for (let x = 0; x < 3; x++) {
    multiArray.push([]);
    for (let y = 0; y < 3; y++) {
        multiArray[x].push(1);
    }
}

console.log(multiArray)

// Task 5
let list5 = [1, 1, 1];
list5.push(2, 2, 2);
console.log(list5);

// Task 6
let list6 = [9, 8, 7, 'a', 6, 5];
list6.sort().pop();
console.log(list6);

// Task 7
let list7 = [9, 8, 7, 6, 5];
let answer = ''
while (true) {
    const answer = list7[Math.floor(Math.random() * list7.length)];
    if (confirm('Попробуй угадать число!') === false) {
        break
    } else {
        while (true) {
            userAnswer = prompt('Введи число:')
            if (Number(userAnswer) === answer) {
                alert(`Вы угадали это число ${answer}`)
                break
            } else {
                if (confirm('Попробуешь угадать снова?') === false) {
                    break
                }
            } 
        }
    }
    break
}

// Task 8
let string = 'abcdef';
const reverse = (str) => str.split('').reverse().join('');
console.log(reverse(string));

// Task 9
const array = [[1, 2, 3], [4, 5, 6]];
console.log([...array[0], ...array[1]])

// Task 10
list10 = []

for (let i = 0; i < 10; i++) {
    list10.push(Math.floor(Math.random() * 10) + 1)
}

for (let i = 0; i < list10.length - 1; i++) {
    console.log(`Сумма элементов ${list10[i]} и ${list10[i + 1]} равна ${list10[i] + list10[i + 1]}`);
}

console.log(list10)

// Task 11
const getSquares = (numbers) => numbers.map(number => number ** 2);

console.log(getSquares([1, 2, 3, 4, 5]));


// Task 12
const textToLength = (textList) => textList.map(text => text.length);
console.log(textToLength(['abc', 'ab', 'c']));

// Task 13
const getNegativeNumbers = (numbers) => {
    return numbers.filter(number => number < 0);
}

console.log(getNegativeNumbers([1, -2, 3, -4, 5, -6]));

// Task 14
list14 = []
for (let i = 0; i < 10; i++) {
    list14.push(Math.floor(Math.random() * 10))
}

const getEvenNumbers = (numbers) => numbers.filter(num => num % 2 === 0)
console.log(getEvenNumbers(list14))

// Task 15
const list15 = [];

for (let i = 0; i < 6; i++) {
    list15.push(Math.floor(Math.random() * 10) + 1);
}

const average = list15.reduce((sum, num) => sum + num, 0) / list15.length;

console.log(`Среднее арифметическое чисел ${list15.join(', ')} равно ${average}`);
