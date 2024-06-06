import { Image, StyleSheet, Platform } from 'react-native';
import TabTwoScreen from './explore';
import TabThreeScreen from './tab2';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="!">
      <Stack.Screen name="explore" component={TabTwoScreen} />
      <Stack.Screen name="Explorar" component={TabThreeScreen} />
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
