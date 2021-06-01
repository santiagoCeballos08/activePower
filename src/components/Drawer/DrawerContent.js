/*
------ importes utilizados ------
*/
import { DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Drawer } from 'react-native-paper'
import * as Icono from '@expo/vector-icons'
import * as Font from 'expo-font'

/*
----- contenido de el munu de hamburgesa
*/
const DrawerContent = props => {
	Font.loadAsync({
		FontAwesome: {
			uri: '@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome.ttf',
		},
		'material-community': {
			uri: '@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf',
		},
		anticon: {
			uri: '@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Anticon.ttf',
		},
	})

	return (
		<View>
			<DrawerContentScrollView {...props}>
				<View>
					<Text style={styles.title}>Active Power</Text>
				</View>
				<Drawer.Section>
					<Drawer.Item
						label='Modo Premium'
						icon={({ color, size }) => (
							<Icono.FontAwesome name='diamond' size={size} color={color} />
						)}
						onPress={() => props.navigation.navigate('ModoPremium')}
					></Drawer.Item>
					<Drawer.Item
						label='Calcula tu masa'
						icon={({ color, size }) => (
							<Icono.AntDesign name='calculator' size={size} color={color} />
						)}
						onPress={() => props.navigation.navigate('CalculaMasa')}
					/>
					<Drawer.Item
						label='Crear rutina'
						icon={({ color, size }) => (
							<Icono.MaterialCommunityIcons
								name='human-handsup'
								size={24}
								color='black'
							/>
						)}
						onPress={() => props.navigation.navigate('CrearRutina')}
					/>
					<Drawer.Item
						label='Buscar usuario'
						icon={({ color, size }) => (
							<Icono.MaterialCommunityIcons
								name='account-search-outline'
								size={24}
								color='black'
							/>
						)}
						onPress={() => props.navigation.navigate('BuscarUsuario')}
					/>
					<Drawer.Item
						label='inicio con gvallos'
						onPress={() => props.navigation.navigate('Inicio')}
					/>
				</Drawer.Section>
			</DrawerContentScrollView>
		</View>
	)
}
// estilos utilizados para la hamburguesa
const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		fontWeight: '500',
		marginTop: 45,
		marginBottom: 45,
		color: '#FF8F09',
	},
	item: {
		color: 'red',
		fontSize: 40,
		fontWeight: '500',
	},
})

export default DrawerContent

/**/
