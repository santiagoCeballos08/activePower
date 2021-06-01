/*
------ importes utilizados ------
*/
import { DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Drawer } from 'react-native-paper'
import Icon from '../Icon'

/*
----- contenido de el munu de hamburgesa
*/
const DrawerContent = props => {
	return (
		<View>
			<DrawerContentScrollView {...props}>
				<View>
					<Text style={styles.title}>Active Power</Text>
				</View>
				<Drawer.Section>
					<Drawer.Item
						label='Modo Premium'
						icon={({ color, size }) => <Icon name='diamonds' size={size} color={color} />}
						onPress={() => props.navigation.navigate('ModoPremium')}
					></Drawer.Item>
					<Drawer.Item
						label='Calcula tu masa'
						icon={({ color, size }) => (
							<Icon name='pagebreak' size={size} color={color} />
						)}
						onPress={() => props.navigation.navigate('CalculaMasa')}
					/>
					<Drawer.Item
						label='Crear rutina'
						icon={({ color, size }) => <Icon name='star-empty' size={24} color='black' />}
						onPress={() => props.navigation.navigate('CrearRutina')}
					/>
					<Drawer.Item
						label='Buscar usuario'
						icon={({ color, size }) => <Icon name='search' size={24} color='black' />}
						onPress={() => props.navigation.navigate('BuscarUsuario')}
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
