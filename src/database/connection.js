const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodeapi',{ useNewUrlParser:true, useUnifiedTopology:true });

mongoose.Promise = global.Promise;

module.exports = mongoose;