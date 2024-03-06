import mongoose from 'mongoose';

import { env } from '../config';

export const connect = async (): Promise<void> => {
    if (env.databaseUrl) {
        await mongoose.connect(env.databaseUrl);
    }
};
