import React from 'react';
import propTypes from 'prop-types';
import { View } from 'react-native';

import FormFieldComponent from './formField.component';

const FieldsListComponent = ({ fields, parent }) => fields.map(field => (
	<View key={field.name}>
		<FormFieldComponent
			field={field}
			parent={parent}
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
