import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import {
    UPDATE_PAGE_STATE,
    UPDATE_ORDER_STATE,
    UPDATE_PROMISE_STATE,
    UPDATE_ORDER_STATUS_STATE,
} from './actions';

const initialStates = {
    page: null,
    promise: false,
    orderStatus: null,
    order: { wayBill: '', customerName: '', phoneNumber: '' },
};

const page = (state = initialStates.page, action) => {
    const { type, payload } = action;
    if (type === UPDATE_PAGE_STATE) {
        return payload;
    }
    return state;
};

const order = (state = initialStates.order, action) => {
    const { type, payload } = action;
    if (type === UPDATE_ORDER_STATE) {
        return payload ? { ...state, ...payload } :initialStates.order;
    }
    return state;
};

const promise = (state = initialStates.promise, action) => {
    const { type, payload } = action;
    if (type === UPDATE_PROMISE_STATE) {
        return payload;
    }
    return state;
};

const orderStatus = (state = initialStates.orderStatus, action) => {
    const { type, payload } = action;
    if (type === UPDATE_ORDER_STATUS_STATE) {
        return payload;
    }
    if (type === UPDATE_ORDER_STATE) {
        return payload ? state :initialStates.orderStatus;
    }
    return state;
};

export default combineReducers({
    form,
    page,
    order,
    promise,
    orderStatus,
});
