import propTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

import { userLogin } from '../redux/actions';

import LoginComponent from './components/login.component';

class Login extends PureComponent {
    static propTypes = {
        promise: propTypes.bool.isRequired,
        userLogin: propTypes.func.isRequired,
    };

    handleSubmit = (data) => {
        const { userLogin: loginUserAction } = this.props;
        loginUserAction(data);
    };

    handleForgotPassword = () => {
        const { navigation } = this.props;
        return navigation.navigate('SignUp');
    };

    render() {
        const { promise } = this.props;
        return (
            <LoginComponent
                promise={promise}
                handleSubmit={this.handleSubmit}
                handleForgotPassword={this.handleForgotPassword}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const { promise } = state;
    return {
        promise,
    };
};

export default connect(mapStateToProps, { userLogin })(Login);
