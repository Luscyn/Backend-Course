import express from 'express';
import db from '../db.js';

const router = express.Router();


// Get all todos for logged-in user
router.get('/', (req,res) => {
    const getTodos = db.prepare(`SELECT * FROM todos WHERE user_id = ?`);
    const todos = getTodos.all(req.userId);
    res.json(todos);
})

// Create a new to-do
router.post('/', (req,res) => {
    const { task } = req.body;
    const insertToDo = db.prepare(`INSERT INTO todos (user_id, task) VALUES (?, ?)`);

    const result = insertToDo.run(req.userId, task);

    res.json({id: result.lastInsertRowid, task, completed: 0})
})

// Update to-do
// Dynamic Query Parameter, identifying which to do needs modification
router.put('/:id', (req,res) => {
    const { completed } = req.body;
    const { id } = req.params;

    const updatedToDo = db.prepare(`UPDATE todos SET completed = ? WHERE id = ?`);
    
    const result = updatedToDo.run(completed, id);

    res.json({ message: "Todo Completed" })
})

// Delete a to-do
router.delete('/:id', (req,res) => {
    const  userId = req.userId;
    const { id } = req.params;

    const  deleteToDo = db.prepare(`DELETE from todos WHERE id = ? AND user_id = ?`);
    deleteToDo.run(id, userId)
    res.send({ message: "Todo Deleted"})
})


export default router;