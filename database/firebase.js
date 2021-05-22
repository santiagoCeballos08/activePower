import firebase from 'firebase/app'

import 'firebase/firestore'

var firebaseConfig = {
	apiKey: 'AIzaSyA8gCbfrOtAdutm8smmopWCSJWr9mrhoW8',
	authDomain: 'active-power.firebaseapp.com',
	projectId: 'active-power',
	storageBucket: 'active-power.appspot.com',
	messagingSenderId: '982396867130',
	appId: '1:982396867130:web:aaa345a7f0f4992d1c9b03',
	measurementId: 'G-HW22E8M015',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default {
	firebase,
	db,
}
