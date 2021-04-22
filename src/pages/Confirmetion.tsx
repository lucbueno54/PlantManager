import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from '../components/Botton';
import colors from '../styles/colors';

import fonts from '../styles/fonts'

export function Confirmetion() {

    return(
    <SafeAreaView style={style.container}>
        <View style={style.content}>
            <Text style={style.emoji}>😀</Text>
            <Text style={style.title}>
                Prontinho
            </Text>
            <Text style={style.subtitle}>
                Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
            </Text>
            <View style={style.footer} >
            <Button title='Começar'/>
        </View>
        </View>
       
    </SafeAreaView>
    )
}



const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        padding:30
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
    title: {
        fontSize: 22,
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
    },

    subtitle:{
        fontFamily: fonts.text,
        textAlign:'center',
        fontSize:17,
        paddingVertical:20,
        color:colors.heading,
    }

});