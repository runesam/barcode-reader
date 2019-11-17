import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import {
    UPDATE_PAGE_STATE,
    UPDATE_ORDER_STATE,
    UPDATE_PROMISE_STATE,
} from './actions';

const page = (state = null, action) => {
    const { type, payload } = action;
    if (type === UPDATE_PAGE_STATE) {
        return payload;
    }
    return state;
};

const order = (state = { wayBill: '', customerName: '', phoneNumber: '' }, action) => {
    const { type, payload } = action;
    if (type === UPDATE_ORDER_STATE) {
        return payload ? { ...state, ...payload } : { wayBill: '', customerName: '', phoneNumber: '' };
    }
    return state;
};

const promise = (state = false, action) => {
    const { type, payload } = action;
    if (type === UPDATE_PROMISE_STATE) {
        return payload;
    }
    return state;
};

export default combineReducers({
    form,
    page,
    order,
    promise,
});
