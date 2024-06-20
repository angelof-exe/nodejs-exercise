const button = document.getElementById('button');
const titolo = document.getElementById('titolo');
const autore = document.getElementById('autore');
const pagine = document.getElementById('pagine');
const anno = document.getElementById('anno');
const body = document.getElementById('body');
let datiLibro;
let i = 0;

prendiLibri();

function prendiLibri() {
    fetch('/getLibri', {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET',
        // body: JSON.stringify(datiLibro)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(`Lunghezza del JSOn ${Object.keys(data[0]).length} + 1`);
        })
}


button.addEventListener('click', function () {
    datiLibro = {
        'titolo': titolo.value,
        'autore': autore.value,
        'pagine': pagine.value,
        'anno': anno.value
    }

    // console.log(datiLibro);

    fetch('/sendData', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(datiLibro)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            button.insertAdjacentHTML("afterend", createComponent(data));
            i++;
        })
    // .then(button.insertAdjacentHTML("afterend", `<br><span id="titolo">provaaaa</span>`))
    // .then(response => response.text())
})

function createComponent(data) {
    return `
            <br>
            <h3>Libro numero ${i + 1}</h3>
            <span id="titolo"><span style="font-weight: bold;">TITOLO: </span>${data[i]["titolo"]}</span>
            <span id="autore"><span style="font-weight: bold;">AUTORE: </span>${data[i]["autore"]}</span>
            <span id="n_pagine"><span style="font-weight: bold;">N. PAGINE: </span>${data[i]["pagine"]}</span>
            <span id="anno"><span style="font-weight: bold;">ANNO: </span>${data[i]["anno"]}</span>
            `;
}

function stampaLibriEsistenti(data) {
    for (let index = 0; index < array.length; index++) {


    };
}