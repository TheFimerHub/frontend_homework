function guessNumberGame1() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const startGame = confirm('Попробуй угадать число от 1 до 100! Погнали?');

    if (!startGame) {
        return;
    }

    let userAnswer;
    
    do {
        userAnswer = Number(prompt('Попробуй ввести число:'));
        
        if (isNaN(userAnswer)) {
            alert('Пожалуйста, введите числовое значение');
            continue;
        }
        
        if (!userAnswer) {
            break;
        }
        
        if (userAnswer === randomNumber) {
            alert('Поздравляю! Ты угадал число!');
            if (confirm('Поиграем еще?')) {
                guessNumberGame1();
            }
            break;
        }
        
        const message = userAnswer < randomNumber 
        ? "Загаданное число больше." 
        : "Загаданное число меньше."
        
        alert(message);
        
    } while (userAnswer !== randomNumber);
}

function generateTask() {
    const operators = ['+', '-', '/', '*'];
    const operatorIndex = Math.floor(Math.random() * operators.length);
    const operator = operators[operatorIndex];
    
    let num1, num2, taskAnswer;
    
    switch(operator) {
        case '+':
        case '-':
            num1 = Math.floor(Math.random() * 29) + 1;
            num2 = Math.floor(Math.random() * 29) + 1;
            taskAnswer = operator === '+' ? num1 + num2 : num1 - num2;
            break;
            
        case '/':
            num2 = Math.floor(Math.random() * 9) + 1;
            num1 = num2 * (Math.floor(Math.random() * 9) + 1);
            taskAnswer = num1 / num2;
            break;
            
        case '*':
            num1 = Math.floor(Math.random() * 9) + 1;
            num2 = Math.floor(Math.random() * 9) + 1;
            taskAnswer = num1 * num2;
            break;
    }
    
    const task = `${num1} ${operator} ${num2}`;
    return [task, taskAnswer];
}

function solveTaskGame2() {
    const task = generateTask()
    const taskView = task[0]
    const taskAnswer = task[1]

    const startGame = confirm('Попробуй решать задачи! Погнали?');

    if (!startGame) {
        return;
    }
    
    do {
        userAnswer = Number(prompt(`Попробуй решить задачу: ${taskView}`));

        if (isNaN(userAnswer)) {
            alert('Пожалуйста, введите числовое значение');
            continue;
        }

        if (!userAnswer) {
            break;
        }

        if (userAnswer === taskAnswer) {
            alert('Поздравляю! Ты решил верно!');
            if (confirm('Поиграем еще?')) {
                solveTaskGame2();
            }
            break;
        } else {
            if (!confirm('Неверно( Попробуешь ещё?')) {
                break;
            }
        }

    } while (userAnswer !== taskAnswer);
}

function reverseTextGame3() {
    const startGame = confirm('Вы вводите текст, а мы его переворачиваем! Погнали?');

    if (!startGame) {
        return;
    }

    while (true) {
        userText = prompt('Введите текст:');

        if (userText === '' || userText === null) {
            alert('Пожалуйста, введите текст');
            continue;
        }

        if (!userText) {
            break;
        }

        reverseText = String(userText).split('').reverse().join('');

        alert('Вот ваше перевернутое слово: ' + reverseText);

        if (confirm('Поиграем еще?')) {
            reverseTextGame3();
        } else {
            return;
        }

    }

    
}

function quizGame4() {
    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    const startGame = confirm('Давай пройдем викторину! Играем?');

    let userAnswer;
    let rightAnswers = 0;

    if (!startGame) {
        return;
    }

    for (task of quiz) {
        userAnswer = prompt(
            task.question 
            + '\nВарианты ответов:\n' 
            + task.options.join('\n') 
            + '\nНапишите варианты от 1 до 3.'
        );
        
        if (!userAnswer) {
            break;
        }

        if (isNaN(userAnswer) || userAnswer === '' || userAnswer === null) {
            alert('Пожалуйста, введите число');
            continue;
        }

        if (Number(userAnswer) < 0 || Number(userAnswer) > 3) {
            alert('Пожалуйста, введите число от 1 до 3');
            continue;
        }


        if (Number(userAnswer) === task.correctAnswer) {
            alert('Всё верно! Идем дальше.');
            rightAnswers++;

        } else {
            alert('Неверно :( Правильный ответ: ' + task.options[task.correctAnswer - 1]);
        }
    }

    alert(`Вы ответили правильно на ${rightAnswers} из 3 вопросов.`)

    if (confirm('Поиграем еще?')) {
        quizGame4();
    } else {
        return;
    }
}

function rockPaperScissorsGame5() {
    const actions = ["камень", "ножницы", "бумага"];

    const startGame = confirm('Давай поиграем в камень ножницы бумага! Летс го?');

    if (!startGame) {
        return;
    }

    let randomAction = Math.floor(Math.random() * actions.length);

    while (true) {
        let userAnswer = prompt('Выбирай:\n1. Камень 2. Ножницы 3. Бумага\nНапишите варианты от 1 до 3.');

        if (!userAnswer) {
            break;
        }
    
        if (isNaN(userAnswer) || userAnswer === '' || userAnswer === null) {
            alert('Пожалуйста, введите число');
            continue;
        }
    
        if (Number(userAnswer) < 0 || Number(userAnswer) > 3) {
            alert('Пожалуйста, введите число от 1 до 3');
            continue;
        }
    
        let userAction = userAnswer - 1;

        if (userAction === randomAction) {
            alert('У вас ничья!');
        } else {
            if (userAction === 0 && randomAction === 2 
                || userAction === 1 && randomAction === 0
                || userAction === 2 && randomAction === 1) {
                    alert(`Вы проиграли :(\nУ вас ${actions[userAction]}, у него ${actions[randomAction]}`);
                } else {
                    alert(`Вы выиграли!\nУ вас ${actions[userAction]}, у него ${actions[randomAction]}`);
                }
        }

        if (confirm('Поиграем еще?')) {
            rockPaperScissorsGame5();
        } else {
            return;
        }
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function changeBgColorGame6() {
    const aboutSection = document.querySelector('.about');
    const mgamesSection = document.querySelector('.mgames');
    let randomColor = getRandomColor();
    aboutSection.style.backgroundColor = randomColor
    mgamesSection.style.backgroundColor = randomColor
};
