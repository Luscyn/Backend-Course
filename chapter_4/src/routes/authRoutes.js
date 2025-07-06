import express from 'express';
import bcrypt from 'bcryptjs'; // encrypting password
import jwt from 'jsonwebtoken';
import prisma from '../prismaClient.js';

const router = express.Router() // mini router to e used in the main app

// Register new user
router.post('/register', async (req,res) => {
    const { username, password } = req.body
    const hashedPassword = bcrypt.hashSync(password, 8) // number of salt

    // save gilgamesh | saddjlasjd -> password hashing
    // console.log(username, password);
    // console.log(password);
    // console.log(hashedPassword);

    // save the new user and hashed password to the db
    try {
        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword
            }
        })

        // Setting up first to-do
        const defaultTodo = `Hello ${username}! Add your first todo!`;

        await prisma.todo.create({
            data: {
                task: defaultTodo,
                userId: user.id
            }
        })
        

        // Creating a token
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '24h'})
        res.json({ token }) // token to confirm that they are the right user

        

    } catch (err) {
        console.log(err.message);
        res.sendStatus(503) // broken status
    }

    // res.sendStatus(201); // Confirm if responding
    
})

router.post('/login', async (req,res)=>{
    // get email and pass and check associated with database
    // but its encrypted in database and not same w/pass
    // but we can encrypt the pass again and compare it to the encrypted in the database

    const { username, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: {
                username: username
            }
        })

        if(!user) {
            return res.status(404).send({message: 'User not found'})
        }; // Guard Clause - user not found

        const passwordIsValid = bcrypt.compareSync(password, user.password)

        if(!passwordIsValid) {
            return res.status(401).send({message: 'Invalid password'}) // Invalid password
        }

        console.log(user);
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '24h'})
        res.json({ token }) // token to confirm that they are the right user




        // if passed, then we have successful authentication
        console.log('Passed')

    } catch {
        console.log(err.message);
        res.sendStatus(503) // broken status
    }
})


// export const authRoutes = router;
export default router; // Exporting a single default value without name