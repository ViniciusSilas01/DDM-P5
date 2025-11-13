import { SafeAreaView, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  const items = [
    { id: '1', name: 'Curso de React Native', description: 'Aprenda a criar apps para Android e IOS' },
    { id: '2', name: 'Curso de Java Spring Boot', description: 'Construa APIS robustas com Java e Spring' },
    { id: '3', name: 'Curso de AWS', description: 'Domine os serviços da AWS' },
    { id: '4', name: 'Curso de Python para Data Science', description: 'Analise dados com Python' },
  ]

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>📚 Cursos Disponíveis</Text>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5', // mantém o fundo
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
  },
})

export default HomeScreen
