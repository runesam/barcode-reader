import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

import { Text, TextInput, View } from 'react-native';
import { colors, fonts } from '../themes';

const style = {
    root: { marginBottom: 20 },
    view: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.steel,
        height: 56,
    },
    textInput: {
        position: 'absolute',
        height: 56,
        padding: 10,
        top: 0,
        left: 0,
        right: 0,
        ...fonts.style.normal,
    },
    focused: {
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: colors.fresh,
        borderColor: colors.fresh,
        shadowOffset: { height: 0, width: 0 },
    },
    error: {
        color: colors.fire,
    },
};

class TextFieldComponent extends PureComponent {
    state = {
        focused: false,
    };

    onBlur = () => this.setState({ focused: false });

    onFocus = () => this.setState({ focused: true });

    render() {
        const {
            type,
            input,
            placeholder,
            meta: { touched, error },
            ...custom
        } = this.props;
        const { focused } = this.state;
        return (
            <View style={style.root}>
                <View style={{ ...style.view, ...style[focused ? 'focused' : null] }} />
                <TextInput
                    {...custom}
                    selectionColor={colors.fresh}
                    value={input.value}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    style={style.textInput}
                    placeholder={placeholder}
                    onChangeText={input.onChange}
                    placeholderTextColor={colors.frost}
                    secureTextEntry={type === 'password'}
                />
                {Boolean(touched && error) && <Text style={style.error}>{error}</Text>}
            </View>
        );
    }
}

TextFieldComponent.propTypes = {
    placeholder: propTypes.string,
    type: propTypes.string.isRequired,
    meta: propTypes.shape({}).isRequired,
    input: propTypes.shape({}).isRequired,
};

TextFieldComponent.defaultProps = {
    placeholder: '',
};

export default TextFieldComponent;
