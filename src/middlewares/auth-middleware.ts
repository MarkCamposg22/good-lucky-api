import { NextFunction, Request, Response } from 'express';

import { HttpHelper } from '../presentation/helpers';
import { dencrypt } from '../utils';

export async function authMiddleware(request: Request, response: Response, next: NextFunction): Promise<any> {
    const httpHelper = new HttpHelper(response);

    try {
        const authHeader = request.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return httpHelper.unauthorized();
        }

        const payload = dencrypt(token);
        request.userId = payload.id;

        next();
    } catch (error) {
        httpHelper.internalError(error as Error);
    }
}
