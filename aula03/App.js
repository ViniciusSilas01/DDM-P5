import { View, Text } from 'react-native'
import React from 'react'
import DetailsScreen from './src/screens/DetailsScreen'
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <LoginScreen />
    </View>
  )
}

export default App