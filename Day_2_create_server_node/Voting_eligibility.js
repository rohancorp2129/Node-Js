const http = require('http');

const app = http.createServer((req, res) => {

    const name = "Rohan";
    const age = 18; 
    
    res.write("<h1>Hello Dear</h1>");
    res.write("Welcome to Node.js Server<br><br>");

    res.write(`<h2>Voting Eligibility Check</h2>`);
    res.write(`Name: <strong>${name}</strong><br>`);
    res.write(`Age: <strong>${age}</strong><br><br>`);

    if (age >= 18) {
        res.write(`<div style='padding: 10px; background-color: green; color: white; width: fit-content;'> ${name}, You are eligible to vote!</div>`);
    } else {
        res.write(`<div style='padding: 10px; background-color: red; color: white; width: fit-content;'> ${name}, You are not eligible to vote.</div>`);
    }

    res.end(); // must to end response
});

// Must we need to pass port to listen incoming request
app.listen(3001, () => {
    console.log("Server is running........... on 3001 port");
});
