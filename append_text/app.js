const fs = require('fs');
const file = 'file.txt';


fs.readFile(file, (err, data) => {
    if (err) {
        throw err;
    }
    const content = data;

    // Invoke the next step here however you like
    console.log(content.toString);   // Put all of the code here (not the best solution)
});
