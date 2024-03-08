require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');


const app = express();

const PORT = process.env.PORT || 3000;

// connecting to database

require('./utils/db');

// connecting to database schema

const users = require('./Models/User');

// connecting to database schema for userImage

const usersImage = require('./Models/UserImage');

// solving cors error

app.use(cors());

// convert json data into objects

app.use(express.json());



// implementing middleware

const middleware = (req, res, next) => {

    console.log("Middleware is checking...");

    next();
}

app.get('/', (req, res) => {
    res.send("Hello I am Backend Server");
})

app.get('/aboutme', middleware, (req, res) => {
    res.send("Welcome to About Me page");
})

// Registration Route

app.post('/registration', (req, res) => {

    const {name, email, password, cpassword} = req.body;

    if(!name || !email || !password || !cpassword )
    {
       return res.json({
            error: "Fields can't be left empty"
        })
    }

    if(password != cpassword)
    {
        return res.json({
            error:"Password are not the same"
        })
    }

 users.findOne({email:email})
 .then((userExits) => {
        if(userExits)
        {
            console.log("User is Already Exits please login")
            return res.json({        
                status: 422,        
                message:"Email is already exits..."
            })
        }
       
            const newUser = new users({name:name, email:email, password:password, cpassword:cpassword});

            newUser.save()
            .then(() => {
                console.log("User Registered Successfully")
                res.json({
                                        
                    message:"User Registered Successfully"
                })
            })
            .catch((err) => {
                console.log("Error while saving the new user", err)
            })

        
    })
    .catch((err) => {
        console.log("Error while checking existing emails...")
    })

    
    
})

// send image API

app.post('/upload-image', async(req, res) => {
    try{

        const {base64} = req.body;

        usersImage.create({image: base64})

        res.json({
            status:"OK",
            message:"Image saved successfully"
        })
        

    }
    catch (err)
    {
        console.log(err);

    }
})

// get image API

app.get('/get-image', async(req, res) => {

    try{

        await usersImage.find({}). then((data) => {
            res.send({
                status:"OK",
                message:"Images read successfully", data
            })
        })
        .catch((err) => {
            console.log("Error while reading images : ", err)
        })

    }
    catch(err) {
        console.log("Getting Image Error : ", err);
    }

})

app.listen(PORT, () => {
    console.log(`Server is Running on Port Number : ${PORT} `)
}
)