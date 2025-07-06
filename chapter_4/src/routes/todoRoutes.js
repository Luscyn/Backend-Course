import express from 'express';
import prisma from '../prismaClient.js';

const router = express.Router();


// Get all todos for logged-in user
router.get('/', async (req,res) => {
    const todos = await prisma.todo.findMany({
        where: {
            userId: req.userId
        }
    })
    res.json(todos);
})

// Create a new to-do
router.post('/', async (req,res) => {
    const { task } = req.body;
    
    const todo = await prisma.todo.create({
        data: {
            task,
            userId: req.userId
        }
    })

    res.json(todo)
})

// Update to-do
// Dynamic Query Parameter, identifying which to do needs modification
router.put('/:id', async (req,res) => {
    const { completed } = req.body;
    const { id } = req.params;

    const updatedToDo = await prisma.todo.update({
        where: {
            id: parseInt(id),
            userId: req.userId
        },
        data:  {
            completed: !!completed
        }
    })
    
    res.json(updatedToDo)
})

// Delete a to-do
router.delete('/:id', async (req,res) => {
    const  userId = req.userId;
    const { id } = req.params;

    await prisma.todo.delete({
        where: {
            id: parseInt(id),
            userId
        }
    })

    res.send({ message: "Todo deleted"})
})


export default router;