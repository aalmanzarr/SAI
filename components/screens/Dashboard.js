import React, {Component} from 'react';
import {Text, View, Image} from "react-native";
import { Card, ListItem, Button } from 'react-native-elements'
import {IconButton} from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from "@react-navigation/native";
import Grades from "./Groups";
import {createStackNavigator} from "@react-navigation/stack";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from "./Home";
import Profile from "./Profile";
import Subjects from "./Subjects";
import Settings from './Settings';
import Main from './Main';



const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


class Dashboard extends Component{
    render() {
        return(
             <NavigationContainer independent={true}>
                  <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-start',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 70,
<<<<<<< HEAD
                        backgroundColor: '#d0d3d4',
                            }}>
                            <Icon name="university" size={25} color="#000000" />
                            <Text style={{color: 'black', fontSize: 22, marginLeft: 5}}>EAFIT</Text>
                        </View>

                    <Tab.Navigator
                        initialRouteName="Profile"
                        activeColor="#000000"
                        inactiveColor="#000000"
                        barStyle={{backgroundColor: '#d0d3d4'}}
=======
                        backgroundColor: '#000068',
                            }}>
                            <Icon name="university" size={25} color="#ffffff" />
                            <Text style={{color: 'white', fontSize: 22, marginLeft: 5}}>EAFIT</Text>
                        </View>
                    
                    <Tab.Navigator
                        initialRouteName="Main"
                        activeColor="#FFFFFF"
                        inactiveColor="#FFFFFF"
                        barStyle={{backgroundColor: '#000068'}}
>>>>>>> 9b2cc7e3b4aa040489cb77ee3d67b28e4f4e3732
                        labeled={false}>
                        <Tab.Screen
                        name="Settings"
                        component={Settings}
                        options={{
                            tabBarLabel: 'Ajustes',
<<<<<<< HEAD
                            tabBarIcon: () => <Icon name="cog" size={25} color={'#000000'} />,
=======
                            tabBarIcon: () => <Icon name="cog" size={25} color={'#ffffff'} />,
>>>>>>> 9b2cc7e3b4aa040489cb77ee3d67b28e4f4e3732
                        }}
                        />
                        <Tab.Screen
                            name="Main"
                            component={Main}
                            options={{
                                tabBarLabel: 'Inicio',
<<<<<<< HEAD
                                tabBarIcon: () => <Icon name="home" size={25} color={'#000000'} />,
=======
                                tabBarIcon: () => <Icon name="home" size={25} color={'#ffffff'} />,
>>>>>>> 9b2cc7e3b4aa040489cb77ee3d67b28e4f4e3732
                            }}
                            />
                            <Tab.Screen
                            name="Profile"
                            component={Profile}
                            options={{
                                tabBarLabel: 'Perfil',
<<<<<<< HEAD
                                tabBarIcon: () => <Icon name="user" size={25} color="#000000" />,
=======
                                tabBarIcon: () => <Icon name="user" size={25} color="#ffffff" />,
>>>>>>> 9b2cc7e3b4aa040489cb77ee3d67b28e4f4e3732
                            }}
                            />
                     </Tab.Navigator>

<<<<<<< HEAD

=======
              
>>>>>>> 9b2cc7e3b4aa040489cb77ee3d67b28e4f4e3732
            </NavigationContainer>

        );
    }
}

<<<<<<< HEAD
export default Dashboard;
=======
export default Dashboard;
>>>>>>> 9b2cc7e3b4aa040489cb77ee3d67b28e4f4e3732
