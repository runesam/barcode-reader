import React, { PureComponent } from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';

const styles = {
    container: {
        flex: 1,
        left: 0,
        right: 0,
        bottom: 0,
        height: 70,
        overflow: 'hidden',
        flexDirection: 'row',
        position: 'absolute',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: { width: 30, height: 30, marginBottom: 5 }
};

class BottomSwitcherButton extends PureComponent {
    handlePress = () => {
        const { value, updateOrderStatusState } = this.props;
        updateOrderStatusState(value);
    };

    render() {
        const { name, image, value, orderStatus, backgroundColor } = this.props;
        return (
            <TouchableHighlight style={{ flex: 1 }} onPress={this.handlePress}>
                <View style={{
                    ...styles.imageContainer,
                    backgroundColor: orderStatus === value ? backgroundColor : '#fff',
                }}>
                    <Image
                        source={image}
                        style={styles.image}
                    />
                    <Text>{name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const buttons = [
    { value: 'Refused', image: require('../../images/close.png'), name: 'Refused' },
    { value: 'bhome', image: require('../../images/backHome.png'), name: 'Back Home' },
    { value: 'NoAnswer', image: require('../../images/noAnswer.png'), name: 'No Answer' },
    { value: 'Delivered', image: require('../../images/delivered.png'), name: 'Delivered' },
];

export default props => (
    <View style={styles.container}>
        {buttons.map(button => (
            <BottomSwitcherButton
                key={button.name}
                name={button.name}
                value={button.value}
                image={button.image}
                orderStatus={props.orderStatus}
                backgroundColor={props.backgroundColor}
                updateOrderStatusState={props.updateOrderStatusState}
            />
        ))}
    </View>
);
