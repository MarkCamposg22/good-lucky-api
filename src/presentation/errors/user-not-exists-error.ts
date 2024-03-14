export class UserNotExistsError extends Error {
    constructor() {
        super('User not founded.');
        this.name = 'UserNotExistsError';
    }
}
