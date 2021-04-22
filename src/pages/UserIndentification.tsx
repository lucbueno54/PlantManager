import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from '../components/Botton';
import colors from '../styles/colors';

import fonts from '../styles/fonts'


export function UserIndentification() {

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function TextInputOnBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function TextInputonFocus() {
        setIsFocused(true)
    }

    function handleImputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    const navegation = useNavigation();

    function handerSubmit() {
        
            navegation.navigate("Confirmetion");
    }


    return (
        <SafeAreaView style={style.container}>
            <KeyboardAvoidingView
                style={style.container}
                behavior={Platform.OS == 'ios' ? "padding" : 'height'}
            >
                <View style={style.content}>
                    <View style={style.form}>
                        <View style={style.header}>
                            <Text style={style.emoji}>
                                {isFilled ? '😄' : '😃'}
                            </Text>
                            <Text style={style.title}>
                                Como podemos {'\n'}
                                chamar você?
                             </Text>
                        </View>
                        <TextInput
                            style={[
                                style.input,
                                (isFocused || isFilled) && { borderColor: colors.green }
                            ]}
                            placeholder='Digite um nome'
                            onBlur={TextInputOnBlur}
                            onFocus={TextInputonFocus}
                            onChangeText={handleImputChange}
                        />
                        <View style={style.footer}>
                            <Button
                                title='Avançar'
                                onPress={handerSubmit}
                            />
                        </View>

                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>

    );

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    content: {
        flex: 1,
        width: '100%',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
        width: '100%'
    },

    header: {
        alignItems: 'center'
    },



    emoji: {
        fontSize: 44,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20

    },

    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20
    }

});