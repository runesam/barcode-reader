import { Alert } from 'react-native';

import {
    updatePageState,
    updateOrderState,
    updatePromiseState,
    UPDATE_ORDER_STATE,
    SUBMIT_ORDER_STATUS,
} from './actions';

import { handleFetchOrderData, handleUpdateOrderData } from '../utils';

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

const selectStatusAlert = () => {
    Alert.alert(
        'Status Needed',
        'Please Select a Status of the order',
        [
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
                        if (res && res.errorMessage) {
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
            case SUBMIT_ORDER_STATUS: {
                if (!payload.orderStatus) {
                    return selectStatusAlert();
                }
                return handleUpdateOrderData(payload).then((res) => {
                    if (res && res.errorMessage) {
                        store.dispatch(updateOrderState());
                        showAlert(store, res.errorMessage);
                    } else {
                        store.dispatch(updateOrderState(res));
                    }
                }).catch(error => console.error(error));
            }
            default: next(action);
        }
    }
];
