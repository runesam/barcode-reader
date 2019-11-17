import propTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

import { updatePageState, updateOrderState } from '../redux/actions';
import BarcodeScannerComponent from './components/barcodeScanner.component';

class BarcodeScanner extends PureComponent {
    static propTypes = {
        updatePageState: propTypes.func.isRequired,
        updateOrderState: propTypes.func.isRequired,
    };

    setBarcodeAndGoBack = wayBill => {
        const { updateOrderState: updateOrderStateAction } = this.props;
        updateOrderStateAction({ wayBill });
        this.handleCloseBarcodeScanner();
    };

    handleCloseBarcodeScanner = () => {
        const { updatePageState: updatePageStateAction } = this.props;
        updatePageStateAction('Main');
    };

    render() {
        return (
            <BarcodeScannerComponent
                setBarcodeAndGoBack={this.setBarcodeAndGoBack}
                handleCloseBarcodeScanner={this.handleCloseBarcodeScanner}
            />
        );
    }
}

export default connect(undefined, { updatePageState, updateOrderState })(BarcodeScanner);
