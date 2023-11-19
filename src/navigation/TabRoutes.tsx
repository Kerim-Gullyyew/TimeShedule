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
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.IconColorActive,
        tabBarLabelStyle: {
          fontSize: 14,
          color: Colors.IconColor,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
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
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'profile',
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
        name="Menu"
        component={Profile}
        options={{
          tabBarLabel: 'Menu',
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
