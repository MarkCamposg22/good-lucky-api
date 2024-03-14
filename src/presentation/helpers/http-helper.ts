import { Response } from 'express';

import { HttpStatusCode } from '../../domain';
import { UnauthorizedError } from '../../presentation/errors';

export class HttpHelper {
    constructor(private readonly response: Response) { }

    ok<B = any>(body: B): Response<B> {
        return this.response.status(HttpStatusCode.OK).json(body);
    }

    created<B = any>(body: B): Response<B> {
        return this.response.status(HttpStatusCode.CREATED).json(body);
    }

    badRequest(error: Error): Response<Error> {
        return this.response.status(HttpStatusCode.BAD_REQUEST).json({ error: error.message });
    }

    unauthorized(): Response<Error> {
        return this.response.status(HttpStatusCode.UNAUTHORIZED).json(new UnauthorizedError());
    }

    notFound(error: Error): Response<Error> {
        return this.response.status(HttpStatusCode.NOT_FOUND).json({ error: error.message });
    }

    internalError(error: Error): Response<Error> {
        return this.response.status(HttpStatusCode.INTERNAL_ERROR).json({ error: error.message });
    }
}
