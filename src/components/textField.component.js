import propTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

import { Image, Text, TextInput, View, TouchableHighlight } from 'react-native';
import { colors, fonts } from '../themes';

import { updateOrderState } from '../redux/actions';

const style = {
    root: { marginBottom: 20 },
    view: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.black,
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
    buttonContainer: {
        flex: 1,
        right: 0,
        position: 'absolute'
    },
    image: {
        flex: 1,
        width: 80,
        height: 56,
        resizeMode: 'contain',
    },
};

class TextFieldComponent extends PureComponent {
    state = {
        focused: false,
    };

    onBlur = () => this.setState({ focused: false });

    onFocus = () => this.setState({ focused: true });

    handleWayBillAction = () => {
        const { updateOrderState: updateOrderStateAction, input: { value } } = this.props;
        updateOrderStateAction({ wayBill: value });
    }

    render() {
        const {
            type,
            name,
            input,
            editable,
            placeholder,
            wayBillAction,
            meta: { touched, error },
            ...custom
        } = this.props;
        const { focused } = this.state;
        return (
            <View style={style.root}>
                <View style={{ ...style.view, ...style[focused ? 'focused' : null] }} />
                <TextInput
                    {...custom}
                    editable={editable}
                    value={input.value}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    style={style.textInput}
                    placeholder={placeholder}
                    selectionColor={colors.fresh}
                    onChangeText={input.onChange}
                    placeholderTextColor={colors.charcoal}
                    keyboardType={type === 'number' ? 'numeric' : 'default'}
                    secureTextEntry={type === 'password'}
                />
                {Boolean(input.name === 'wayBill') && (
                    <View style={style.buttonContainer}>
                        <TouchableHighlight
                            disabled={Boolean(error)}
                            style={{ opacity: error ? 0.3 : 1 }}
                            onPress={this.handleWayBillAction}
                        >
                            <Image
                                style={style.image}
                                source={require('../images/search.png')}
                            />
                        </TouchableHighlight>
                    </View>
                )}
                {Boolean(touched && error) && <Text style={style.error}>{error}</Text>}
            </View>
        );
    }
}

TextFieldComponent.propTypes = {
    placeholder: propTypes.string,
    wayBillAction: propTypes.func,
    type: propTypes.string.isRequired,
    meta: propTypes.shape({}).isRequired,
    input: propTypes.shape({}).isRequired,
};

TextFieldComponent.defaultProps = {
    placeholder: '',
    wayBillAction: () => {},
};

export default connect(null, { updateOrderState })(TextFieldComponent);
