function guessNumber() {
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

        if (userAnswer === randomNumber) {
            alert('Поздравляю! Ты угадал число!');
            break;
        }

        const message = userAnswer < randomNumber 
        ? "Загаданное число больше." 
        : "Загаданное число меньше."
            
        alert(message);

    } while (userAnswer !== randomNumber);
}