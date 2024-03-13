import bcrypt from 'bcrypt';

const salt = 12;

export async function hasher(text: string): Promise<string> {
    const hashedText = await bcrypt.hash(text, salt);
    return hashedText;
}

export async function hasherComparer(text: string, hashedText: string): Promise<boolean> {
    const equals = await bcrypt.compare(text, hashedText);
    return equals;
}
