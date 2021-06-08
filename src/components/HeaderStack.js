import React, { useState, memo } from 'react'
import Icon from './Icon'
import { StyleSheet, Text, View, TextInput, StatusBar } from 'react-native'
import { IconButton, Colors } from 'react-native-paper'
import { ScreenContainer } from 'react-native-screens'

const HeaderStack = props => {
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
				leftButton={ruta == 'registro' || ruta == 'login' ? undefined : true}
				style={options.headerStyle}
				navigation={navigation}
			/>
		)
	}

	const Header = ({ title, leftButton, navigation }) => {
		return (
			<ScreenContainer style={styles.bar}>
				<View>
					<Text style={styles.text}>{title}</Text>
					<SelectorBtn leftBtn={leftButton} navigation={navigation} />
				</View>
			</ScreenContainer>
		)
	}

	const SelectorBtn = ({ leftBtn, navigation }) => {
		if (leftBtn !== undefined) {
			return <BackBtn onPress={navigation.canGoBack() ? navigation.goBack : undefined} />
		} else {
			return <></>
		}
	}

	const BackBtn = ({ onPress }) => {
		return (
			<IconButton
				onPress={onPress}
				icon={() => <Icon name='circle-left' size={24} color={Colors.amber500} />}
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
		marginTop: StatusBar.currentHeight,
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
