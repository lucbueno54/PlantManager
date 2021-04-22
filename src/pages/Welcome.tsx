
import React from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons'

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts'
import { useNavigation } from '@react-navigation/core';

export function Welcome() {

  const navegation = useNavigation();

  function handerStart() {
    navegation.navigate("UserIndentification");
  }

  return (
    <SafeAreaView style={styles.conteiner}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil</Text>
        <Image source={wateringImg} style={styles.image} resizeMode='contain' />
        <Text style={styles.subtitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.</Text>
        <TouchableOpacity
          style={styles.buttom}
          activeOpacity={0.8}
          onPress ={handerStart}
        >

          <Feather name="chevron-right" style={styles.icon}></Feather>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,

  },

  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 30
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    fontFamily: fonts.heading,
  },


  image: {
    height: Dimensions.get('window').width * 0.7,
  },

  buttom: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },


  buttomText: {
    color: colors.white,
    fontSize: 24

  },

  icon: {
    fontSize: 28,
    color: colors.white,

  }

});