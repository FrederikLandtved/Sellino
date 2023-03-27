import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExploreScreen from '../ExploreScreen';

const ExploreStack = createNativeStackNavigator();

function ExploreStackScreen() {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          headerTitle: 'Explore',
          headerStyle: {
            backgroundColor: '#0d78bf'
          },
          headerTransparent: false,
          headerTintColor: 'white',
          headerShadowVisible: false,
          headerShown: false
          }}
      />
    </ExploreStack.Navigator>
  );
}

export default ExploreStackScreen;