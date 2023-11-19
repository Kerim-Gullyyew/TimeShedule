import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../pages/Profile';
import { Colors } from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../pages/Home';
import Pay from '../pages/Pay';
import Timer from '../pages/Timer';
import AllActivity from '../pages/AllActivity';
import SignOut from '../pages/SignOut';
import Privacy from '../pages/Privacy';
import Benefits from '../pages/Benefits';
const Drawer = createDrawerNavigator();
const DrawerRoutes: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 150,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomColor: '#f4f4f4',
                borderBottomWidth: 1,
              }}>
              <View
                style={{
                  width: 70,
                  height: 70,
                  marginBottom: 8,
                  borderRadius: 50,
                  backgroundColor: Colors.DarkGrayColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: '600' }}>
                  MY
                </Text>
              </View>
              <Text
                style={{
                  color: Colors.TextColor,
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Myrat Yazmuradov
              </Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 280,
        },
        headerStyle: {
          backgroundColor: Colors.TextColor,
        },
        headerTintColor: 'white',
        drawerActiveTintColor: Colors.IconColorActive,
        drawerInactiveTintColor: Colors.IconColor,
        drawerLabelStyle: {
          color: 'black',
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="home"
              size={30}
              color={focused ? Colors.IconColorActive : Colors.IconColor}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="person"
              size={30}
              color={focused ? Colors.IconColorActive : Colors.IconColor}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Pay"
        component={Pay}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="attach-money"
              size={30}
              color={focused ? Colors.IconColorActive : Colors.IconColor}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Benefit"
        component={Benefits}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="query-stats"
              size={30}
              color={focused ? Colors.IconColorActive : Colors.IconColor}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Allactivity"
        component={AllActivity}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="auto-awesome-motion"
              size={30}
              color={focused ? Colors.IconColorActive : Colors.IconColor}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Timer"
        component={Timer}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="timer"
              size={30}
              color={focused ? Colors.IconColorActive : Colors.IconColor}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Privacy Notice"
        component={Privacy}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="privacy-tip"
              size={30}
              color={focused ? Colors.IconColorActive : Colors.IconColor}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="SignOut"
        component={SignOut}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="logout"
              size={30}
              color={focused ? Colors.IconColorActive : Colors.IconColor}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerRoutes;
