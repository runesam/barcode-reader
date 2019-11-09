import React from 'react';
import propTypes from 'prop-types';
import {
    Text,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';

import { colors, fonts } from '../themes';

const styles = {
    root: {
        height: 54,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.fresh,
    },
    text: [
        fonts.size.h5,
        {
            fontWeight: 'bold',
            textAlign: 'center',
            color: colors.primaryText,
        },
    ],
};

const Button = (props) => {
    const {
        onClick,
        label,
        disabled,
        loading,
        style,
    } = props;
    return (
        <TouchableOpacity
            onPress={onClick}
            disabled={disabled}
            style={{ ...styles.root, opacity: disabled ? 0.25 : 1, ...style }}
        >
            {loading ? (
                <ActivityIndicator size="small" color={colors.black} />
            ) : (
                <Text style={styles.text}>{label}</Text>
            )}
        </TouchableOpacity>
    );
};

Button.propTypes = {
    onClick: propTypes.func.isRequired,
    label: propTypes.string.isRequired,
    disabled: propTypes.bool,
    loading: propTypes.bool,
    style: propTypes.shape({}),
};

Button.defaultProps = {
    disabled: false,
    loading: false,
    style: {},
};

export default Button;
