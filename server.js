const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const myconn = require('express-myconnection');

const routes = require('./routes')

const app = express();
app.use(cors())

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
    res.send('Bienvenido a la API de Noticias - CrisVasc');
});
app.use('/noticias', routes);


//servidor en linea
app.listen(app.get('port'), ()=>{
    console.log('server runnning on port', app.get('port'));
});