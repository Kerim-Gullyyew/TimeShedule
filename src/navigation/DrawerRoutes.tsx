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
import { useTypedSelector } from '../hooks/useTypedSelector';
const Drawer = createDrawerNavigator();
const DrawerRoutes: React.FC = () => {
  const user: any = useTypedSelector((state) => state.login.data);
  const Splited = user.user.full_name.split(' ');
  const ShortName = Splited[0].substring(0, 1) + Splited[1].substring(0, 1);
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
                  {ShortName}
                </Text>
              </View>
              <Text
                style={{
                  color: Colors.TextColor,
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                {user.user.full_name}
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
        name="Öý"
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
        name="Profil"
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
        name="Töleg"
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
        name="Girdeji"
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
        name="ÄhliHereket"
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
        name="Wagt"
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
        name="Howpsuzlyk"
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
        name="Ulgamdan çykmak"
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
