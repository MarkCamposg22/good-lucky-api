import { Router } from 'express';

import { UserRegisterController } from './presentation/controllers';

const routes = Router();

const userRegiterController = new UserRegisterController();

routes.post('/register', userRegiterController.handle);

export { routes };
