/*
--------------- importaciones utilizados ------------------
*/

import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Colors, IconButton } from 'react-native-paper'
import { ScreenContainer } from 'react-native-screens'
import * as Icono from '@expo/vector-icons'
import * as Font from 'expo-font'

/*
----- modificacion de la barra superior de la navegacion ----
*/
const Nav = ({ navigation, title }) => {
	Font.loadAsync({
		'FontAwesome5Free-Solid': {
			uri: '@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome5Free-Solid.ttf',
		},
		anticon: {
			uri: '@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Anticon.ttf',
		},
	})
	/*
	----- cabecera modificada -----
	*/
	const CustomHeader = ({ navigation, title }) => {
		return (
			<Header
				title={title}
				leftButton={<BackBtn onPress={navigation.goBack} />}
				navigator={navigation}
			/>
		)
	}

	/*
	----- cabecera ----
	*/
	const Header = ({ title, leftButton, navigator }) => {
		const [value, setValue] = useState('')
		return (
			<ScreenContainer style={styles.bar}>
				<View>
					<Text style={styles.text}>{title}</Text>
					<SelectorBtn leftBtn={leftButton} navigator={navigator} />
				</View>
			</ScreenContainer>
		)
	}

	/*
	---- selector de boton hamburguesa o de devolver -----
	*/
	const SelectorBtn = ({ leftBtn, navigator }) => {
		if (leftBtn !== undefined) {
			return <BackBtn onPress={navigator.goBack} />
		} else {
			return (
				<IconButton
					style={styles.icon}
					icon={() => (
						<Icono.FontAwesome5 name='bars' size={24} color={Colors.amber500} />
					)}
					onPress={() => {
						nav.toggleDrawer()
					}}
				/>
			)
		}
	}

	/*
	---- renderizado del boton devolver ----
	*/
	const BackBtn = ({ onPress }) => {
		return (
			<IconButton
				onPress={onPress}
				icon={() => <Icono.AntDesign name='left' size={24} color={Colors.amber500} />}
				style={styles.icon}
			></IconButton>
		)
	}
	return (
		<View>
			<CustomHeader title={title} navigation={navigation} />
		</View>
	)
}

// estilos utlizados para la barra de la parte superior
const styles = StyleSheet.create({
	bar: {
		height: 50,
		position: 'relative',
		display: 'flex',
	},
	text: {
		marginLeft: 50,
		marginTop: 12,
		fontWeight: 'bold',
		fontSize: 18,
	},
	icon: {
		padding: 0,
		margin: 0,
		position: 'absolute',
		left: 0,
		top: 7,
	},
	inputContainer: {
		position: 'absolute',
		top: 7,
		right: 5,
	},
	textInput: {
		borderWidth: 1,
		height: 30,
		width: 80,
		borderRadius: 25,
		textAlign: 'center',
	},
	iconSearch: {
		position: 'absolute',
		right: 10,
		top: 3,
	},
})

export default Nav
