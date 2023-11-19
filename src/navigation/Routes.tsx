import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../constants/Colors';
import Home from '../pages/Home';
import DrawerRoutes from './DrawerRoutes';
import Timer from '../pages/Timer';
import {navigationRef} from '../hooks/RootNavigation';
const Tab = createBottomTabNavigator();
const Routes: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
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
          name="Timer"
          component={Timer}
          options={{
            tabBarLabel: 'timer',
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="timer"
                color={focused ? Colors.IconColorActive : Colors.IconColor}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={DrawerRoutes}
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
    </NavigationContainer>
  );
};
export default Routes;
