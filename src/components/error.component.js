import React from 'react';
import propTypes from 'prop-types';
import { View, Text } from 'react-native';
import { colors, fonts } from '../themes';

const style = {
    root: {
        justifyContent: 'center',
        height: 56,
    },
    text: {
        color: colors.fire,
        textAlign: 'center',
        ...fonts.style.normal,
    },
};

const Error = (props) => {
    const { error } = props;
    return (
        <View style={style.root}>
            <Text style={style.text}>{error || 'error message goes here'}</Text>
        </View>
    );
};

Error.propTypes = {
    error: propTypes.string.isRequired,
};

export default Error;
