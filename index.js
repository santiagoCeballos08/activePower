/* dependencias  */

import { AppRegistry, Platform, StatusBar } from 'react-native'
import { registerRootComponent } from 'expo'
import App from './App'
import { SafeAreaView } from 'react-navigation'
import { name as appName } from './app.json'

if (Platform.OS == 'android' || Platform.OS == 'web') {
	SafeAreaView.setStatusBarHeight(StatusBar.currentHeight)
	registerRootComponent(App)
} else {
	AppRegistry.registerComponent(appName, () => App)
}
