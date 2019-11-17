import { Alert } from 'react-native';

import {
    updatePageState,
    updateOrderState,
    UPDATE_ORDER_STATE, updatePromiseState,
} from './actions';

const baseURL = 'http:192.168.0.212:3000/orders/';

const handleFetchOrderData = async ({ wayBill }) => {
    const response = await fetch(`${baseURL}${wayBill}`);
    return await response.json();
};

const showAlert = (store, reason) => {
    Alert.alert(
        'Error',
        reason,
        [
            {
                text: 'scanAgain',
                onPress: () => store.dispatch(updatePageState('BarcodeScanner')),
            },
            { text: 'Cancel', style: 'cancel' },
        ],
        { cancelable: true },
    );
};

export default [
    store => next => action => {
        const { type, payload } = action;
        switch (type) {
            case UPDATE_ORDER_STATE: {
                if (payload && Object.keys(payload).length === 1) {
                    store.dispatch(updatePromiseState(true));
                    handleFetchOrderData(payload).then((res) => {
                        if (res.errorMessage) {
                            store.dispatch(updateOrderState());
                            showAlert(store, res.errorMessage);
                        } else {
                            store.dispatch(updateOrderState(res));
                        }
                        store.dispatch(updatePromiseState(false));
                    }).catch(error => console.error(error));
                }
                return next(action);
            }
            default: next(action);
        }
    }
];
