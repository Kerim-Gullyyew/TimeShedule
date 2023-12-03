import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
const Tab = createBottomTabNavigator();
const TabRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Öý"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.IconColorActive,
        tabBarLabelStyle: {
          fontSize: 14,
          color: Colors.IconColor,
        },
      }}>
      <Tab.Screen
        name="Öý"
        component={Home}
        options={{
          tabBarLabel: 'Öý',
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="home"
              color={focused ? Colors.IconColorActive : Colors.IconColor}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profile}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="person"
              color={focused ? Colors.IconColorActive : Colors.IconColor}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Menýu"
        component={Profile}
        options={{
          tabBarLabel: 'Menýu',
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="menu"
              color={focused ? Colors.IconColorActive : Colors.IconColor}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabRoutes;
