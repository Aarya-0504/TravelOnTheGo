const mongoose = require('mongoose');

// const url = `mongodb://aarya_2:bXIU9JhIsDMeEWdo@cluster0.97um1xe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const url = `mongodb+srv://aarya_3:3a6KH9soQNwYHsin@cluster0.97um1xe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))