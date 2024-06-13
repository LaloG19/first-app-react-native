import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image   } from 'react-native';
import { Icon } from '@rneui/themed';

export default function MainScreen ({ navigation }: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: '#FF0000'}]} onPress={() => navigation.navigate("Explorar")}>
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
      
      <TouchableOpacity style={styles.messageButton} onPress={() => navigation.navigate("Mensajes")}>
          <Icon name='send' style={styles.image} />
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
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#FF5722',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    display: 'flex',
  },
  image: {
    color: '#FFFFFF',
    cursor: 'pointer',
  },
});