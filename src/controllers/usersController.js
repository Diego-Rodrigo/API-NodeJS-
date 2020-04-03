const connection = require('../database/connection');


module.exports = {
    async create(req, res){
        const { EMAIL, PASSWORD} = req.body;
    await connection('users').insert({
        EMAIL,
        PASSWORD
    });
    return res.json();
    },

    async list (req, res){

        const users = await req.connection('users').select('*');

    return res.json(users);
    }
};