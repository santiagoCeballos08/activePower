/*
---- importes utilizados ----
*/
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBar from './components/TabBar'
import ProfileNavigator from './stack/ProfileNavigator'
import GratisNavigator from './stack/GratisNavegatior'
// import MensajeNavigator from './stack/MensajeNavigator'
// import PremiumNavigator from './stack/PremiumNavegation'
// import { View } from 'react-native'
import * as Font from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'

//instanciacion de menu inferior
const Tab = createBottomTabNavigator()

/*
---- menu inferior ----
*/
const TabNavigator = ({ navigation, route }) => {
	Font.loadAsync({
		'FontAwesome5Free-Solid': {
			uri: '@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome5Free-Solid.ttf',
		},
	})

	return (
		<NavigationContainer independent={true}>
			<Tab.Navigator tabBar={props => <TabBar {...props} />}>
				<Tab.Screen
					name='Gratis'
					component={GratisNavigator}
					initialParams={{ icon: 'home', navigation }}
				/>

				<Tab.Screen
					name='Cuenta'
					component={ProfileNavigator}
					initialParams={{ icon: 'user', navigation }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}

{
	/* <Tab.Screen
					name='premium'
					component={GratisNavigator}
					initialParams={{ icon: 'home', navigation }}
				/>
				<Tab.Screen
					name='Mensaje'
					component={GratisNavigator}
					initialParams={{ icon: 'message1', navigation }}
				/> */
}

export default TabNavigator
