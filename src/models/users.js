const mongoose = require('../database/connection');

const bcrypt = require('bcryptjs');


//const sqlite3 = require('sqlite3');
//const knex = require('knex');
//const sequelize = require('sequelize');

//const db = require('../database/connection');

/*module.exports = (sequelize, DataType) => {

const User = sequelize.define ('users',{
    name: Datatype.String,
    email: Datatype.String,
    password: DataType.String,
    createAt: DataType.Date.now
    });
    return User;
}
*/
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email : {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },
    password:{
        type: String,
        require: true,
        select: false,
    },
    createAt:{
        type: Date,
        default: Date.now,
    },

});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});



const User = mongoose.model('users', UserSchema)

module.exports  = User;


