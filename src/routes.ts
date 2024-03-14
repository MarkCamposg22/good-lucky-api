import { Router } from 'express';

import { UserRegisterController, UserCreditsUpdateController, UserLoginController } from './presentation/controllers';
import { authMiddleware } from './middlewares';

const routes = Router();

const userRegiterController = new UserRegisterController();
const userCreditsUpdateController = new UserCreditsUpdateController();
const userLoginController = new UserLoginController();

routes.post('/register', userRegiterController.handle);
routes.post('/login', userLoginController.handle);
routes.patch('/update-credits', authMiddleware, userCreditsUpdateController.handle);

export { routes };
