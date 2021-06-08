/*
---- importes utilizados ----
*/
import React from 'react'
import { Text, View, TextInput, StyleSheet, Image, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'

//obtencion de tamaño de la ventana

const { width, height } = Dimensions.get('screen')
/*
---- vista de inicio ----
*/
const Inicio = ({ navigation }) => {
	const color1 = '#e84b1960',
		color2 = '#ff050560'
	return (
		<View>
			<Image source={require('../img/mujer.png')} style={styles.img} />
			<Image source={require('../img/logoCompleto.png')} style={styles.logo} />

			<View style={styles.container}>
				<TouchableOpacity onPress={() => navigation.navigate('InicioSesion')}>
					<LinearGradient colors={[color1, color2]} style={styles.btn}>
						<Text style={styles.txt}>inicia session</Text>
					</LinearGradient>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('registro')}>
					<LinearGradient colors={[color1, color2]} style={styles.btn}>
						<Text style={styles.txt}>registrate</Text>
					</LinearGradient>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		zIndex: 2,
		top: height / 2.2,
		left: width / 5,
	},
	logo: {
		position: 'absolute',
		width: 125,
		height: 125,
		zIndex: 2,
		left: width / 3,
		top: height / 6,
	},
	txt: {
		marginTop: 7,
		fontSize: 15,
		color: '#ffff',
		textAlign: 'center',
	},
	btn: {
		margin: 10,
		position: 'relative',
		display: 'flex',
		width: 220,
		height: 50,
		padding: 5,
		borderRadius: 20,
	},
	img: {
		width: width,
		height: height,
		zIndex: 1,
		backgroundColor: Colors.green100,
	},
})

export default Inicio
