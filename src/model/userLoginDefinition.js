import { notEmpty } from '../utils/validators';

export default [
	{
		name: 'username',
		placeholder: 'Email',
		type: 'text',
		validators: [notEmpty('Name')],
	},
	{
		name: 'password',
        placeholder: 'Password',
		type: 'password',
		validators: [notEmpty('Secret')],
	},
];
