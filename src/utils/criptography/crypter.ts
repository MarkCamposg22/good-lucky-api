import jwt from 'jsonwebtoken';

import { env } from '../../config';

export function encrypt(payload: object): string {
    return jwt.sign(payload, env.privateKey);
}

export function dencrypt(token: string): string {
    return jwt.verify(token, env.privateKey) as any;
}
