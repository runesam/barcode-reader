import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Image, Modal, Text, TouchableHighlight, View, Alert, Dimensions } from 'react-native';

import { updateOrderState, updatePageState, closeModal } from '../redux/actions';

const { height, width} = Dimensions.get('window');

const style = {
    wrapper: {
        height,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modal: {
        borderRadius: 10,
        width: width - 30,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    modalHeader: {
        height: 50,
        paddingLeft: 10,
        padingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    modalContent: {
        padding: 15,
        justifyContent: 'center',
    },
    modalActions: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    action: {
        padding: 7,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#9e9e9e'
    }
};

class ModalExample extends Component {
    handleActionMethods(methods) {
        methods.forEach(method => {
            const args = method.args || []
            this.props[method.name](...args)
        });
        this.props.closeModal();
    }

    render() {
        const { modal } = this.props;
        return (
            <View>
                <Modal
                    transparent
                    visible={modal.show}
                    animationType="fade"
                >
                    <View style={style.wrapper}>
                        <View style={style.modal}>
                            <View style={{ ...style.modalHeader, backgroundColor: modal.backgroundColor || '#000' }}>
                                <Image style={{ width: 35 , marginRight: 5, resizeMode: 'contain'}} source={modal.image} />
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>{modal.title}</Text>
                            </View>
                            <View style={style.modalContent}>
                                <Text style={{ fontSize: 17, marginBottom: 15 }}>{modal.message}</Text>
                                <View style={style.modalActions}>
                                    {modal.actions && modal.actions.map(action => (
                                        <TouchableHighlight key={action.text} style={style.action} onPress={() => this.handleActionMethods(action.methods)}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{action.text}</Text>
                                        </TouchableHighlight>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const initMapStateToProps = ({ modal }) => ({ modal });
export default connect(initMapStateToProps, {
    closeModal,
    updatePageState,
    updateOrderState,
})(ModalExample);
