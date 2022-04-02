const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');

const routes = require('./routes')

const app = express();

app.set('port', process.env.PORT || 9000);

const dbOptions = {
    host:'us-cdbr-east-05.cleardb.net',
    user:'b050dc20d39bc2',
    password:'f43ab754',
    database:'heroku_b8dfd78ce95a4f4'
};

//middlewares
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());

//rutas
app.get('/', (req, res)=>{
    res.send(`${<div><center><h1>Noticias API</h1></center><</div>}`);
});
app.use('/api', routes);


//servidor en linea
app.listen(app.get('port'), ()=>{
    console.log('server runnning on port', app.get('port'));
});