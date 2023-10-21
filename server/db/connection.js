const mongoose = require('mongoose');

const url = `mongodb+srv://aaryappatil1:v3mg3gWfhVMNsXXX@cluster0.97um1xe.mongodb.net/`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))