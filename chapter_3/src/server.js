import express from 'express';

const app = express();

const PORT = process.env.PORT || 5000;;

app.listen(PORT, ()=> {
    console.log(`Server has started running on http://localhost:${PORT}/ `);
})

app.get('/', (req,res) => {
    res.send('Hello')
})