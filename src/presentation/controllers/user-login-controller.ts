import { Request, Response } from 'express';

import { UserModel } from '../../database/models';
import { Controller } from '../../domain';
import { HttpHelper } from '../helpers';
import { MissingParamsError, UserNotExistsError } from '../errors';
import { encrypt, hasherComparer } from '../../utils';

export type UserLoginResponse = {
    email: string;
    name: string;
    credits: number;
    accessToken: string;
}

export class UserLoginController implements Controller {
    async handle(request: Request, response: Response): Promise<Response> {
        const httpHelper = new HttpHelper(response);

        try {
            // receber dados do body
            const { email, password } = request.body;

            // verificar se os dados foram enviados
            if (!email || !password) {
                return httpHelper.badRequest(new MissingParamsError());
            }

            // verificar se usuário existe
            const userExists = await UserModel.findOne({ email });
            if (!userExists) {
                return httpHelper.notFound(new UserNotExistsError());
            }

            // verificar senhas
            const validPassword = await hasherComparer(password, userExists.password);
            if (!validPassword) {
                return httpHelper.unauthorized();
            }

            // gerar token
            const accessToken = encrypt({ id: userExists.id });

            // retornar dados
            return httpHelper.ok<UserLoginResponse>({
                email: userExists.email,
                name: userExists.name,
                credits: userExists.credits,
                accessToken
            });
        } catch (error) {
            return httpHelper.internalError(error as Error);
        }
    }
}
