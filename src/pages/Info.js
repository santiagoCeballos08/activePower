/*
---- importes utilizados ----
*/
import { Video } from 'expo-av'
import React, { memo } from 'react'
import { Dimensions } from 'react-native'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Colors } from 'react-native-paper'

const { width, height } = Dimensions.get('window')

/*
---- vista de info ----
*/
const Info = memo(({ navigation, route }) => {
	const data = route.params.data
	return (
		<View style={styles.contenedor}>
			<View style={styles.container}>
				<Image
					source={{
						uri: data.img,
					}}
					style={styles.img}
					resizeMode='stretch'
				/>
			</View>
			<View styles={styles.containerVideo}>
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
					style={{
						width: width - 80,
						height: 125,
						marginTop: 30,
						marginBottom: 15,
						marginLeft: width / 30,
					}}
				/>
			</View>
			<View style={styles.expContainer}>
				<Text style={styles.exp}>Como se debe respirar</Text>
				<Text>{data.res}</Text>
			</View>
		</View>
	)
})

{
	/*<View style={styles.containerVideo}></View>
	 */
}

//estilos de info
const styles = StyleSheet.create({
	contenedor: {
		backgroundColor: '#fff',
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
	},
	container: {
		backgroundColor: '#fff',
		marginTop: 20,
		width: width - 30,
		height: 100,
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 1,
	},
	containerVideo: {
		flex: 1,
		alignContent: 'center',
		backgroundColor: '#fff',
		marginTop: 30,
		width: width - 50,

		shadowColor: '#111',
		shadowOffset: {
			width: 200,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},
	expContainer: {
		backgroundColor: '#fff',
		marginTop: 30,
		width: 300,
		height: 100,
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 1,
	},
	img: {
		marginLeft: width / 3,
		width: 100,
		height: 100,
	},
	exp: {
		marginTop: 5,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 20,
	},
})

export default Info
