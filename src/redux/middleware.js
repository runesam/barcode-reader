import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {
    updatePageState,
    updateOrderState,
    updatePromiseState,
    UPDATE_ORDER_STATE,
    SUBMIT_ORDER_STATUS, USER_LOGIN, USER_LOGOUT,
} from './actions';

import {
    setAuthHeader,
    handleUserLogin,
    removeAuthHeader,
    handleFetchOrderData,
    handleUpdateOrderData,
} from '../utils';

import {
    showAlert,
    selectStatusAlert,
    wrongUsernamePassword,
} from '../utils/alert';

export default [
    store => next => action => {
        const { type, payload } = action;
        switch (type) {
            case USER_LOGIN: {
                handleUserLogin(payload).then((res) => {
                    if (res.username === 'Welcome!') {
                        setAuthHeader(payload);
                        store.dispatch(updatePageState('Main'));
                        AsyncStorage.setItem('auth', JSON.stringify(payload));
                    } else {
                        wrongUsernamePassword();
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
                        if (res && res.message) {
                            store.dispatch(updateOrderState());
                            showAlert(store, res.message);
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
                return handleUpdateOrderData(payload, store).then(() => {
                    store.dispatch(updateOrderState());
                }).catch(error => console.error(error));
            }
            default: next(action);
        }
    }
];
