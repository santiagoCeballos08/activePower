/*
---- importes utilizados ----
*/
import { Video } from 'expo-av'
import React from 'react'
import { Dimensions } from 'react-native'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Colors } from 'react-native-paper'

const { width, height } = Dimensions.get('window')

/*
---- vista de info ----
*/
const Info = ({ navigation, route }) => {
	const data = route.params.data
	return (
		<ScrollView style={styles.scroll}>
			<View>
				<Text style={styles.title}>{data.name}</Text>
				<View style={styles.container}>
					<Image
						source={{
							uri: data.img,
						}}
						style={styles.img}
						resizeMode='stretch'
					/>
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
						style={{ width: 90, height: 70 }}
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
		marginTop: 20,
		width: width - 5,
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
		marginTop: 30,
		width: width / 4,
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 1,
	},
	expContainer: {
		marginTop: 30,
		width: 90,
		height: 300,
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
		width: 100,
		height: 100,
	},
	exp: {
		marginTop: 5,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 20,
	},
	title: {
		marginTop: 5,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 20,
	},
	scroll: {
		marginHorizontal: 'auto',
	},
})

export default Info
