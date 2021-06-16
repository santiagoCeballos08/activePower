/*
---- importes utilizados ----
*/
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

/*
---- vista del chat ----
*/
const Chat = ({ navigation, route }) => {
	return (
		<View style={styles.container}>
			<Text>Chat</Text>
		</View>
	)
}

//estilos del chat
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF0D8',
		width: '100%',
		height: '100%',
	},
})

export default Chat
