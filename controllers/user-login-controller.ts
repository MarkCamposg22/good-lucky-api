import { Request, Response } from 'express';

export class UserLoginController {
    public static login(req: Request, res: Response): void {

        res.send('Página de login');
    }
}
