const express = require('express');
//const mongoose = require('mongoose');
const routes = require('./routes');



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(routes);

require('./controllers/authController')(app);
require('./controllers/projectController')(app);

app.listen(3333);
