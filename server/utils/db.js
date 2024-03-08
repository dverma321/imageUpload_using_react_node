require('dotenv').config();

const mongoose = require('mongoose')

const URI = process.env.Mongodb_url;

mongoose.connect(URI)
.then(() => {
    console.log("MongoDB Database is connected successfully")
})
.catch((err) => {
    console.log("Database is Not connected")

})