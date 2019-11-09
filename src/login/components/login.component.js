import React from 'react';
import {
    Text,
    View,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from 'react-native';

import { colors, fonts } from '../../themes';

import LoginFormComponent from './loginForm.component';

const style = {
    root: {
        flex: 1,
        paddingTop: 30,
    },
    logoSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formSection: {
        flex: 2,
        padding: 15,
    },
    links: {
        left: 15,
        height: 60,
        bottom: 100,
        position: 'absolute',
        justifyContent: 'space-between',
    },
    linkText1: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: fonts.size.h6,
        color: colors.freshDark,
    },
    linkText2: {
        color: colors.primaryText,
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: fonts.size.h6,
    },
};

const LoginComponent = (props) => {
    const { handleSubmit, handleSignUp, promise } = props;
    return (
        <KeyboardAvoidingView style={style.root} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={style.root}>
                    <View style={style.logoSection}>
                    </View>
                    <View style={style.formSection}>
                        <LoginFormComponent
                            promise={promise}
                            onSubmit={handleSubmit}
                            initialValues={{
                                username: 'meter_data_prices_disagg@example.com',
                                password: 'Freshtest!',
                            }}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <View style={style.links}>
                <TouchableWithoutFeedback>
                    <Text style={style.linkText1}>
                        Forgot your password
                    </Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={handleSignUp}>
                    <Text style={style.linkText2}>
                        {'You don\'t have an account yet?'}
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LoginComponent;
