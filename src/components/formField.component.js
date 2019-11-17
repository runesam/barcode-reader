import React from 'react';
import { Field } from 'redux-form';
import propTypes from 'prop-types';

import TextFieldComponent from './textField.component';

const FormFieldComponent = (props) => {
	const {
		field: {
			type,
			name,
			editable,
			validators,
			placeholder,
		},
		promise,
	} = props;
	return (
		<Field
			type={type}
			name={name}
			validate={validators}
			placeholder={placeholder}
			component={TextFieldComponent}
			editable={editable && !promise}
		/>
	);
};

FormFieldComponent.propTypes = {
	promise: propTypes.bool.isRequired,
	field: propTypes.shape({}).isRequired,
};

export default FormFieldComponent;
