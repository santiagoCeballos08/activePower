/*
---- importes utilizados ----
*/
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigator from '../TabNavigator'
// import DrawerContentenido from '../components/Drawer/DrawerContent'
import ModoPremium from '../pages/ModoPremium'
import CalculaMasa from '../pages/CalcularMasa'
import CrearRutina from '../pages/CrearRutina'
import BuscarUsuarioNavigation from '../stack/BuscarUsuarioNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { LogBox, Text } from 'react-native'

LogBox.ignoreLogs([
	'Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle',
	'Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info.',
])
//instanciacion de menu tipo hamburguesa
const Drawer = createDrawerNavigator()

/*
---- renderizado de menu ----
*/
const MenuHamburguesa = () => (
	<NavigationContainer independent={true}>
		<Drawer.Navigator
			// drawerContent={props => <DrawerContentenido {...props} />}
			drawerContentOptions={{
				activeTintColor: '#FF8F09',
			}}
		>
			<Drawer.Screen name='Principal' component={TabNavigator}></Drawer.Screen>
			<Drawer.Screen
				name='ModoPremium'
				component={ModoPremium}
				options={{
					headerShown: true,
					headerTitle: () => (
						<Text
							style={{ marginLeft: 50, marginTop: 12, fontWeight: 'bold', fontSize: 18 }}
						>
							Obtener Premium
						</Text>
					),
				}}
			></Drawer.Screen>
			<Drawer.Screen
				name='CalculaMasa'
				component={CalculaMasa}
				options={{
					headerShown: true,
					headerTitle: () => (
						<Text
							style={{ marginLeft: 50, marginTop: 12, fontWeight: 'bold', fontSize: 18 }}
						>
							Calcula tu masa
						</Text>
					),
				}}
			></Drawer.Screen>
			<Drawer.Screen name='CrearRutina' component={CrearRutina}></Drawer.Screen>
			<Drawer.Screen
				name='BuscarUsuario'
				component={BuscarUsuarioNavigation}
			></Drawer.Screen>
		</Drawer.Navigator>
	</NavigationContainer>
)

export default MenuHamburguesa
