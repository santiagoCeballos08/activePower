/*
---- importes utilizados ----
*/
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigator from '../TabNavigator'
import DrawerContentenido from '../components/Drawer/DrawerContent'
import ModoPremium from '../pages/ModoPremium'
import CalculaMasa from '../pages/CalcularMasa'
import CrearRutina from '../pages/CrearRutina'
import BuscarUsuario from '../pages/BuscarUsuario'
import { NavigationContainer } from '@react-navigation/native'
import { LogBox } from 'react-native'

LogBox.ignoreLogs([
	'Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle',
])
//instanciacion de menu tipo hamburguesa
const Drawer = createDrawerNavigator()

/*
---- renderizado de menu ----
*/
const MenuHamburguesa = () => (
	<NavigationContainer independent={true}>
		<Drawer.Navigator
			drawerContent={props => <DrawerContentenido {...props} />}
			drawerContentOptions={{
				activeTintColor: '#FF8F09',
			}}
		>
			<Drawer.Screen name='Principal' component={TabNavigator}></Drawer.Screen>
			<Drawer.Screen name='ModoPremium' component={ModoPremium}></Drawer.Screen>
			<Drawer.Screen name='CalculaMasa' component={CalculaMasa}></Drawer.Screen>
			<Drawer.Screen name='CrearRutina' component={CrearRutina}></Drawer.Screen>
			<Drawer.Screen name='BuscarUsuario' component={BuscarUsuario}></Drawer.Screen>
		</Drawer.Navigator>
	</NavigationContainer>
)

export default MenuHamburguesa
