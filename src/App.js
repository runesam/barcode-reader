import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { Text, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import Main from './main';
import Login from './login';
import store from './redux/store';

class App extends Component {
    static propTypes = {

    };

    state = {
        loading: true,
        componentToRender: Login,
    };

    constructor(props) {
        super(props);
        this.retrieveAuthToken()
            .then();
    }

    retrieveAuthToken = async () => {
        try {
            const value = await AsyncStorage.getItem('authToken');
            if (value) {
                this.setState({ loading: false, componentToRender: Main });
            } else {
                this.setState({ loading: false });
            }
        } catch (error) {
            // Error retrieving data
        }
    };

    render() {
        const { loading, componentToRender: ComponentToRender } = this.state;
        if (loading) {
            return (
                <>
                    <StatusBar barStyle="dark-content" />
                    <Text>loading... </Text>
                </>
            );
        }
        return <ComponentToRender />;
    }
}

export default () => (
    <Provider store={store}>
        <App />
    </Provider>
);
