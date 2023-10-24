const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require("cors");
const corsConfigs = require("./config/corsConfigs");
require('./db/connection');
require("dotenv").config();
const PORT=8000

const Users = require('./models/Users');
const Places = require('./models/Places');
//app USE
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cors(corsConfigs));
app.use("/api", require("./routes/feedbackRoutes"));
//routes
app.get('/', (req, res) => {
    res.send('Welcome');
})

//registering user
app.post('/api/register',async (req,res,next) => {
    const {fullName,email,password} = req.body;
    if (!fullName || !email || !password) return res
        .status(400)
        .json({ error: `Please enter all required fields!` });

    const emailReg =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // name validation.
    if (fullName.length > 25)
        return res
            .status(400)
            .json({ error: "name can only be less than 25 characters" });

    //email validation
    if (!emailReg.test(email))
        return res
            .status(400)
            .json({ error: "please enter a valid email address." });

    //password validation
    if (password.length < 6)
        return res
            .status(400)
            .json({ error: "password must be atleast 6 characters long" });
    try{
        const doesUserAlreadyExist = await Users.findOne({ email });

        if (doesUserAlreadyExist){
            return res.status(400).json({ error: `a user of same email id [${email}] exist! please use a different one.` })
        }else{
            const newUser = new Users({ fullName, email });
            bcryptjs.hash(password,10,(err,hashedPassword)=>{
                newUser.set('password',hashedPassword);
                newUser.save();
                next();
            })
            return res.status(200).send('User registered successfully');
        }
            

    }catch(e){
        console.log(e,'error');
    }
})

//LOGIN
app.post('/api/login', async (req,res,next)=>{
    const { email, password } = req.body;
    if (!email || !password)
        return res
            .status(400)
            .json({ error: "please enter all the required fields!" });

    //email validation
    const emailReg =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailReg.test(email))
        return res
            .status(400)
            .json({ error: "please enter a valid email address." });

    try{
        const user = await Users.findOne({ email });
            if (!user) {
                res.status(400).send('User email or password is incorrect');
            } else {
                const validateUser = await bcryptjs.compare(password, user.password);
                if (!validateUser) {
                    res.status(400).send('User email or password is incorrect');
                } else {
                    const payload = {
                        userId: user._id,
                        email: user.email
                    }
                    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'THIS_IS_A_JWT_SECRET_KEY';

                    jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1h' }, async (err, token) => {
                        await Users.updateOne({ _id: user._id }, {
                            $set: { token }
                        })
                        user.save();
                        return res.status(200).json({ user: { id: user._id, email: user.email, fullName: user.fullName }, token: token })
                    })
                }
            }
                
    }catch(e){
        console.log(e);
        return res.status(500).json({ error: e.message });
    }        
})

//posting places
app.post('/api/places',async(req,res)=>{
    try{
        const newPlaces=Places(req.body);

        try{
            const savedPlaces=await newPlaces.save();
        res.status(201).json(savedPlaces);
        }catch(err){
            res.status(500).json(err);
        }

    }catch(e){
        console.log(e);
    }
})


app.listen(PORT,async ()=>{
    
    console.log(`Listening on port:${PORT}`);
})