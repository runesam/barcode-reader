const UPDATE_PAGE_STATE = 'UPDATE_PAGE_STATE';
const UPDATE_ORDER_STATE = 'UPDATE_ORDER_STATE';

const updateOrderState = (payload) => ({
    payload,
    type: UPDATE_ORDER_STATE,
});

const updatePageState = (payload) => ({
    payload,
    type: UPDATE_PAGE_STATE,
});

export {
    updatePageState,
    updateOrderState,
    UPDATE_ORDER_STATE,
    UPDATE_PAGE_STATE,
}
