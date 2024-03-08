// user-balance-controller.ts

import { Request, Response } from 'express';
import { User } from '../models/User'; // Importe o modelo do usuário se estiver usando um ORM como o Sequelize

export class UserBalanceController {
    public static async updateBalance(req: Request, res: Response): Promise<void> {
        try {
            // Obtenha os dados da requisição
            const { userId, amount } = req.body;

            // Verifique se o usuário existe
            const user = await User.findOne({ where: { id: userId } });

            if (!user) {
                res.status(404).send('Usuário não encontrado');
                return;
            }

            // Atualize o saldo do usuário
            user.balance += amount;
            await user.save();

            // Envie uma resposta para o cliente
            res.send('Saldo do usuário atualizado com sucesso');
        } catch (error) {
            console.error('Erro ao atualizar saldo do usuário:', error);
            res.status(500).send('Erro ao atualizar saldo do usuário');
        }
    }
}
