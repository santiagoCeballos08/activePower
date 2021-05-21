/*
---- importes utilizados ----
*/
import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FontAwesome5, AntDesign } from '@expo/vector-icons'
import Gratis from '../pages/Gratis'
import InfoRutina from '../components/InfoRutina'
import Info from '../pages/Info'
import firebase from '../../database/firebase'
import Cargando from '../components/Cargando'
import HeaderStack from '../components/HeaderStack'
