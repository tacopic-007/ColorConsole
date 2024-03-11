const colorStyle = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
}
const setColor = (colorName, OutputText) => {
    if (typeof OutputText != 'string') throw new Error("The output text must be a string.");
    let colorCode = "";

    if (colorName === "red") {
        colorCode = colorStyle.red;
    } else if (colorName === "green") {
        colorCode = colorStyle.green;
    } else if (colorName === "yellow") {
        colorCode = colorStyle.yellow;
    } else if (colorName === "blue") {
        colorCode = colorStyle.blue;
    } else if (colorName === "magenta") {
        colorCode = colorStyle.magenta;
    } else if (colorName === "cyan") {
        colorCode = colorStyle.cyan;
    } else if (colorName === "white") {
        colorCode = colorStyle.white;
    } else {
        throw new Error("An unrecognized color has been specified.");
    }

    return colorCode + OutputText + colorStyle.reset;
};

module.exports = {
    setColor,
    colorStyle
};