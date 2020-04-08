const connection = require('../../database/connection');


module.exports = {
    async create(req, res){
        const { email, password} = req.body;
    await connection('users').insert({
        email,
        password
    });
    return res.json();
    },

    async list (req, res){

        const users = await req.connection('users').select('*');

    return res.json(users);
    }
};