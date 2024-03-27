export class MissingParamsError extends Error {
    constructor() {
        super('All data is mandatory.');
        this.name = 'MissingParamsError';
    }
}
