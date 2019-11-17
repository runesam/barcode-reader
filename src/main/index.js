import propTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

import {
    updatePageState,
    updateOrderState,
    submitOrderStatus,
    updateOrderStatusState,
} from '../redux/actions';

import MainComponent from './components/main.component';

class Main extends PureComponent {
    static propTypes = {
        promise: propTypes.bool.isRequired,
        updatePageState: propTypes.func.isRequired,
        order: propTypes.shape({}).isRequired,
    };

    handleSubmit = () => {
        const { order, orderStatus, submitOrderStatus: submitOrderStatusAction } = this.props;
        submitOrderStatusAction({ ...order, orderStatus });
    };

    handleSignUp = () => {
        const { navigation } = this.props;
        return navigation.navigate('SignUp');
    };

    handleOpenBarcodeScanner = () => {
        const {
            updatePageState: updatePageStateAction,
            updateOrderState: updateOrderStateAction,
        } = this.props;
        updateOrderStateAction();
        updatePageStateAction('BarcodeScanner');
    };

    handleUpdateOrderStatusState = (value) => {
        const { updateOrderStatusState: updateOrderStatusStateAction } = this.props;
        updateOrderStatusStateAction(value);
    };

    render() {
        const { order, promise, orderStatus } = this.props;
        return (
            <MainComponent
                order={order}
                promise={promise}
                orderStatus={orderStatus}
                handleSubmit={this.handleSubmit}
                handleSignUp={this.handleSignUp}
                handleOpenBarcodeScanner={this.handleOpenBarcodeScanner}
                updateOrderStatusState={this.handleUpdateOrderStatusState}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const { order, promise, orderStatus } = state;
    return {
        order,
        promise,
        orderStatus,
    };
};

export default connect(mapStateToProps, {
    updatePageState,
    updateOrderState,
    submitOrderStatus,
    updateOrderStatusState,
})(Main);
