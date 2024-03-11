const colorStyle = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
};

const setColor = (colorName, OutputText) => {
    if (typeof OutputText !== 'string') {
        throw new Error("The output text must be a string.");
    }
    const colorCode = colorStyle[colorName];
    if (!colorCode) {
        throw new Error("An unrecognized color has been specified.");
    }
    return colorCode + OutputText + colorStyle.reset;
};

module.exports = {
    setColor,
    colorStyle
};
