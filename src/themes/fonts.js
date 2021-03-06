const type = {
    base: 'Avenir-Book',
    bold: 'Avenir-Black',
};

const size = {
    h1: 38,
    h2: 34,
    h3: 30,
    h4: 26,
    h5: 20,
    h6: 19,
    input: 18,
    regular: 17,
    medium: 14,
    small: 12,
    tiny: 8.5,
};

const style = {
    h1: {
        fontFamily: type.base,
        fontSize: size.h1,
    },
    h2: {
        fontWeight: 'bold',
        fontSize: size.h2,
    },
    h3: {
        fontFamily: type.base,
        fontSize: size.h3,
    },
    h4: {
        fontFamily: type.base,
        fontSize: size.h4,
    },
    h5: {
        fontFamily: type.base,
        fontSize: size.h5,
    },
    h6: {
        fontFamily: type.base,
        fontSize: size.h6,
    },
    normal: {
        fontFamily: type.black,
        fontSize: size.regular,
    },
    normalBold: {
        fontFamily: type.black,
        fontSize: size.regular,
        fontWeight: 'bold',
    },
    description: {
        fontFamily: type.base,
        fontSize: size.medium,
    },
};

export default {
    type,
    size,
    style,
};
