import express from 'express';
import db from '../db.js';

const router = express.Router();


// Get all todos for logged-in user
router.get('/', (req,res) => {

})

// Create a new to-do
router.post('/', (req,res) => {

})

// Update to-do
// Dynamic Query Parameter, identifying which to do needs modification
router.put('/:id', (req,res) => {

})

// Delete a to-do
router.delete('/:id', (req,res) => {

})


export default router;