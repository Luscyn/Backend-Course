import jwt from 'jsonwebtoken';

function authMiddleware (req, res, next) {
    const token = req.headers['authorization']

    if (!token) {
        return res.status(401).json({message: "No Token provided"})
    } // Guard Clause

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=> {
        if (err){
            return res.status(401).json({message: "Invalid Token"});
        }

        req.userId = decoded.id;
        next(); // Just means that we can proceed to the todoRoutes

        
    })

}

export default authMiddleware;