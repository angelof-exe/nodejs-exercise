const button = document.getElementById('button');
const titolo = document.getElementById('titolo');
const autore = document.getElementById('autore');
const pagine = document.getElementById('pagine');
const anno = document.getElementById('anno');
const display = document.getElementById('display');

let datiLibro;
let i = 0;

prendiLibri();

//Fa dei check sull'inseirmento corretto di valori negli input
function checkInp() {
    if (!titolo.value || !autore.value || !pagine.value || !anno.value) {
        alert("Tutti i campi sono obbligatori.");
        return false;
    }
    if (isNaN(pagine.value) || isNaN(anno.value)) {
        alert("I campi Numero Pagine e Anno di rilascio devono essere numeri.");
        return false;
    }
    return true;
}

function prendiLibri() {
    fetch('/getLibri', {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            stampaLibriEsistenti(data);
        });
}

button.addEventListener('click', function () {
    if (checkInp() == true) {
        datiLibro = {
            'titolo': titolo.value,
            'autore': autore.value,
            'pagine': pagine.value,
            'anno': anno.value
        }

        fetch('/sendData', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(datiLibro)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                display.innerHTML = ''; // Pulisci il display prima del rendering
                stampaLibriEsistenti(data);
            });
    }
});

function createComponent(libro, index) {
    // return `
    //     <div>
    //         <h3>Libro numero ${index + 1}</h3>
    //         <span><span style="font-weight: bold;">TITOLO: </span>${libro.titolo}</span><br>
    //         <span><span style="font-weight: bold;">AUTORE: </span>${libro.autore}</span><br>
    //         <span><span style="font-weight: bold;">N. PAGINE: </span>${libro.pagine}</span><br>
    //         <span><span style="font-weight: bold;">ANNO: </span>${libro.anno}</span><br>
    //     </div>
    //     <br>
    // `;
    return `
    <div class="card mx-4" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${libro.titolo}</h5>
            <p class="card-text"><span style="font-weight: bold;">AUTORE: </span>${libro.autore}</p>
            <p class="card-text"><span style="font-weight: bold;">N. PAGINE: </span>${libro.pagine}</p>
            <p class="card-text"><span style="font-weight: bold;">ANNO: </span>${libro.anno}</p>
        </div>
    </div>
    `;
}

function stampaLibriEsistenti(data) {
    display.innerHTML = '';
    data.forEach((libro, index) => {
        display.innerHTML += createComponent(libro, index);
    });
}
