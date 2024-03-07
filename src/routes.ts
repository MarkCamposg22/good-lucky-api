import express, { Router } from 'express';
import { UserLoginController } from './controllers/user-login-controller';

const app = express();
const routes = Router();

// Rota para a página de login
routes.get('/login', UserLoginController.login);

// Prefixa todas as rotas com '/api'
app.use('/api', routes);

// Inicie o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

export { routes }