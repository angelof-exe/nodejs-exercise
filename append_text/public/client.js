const button = document.getElementById('submitBtn');
const testo_input = document.getElementById('testo_input')

button.addEventListener('click', function () {
    // console.log(testo_input.value)
    fetch('/send', {
        method: 'POST',
        body: testo_input.value
    })
        .then(response => response.text())
        // console.log(response.text())
        .then(data => console.log(data))
    // .catch((error) => {
    //     console.error('Error:', error);
    // });
})