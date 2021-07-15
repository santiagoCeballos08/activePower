/*
---- importes utilizados ----
*/
import React from 'react'
import { StyleSheet,} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from  '@react-navigation/stack' 


const Stack = createStackNavigator()

import ingresarinfo from '../../Screens/ingresarinfo';
import premim from '../../Screens/premim';

function Mystack() {
	return(
	  <Stack.Navigator>   
		  <Stack.Screen name="premim" component ={premim} />
		  <Stack.Screen name="ingresarinfo" component ={ingresarinfo} />  
	  </Stack.Navigator>
	)
  }

/*
---- vista de premium ----
*/
const ModoPremium = ({ navigation, route }) => {
	return (
	
       <Mystack/>
    
	)
}

/*
---- vista de premium ----
*/

const styles = StyleSheet.create({	
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	  },
  });
export default ModoPremium
