import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { UPDATE_ORDER_STATE, UPDATE_PAGE_STATE } from './actions';

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
        return { ...state, ...payload };
    }
    return state;
};

export default combineReducers({
    form,
    page,
    order,
    promise: () => ({})
});
