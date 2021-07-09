/*
---- importes utilizados ----
*/
import React from 'react'
import { Text, View, TextInput, StyleSheet, Image, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import * as Print from 'expo-print'
import * as FileSystem from 'expo-file-system'
import * as MediaLibrary from 'expo-media-library'
//obtencion de tamaño de la ventana

const { width, height } = Dimensions.get('screen')
const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pdf Content</title>
        <style>
            body {
                font-size: 16px;
                color: rgb(255, 196, 0);
            }

            h1 {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>Hello, UppLabs!</h1>
    </body>
    </html>
`

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
						<Text style={styles.txt}>inicia sesion</Text>
					</LinearGradient>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('registro')}>
					<LinearGradient colors={[color1, color2]} style={styles.btn}>
						<Text style={styles.txt}>registrate</Text>
					</LinearGradient>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => createPDF(htmlContent)}>
					<Text>Create PDF</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const createPDF = async html => {
	try {
		const { uri } = await Print.printToFileAsync({ html })
		if (Platform.OS === 'ios') {
			await Sharing.shareAsync(uri)
		} else {
			const permission = await MediaLibrary.requestPermissionsAsync()

			if (permission.granted) {
				await MediaLibrary.createAssetAsync(uri)
			}
		}
	} catch (error) {
		console.error(error)
	}
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
