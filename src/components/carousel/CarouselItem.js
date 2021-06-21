/*
-------- importes utilizados --------------
*/
import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import { Colors } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import { Animated } from 'react-native'

//obtencion de las dimenciones de la ventana
const { width, height } = Dimensions.get('window')

//creacion de degradado
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)
/*
------------- visualizacion de imagen, boton del chat con los entrenadores -----------------
*/
const CarouselItem = ({ item }) => {
	return (
		<View style={styles.cardView}>
			<Image style={styles.image} source={{ uri: item.img }} />
			<View style={styles.textView}>
				<Text style={styles.itemTitle}> {item.nombre}</Text>

				<AnimatedLinearGradient
					colors={['#e8b923', '#fea724']}
					style={{
						width: '100%',
						zIndex: 1,
						borderRadius: 25,
						shadowColor: '#000',
						shadowOffset: { width: 0.8, height: 0.8 },
						shadowOpacity: 1,
						shadowRadius: 3,
						elevation: 5,
					}}
				>
					<Button
						title='Entra'
						titleStyle={{ color: 'black', fontWeight: '400' }}
						buttonStyle={{ backgroundColor: 'rgba(255,0,0,0)', borderRadius: 25 }}
					></Button>
				</AnimatedLinearGradient>
			</View>
		</View>
	)
}

// estilo de item
const styles = StyleSheet.create({
	cardView: {
		flex: 1,
		width: width - 20,
		height: height / 4,
		backgroundColor: 'white',
		marginLeft: 10,
		marginRight: 10,
		marginTop: 5,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0.5, height: 0.5 },
		shadowOpacity: 0.5,
		shadowRadius: 3,
		elevation: 5,
	},
	textView: {
		position: 'absolute',
		bottom: 10,
		margin: 10,
		left: 5,
	},
	image: {
		width: width - 20,
		height: height / 4,
		borderRadius: 10,
	},
	itemTitle: {
		color: 'white',
		fontSize: 22,
		shadowOffset: { width: 0.8, height: 0.8 },
		shadowOpacity: 1,
		shadowRadius: 3,
		marginBottom: 5,
		fontWeight: 'bold',
		elevation: 5,
		textShadowColor: '#000',
	},
})

export default CarouselItem
