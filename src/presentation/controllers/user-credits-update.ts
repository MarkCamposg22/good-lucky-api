import { Request, Response } from 'express';

import { Controller } from '../../domain';
import { HttpHelper } from '../helpers';
import { MissingParamsError, UserNotExistsError } from '../errors';
import { UserModel } from '../../database/models';

export class UserCreditsUpdateController implements Controller {
    async handle(request: Request, response: Response): Promise<Response> {
        const httpHelper = new HttpHelper(response);

        try {
            const { credits } = request.body;
            const { userId } = request;

            // verificar se os dados foram enviados
            if (!credits || !userId) {
                return httpHelper.badRequest(new MissingParamsError());
            }

            // verificar se usuário existe
            const userExists = await UserModel.findById(userId);
            if (!userExists) {
                return httpHelper.notFound(new UserNotExistsError());
            }

            // atualizar créditos
            await UserModel.updateOne({ _id: userId }, { $set: { credits } });

            // retornar dados
            return httpHelper.ok<any>({});
        } catch (error) {
            return httpHelper.internalError(error as Error);
        }
    }
}
