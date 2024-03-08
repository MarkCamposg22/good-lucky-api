import { Router } from 'express';
import { UserLoginController } from './controllers/UserLoginController';
import { UserRegisterController } from './controllers/UserRegisterController';

const routes = Router();

// Rota para o login
routes.post('/login', UserLoginController.login);

// Rota para o registro de usuário
routes.post('/register', UserRegisterController.register);

export { routes };

