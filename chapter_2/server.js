// The address of this server connected to the network is: 
// URL -> http://localhost:3001/
// IP => 127.0.0.1:3001

const express = require('express');
const app = express();
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server has started running on: http://localhost:${PORT}/`);
}) // listen to incoming request

// HTTP Verbs (method) && Routes -> Both creates the endpoint
// VERBS : GET POST PUT DELETE
// Routes: PATH

// The method informs the nature of request and the route is a further subdirectory

// Type 1: Website Endpoints -> For HTML
app.get('/', (req, res) => {
    // console.log(`Yay I hit an endpoint`);
    // console.log(`${req.method}`);
    // res.sendStatus(201);

    res.send(`<h1>Homepage</h1>`);
})

app.get('/dashboard', (req,res) => {
    res.send(`<h1>Dashboadrd</h1>`);
})

// Type 2: - Api Endpoints (Non-visual)

let data = {
    name: 'james'
}

app.get('/api/data', (req, res) => {
    console.log('This one was for data');
    res.send(data)
})



// Response 200-299 -> Successful
// Response 404 -> Fail
// Response 403 -> Not authorized
// Response 500 -> Server side