export function validEmail(email: string): boolean {
    const regexEmail = /\S+@\S+\.\S+/;
    return regexEmail.test(email);
}
