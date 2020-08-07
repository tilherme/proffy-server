import express from 'express';
import classControler from './controllers/classesControler';
import ConnectionsController from './controllers/connectionsController';


const routes = express.Router();
const classControllers = new classControler();
const connectionsController =new ConnectionsController();

routes.post('/classes', classControllers.create);
routes.get('/classes', classControllers.index);


routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;