import propTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, StatusBar } from 'react-native';
import { connect, Provider } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage'

import Main from './main';
import Login from './login';
import store from './redux/store';
import { setAuthHeader } from './utils';
import BarcodeScanner from './barcodeScanner';
import { updatePageState } from './redux/actions';

class App extends Component {
    static propTypes = {
        page: propTypes.string,
        updatePageState: propTypes.func.isRequired,
    };

    static defaultProps = { page: null };

    constructor(props) {
        super(props);
        const { page } = props;
        if (!page) {
            this.retrieveAuthToken().then();
        }

        this.pages = {
            Main,
            Login,
            BarcodeScanner,
        };
    }

    retrieveAuthToken = async () => {
        const { updatePageState: updatePageStateAction } = this.props;
        try {
            const value = await AsyncStorage.getItem('auth');
            if (value) {
                updatePageStateAction('Main');
                setAuthHeader(JSON.parse(value));
            } else {
                updatePageStateAction('Login');
            }
        } catch (error) {
            // Error retrieving data
        }
    };

    render() {
        const { page } = this.props;
        const ComponentToRender = this.pages[page];

        return (
            <>
                <StatusBar barStyle="dark-content" />
                {ComponentToRender ? <ComponentToRender /> : <Text>loading... </Text>}
            </>
        );
    }
}

const mapStateToProps = ({ page }) => ({
    page,
});

const ConnectedApp = connect(mapStateToProps, { updatePageState })(App);

export default () => (
    <Provider store={store}>
        <ConnectedApp />
    </Provider>
);
