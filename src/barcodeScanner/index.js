import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { updatePageState, updateOrderState } from '../redux/actions';
import BarcodeScannerComponent from './components/barcodeScanner.component';

class BarcodeScanner extends PureComponent {
    setBarcodeAndGoBack = wayBill => {
        const {
            updatePageState: updatePageStateAction,
            updateOrderState: updateOrderStateAction,
        } = this.props;
        updateOrderStateAction({ wayBill });
        updatePageStateAction('Main');
    };

    render() {
        return (
            <BarcodeScannerComponent
                setBarcodeAndGoBack={this.setBarcodeAndGoBack}
            />
        );
    }
}

export default connect(undefined, { updatePageState, updateOrderState })(BarcodeScanner);
