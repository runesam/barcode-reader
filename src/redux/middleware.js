import AsyncStorage from '@react-native-community/async-storage';

import {
    USER_LOGIN,
    USER_LOGOUT,
    openModal,
    updatePageState,
    updateOrderState,
    updatePromiseState,
    UPDATE_ORDER_STATE,
    SUBMIT_ORDER_STATUS,
} from './actions';

import {
    setAuthHeader,
    handleUserLogin,
    removeAuthHeader,
    handleFetchOrderData,
    handleUpdateOrderData,
} from '../utils';

export default [
    store => next => action => {
        const { type, payload } = action;
        switch (type) {
            case USER_LOGIN: {
                handleUserLogin(payload).then((res) => {
                    if (res.status === 200) {
                        setAuthHeader(payload);
                        store.dispatch(updatePageState('Main'));
                        AsyncStorage.setItem('auth', JSON.stringify(payload));
                    } else {
                        store.dispatch(openModal({
                            title: 'Failed',
                            message: 'Please check the username and password',
                            backgroundColor: '#ff0000',
                            image: require('../images/error.png'),
                            actions: [
                                { text: 'Cancel', methods: [{ name: 'closeModal' }]},
                            ],
                        }));
                    }
                }).catch(error => console.error(error));
                return next(action);
            }

            case USER_LOGOUT: {
                removeAuthHeader();
                AsyncStorage.removeItem('auth');
                store.dispatch(updatePageState('Login'));
                return next(action);
            }

            case UPDATE_ORDER_STATE: {
                if (payload && Object.keys(payload).length === 1) {
                    store.dispatch(updatePromiseState(true));
                    handleFetchOrderData(payload, store).then((res) => {
                        if (res && res.status === 404) {
                            store.dispatch(updateOrderState());
                            store.dispatch(openModal({
                                title: 'Error',
                                message: res.message,
                                backgroundColor: '#ff0000',
                                image: require('../images/error.png'),
                                actions: [
                                    { text: 'Scan Again', methods: [{ name: 'updateOrderState' }, { name: 'updatePageState', args: ['BarcodeScanner']}]},
                                    { text: 'Cancel', methods: [{ name: 'updateOrderState' }, { name: 'closeModal' }]},
                                ],
                            }));
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
                    return store.dispatch(openModal({
                        title: 'Status Needed',
                        message: 'Please Select a Status of the order',
                        backgroundColor: '#d88c00',
                        image: require('../images/warning.png'),
                        actions: [
                            { text: 'Cancel', methods: [{ name: 'closeModal' }]},
                        ],
                    }));
                }
                return handleUpdateOrderData(payload, store).then(() => {
                    return store.dispatch(openModal({
                        title: 'Status Updated',
                        message: 'Order\'s status been updated as requested',
                        backgroundColor: '#029a00',
                        image: require('../images/success.png'),
                        actions: [
                            { text: 'Scan Again', methods: [{ name: 'updateOrderState' }, { name: 'updatePageState', args: ['BarcodeScanner']}]},
                            { text: 'Close', methods: [{ name: 'updateOrderState' }, { name: 'closeModal' }]},
                        ],
                    }));
                }).catch(error => console.error(error));
            }
            default: next(action);
        }
    }
];
