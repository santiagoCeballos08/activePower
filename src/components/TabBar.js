/*
---- importes utilizados ----
*/
import React, { useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Tab from './Tab'

//obtencion de tamaño de pantalla
const { width } = Dimensions.get('screen')

/*
---- lista de navegacion inferior ----
*/
const TabBar = ({ state, navigation }) => {
	const [selected, setSelected] = useState('Gratis')
	const { routes } = state

	/*
	---- selector de color ----
	*/
	const renderColor = currentTab => {
		if (currentTab == selected) {
			return '#ff8e0a'
		} else {
			return '#171717'
		}
	}

	/*
	---- obtencion del tab toque ----
	*/
	const handlePress = (activeTab, index) => {
		if (state.index !== index) {
			setSelected(activeTab)
			navigation.navigate(activeTab)
		}
	}

	return (
		<View style={style.wrapper}>
			<View style={style.container}>
				{routes.map((route, index) => (
					<Tab
						tab={route}
						icon={route.params.icon}
						onPress={() => handlePress(route.name, index)}
						color={renderColor(route.name)}
						key={route.key}
					/>
				))}
			</View>
		</View>
	)
}

//estilos de la navegacion inferior
const style = StyleSheet.create({
	wrapper: {
		position: 'absolute',
		bottom: 20,
		width,
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#eee',
		width: 350,
		borderRadius: 100,
		elevation: 2,
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},
})

export default TabBar
