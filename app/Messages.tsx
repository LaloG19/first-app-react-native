import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function CommentsScreen({ navigation }: any) {
    const [newRegister, setNewRegister] = useState({
        email: '',
        phoneNumber: '',
        message: '',
    });

    const [showThankYouMessage, setShowThankYouMessage] = useState(false);

    const handleInputChange = (name: string, value: string) => {
        setNewRegister((prevRegister) => ({
            ...prevRegister,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        setShowThankYouMessage(true);
        setTimeout(() => {
            navigation.navigate('Main');
        }, 2000);
    };

    return (
        <View style={styles.main}>
            {showThankYouMessage && (
                <Text style={styles.thankYouMessage}>¡Gracias por tu comentario!</Text>
            )}
            <ThemedView style={styles.titleContainer}>
                <ThemedText style={styles.title}>¿Hicimos un buen trabajo? Déjanos tu comentario</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subtitle}>Completa los datos referentes a tu comentario :)</ThemedText>

            <View style={styles.frmContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    value={newRegister.email}
                    onChangeText={(value) => handleInputChange('email', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Número de teléfono"
                    keyboardType="phone-pad"
                    value={newRegister.phoneNumber}
                    onChangeText={(value) => handleInputChange('phoneNumber', value)}
                />
                <TextInput
                    style={styles.textarea}
                    placeholder="Mensaje"
                    multiline
                    numberOfLines={4}
                    value={newRegister.message}
                    onChangeText={(value) => handleInputChange('message', value)}
                />
            </View>

            <TouchableOpacity style={styles.buttonSend} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonNavigate} onPress={() => navigation.navigate('Main')}>
                <Text style={styles.buttonText}>Regresar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
        backgroundColor: 'transparent',
    },
    buttonNavigate: {
        backgroundColor: '#FF0000',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 8,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        color: '#000000',
        flexGrow: 1,
    },
    textarea: {
        flexGrow: 1,
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 8,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        color: '#000000',
    },
    thankYouMessage: {
        color: '#FF5722',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 16,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        margin: 'auto',
        backgroundColor: '#FF5722',
        borderRadius: 24,
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#111',
    },
    buttonSend: {
        backgroundColor: '#008000',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    frmContainer: {
        width: '40%',
    },
});
