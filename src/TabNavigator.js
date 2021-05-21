/*
---- importes utilizados ----
*/
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Button } from 'react-native-elements'

//obtencion de tamaño de la ventana
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

/*
---- vista de inicio ----
*/
const Inicio = ({ navigation }) => {
	return (
		<View>
			<Image
				source={require('../img/mujer.png')}
				style={{ width: width, height: height, zIndex: -1, position: 'absolute' }}
			/>
			<Image
				source={require('../img/logo(AP){mini}.svg')}
				style={{
					height: '100px',
					height: '100px',
					marginTop: '80px',
				}}
				resizeMode='stretch'
			/>

			<LinearGradient
				colors={['#E84B1990', '#FF050590']}
				style={{
					marginTop: '60px',
					borderRadius: 20,
					width: '200px',
					height: '50px',
					margin: 'auto',
				}}
			>
				<Button
					title='Inicio'
					buttonStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}
					onPress={() => console.log('hi')}
				/>
			</LinearGradient>
			<LinearGradient
				colors={['#E84B1990', '#FF050590']}
				style={{
					marginTop: '30px',
					borderRadius: 20,
					width: '200px',
					height: '50px',
					margin: 'auto',
				}}
			>
				<Button
					title='registro'
					buttonStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}
					onPress={() => navigation.navigate('registro')}
				/>
			</LinearGradient>
		</View>
	)
}

export default Inicio
