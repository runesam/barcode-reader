import React from 'react';
import propTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { View } from 'react-native';

import ErrorComponent from '../../components/error.component';
import ButtonComponent from '../../components/button.component';
import FieldsListComponent from '../../components/fieldsList.component';

import { deliveryStatusDefinition } from '../../model';

const MainForm = (props) => {
    const {
        error,
        invalid,
        promise,
        handleSubmit,
    } = props;
    return (
        <View onSubmit={handleSubmit}>
            <View>
                <FieldsListComponent fields={deliveryStatusDefinition} />
            </View>
            <ButtonComponent
                disabled={invalid}
                onClick={handleSubmit}
                label="Confirm Delivery"
                loading={promise.general}
            />
            {Boolean(error) && (
                <ErrorComponent error={error._error} />
            )}
        </View>
    );
};

MainForm.propTypes = {
    invalid: propTypes.bool.isRequired,
    error: propTypes.shape({}),
    handleSubmit: propTypes.func.isRequired,
    promise: propTypes.shape({}).isRequired,
};

MainForm.defaultProps = {
    error: undefined,
};

export default reduxForm({
    form: 'main',
})(MainForm);
