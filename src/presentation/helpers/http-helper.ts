import { Response } from 'express';

import { HttpStatusCode } from '../../domain';

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

    unauthorized(error: Error): Response<Error> {
        return this.response.status(HttpStatusCode.UNAUTHORIZED).json({ error: error.message });
    }

    internalError(error: Error): Response<Error> {
        return this.response.status(HttpStatusCode.INTERNAL_ERROR).json({ error: error.message });
    }
}
