import { notEmpty } from '../utils/validators';

export default [
    {
        type: 'number',
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
        validators: [notEmpty('Customer Name')],
    },
    {
        type: 'text',
        editable: false,
        name: 'phoneNumber',
        placeholder: 'Phone Number',
        validators: [notEmpty('Phone Number')],
    },
    {
        type: 'text',
        editable: false,
        name: 'deliveryStatus',
        placeholder: 'Delivery Status',
        validators: [notEmpty('Delivery Status')],
    },
];
