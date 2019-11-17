import React from 'react';
import propTypes from 'prop-types';
import { View } from 'react-native';

import FormFieldComponent from './formField.component';

const FieldsListComponent = ({ promise, fields }) => fields.map(field => (
	<View key={field.name}>
		<FormFieldComponent
			field={field}
			promise={promise}
		/>
	</View>
));

FieldsListComponent.propTypes = {
	fields: propTypes.array,
};

FieldsListComponent.defaultProps = {
	fields: [],
};

export default FieldsListComponent;
