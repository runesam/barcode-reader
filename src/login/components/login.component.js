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
import ModalExample from '../../components/modal.component';

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
    const { promise, handleSubmit, handleForgotPassword } = props;
    return [
        <KeyboardAvoidingView style={style.root} behavior="padding" key="login">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={style.root}>
                    <View style={style.logoSection}>
                    </View>
                    <View style={style.formSection}>
                        <LoginFormComponent
                            promise={promise}
                            onSubmit={handleSubmit}
                            initialValues={{
                                username: 'rapkid2',
                                password: 'Arf127//'
                            }}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <View style={style.links}>
                <TouchableWithoutFeedback onPress={handleForgotPassword}>
                    <Text style={style.linkText1}>
                        Forgot your password
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        </KeyboardAvoidingView>,
        <ModalExample key="ModalExample" />,
    ];
};

export default LoginComponent;
