import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WelcomeScreen from './pages/login/WelcomeScreen'
import MyStack from './pages/Components/MyStack'
import PhoneNumber from './pages/login/PhoneNumber'
import OtpVerify from './pages/login/OtpVerify'
import HomeScreen from './pages/HomeScreen'
import SideBar from './pages/Components/SideBarD'
import Drawer from './pages/Components/Drawer'

const App = () => {
  return (
    <View>
      <Drawer />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})