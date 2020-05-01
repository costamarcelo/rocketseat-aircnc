const express = require ('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-n9w78.mongodb.net/semana09?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// req.query = Acessar query params (para consulta)
// exemplo: http://localhost:3333/users?idade=20

// req.params = Acessar route params (para edição e delete)
// exemplo: htt://localhost:3333/users/1

// req.body = Acessar corpo da requisição (tanto para criação, edição)
// exemplo: htt://localhost:3333/users

app.use(express.json());
app.use(routes); //Precisa vir depois

app.listen(3333);

