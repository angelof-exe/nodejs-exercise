const bordo_colore = document.getElementById('bordo_colore');
const testo_numero = document.getElementById('testo_numero');


setInterval(cambiacolore, 2000);

function cambiacolore() {
    numero_random = Math.floor(Math.random() * 101);
    console.log(numero_random);
    testo_numero.textContent = numero_random;

    if (numero_random <= 33) { // rosso
        bordo_colore.style.border = '3px solid red';
        bordo_colore.style.backgroundColor = '#ffb3b3';
    }
    else if (33 < numero_random && numero_random <= 66) { // arancione
        bordo_colore.style.border = '3px solid orange';
        bordo_colore.style.backgroundColor = '#ffc299';
    }
    else if (numero_random > 66) { //verde
        bordo_colore.style.border = '3px solid green';
        bordo_colore.style.backgroundColor = '#c2f0c2';
    }

}