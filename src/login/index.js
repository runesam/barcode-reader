import propTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

// import { loginUser } from 'actions';

import LoginComponent from './components/login.component';

class Login extends PureComponent {
    static propTypes = {
        promise: propTypes.shape({}).isRequired,
        loginUserAction: propTypes.func.isRequired,
    };

    handleSubmit = ({ username, password }) => {
        const { loginUserAction } = this.props;
        loginUserAction(username, password);
    };

    handleSignUp = () => {
        const { navigation } = this.props;
        return navigation.navigate('SignUp');
    };

    render() {
        const { promise } = this.props;
        return (
            <LoginComponent
                promise={promise}
                handleSubmit={this.handleSubmit}
                handleSignUp={this.handleSignUp}
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

export default connect(mapStateToProps, { loginUserAction: () => ({ type: 'TEST' }) })(Login);
