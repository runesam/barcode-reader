import React from 'react';
import propTypes from 'prop-types';
import { RNCamera } from 'react-native-camera';
import {
    Image,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

export default class CameraScreen extends React.Component {
    static propTypes = {
        handleCloseBarcodeScanner: propTypes.func.isRequired,
    };

    state = {
        zoom: 0,
        depth: 0,
        flash: 'on',
        type: 'back',
        ratio: '16:9',
        whiteBalance: 'auto',
    };

    barcodeRecognized = ({ data }) => {
        const { setBarcodeAndGoBack } = this.props;
        setBarcodeAndGoBack(data);
    };

    render() {
        const { handleCloseBarcodeScanner } = this.props;
        const { type, flash, zoom, whiteBalance, ratio, depth } = this.state;

        return (
                <RNCamera
                    type={type}
                    zoom={zoom}
                    ratio={ratio}
                    autoFocus="on"
                    flashMode={flash}
                    focusDepth={depth}
                    style={styles.container}
                    whiteBalance={whiteBalance}
                    onBarCodeRead={this.barcodeRecognized}
                    onGoogleVisionBarcodesDetected={this.barcodeRecognized}
                    androidCameraPermissionOptions={{
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                    }}
                >
                    <TouchableHighlight style={styles.imageContainer} onPress={handleCloseBarcodeScanner}>
                    <Image
                        style={styles.image}
                        source={require('../../images/close.png')}
                    />
                    </TouchableHighlight>
                </RNCamera>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000' },
    imageContainer: {
        flex: 1,
        top: 30,
        right: 30,
        width: 50,
        height: 50,
        zIndex: 1000,
        borderRadius: 50,
        position: 'absolute',
        backgroundColor: '#fff',
    },
    image: { flex: 1, resizeMode: 'contain', width: 50, height: 50 },
});
