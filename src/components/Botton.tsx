
import React from 'react';
import { Text, StyleSheet, TouchableOpacityProps, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';

import fonts from '../styles/fonts';

interface ButtonPorps extends TouchableOpacityProps {
    title: string
}

export function Button({ title, ...rest }: ButtonPorps) {

    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading,
    }


});