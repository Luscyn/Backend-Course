import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
// import { authRoutes } from './routes/authRoutes.js' // - when importing named export
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import authMiddleware from './middleware/authMiddleware.js';



const app = express();

const PORT = process.env.PORT || 5001;;


// Get the file path from the URL of the current module

const __filename = fileURLToPath(import.meta.url);
// Get dir name from the file path
const __dirname = dirname(__filename)

// Middleware
app.use(express.json()); // parses JSON request bodies

// Serves the HTML File from the /public directory and tells express to 
// serve all files frm the public folder as static assets file. Any 
// requests for the css files will be resolved to the public directory
app.use(express.static(path.join(__dirname, '../public')));


app.get('/', (req,res) => {
    // res.send('Hello')
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


// Routes
         //auth  //{our route} ->  /auth/{route}
app.use('/auth', authRoutes); // All authentication routes
app.use('/todos', authMiddleware, todoRoutes); 


app.listen(PORT, ()=> {
    console.log(`Server has started running on http://localhost:${PORT}/ `);
})
