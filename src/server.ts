import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes)

//GET: buscar ou listar uma inforamaçao
//POST:criar alguma nova informação
//PUT: atualizar uma informação existente
//DELETE: deletar uma informação existente
//CORPO = BODY (request body): dados para crianção ou atualizição de um registro
//Route params: indeficar qual recurso eu quero atualizar ou deletar
//query params: 


app.listen(3333);