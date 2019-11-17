import propTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

import { updatePageState, updateOrderState } from '../redux/actions';

import MainComponent from './components/main.component';

class Main extends PureComponent {
    static propTypes = {
        promise: propTypes.bool.isRequired,
        updatePageState: propTypes.func.isRequired,
        order: propTypes.shape({}).isRequired,
    };

    handleSubmit = ({ username, password }) => {
        console.log(username, password);
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

    render() {
        const { order, promise } = this.props;
        return (
            <MainComponent
                order={order}
                promise={promise}
                handleSubmit={this.handleSubmit}
                handleSignUp={this.handleSignUp}
                handleOpenBarcodeScanner={this.handleOpenBarcodeScanner}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const { order, promise } = state;
    return {
        order,
        promise,
    };
};

export default connect(mapStateToProps, { updatePageState, updateOrderState })(Main);
