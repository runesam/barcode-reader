import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import TextFieldComponent from './textField.component';

const getName = (name, parent) => {
	if (parent) {
		return `${parent}.${name}`;
	}
	return name;
};

const FormFieldComponent = (props) => {
	const {
		field: {
			type,
			name,
			validators,
			placeholder,
		},
		parent,
	} = props;
	return (
		<Field
			type={type}
			validate={validators}
			placeholder={placeholder}
			name={getName(name, parent)}
			component={TextFieldComponent}
		/>
	);
};

FormFieldComponent.propTypes = {
	parent: PropTypes.string,
	field: PropTypes.shape({}).isRequired,
};

FormFieldComponent.defaultProps = {
	parent: '',
};

export default FormFieldComponent;
