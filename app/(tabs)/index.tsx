import { StyleSheet } from 'react-native';
import ExploreScreen from './Explore';
import MainScreen from './Main';
import PoliciesScreen from './Policies';
import ContactScreen from './Contact';
import AbouttScreen from './About';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Explorar" component={ExploreScreen} />
      <Stack.Screen name="Politicas" component={PoliciesScreen} />
      <Stack.Screen name="Contacto" component={ContactScreen} />
      <Stack.Screen name="Sobre Nosotros" component={AbouttScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
