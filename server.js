const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');

const routes = require('./routes')

const app = express();

app.set('port', process.env.PORT || 9000);

const dbOptions = {
    host:'localhost',
    port: '3306',
    user:'root',
    password:'',
    database:'noticias'
};

//middlewares
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());

//rutas
app.get('/', (req, res)=>{
    res.send('welcome to the app madafaka');
});
app.use('/api', routes);


//servidor en linea
app.listen(app.get('port'), ()=>{
    console.log('server runnning on port', app.get('port'));
});