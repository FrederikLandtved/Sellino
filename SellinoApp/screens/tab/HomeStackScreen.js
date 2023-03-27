import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: 'Hjem',
          headerStyle: {
            backgroundColor: '#0d78bf'
          },
          headerTransparent: false,
          headerTintColor: 'white',
          headerShadowVisible: false,
          headerShown: false
          }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;