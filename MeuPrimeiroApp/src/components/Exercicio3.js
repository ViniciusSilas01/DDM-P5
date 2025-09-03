import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'
import React from 'react'

const Exercicio3 = () => {

    const [texto, setTexto] = useState("")

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Digite algo aqui!'
        value={texto}
        onChangeText={setTexto}
      />

      <Text>Você digitou: {texto}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 4,
    marginBottom: 3,
    width: 200
  }
})

export default Exercicio3