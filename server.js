require('dotenv').config();

const express = require('express');
const mysql = require('mysql');
const process = require('process');
const parser = require('body-parser');
const crypt = require('bcrypt');
const withAuth=require('./middleware');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const port = process.env.port||3001;

const app = express();

app.use(helmet())

app.use(parser.urlencoded({
    urlencoded:true,
    extended:true
    }))

app.use(parser.json())

app.use(cookieParser());

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'administrator',
    password:'pet*94Tmrt',
    database: 'testDB'
})
conn.connect((err)=>{
    if (err) throw err;
    console.log('connected!');
})

var qry = "SELECT * FROM users WHERE member = ?"

app.post("/register",(req,res)=>{

    let usrname,pssword,payload,token;
  
    usrname = req.body.uname;
    pssword = req.body.pword;
    console.log('Accessed');


  conn.query(qry,[usrname],(err,resp)=>{ 

      if (resp.length > 0 && resp.length < 2){

          qry = "SELECT keywords FROM users WHERE member = ?"  
          
          conn.query(qry,[usrname],(err,respo)=>{

              crypt.compare(pssword,respo[0].keywords,(err,respon)=>{
                  
                  if (respon==true){
                      payload = {pssword};
                      token = jwt.sign(payload,process.env.TOKEN_SECRET,{expiresIn:'0.25h'});
                      res.cookie('token',token,{httpOnly:true}).redirect('/albums');              
                  } else {
                      res.send('Entered credentials are wrong!!!!!' )                     
                  }   
                  
              });
              
          });
        
      }  else res.send('Entered credentials are wrong!!!!' )
      
  })        

})
  

  app.get('/checkToken',withAuth,(req,res)=> {
         res.sendStatus(200);
         })
  
  app.get('/signOut',(req,res)=>{
      console.log('accessed');
      res.clearCookie('token',{path: '/'});
      res.sendStatus(401);
         })





app.listen(port);
console.log('On Port '+port)