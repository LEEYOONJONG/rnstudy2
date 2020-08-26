// In App.js in a new project

import * as React from 'react';
import { StyleSheet, Button, View, Text, ScrollView } from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';
import {IntroScreen} from './IntroScreen';
import {signupScreen} from './signupScreen';
import {loginScreen} from './loginScreen';
import {SettingsScreen} from './SettingsScreen';
import {MyScreen} from './MyScreen';
import {GroupScreen} from './GroupScreen';
import {ChurchScreen} from './ChurchScreen';
import {CommunityScreen} from './CommunityScreen';
import {MyqtwriteScreen} from './MyqtwriteScreen';
import {GroupItemScreen} from './GroupItemScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={signupScreen} options={{ title: '회원가입', headerTintColor: '#a30527', headerTitleStyle: { color: 'black' } }} />
        <Stack.Screen name="login" component={loginScreen} options={{ title: '로그인', headerTintColor: '#a312a3', headerTitleStyle: { color: 'black' } }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false, title: '설정', headerTintColor: '#a312a3', headerTitleStyle: { color: 'black' } }}/>
        <Stack.Screen name="Myqtwrite" component={MyqtwriteScreen} />
        <Stack.Screen name="GroupItem" component={GroupItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'My') {
            iconName = focused
              ? 'person'
              : 'person-outline'
          }
          else if (route.name === 'Group') {
            iconName = focused
              ? 'people'
              : 'people-outline'
          }
          else if (route.name === 'Church') {
            iconName = focused
              ? 'grid'
              : 'grid-outline'
          }
          else if (route.name === 'Community') {
            iconName = focused
              ? 'globe'
              : 'globe-outline'
          }
          return <Icon name={iconName} size={size} color={color} />;

        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}

    >
      <Tab.Screen name="My" component={MyScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Group" component={GroupScreen} options={{ headerShown: true }} />
      <Tab.Screen name="Church" component={ChurchScreen} options={{ headerShown: true }} />
      <Tab.Screen name="Community" component={CommunityScreen} options={{ headerShown: true }} />
    </Tab.Navigator>

  )
}
export default App;

