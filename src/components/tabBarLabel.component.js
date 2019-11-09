import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

import { colors } from '../themes';

const common = {
    marginTop: 10,
    textAlign: 'center',
};

const active = {
    ...common,
    color: colors.primaryText,
};

const inactive = {
    ...common,
    color: colors.frost,
};

const styles = StyleSheet.create({
    active,
    inactive,
});

const TabBarIcon = ({ focused, label }) => (
    <Text style={focused ? styles.active : styles.inactive}>{label}</Text>
);

TabBarIcon.propTypes = {
    focused: propTypes.bool.isRequired,
    label: propTypes.string.isRequired,
};

export default TabBarIcon;
