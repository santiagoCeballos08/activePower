/*
---- importes utilizados
*/
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Carousel from '../components/carousel/Carousel'

/*
---- renderizacion de carusel de entrenadores
*/
const ListaChatEntrenador = ({ navigation, data }) => {
	return (
		<View>
			<Carousel data={data} />
		</View>
	)
}

export default ListaChatEntrenador
