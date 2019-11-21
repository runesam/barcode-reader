import { Alert } from 'react-native';

import { updatePageState } from '../redux/actions';

const showAlert = (store, reason) => {
    Alert.alert(
        'Error',
        reason,
        [
            {
                text: 'scanAgain',
                onPress: () => store.dispatch(updatePageState('BarcodeScanner')),
            },
            { text: 'Cancel', style: 'cancel' },
        ],
        { cancelable: true },
    );
};

const selectStatusAlert = () => {
    Alert.alert(
        'Status Needed',
        'Please Select a Status of the order',
        [
            { text: 'Cancel', style: 'cancel' },
        ],
        { cancelable: true },
    );
};

const wrongUsernamePassword = () => {
    Alert.alert(
        'Failed',
        'Please username and password again',
        [
            { text: 'Cancel', style: 'cancel' },
        ],
        { cancelable: true },
    );
};

export {
    showAlert,
    selectStatusAlert,
    wrongUsernamePassword,
}
