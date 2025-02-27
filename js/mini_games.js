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
            break
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
            break
        }

        if (userAnswer === taskAnswer) {
            alert('Поздравляю! Ты решил верно!');
            if (confirm('Поиграем еще?')) {
                solveTaskGame2();
            }
            break;
        } else {
            if (!confirm('Неверно( Попробуешь ещё?')) {
                break
            }
        }

    } while (userAnswer !== taskAnswer);
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