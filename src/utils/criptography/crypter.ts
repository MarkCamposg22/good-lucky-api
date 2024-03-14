import jwt from 'jsonwebtoken';

import { env } from '../../config';

export function encrypt(payload: object): string {
    return jwt.sign(payload, env.privateKey, { expiresIn: '10 days' });
}

export function dencrypt(token: string): any {
    return jwt.verify(token, env.privateKey) as any;
}
