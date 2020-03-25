const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors();
app.use(express.json());
app.use(routes);
app.listen(3333);


// rota / recurso

// metod ge HTTP:
    // GET: Busca/listar uma informação no backend
    // POST: Gria uma informação no backend
    // PUT: Altera uma informação no backend
    // DELETE: Deletar uma informação no backend

// tipos de paramentros
    // Query Params: Parametros nomeados enviados na rota apos ?, filtros, paginação
    // Route Params: Parametros utilizados para identificar recursos
    // Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

// SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
// NoSQL: MongoDB, CouchDB, etc
    // Comunicar com o banco de dados
        // Driver: SELECT *FROM users
        // Query Builder: table('users').select('*').where()
        



