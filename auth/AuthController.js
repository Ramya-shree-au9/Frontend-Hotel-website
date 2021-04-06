const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('./UserSchema');
const hotelbooking = require('./hotelbookingschema');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

//Register User
router.post('/register',(req,res) => {
    var hashedpassword = bcrypt.hashSync(req.body.password,8);
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:hashedpassword,
        role: req.body.role ?req.body.role :'User'
    },(err,result) => {
        if(err) return res.status(500).send('There is a problem in registration');
        res.setHeader('Access-Control-Allow-Origin','*')
        res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type,Accept')
        res.status(200).send('Registration Successful')
    })
})

//Login User
router.post('/login',(req,res) => {
    User.findOne({email:req.body.email},(err,user) =>{
        if(err) return res.status(500).send('There is a problem in login');
        if(!user) return res.status(403).send('No User Found register first')
        else{
            const passIsValid = bcrypt.compareSync(req.body.password,user.password)
            if(!passIsValid) return res.status(401).send('Invalid Password')
            var token = jwt.sign({id:user._id},config.secert,{expiresIn:86400});
            res.send({auth:true,token:token,data:user})
        }
    })
})


//Get User info
router.get('/userInfo',(req,res) => {
    var token = req.headers['x-access-token']
    if(!token) res.send({auth:false,token:'No Token Provided'})
    jwt.verify(token,config.secert,(err,data) => {
        if(err) return res.status(500).send({auth:false,token:'Invalid Token Provided'});
        User.findById(data.id,{password:0},(err,user) => {
            if(err) return res.status(500).send({auth:false,token:'err fetching user'});
            res.send(user)
        })
    })
})

//List all users
router.get('/users',(req,res) => {
    User.find({},(err,user) => {   
        res.status(200).send(user);
    })
})

router.post('/hotelbooking',(req,res) => {
    console.log('1..........................')
    console.log(req.body)
    hotelbooking.create(req.body,(err,data) =>{
        if(err) return res.status(500).send('err');
        if(data) return res.status(200).send(data)   
    })
})

router.get('/bookings',(req,res) => {
    hotelbooking.find((err,data)=>{
        res.status(200).send(data)
    })
            
    })

router.patch('/bookingstatus/:id',(req,res) => {
    console.log(req.body)
    console.log(req.params.id)

    
    hotelbooking.findOneAndUpdate({_id:req.params.id},{$set:{status:req.body.status}},(err,data)=>{
        res.status(200).send(data)
    })
                
        
    })

module.exports = router;