import React, { useState } from 'react'
import * as Icono from '@expo/vector-icons'
import * as Font from 'expo-font'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { IconButton, Colors } from 'react-native-paper'
import { ScreenContainer } from 'react-native-screens'

const HeaderStack = props => {
	Font.loadAsync({
		FontAwesome: {
			uri: '@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome.ttf',
		},
		anticon: {
			uri: '@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Anticon.ttf',
		},
	})

	const CustomHeader = ({ scene, previous, navigation }) => {
		const { options } = scene.descriptor
		const title =
			options.headerTitle !== undefined
				? options.headerTitle
				: options.title !== undefined
				? options.title
				: scene.route.name

		const ruta = previous.route.name
		return (
			<Header
				title={title}
				leftButton={
					ruta == 'registro' || ruta == 'login' ? undefined : (
						<BackBtn onPress={navigation.goBack} />
					)
				}
				style={options.headerStyle}
				navigator={navigation}
			/>
		)
	}

	const Header = ({ title, leftButton, navigator }) => {
		const [value, setValue] = useState('')
		return (
			<ScreenContainer style={styles.bar}>
				<View>
					<Text style={styles.text}>{title}</Text>
					<SelectorBtn leftBtn={leftButton} navigator={navigator} />
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.textInput}
						onChangeText={text => setValue(text)}
						value={value}
					/>
					<Icono.AntDesign
						style={styles.iconSearch}
						name='search1'
						size={20}
						color='black'
					/>
				</View>
			</ScreenContainer>
		)
	}

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
						navigator.toggleDrawer()
					}}
				/>
			)
		}
	}

	const BackBtn = ({ onPress }) => {
		return (
			<IconButton
				onPress={onPress}
				icon={() => <AntDesign name='left' size={24} color={Colors.amber500} />}
				style={styles.icon}
			></IconButton>
		)
	}

	return <CustomHeader {...props} />
}

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

export default HeaderStack
