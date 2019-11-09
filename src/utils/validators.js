const notEmpty = (fieldName = 'Value') => (value) => {
    if (value && value.trim().length) {
        return undefined;
    }
    return `${fieldName} can not be empty`;
};

module.exports = {
    notEmpty,
};
