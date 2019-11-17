import React, { PureComponent } from 'react';
import {
    View,
    Image,
    Keyboard,
    TouchableHighlight,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from 'react-native';

import { colors, fonts } from '../../themes';
import { getBackGroundColor } from '../../utils';
import MainFormComponent from './mainForm.component';
import BottomSwitcherComponent from './bottomSwitcher.component';

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
    image: {
        flex: 1,
        resizeMode: 'contain',
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
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: fonts.size.h6,
        color: colors.primaryText,
    },
};

class MainComponent extends PureComponent {
    render() {
        const {
            order,
            promise,
            orderStatus,
            handleSubmit,
            updateOrderStatusState,
            handleOpenBarcodeScanner,
        } = this.props;

        const backgroundColor = getBackGroundColor(orderStatus);

        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={{ ...style.root, backgroundColor }}
            >
                <TouchableWithoutFeedback
                    accessible={false}
                    onPress={Keyboard.dismiss}
                >
                    <View style={style.root}>
                        <View style={style.logoSection}>
                            <TouchableHighlight
                                disabled={promise}
                                onPress={handleOpenBarcodeScanner}
                            >
                                <Image
                                    style={style.image}
                                    source={require('../../images/barcodeScanner.png')}
                                />
                            </TouchableHighlight>
                        </View>
                        <View style={style.formSection}>
                            <MainFormComponent
                                promise={promise}
                                initialValues={order}
                                onSubmit={handleSubmit}
                            />
                        </View>
                        <BottomSwitcherComponent
                            orderStatus={orderStatus}
                            backgroundColor={backgroundColor}
                            updateOrderStatusState={updateOrderStatusState}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

export default MainComponent;
