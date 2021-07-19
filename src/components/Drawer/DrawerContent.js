/*
------ importes utilizados ------
*/
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Colors, Drawer } from 'react-native-paper'

/*
----- contenido de el munu de hamburgesa
*/
const DrawerContentenido = ({ navigation }) => {
	return (
		<View>
			<View style={styles.containerTitle}>
				<Text style={styles.title}>ActivePower</Text>
			</View>
			<Drawer.Section>
				<Drawer.Item
					label='Modo Premium'
					icon={() => <Image source={require('../../img/diamond.png')} />}
					onPress={() => navigation.navigate('ModoPremium')}
				/>
				<Drawer.Item
					label='Calcula tu masa'
					onPress={() => navigation.navigate('CalculaMasa')}
					icon={() => <Image source={require('../../img/indice-de-masa-corporal.png')} />}
				/>
				<Drawer.Item
					label='Buscar Usuario'
					icon={() => <Image source={require('../../img/candidato.png')} />}
					onPress={() => navegaition.navegate('BuscarUsuario')}
				/>
			</Drawer.Section>
		</View>
	)
}
// estilos utilizados para la hamburguesa
const styles = StyleSheet.create({
	containerTitle: {
		width: 250,
		height: 150,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 25,
		fontWeight: '500',
		color: '#FF8F09',
	},
	item: {
		color: 'red',
		fontSize: 40,
		fontWeight: '500',
		width: 200,
		backgroundColor: Colors.green200,
	},
})

export default DrawerContentenido

/**/
