const button = document.getElementById('btn');

button.addEventListener('click', function () {
    fetch('/get_data')
        .then(response => response.text())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });
})