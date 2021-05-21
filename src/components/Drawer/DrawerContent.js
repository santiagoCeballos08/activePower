/*
------ importes utilizados ------
*/
import { DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Drawer } from 'react-native-paper'
import { FontAwesome, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'

/*
----- contenido de el munu de hamburgesa
*/
const DrawerContent = props => {
	//fuente customizada
	try {
		const [loaded, err] = useFonts({
			Oswald: require('../../fonts/Oswald-Medium.ttf'),
		})
	} catch (error) {
		console.log(error)
	}
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
							<FontAwesome name='diamond' size={size} color={color} />
						)}
						onPress={() => props.navigation.navigate('ModoPremium')}
					></Drawer.Item>
					<Drawer.Item
						label='Calcula tu masa'
						icon={({ color, size }) => (
							<AntDesign name='calculator' size={size} color={color} />
						)}
						onPress={() => props.navigation.navigate('CalculaMasa')}
					/>
					<Drawer.Item
						label='Crear rutina'
						icon={({ color, size }) => (
							<MaterialCommunityIcons name='human-handsup' size={24} color='black' />
						)}
						onPress={() => props.navigation.navigate('CrearRutina')}
					/>
					<Drawer.Item
						label='Buscar usuario'
						icon={({ color, size }) => (
							<MaterialCommunityIcons
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
		fontFamily: 'Oswald',
		fontWeight: '500',
		margin: 'auto',
		marginTop: '45px',
		marginBottom: '45px',
		color: '#FF8F09',
	},
	item: {
		color: 'red',
		fontSize: 40,
		fontWeight: '500',
		margin: 'auto',
	},
})

export default DrawerContent
