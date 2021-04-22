import React from 'react';
import colors from '../styles/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';
import { Welcome } from '../pages/Welcome';
import { UserIndentification } from '../pages/UserIndentification';
import { Confirmetion } from '../pages/Confirmetion';

const stack = createStackNavigator();

const AppRoutes : React.FC = () =>{

    return(
   <stack.Navigator
   headerMode='none'
   screenOptions ={{
       cardStyle:{
           backgroundColor: colors.white
       }
   }}
   >
       <stack.Screen
        name="Welcome"
        component= {Welcome}
       />
        <stack.Screen
        name="UserIndentification"
        component= {UserIndentification}
       />
        <stack.Screen
        name="Confirmetion"
        component= {Confirmetion}
       />
       

   </stack.Navigator>
    )

}

export default AppRoutes;