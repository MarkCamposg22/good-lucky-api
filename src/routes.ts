import { Router } from 'express';
import { UserLoginController } from './controllers/UserLoginController';
import { UserRegisterController } from './controllers/UserRegisterController';
import { UserBalanceController } from './controllers/UserBalanceController'; // Importe o novo controlador

const routes = Router();

// Rota para o login
routes.post('/login', UserLoginController.login);

// Rota para o registro de usuário
routes.post('/register', UserRegisterController.register);

// Rota para atualizar o saldo do usuário
routes.post('/update-balance', UserBalanceController.updateBalance);

export { routes };


