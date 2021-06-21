/*
---- importes utilizados ----
*/
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Mensaje from '../pages/Mensaje'
//import Chat from '../pages/Chat'
import { StyleSheet, Text } from 'react-native'
import Icon from '../components/Icon'
import { IconButton, Colors } from 'react-native-paper'
import Chat from '../pages/Chat'

//instanciacion de stack
const Stack = createStackNavigator()

/*
---- stack mensaje ----
*/
const MensajeNavigator = ({ navigation, route }) => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Mensaje'
				component={Mensaje}
				initialParams={{ data }}
				options={{
					headerTitle: () => <Text style={styles.text}>Chatssito</Text>,
					headerLeft: () => (
						<IconButton
							icon={() => <Icon name='menu' size={24} color={Colors.amber500} />}
							onPress={() => {
								route.params.drawer.toggleDrawer()
							}}
						/>
					),
				}}
			/>
		</Stack.Navigator>
	)
}

//datos de prueba

const data = [
	{
		nombre: 'Sala 1',
		online: 40,
		id: 1,
	},
	{
		nombre: 'Sala 2',
		online: 12,
		id: 2,
	},
]

//estilos de stack mensaje
const styles = StyleSheet.create({
	text: {
		marginLeft: 50,
		marginTop: 12,
		fontWeight: 'bold',
		fontSize: 18,
	},
})
export default MensajeNavigator
