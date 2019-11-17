import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class CameraScreen extends React.Component {
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

    renderCamera() {
        const { type, flash, zoom, whiteBalance, ratio, depth } = this.state;
        return (
            <RNCamera
                type={type}
                zoom={zoom}
                ratio={ratio}
                autoFocus="on"
                flashMode={flash}
                focusDepth={depth}
                whiteBalance={whiteBalance}
                style={{ flex: 1, justifyContent: 'space-between' }}
                onGoogleVisionBarcodesDetected={this.barcodeRecognized}
                onBarCodeRead={this.barcodeRecognized}
                androidCameraPermissionOptions={{
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                }}
            />
        );
    }

    render() {
        return <View style={styles.container}>{this.renderCamera()}</View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#000',
    },
});
