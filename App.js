import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


import Grades from './components/screens/Grades';
import Courses from './components/screens/Courses';
import Profile from './components/screens/Profile';
import Settings from './components/screens/Settings';
import Homepage from "./components/screens/Homepage";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer independent={true}>
                <View style={{flexDirection: 'row', alignSelf: 'flex-start', width: '100%', justifyContent: 'center', alignItems: 'center',
                    height: 70, backgroundColor: '#000068'}}>
                    <Icon name="university" size={25} color="#ffffff"/>
                    <Text style={{color: 'white', fontSize:22, marginLeft: 5}}>EAFIT</Text>
                </View>
                <Tab.Navigator
                    initialRouteName="Homepage"
                    activeColor="#FFFFFF"
                    inactiveColor="#FFFFFF"
                    barStyle={{backgroundColor: '#000068'}}>
                    <Tab.Screen
                        name="settings"
                        component={Settings}
                        options={{
                            tabBarLabel: 'Ajustes',
                            tabBarIcon: () => <Icon name="cog" size={25} color={'#ffffff'}/>,
                        }}
                    />
                    <Tab.Screen
                        name="Homepage"
                        component={Homepage}
                        options={{
                            tabBarLabel: 'Inicio',
                            tabBarIcon: () => <Icon name="home" size={25} color={'#ffffff'}/>,
                        }}
                    />
                    <Tab.Screen
                        name="profile"
                        component={Profile}
                        options={{
                            tabBarLabel: 'Perfil',
                            tabBarIcon: () => <Icon name="user" size={25} color="#ffffff"/>,
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
    );
}
