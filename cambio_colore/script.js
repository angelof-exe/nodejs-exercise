const button = document.getElementById('button');
const numero_input = document.getElementById('numero_input');
const risultato = document.getElementById('risultato');

button.addEventListener('click', function () {
    maggiore_minore(numero_input.value)
})

function maggiore_minore(input) {
    console.log(input)
    if (input > 50) {
        risultato.style.borderColor = 'green';
        risultato.textContent = "Maggiore";
        risultato.style.backgroundColor = '#9FFF83';
        console.log("maggiore")
    }
    else if (input == 50) {
        risultato.style.borderColor = 'orange';
        risultato.textContent = "Uguale";
        risultato.style.backgroundColor = '#FFDD83';
    }
    else {
        risultato.style.borderColor = 'red';
        risultato.textContent = "Minore";
        risultato.style.backgroundColor = '#FF8383';
    }
}