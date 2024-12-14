/* let age = prompt ('Введите возраст', Number());
let message;

if (age >= 21) {
    message = 'Разрешить вход в заведение и покупку алкаголя.';
} else if (age >= 19) {
    message = 'Разрашеить вход в заведение и запретить покупку алкаголя.';
} else {
    message = 'Запретить вход.';
}

console.log(message); */

/* let id = true;
let message = id === true ? 'Allowed' : 'Denied';
console.log(message); */

/* let randomNumber;
randomNumber = Math.random();
randomNumber = randomNumber * 6;
randomNumber = Math.floor(randomNumber);

let zapros = prompt('Введите вопрос');

let message = zapros;
console.log(message);

switch (randomNumber) {
    case 0:
        console.log('Может быть.');
        break;
    case 1:
        console.log('Да.');
        break;
    case 2:
        console.log('Нет.');
        break;
    case 3:
        console.log('Скорее нет.');
        break;
    case 4:
        console.log('Скорее да.');
        break;
    case 5:
        console.log('Шар не знает.');
        break;
    case 6:
        console.log('Спроси снова.');
} */

/* document.getElementById('playButton').onclick = function () {

let playerOne = ['Rock', 'Scissors', 'Paper'];
let playerTwo = ['Rock', 'Scissors', 'Paper'];
let randomItemOne = playerOne[Math.floor(Math.random() * playerOne.length)];
let randomItemTwo = playerTwo[Math.floor(Math.random() * playerTwo.length)];
let game = (randomItemOne + ' |vs| ' +  randomItemTwo);

    console.log(game);
document.getElementById('gameResult').innerText = game;

if (
    (randomItemOne === 'Rock' && randomItemTwo === 'Scissors') ||
    (randomItemOne === 'Scissors' && randomItemTwo === 'Paper') ||
    (randomItemOne === 'Paper' && randomItemTwo === 'Rock')
) {
    console.log('Player One Win.');
    document.getElementById('gameResult').innerText += '\nPlayer One Win';

} else if (
    (randomItemTwo === 'Rock' && randomItemOne === 'Scissors') ||
    (randomItemTwo === 'Scissors' && randomItemOne === 'Paper') ||
    (randomItemTwo === 'Paper' && randomItemOne === 'Rock')
) {
    document.getElementById('gameResult').innerText += '\nPlayer Two Win';
    console.log('Player Two Win.');
} else {
    console.log('Draw.');
    document.getElementById('gameResult').innerText += '\nDraw';
}
}; */
document.addEventListener("DOMContentLoaded", function() {



document.getElementById('playButton').onclick = function () {
    let playerOne = ['Rock', 'Scissors', 'Paper'];
    let playerTwo = ['Rock', 'Scissors', 'Paper'];
    let randomItemOne = playerOne[Math.floor(Math.random() * playerOne.length)];
    let randomItemTwo = playerTwo[Math.floor(Math.random() * playerTwo.length)];
    let game = randomItemOne + ' |vs| ' + randomItemTwo;

    // Отображаем результат на странице
    document.getElementById('gameResult').innerText = game;

    if (
        (randomItemOne === 'Rock' && randomItemTwo === 'Scissors') ||
        (randomItemOne === 'Scissors' && randomItemTwo === 'Paper') ||
        (randomItemOne === 'Paper' && randomItemTwo === 'Rock')
    ) {
        document.getElementById('gameResult').innerText += '\nPlayer One Win';
    } else if (
        (randomItemTwo === 'Rock' && randomItemOne === 'Scissors') ||
        (randomItemTwo === 'Scissors' && randomItemOne === 'Paper') ||
        (randomItemTwo === 'Paper' && randomItemOne === 'Rock')
    ) {
        document.getElementById('gameResult').innerText += '\nPlayer Two Win';
    } else {
        document.getElementById('gameResult').innerText += '\nDraw';
    }
};
})