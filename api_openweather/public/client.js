
const button = document.getElementById('button');
const text = document.getElementById('text');

button.addEventListener('click', function () {
    text_json = { 'citta': text.value }
    fetch('/weather', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(text_json)
    })
        .then(response => response.json())
        .then(data => console.log(data))
})