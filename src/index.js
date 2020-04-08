const express = require('express');
const routes = require('./routes');



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(routes);

require('./app/controllers/index')(app);



app.listen(3333);
