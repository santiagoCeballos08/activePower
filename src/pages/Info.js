/*
---- importes utilizados ----
*/
import { Video } from 'expo-av'
import React, { memo, useEffect } from 'react'
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
	useEffect(() => {
		console.log(data)
	})
	return (
		<ScrollView style={{ backgroundColor: Colors.red500, height: height - 500, width }}>
			<View style={styles.contenedor}>
				<View style={styles.containerImg}>
					<Image
						source={{
							uri: data.img,
						}}
						style={styles.img}
					/>
				</View>
				<View styles={styles.containerVideo}>
					<Text style={styles.exp}>Explicación por Video</Text>
					<Video
						source={{
							uri: data.video,
						}}
						rate={1.0}
						volume={0.5}
						isMuted={false}
						resizeMode='cover'
						shouldPlay={false}
						isLooping={false}
						useNativeControls
						style={{
							width: width - 40,
							height: 200,
							marginTop: 30,
							marginBottom: 15,
							marginLeft: width / 20,
						}}
					/>
				</View>
				<View style={styles.expContainer}>
					<Text style={styles.exp}>Instrucciones</Text>
					<Text>{data.res}</Text>
				</View>
			</View>
		</ScrollView>
	)
})

//estilos de info
const styles = StyleSheet.create({
	contenedor: {
		backgroundColor: '#fff',
		width,
		height,
	},
	containerImg: {
		marginLeft: width / 10 - 25,
		marginTop: 30,
		backgroundColor: '#fff',
		width: width - 30,
		height: 170,
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
		marginLeft: width / 3 - 20,
		width: 150,
		height: 150,
	},
	containerVideo: {
		flex: 1,
		alignContent: 'center',
		backgroundColor: '#fff',
		marginTop: 50,
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
		width: 350,
		marginTop: 30,
		marginLeft: 30,
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		justifyContent: 'center',
		textAlign: 'center',
	},
	exp: {
		marginTop: 8,
		marginBottom: 10,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 20,
	},
})

export default Info
