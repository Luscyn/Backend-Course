import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router() // mini router to e used in the main app

router.post('/register', (req,res) => {

})

router.post('/login', (req,res)=>{

})


// export const authRoutes = router;
export default router; // Exporting a single default value without name