import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { View } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

export default function NoticesScreen({ navigation }: any) {

    const data = [
        {
            title: 'Noticia 1',
            content: 'Contenido de la noticia 1',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Noticia 2',
            content: 'Contenido de la noticia 2',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Noticia 3',
            content: 'Contenido de la noticia 3',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Noticia 4',
            content: 'Contenido de la noticia 4',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Noticia 5',
            content: 'Contenido de la noticia 5',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Noticia 6',
            content: 'Contenido de la noticia 6',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Noticia 7',
            content: 'Contenido de la noticia 7',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Noticia 8',
            content: 'Contenido de la noticia 8',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Noticia 9',
            content: 'Contenido de la noticia 9',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Noticia 10',
            content: 'Contenido de la noticia 10',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Noticia 11',
            content: 'Contenido de la noticia 11',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Noticia 12',
            content: 'Contenido de la noticia 12',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Noticia 13',
            content: 'Contenido de la noticia 13',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Noticia 14',
            content: 'Contenido de la noticia 14',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Noticia 15',
            content: 'Contenido de la noticia 15',
            image: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <View >
            <View>
                <Text style={styles.titleContainer} > Noticias la vaca Lola</Text>
            </View>

            <ScrollView>
                {data.map((d, index) => (
                    <Card key={index}>
                        <Text> Noticia N.{index + 1} {d.title} </Text>
                    </Card>
                ))}
            </ScrollView>

            <TouchableOpacity style={styles.buttonNavigate} onPress={() => navigation.navigate("Main")}>
                <Text style={styles.buttonText}>Regresar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    backgroundColor: '#000',
    color: '#fff',
    padding: 16,
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
});
