/*
---- importes utilizados ----
*/
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBar from './components/TabBar'
import ProfileNavigator from './stack/ProfileNavigator'
import GratisNavigator from './stack/GratisNavegatior'
import MensajeNavigator from './stack/MensajeNavigator'
import PremiumNavigator from './stack/PremiumNavegation'

//instanciacion de menu inferior
const Tab = createBottomTabNavigator()

/*
---- menu inferior ----
*/
const TabNavigator = ({ navigation, route }) => {
	return (
		<Tab.Navigator
			tabBar={props => {
				return <TabBar {...props} />
			}}
		>
			<Tab.Screen
				name='Gratis'
				component={GratisNavigator}
				initialParams={{ icon: 'home', navigation }}
			/>
			<Tab.Screen
				name='Premium'
				component={PremiumNavigator}
				initialParams={{ icon: 'staro', navigation }}
			/>
			<Tab.Screen
				name='Mensaje'
				component={MensajeNavigator}
				initialParams={{ icon: 'message1', navigation }}
			/>
			<Tab.Screen
				name='Cuenta'
				component={ProfileNavigator}
				initialParams={{ icon: 'user', navigation }}
			/>
		</Tab.Navigator>
	)
}

export default TabNavigator
