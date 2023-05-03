const mongoose = require('mongoose');
const {Schema} = mongoose;

const userShema = new Schema({
    googleId: String,
    //name: String
});

mongoose.model('users', userShema);