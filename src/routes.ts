import { Router } from 'express';
import { UserLoginController } from './controllers/UserLoginController';

const routes = Router();

// Rota para o login
routes.post('/login', UserLoginController.login);

export { routes };


