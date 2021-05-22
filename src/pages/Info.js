/*
---- importes utilizados ----
*/
import { Video } from 'expo-av'
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Colors } from 'react-native-paper'

/*
---- vista de info ----
*/
const Info = ({ navigation, route }) => {
	const data = route.params.data
	return (
		<ScrollView>
			<View>
				<Text style={styles.title}>{data.nombre}</Text>
				<View style={styles.container}>
					<Image source={data.img} style={styles.img} resizeMode='stretch' />
				</View>
				<View style={styles.containerVideo}>
					<Text style={styles.exp}>Explicación por Video</Text>
					<Video
						source={{
							uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
						}}
						rate={1.0}
						volume={0.5}
						isMuted={false}
						resizeMode='cover'
						shouldPlay={false}
						isLooping={false}
						useNativeControls
						style={{ width: '90%', height: '70%', margin: 'auto' }}
					/>
				</View>
				<View style={styles.expContainer}>
					<Text style={styles.exp}>Como se debe respirar</Text>
					<Text>{data.res}</Text>
				</View>
			</View>
		</ScrollView>
	)
}

//estilos de info
const styles = StyleSheet.create({
	container: {
		marginTop: '20px',
		width: '60%',
		height: '150px',
		margin: 'auto',
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},
	containerVideo: {
		marginTop: '30px',
		width: '90%',
		margin: 'auto',
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},
	expContainer: {
		marginTop: '30px',
		width: '90%',
		height: '300px',
		margin: 'auto',
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},
	img: {
		width: '100%',
		height: '100%',
	},
	exp: {
		marginTop: '5px',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 20,
	},
	title: {
		marginTop: '5px',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 20,
	},
})

export default Info
