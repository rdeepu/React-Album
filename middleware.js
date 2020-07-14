require('dotenv').config();

const jwt = require('jsonwebtoken');



const withAuth = (req,res,next)=>{
const token = req.cookies.token

if(!token){
       res.status(401).send('Unauthorized to access this site')
} else {
   
    jwt.verify(token,process.env.TOKEN_SECRET,(err,decoded)=>{
      
        if (err){
            
            res.status(401).send('Unauthorized: Invalid token');
        } else {
            
        req.pssword = decoded.pssword;
        next();
        }


    })
    
}

}
module.exports = withAuth;