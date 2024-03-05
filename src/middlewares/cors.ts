import { Request, Response, NextFunction } from 'express';

import { env } from '../config';

export const cors = (request: Request, response: Response, next: NextFunction): void => {
    response.set('access-control-allow-origin', env.accessUrl);
    response.set('access-control-allow-headers', '*');
    response.set('access-control-allow-methods', '*');
    next();
};
