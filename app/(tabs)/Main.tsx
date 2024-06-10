import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MainScreen ({ navigation }: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: '#FF0000' }]} onPress={() => navigation.navigate("Explorar")}>
        <Text style={styles.buttonText}>Explorar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: '#00FF00' }]} onPress={() => navigation.navigate("Politicas")}>
        <Text style={styles.buttonText}>Politicas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: '#0000FF' }]} onPress={() => navigation.navigate("Contacto")}>
        <Text style={styles.buttonText}>Contacto</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: '#FFFF00' }]} onPress={() => navigation.navigate("Sobre Nosotros")}>
        <Text style={styles.buttonText}>Sobre Nosotros</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: '#800080' }]} onPress={() => navigation.navigate("Noticias")}>
        <Text style={styles.buttonText}>Noticias</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
  },
  buttonContainer: {
    width: '60%',
    marginBottom: 16,
    borderRadius: 32,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
