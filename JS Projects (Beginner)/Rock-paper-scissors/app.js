// 0 -> Paper
// 1 -> Rock
// 2 -> Scissor
let choices = [0, 1, 2];
let CPU_choice = null;

//Button
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');
const rockBtn = document.getElementById('rockBtn');

//Text
const CPU_choice_text = document.getElementById('CPU_choice');
const status_text = document.getElementById('status');
const player_points_text = document.getElementById('player_points')
const CPU_points_text = document.getElementById('CPU_points')


paperBtn.addEventListener('click', function () {
    checkWinner(0);
});

rockBtn.addEventListener('click', function () {
    checkWinner(1);
});

scissorBtn.addEventListener('click', function () {
    checkWinner(2);
});


// 0 -> Paper | Carta
// 1 -> Rock | Sasso
// 2 -> Scissor | Forbici
function checkWinner(player_choice) {
    CPU_choice = Math.floor(Math.random() * 3);
    printCpuChoice(CPU_choice);
    if (player_choice == CPU_choice)
        return;


    if ((player_choice == 0 && CPU_choice == 1) || (player_choice == 2 && CPU_choice == 0) || (player_choice == 1 && CPU_choice == 2))
        player_points_text.textContent++;
    else CPU_points_text.textContent++;

    if ((player_points_text.textContent >= 5) || (CPU_points_text.textContent >= 5)) {
        if (player_points_text > CPU_points_text) {
            status_text.textContent = "Hai Vinto!";
            status_text.style.color = "green";
        }
        else {
            status_text.textContent = "Hai Perso!";
            status_text.style.color = "red";
        }
        const myTimeOut = setTimeout(reloadWindow, 5000);
        paperBtn.classList.add("disabled");
        rockBtn.classList.add("disabled");
        scissorBtn.classList.add("disabled");
        document.getElementById("refresh_page").textContent = "La pagina verrà riavviata fra 5 secondi";
    }
}

function reloadWindow() {
    location.reload()
}


// 0 -> Paper | Carta
// 1 -> Rock | Sasso
// 2 -> Scissor | Forbici
function printCpuChoice(choice) {
    switch (choice) {
        case 0:
            CPU_choice_text.textContent = "Carta";
            break;
        case 1:
            CPU_choice_text.textContent = "Sasso";
            break;
        case 2:
            CPU_choice_text.textContent = "Forbici";
            break;
        default:
            break;
    }
}