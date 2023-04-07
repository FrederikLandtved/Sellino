import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { mainColors } from './screens/constants/Colors';
import LoginScreen from './screens/screens/auth/LoginScreen';
import RegisterScreen from './screens/screens/auth/RegisterScreen';
import AuthProvider, { useAuth } from './screens/context/AuthContext';
import Tabs from './screens/tab/Tabs';
import UserSettingsScreen from './screens/screens/main/UserSettingsScreen';
import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [user, setUser] = useAuth();

  useEffect(() => {
    SecureStore.getItemAsync("userToken").then((userToken) => {
      if(userToken){
        setUser(userToken);
      }
    });
  }, []);

  if(!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Opret en bruger', headerStyle: { backgroundColor: mainColors.headerColorPrimary }, headerTintColor: 'white' }} /> 
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />

      {/* Modals */}
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="UserSettings" component={UserSettingsScreen} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigator></Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;