import React from 'react';
import propTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { View } from 'react-native';

import ErrorComponent from '../../components/error.component';
import ButtonComponent from '../../components/button.component';
import FieldsListComponent from '../../components/fieldsList.component';

import { userLoginDefinition } from '../../model';

const LoginForm = (props) => {
    const {
        handleSubmit,
        error,
        invalid,
        promise,
    } = props;
    return (
        <View onSubmit={handleSubmit}>
            <View>
                <FieldsListComponent promise={promise} fields={userLoginDefinition} />
            </View>
            <ButtonComponent
                label="LOGIN"
                loading={promise}
                onClick={handleSubmit}
                disabled={invalid || promise}
            />
            {Boolean(error) && (
                <ErrorComponent error={error._error} />
            )}
        </View>
    );
};

LoginForm.propTypes = {
    handleSubmit: propTypes.func.isRequired,
    invalid: propTypes.bool.isRequired,
    promise: propTypes.bool.isRequired,
    error: propTypes.shape({}),
};

LoginForm.defaultProps = {
    error: undefined,
};

export default reduxForm({
    form: 'login',
})(LoginForm);
