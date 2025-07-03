// The address of this server connected to the network is: 
// URL -> http://localhost:3001/
// IP => 127.0.0.1:3001

// Response 200-299 -> Successful
// Response 404 -> Fail
// Response 403 -> Not authorized
// Response 500 -> Server side


const express = require('express');
const app = express();
const PORT = 3001;


//Middleware
app.use(express.json()) // configuration in between incoming request and interpreting request. Configures server to expect JSON data


app.listen(PORT, () => {
    console.log(`Server has started running on: http://localhost:${PORT}/`);
}) // listen to incoming request

// HTTP Verbs (method) && Routes -> Both creates the endpoint
// VERBS : GET POST PUT DELETE
// Routes: PATH

// The method informs the nature of request and the route is a further subdirectory

// Type 1: Website Endpoints -> For HTML
app.get('/', (req, res) => {
    console.log(`User requested the homepage website`);
    // console.log(`${req.method}`);
    // res.sendStatus(201);

    res.send(`
        <body>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>`)
})

app.get('/dashboard', (req,res) => {
    res.send(`<body>
        <h1>Dashboard</h1>
            <a href="/">Home</a>
        </body>
        <script>console.log("This is my script.")</script>
        `)
        
})

// Type 2: - Api Endpoints (Non-visual)

let data = ['james']

app.get('/api/data', (req, res) => {
    console.log('This one was for data');
    // res.send(data)
    res.status(599).send(data);
})

app.post('/api/data', (req,res)=> {
    const newEntry = req.body
    console.log(newEntry);
    data.push(newEntry.name)
    res.sendStatus(201);
})

app.delete('/api/data', (req,res)=> {
    const newEntry = req.body
    
    data.pop()
    console.log(newEntry);
    console.log('Delete element at end of array')
    res.sendStatus(203);
})



//CRUD - Create-Post Read-Get Update-Put Delete-Delete


