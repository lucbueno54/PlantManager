import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, View, TouchableOpacity,StyleSheet, SafeAreaView } from 'react-native';

import wateringImg from '../assets/watering.png';
import { Buttom } from '../components/Button';
import colors from '../styles/colors';

export  function Welcome() {
  return (
    <SafeAreaView style={styles.conteiner}>
      <Text style={styles.title}>        
        Gerencie {'\n'}
       suas plantas {'\n'}
       de forma fácil</Text>
      <Image source={wateringImg} style={styles.image}/>
      <Text  style={styles.subtitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.</Text>
       <Buttom title='>' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteiner:{
    flex:1,
    alignItems:'center',
    justifyContent: 'space-between',
    marginTop: 10
  },
  title:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color:colors.heading,
    marginTop: 38
  },

  subtitle:{
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
  },


  image:{
    width:292,
    height:284,
  },

});