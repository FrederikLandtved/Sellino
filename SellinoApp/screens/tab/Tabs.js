import { faHome, faSearch, faStore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useState } from 'react';
import ExploreStackScreen from './ExploreStackScreen';
import HomeStackScreen from './HomeStackScreen';
import ProfileStackScreen from './ProfileStackScreen';
import ThemeContext from '../context/ThemeContext';

const Tab = createMaterialBottomTabNavigator();

function Tabs() {
    const [backgroundColor, setBackgroundColor] = useState('black');

    return (
        <ThemeContext.Provider value={{ backgroundColor, setBackgroundColor }}>
            <Tab.Navigator 
                activeColor="white"
                inactiveColor="#ABBFD0"
                barStyle={{ backgroundColor: '#30608C' }}
                shifting={true}
                labeled={true}
            >
                <Tab.Screen 
                    name="Forside" 
                    component={ HomeStackScreen }
                    options={{
                        tabBarColor: '#30608C',
                        tabBarIcon: ({ focused }) => (
                            <FontAwesomeIcon style={{marginTop: 3}} icon={faHome} color={ focused ? "white" : "#ABBFD0"}/>
                        )
                    }}
                />
                <Tab.Screen 
                    name="Explore" 
                    component={ ExploreStackScreen } 
                    options={{
                        tabBarColor: '#30608C',
                        tabBarIcon: ({ focused }) => (
                            <FontAwesomeIcon style={{marginTop: 3}} icon={faSearch} color={ focused ? "white" : "#ABBFD0"}/>
                        )
                    }}
                />
                <Tab.Screen 
                    name="Profil"
                    component={ ProfileStackScreen } 
                    options={{
                        tabBarColor: backgroundColor,
                        tabBarIcon: ({ focused }) => (
                            <FontAwesomeIcon style={{marginTop: 3}} icon={faStore} color={ focused ? 'white' : "#ABBFD0"}/>
                        )
                    }}
                />
            </Tab.Navigator>
        </ThemeContext.Provider>
    );
}

export default Tabs;