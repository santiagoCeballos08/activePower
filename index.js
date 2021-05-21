/* dependencias  */

import { AppRegistry, PLatfomr } from 'react-native'
import { registerRootComponent } from 'expo'
import App from './App'
import { name as appName } from './app.json'

if (Platform.OS == 'android' || Platform.OS == 'web') {
	registerRootComponent(App)
} else {
	AppRegistry.registerComponent(appName, () => App)
}
