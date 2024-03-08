import { Request, Response } from 'express';

export class UserLoginController {
    public static login(req: Request, res: Response): void {
        // Lógica para lidar com a autenticação do usuário
        // Aqui você pode chamar o serviço de login para verificar as credenciais
        // e responder de acordo
        res.send('Página de login');
    }
}
