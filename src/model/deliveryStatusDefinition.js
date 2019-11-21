import { notEmpty } from '../utils/validators';

export default [
    {
        type: 'text',
        editable: true,
        name: 'wayBill',
        placeholder: 'Way Bill',
        validators: [notEmpty('Way Bill')],
    },
    {
        type: 'text',
        editable: false,
        name: 'customerName',
        placeholder: 'Customer Name',
    },
    {
        type: 'text',
        editable: false,
        name: 'phoneNumber',
        placeholder: 'Phone Number',
    },
    {
        type: 'text',
        editable: false,
        name: 'deliveryStatus',
        placeholder: 'Delivery Status',
    },
];
