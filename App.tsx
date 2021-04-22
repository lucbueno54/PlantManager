import React from 'react';
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts,Jost_400Regular ,  Jost_600SemiBold} from '@expo-google-fonts/jost';

import  {Confirmetion}  from './src/pages/Confirmetion';
import Routes from './src/routes/index'


export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular ,  Jost_600SemiBold
  });

  if(!fontsLoaded)
  {
    return <AppLoading/>
  }
  return (<Routes/>);
}