import { Request, Response } from 'express';

import { UserModel } from '../../database/models';
import { Controller } from '../../domain';
import { HttpHelper } from '../helpers';
import { InvalidParamError, MissingParamsError, UserAlreadyExistsError } from '../errors';
import { validEmail, hasher, encrypt } from '../../utils';

export type UserRegisterResponse = {
    email: string;
    name: string;
    credits: number;
    accessToken: string;
}

export class UserRegisterController implements Controller {
    async handle(request: Request, response: Response): Promise<Response> {
        const httpHelper = new HttpHelper(response);

        try {
            // receber dados do body
            const { email, name, password, confirmationPassword } = request.body;

            // verificar se os dados foram enviados
            if (!email || !name || !password || !confirmationPassword) {
                return httpHelper.badRequest(new MissingParamsError());
            }

            // verificar se já existe um usuário já cadastrado com esse e-mail
            const userAlreadyExists = await UserModel.findOne({ email });
            if (userAlreadyExists) {
                return httpHelper.badRequest(new UserAlreadyExistsError());
            }

            // verificar e-mail
            if (!validEmail(email)) {
                return httpHelper.badRequest(new InvalidParamError('email'));
            }

            // verificar senhas
            if (password !== confirmationPassword) {
                return httpHelper.badRequest(new InvalidParamError('password'));
            }

            // criptografar senha
            const hashedPassword = await hasher(password);

            // salvar usuário no banco
            const user = new UserModel({
                email,
                name,
                password: hashedPassword
            });
            await user.save();

            // gerar token de acesso
            const accessToken = encrypt({ id: user.id });

            // retornar dados
            return httpHelper.created<UserRegisterResponse>({
                email: user.email,
                name: user.name,
                credits: user.credits,
                accessToken
            });
        } catch (error) {
            return httpHelper.internalError(error as Error);
        }
    }
}
