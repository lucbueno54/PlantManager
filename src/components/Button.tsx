import React from 'react'
import { TouchableOpacity, StyleSheet, Text , TouchableOpacityProps} from 'react-native'

import colors from '../styles/colors';

interface ButtomProps extends TouchableOpacityProps{
    title:string;
}

export function Buttom({title, ...rest}:ButtomProps){

  return   (  
  <TouchableOpacity 
            style={styles.buttom} 
            activeOpacity={0.8}
            {...rest}
            >
        <Text style={styles.buttomText}>
          {title}
        </Text>
      </TouchableOpacity>

  )

}


const styles = StyleSheet.create({

  
    buttom:{
      backgroundColor: colors.green,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      marginBottom: 10,
      height: 56,
      width:46,
      paddingHorizontal: 10
    },
  
  
    buttomText: {
      color: colors.white,
      fontSize: 24
  
    }
  
  });