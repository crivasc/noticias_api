const express = require('express');
const routes = express.Router();

//Read
routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('select * from noticias', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows)
        });
    });
});
//Read id
routes.get('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('select from noticias where id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows)
        });
    });
});

//Create
routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        conn.query('insert into noticias set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Noticia guardada')
        });
    });
});

//Delete
routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        conn.query('delete from noticias where id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Noticia borrada')
        });
    });
});

//Update
routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        conn.query('update noticias set ? where id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Noticia actualizada')
        });
    });
});

module.exports = routes;