export interface Token {
    classes: string[];
}

export function sortClasses(token: Token): Token {
    token.classes.sort()
    return token
}
