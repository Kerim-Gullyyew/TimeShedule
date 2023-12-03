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
          name="Wagt"
          component={Timer}
          options={{
            tabBarLabel: 'Wagt',
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
          name="Menýu"
          component={DrawerRoutes}
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
    </NavigationContainer>
  );
};
export default Routes;
