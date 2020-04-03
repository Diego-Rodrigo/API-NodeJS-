const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/noderest',{useUnifiedTopology: true, useNewUrlParser:true});

module.exports = mongoose;