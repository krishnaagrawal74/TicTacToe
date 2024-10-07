const boxes = document.querySelectorAll('.box');
var user1 = true;
var user2 = false;
var gameOver = false; // Flag to prevent clicks after game ends
const resultbox = document.querySelector('.result');
const boxlist = Array.from(boxes);
const endbtn = document.querySelector("#endgame");
const nav = document.querySelector('nav')
const outer = document.querySelector('.outer');
const container = document.querySelector('.container')

const winningCombinations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [6, 4, 2]  // Diagonal 2
];

function checkWin(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return boxlist[index].innerHTML === player;
        });
    });
}

boxlist.forEach(function toggleClass(box) {
    box.addEventListener('click', (e) => {
        if (gameOver) return; // Prevent further clicks if game is over

        if (user1 && !e.target.innerHTML) {
            e.target.innerHTML = "X";
            user1 = false;
            user2 = true;
        } else if (user2 && !e.target.innerHTML) {
            e.target.innerHTML = "O";
            user2 = false;
            user1 = true;
        }

        setTimeout(() => {
            if (checkWin("X")) {
                resultbox.innerHTML = "X WINS!";
                endbtn.innerHTML = "New Game";
                resultbox.style.display = "flex";
                gameOver = true; // Set gameOver flag to true
            } else if (checkWin("O")) {
                resultbox.innerHTML = "O WINS!";
                endbtn.innerHTML = "New Game";
                resultbox.style.display = "flex";
                gameOver = true; // Set gameOver flag to true
            }else if (boxlist.every(box => box.innerHTML !== '')) {
                resultbox.innerHTML = "DRAW!";
                endbtn.innerHTML = "New Game";
                resultbox.style.display = "flex";
                gameOver = true; // Set gameOver flag to true
            }
            
        }, 0);
    });
});

endbtn.addEventListener('click', () => {
    boxes.forEach(box => {
        box.innerHTML = "";
    });
    resultbox.innerHTML = "";
    resultbox.style.display = "hidden";
    gameOver = false; // Reset gameOver flag
    user1 = true; // Reset user turns
    user2 = false;
    endbtn.innerHTML = "End Game";

});


// for toggle theme
const toggle = document.getElementById('toggle');
const body = document.querySelector('body')
toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    nav.classList.toggle('active');
    outer.classList.toggle('active');
    container.classList.toggle('active');
}