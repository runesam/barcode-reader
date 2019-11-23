import { encode } from 'base-64'

import { showAlert } from '../utils/alert';
import { userLogout } from '../redux/actions';

if (!global.btoa) {
    global.btoa = encode;
}

const commonHeaders = {};
const baseURL = 'http://eticaret-arab.com/panel/A125-Js/';

const getBackGroundColor = (orderStatus) => {
    switch (orderStatus) {
        case 'Refused': return '#ff3a29';
        case 'bhome': return '#e36bff';
        case 'NoAnswer': return '#00dcff';
        case 'Delivered': return '#b8ff00';
        default: return '#fff';
    }
};

const setAuthHeader = ({ username, password }) => {
    const usernamePassword = `${username}:${password}`;
    commonHeaders['Authorization'] = `Basic ${btoa(usernamePassword)}`;
};

const removeAuthHeader = () => {
    delete commonHeaders['Authorization'];
};

const encodeBody = (body) => {
    let formBody = [];
    for (let property in body) {
        if (body.hasOwnProperty(property)) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(body[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
    }
    formBody = formBody.join("&");
    return formBody;
};

const handleUserLogin = async (body) => {
    try {
        const response = await fetch(`${baseURL}checkUser.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            mode: 'cors',
            body: encodeBody(body),
        });
        return await response.json();
    } catch (e) {
        console.error(e);
    }
};

const handleFetchOrderData = async ({ wayBill }, store) => {
    try {
        const response = await fetch(`${baseURL}wayBill.php?wayBill=${wayBill}`, {
            method: 'GET',
            mode: 'cors',
            headers: { ...commonHeaders },
        });

        if (response.status === 401) {
            store.dispatch(userLogout());
        } else {
            return await response.json();
        }
    } catch (e) {
        console.error(e);
    }
};

const handleUpdateOrderData = async ({ orderId, orderStatus }, store) => {
    const body = {
        orderId,
        deliveryStatus: orderStatus,
    };

    try {
        const response = await fetch(`${baseURL}updateOrder.php`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                ...commonHeaders,
                // 'Content-Type': 'application/json'
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: encodeBody(body),
        });

        if (response.status === 401) {
            store.dispatch(userLogout());
        } else if (response.status === 404) {
            response.json().then(res => showAlert(store, res.message));
        } else {
            return await response.json();
        }
    } catch (e) {
        console.error(e);
    }
};

export {
    commonHeaders,
    setAuthHeader,
    handleUserLogin,
    removeAuthHeader,
    getBackGroundColor,
    handleFetchOrderData,
    handleUpdateOrderData,
}
