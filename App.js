import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Grades from './components/screens/Groups';
import Courses from './components/screens/Courses';
import Profile from './components/screens/Profile';
import Settings from './components/screens/Settings';
import Main from './components/screens/Main';
import Login from './components/screens/Login';
import Dashboard from './components/screens/Dashboard';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
   
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
                    headerShown: false
                }}>
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen name="Main" component={Dashboard} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
