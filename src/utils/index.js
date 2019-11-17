const baseURL = 'http:192.168.0.212:3000/orders/';
const commonHeaders = {};

const getBackGroundColor = (orderStatus) => {
    switch (orderStatus) {
        case 'Refused': return '#ff3a29';
        case 'bhome': return '#e36bff';
        case 'NoAnswer': return '#00dcff';
        case 'Delivered': return '#b8ff00';
        default: return '#fff';
    }
};

const handleFetchOrderData = async ({ wayBill }) => {
    try {
        const response = await fetch(`${baseURL}${wayBill}`, {
            method: 'GET',
            mode: 'cors',
            headers: { ...commonHeaders },
        });
        return await response.json();
    } catch (e) {
        console.error(e);
    }
};

const handleUpdateOrderData = async (payload) => {
    try {
        const response = await fetch(baseURL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                ...commonHeaders,
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(payload)
        });
        return await response.json();
    } catch (e) {
        console.error(e);
    }
};

export {
    commonHeaders,
    getBackGroundColor,
    handleFetchOrderData,
    handleUpdateOrderData,
}
