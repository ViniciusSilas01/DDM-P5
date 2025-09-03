import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio4 = () => {

    const itens = ["Macacão", "Sapatilha", "Luvas", "Capacete"]

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Itens:</Text>

      {itens.map((item, index) => (
        <Text key={index} style={styles.item}>
            {item}
        </Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'enter',
        padding: 50
    },
    titulo: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    item: {
        fontSize: 16,
        marginVertical: 4
    }
})

export default Exercicio4