//extract method
async function permittedCharacters() {
    let permitted = [];

    if (process.env.UPPERCASE_LETTER === "true") {
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if (process.env.LOWERCASE_LETTTERS === "true") {
        permitted.push(..."abcdefghijklmnopqrstuvwxyz");
    }

    if (process.env.NUMBERS === "true") {
        permitted.push(..."0123456789");
    }

    if (process.env.SPECIAL_CHARACTERS === "true") {
        permitted.push(..."!@#$%&^-()");
    }

    return permitted;
}

export default permittedCharacters;