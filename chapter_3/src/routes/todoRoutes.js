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
// Dynamic Query Parameter
router.put('/:id', (req,res) => {

})

export default router;