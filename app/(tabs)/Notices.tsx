import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, View, Text, Image, Linking } from 'react-native';
import { Card } from '@rneui/themed';

const ExpandableTitle = ({ title, content, image, link }:any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNoticia = (noticia: string) => {
    Linking.openURL(noticia);
  };


  return (
    <Card>
      <TouchableOpacity onPress={toggleDescription}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.contentContainer}>
          <Image source={{ uri: image }} style={styles.image} />
          <Text style={styles.content}>{content}</Text>
          <TouchableOpacity onPress={() => handleNoticia(link)}>
            <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                Noticia completa
            </Text>
        </TouchableOpacity>
        </View>
      )}
    </Card>
  );
};

export default function NoticesScreen({ navigation }:any) {
const data = 
[
    {
        id: 1,
        title: "Las últimas tendencias en IA para 2024",
        content: "Un análisis profundo sobre cómo la inteligencia artificial está revolucionando diferentes industrias en 2024.",
        image: "https://via.placeholder.com/150",
        link: "https://www.google.com/search?q=Las+últimas+tendencias+en+IA+para+2024",
    },
    {
        id: 2,
        title: "Cómo el 5G está cambiando el mundo",
        content: "Exploramos el impacto del 5G en la conectividad global y su influencia en el Internet de las cosas (IoT).",
        image: "https://via.placeholder.com/150",
        link: "https://www.google.com/search?q=C%C3%B3mo+el+5G+est%C3%A1+cambiando+el+mundo",
    },
    {
        id: 3,
        title: "La revolución de los smartphones plegables",
        content: "Los smartphones plegables están marcando una nueva era en la tecnología móvil con diseños innovadores y funcionalidades mejoradas.",
        image: "https://via.placeholder.com/150",
        link: "https://www.google.com/search?q=La+revoluci%C3%B3n+de+los+smartphones+plegables",
    },
    {
        id: 4,
        title: "El futuro de la realidad virtual y aumentada",
        content: "Descubre cómo la realidad virtual y aumentada están transformando sectores como el entretenimiento, la educación y la medicina.",
        image: "https://via.placeholder.com/150",
        link: "https://www.google.com/search?q=El+futuro+de+la+realidad+virtual+y+aumentada",
    },
    {
        id: 5,
        title: "La ciberseguridad en la era del teletrabajo",
        content: "La ciberseguridad se ha convertido en una prioridad con el aumento del teletrabajo. Conoce las mejores prácticas para proteger tus datos.",
        image: "https://via.placeholder.com/150",
        link: "https://www.google.com/search?q=La+ciberseguridad+en+la+era+del+teletrabajo",
    },
    {
        id: 6,
        title: "Innovaciones en baterías para dispositivos móviles",
        content: "Las últimas innovaciones en tecnología de baterías están extendiendo la duración y mejorando la eficiencia de los dispositivos móviles.",
        image: "https://via.placeholder.com/150",
        link: "https://www.google.com/search?q=Innovaciones+en+bater%C3%ADas+para+dispositivos+m%C3%B3viles",
    },
    {
        id: 7,
        title: "El impacto del blockchain más allá de las criptomonedas",
        content: "Exploramos cómo la tecnología blockchain está transformando industrias como la salud, la logística y los contratos inteligentes.",
        image: "https://via.placeholder.com/150",
        link: "https://www.google.com/search?q=El+impacto+del+blockchain+m%C3%A1s+all%C3%A1+de+las+criptomonedas",
    },
    {
        id: 8,
        title: "Avances en la tecnología de conducción autónoma",
        content: "Los últimos avances en vehículos autónomos prometen mejorar la seguridad y la eficiencia del transporte.",
        image: "https://via.placeholder.com/150",
        link: "https://www.google.com/search?q=Avances+en+la+tecnolog%C3%ADa+de+conducci%C3%B3n+aut%C3%B3noma",
    },
    {
        id: 9,
        title: "El futuro de las interfaces cerebro-computadora",
        content: "Cómo las interfaces cerebro-computadora están abriendo nuevas posibilidades para la comunicación y el control de dispositivos.",
        image: "https://via.placeholder.com/150",
        link: "https://www.google.com/search?q=El+futuro+de+las+interfaces+cerebro-computadora",
    },
    {
        id: 10,
        title: "La evolución del Internet de las cosas (IoT)",
        content: "El crecimiento del IoT y su impacto en hogares inteligentes, ciudades conectadas y la industria 4.0.",
        image: "https://via.placeholder.com/150",
        link: "https://www.google.com/search?q=La+evoluci%C3%B3n+del+Internet+de+las+cosas+(IoT)",
    },
    {
        id: 11,
        title: "El auge de los dispositivos wearables",
        content: "Cómo los wearables están mejorando la salud y el fitness mediante el monitoreo continuo y la recopilación de datos.",
        image: "https://via.placeholder.com/150",
        link: "https://www.google.com/search?q=El+auge+de+los+dispositivos+wearables",
    },
    {
        id: 12,
        title: "La impresión 3D y sus aplicaciones revolucionarias",
        content: "Desde la medicina hasta la construcción, la impresión 3D está revolucionando múltiples campos con sus aplicaciones innovadoras.",
        image: "https://via.placeholder.com/150",
        link: "https://www.google.com/search?q=La+impresi%C3%B3n+3D+y+sus+aplicaciones+revolucionarias",
    },
    {
        id: 13,
        title: "Tecnologías emergentes en el campo de la salud",
        content: "Las nuevas tecnologías están transformando la atención médica, mejorando el diagnóstico y tratamiento de enfermedades.",
        image: "https://via.placeholder.com/150",
        link: "https://www.google.com/search?q=Tecnolog%C3%ADas+emergentes+en+el+campo+de+la+salud",
    }
];
      

  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>Noticias la vaca Lola</Text>
      <ScrollView>
        {data.map((d, index) => (
          <ExpandableTitle
            key={index}
            title={`Noticia N.${index + 1} ${d.title}`}
            content={d.content}
            image={d.image}
            link={d.link}
          />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.buttonNavigate} onPress={() => navigation.navigate("Main")}>
        <Text style={styles.buttonText}>Regresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  titleContainer: {
    fontSize: 32,
    fontWeight: 'bold',
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    padding: 16,
    paddingTop: 48
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
  buttonNavigate: {
    backgroundColor: '#FF0000',
    padding: 16,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
