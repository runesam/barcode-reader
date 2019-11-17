const UPDATE_PAGE_STATE = 'UPDATE_PAGE_STATE';
const UPDATE_ORDER_STATE = 'UPDATE_ORDER_STATE';
const UPDATE_PROMISE_STATE = 'UPDATE_PROMISE_STATE';

const updateOrderState = (payload) => ({
    payload,
    type: UPDATE_ORDER_STATE,
});

const updatePageState = (payload) => ({
    payload,
    type: UPDATE_PAGE_STATE,
});

const updatePromiseState = (payload) => ({
    payload,
    type: UPDATE_PROMISE_STATE,
});

export {
    updatePageState,
    updateOrderState,
    updatePromiseState,
    UPDATE_PAGE_STATE,
    UPDATE_ORDER_STATE,
    UPDATE_PROMISE_STATE,
}
