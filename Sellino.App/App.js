import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { mainColors } from './screens/constants/Colors';
import LoginScreen from './screens/screens/auth/LoginScreen';
import RegisterScreen from './screens/screens/auth/RegisterScreen';
import Tabs from './screens/tab/Tabs';

const Stack = createNativeStackNavigator();

function App() {
  const isSignedIn = false;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        ) : (
          // TODO
          <>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen 
                name="Register" 
                component={RegisterScreen} 
                options={{ 
                  title: 'Opret en bruger',
                  headerStyle: {
                    backgroundColor: mainColors.headerColorPrimary,
                  },
                  headerTintColor: 'white'
                  }} /> 
          </> 
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;