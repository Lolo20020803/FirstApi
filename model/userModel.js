const mongoose = require('mongoose');

const { Schema } = mongoose;
 //Creation of mongoose schema
const userSchema = new Schema({
    userId:{
        type: int,
        unique = true,
        required = [true,'Id required'],
    },
    name:{
        type = String,
        required = [true,'Name required'],
    },
    surname:{
        type = String,
        required = [true,'Surname required'],
    },
    email:{
        type = String,
        required = [true,'Email required'],
    }
});

module.exports = mongoose.model('User', userSchema);