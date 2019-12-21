const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';

const UPDATE_PAGE_STATE = 'UPDATE_PAGE_STATE';
const UPDATE_ORDER_STATE = 'UPDATE_ORDER_STATE';
const SUBMIT_ORDER_STATUS = 'SUBMIT_ORDER_STATUS';
const UPDATE_PROMISE_STATE = 'UPDATE_PROMISE_STATE';
const UPDATE_ORDER_STATUS_STATE = 'UPDATE_ORDER_STATUS_STATE';

const openModal = (payload) => ({
    payload,
    type: OPEN_MODAL,
});

const closeModal = (payload) => ({
    payload,
    type: CLOSE_MODAL,
});


const userLogin = (payload) => ({
    payload,
    type: USER_LOGIN,
});

const userLogout = () => ({
    type: USER_LOGOUT,
});

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

const updateOrderStatusState = (payload) => ({
    payload,
    type: UPDATE_ORDER_STATUS_STATE,
});

const submitOrderStatus = (payload) => ({
    payload,
    type: SUBMIT_ORDER_STATUS,
});

export {
    openModal,
    closeModal,
    OPEN_MODAL,
    CLOSE_MODAL,
    
    userLogin,
    userLogout,
    USER_LOGIN,
    USER_LOGOUT,

    updatePageState,
    updateOrderState,
    submitOrderStatus,
    updatePromiseState,
    updateOrderStatusState,
    UPDATE_PAGE_STATE,
    UPDATE_ORDER_STATE,
    SUBMIT_ORDER_STATUS,
    UPDATE_PROMISE_STATE,
    UPDATE_ORDER_STATUS_STATE,
}
