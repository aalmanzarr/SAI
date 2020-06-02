import React, {Component} from 'react';
import {Text, View, Image, BackHandler, AsyncStorage} from 'react-native';
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


class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state ={
            icon: "https://i.imgur.com/cUImhhs.png",
            color : "#d0d3d4"
        };
        this.getColors = this.getColors.bind(this);
        this.getColors();
    }


    async getColors() {
        const value = await AsyncStorage.getItem('university');
        let icon = "";
        let color = "";
        if (value !== null) {
            console.log("value value value ", value);
            if(value === "EAFIT"){
                icon = "https://i.imgur.com/5l8Wcyy.png";
                color = "#a8aabd";
            }
            if(value === "Bellas Artes"){
                icon = "https://i.imgur.com/o4Ze811.png";
                color = "#b89c9c";
            }
            this.setState({
                color: color,
                icon: icon
            })
        }
    }

    render() {
        const {icon, color} = this.state;
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
                        backgroundColor: {color},
                    }}>
                    <Image source={{uri: icon}}
                           style={{width: 270, height: 50}} />


                </View>

                <Tab.Navigator
                    initialRouteName="Main"
                    activeColor="#000000"
                    inactiveColor="#000000"
                    barStyle={{backgroundColor: '#d0d3d4'}}
                    labeled={false}>
                    <Tab.Screen
                        name="Settings"
                        component={Settings}
                        options={{
                            tabBarLabel: 'Ajustes',
                            tabBarIcon: () => <Icon name="cog" size={25} color={'#000000'} />,
                        }}
                    />
                    <Tab.Screen
                        name="Main"
                        component={Main}
                        options={{
                            tabBarLabel: 'Inicio',
                            tabBarIcon: () => <Icon name="home" size={25} color={'#000000'} />,
                        }}
                    />
                    <Tab.Screen
                        name="Profile"
                        component={Profile}
                        options={{
                            tabBarLabel: 'Perfil',
                            tabBarIcon: () => <Icon name="user" size={25} color="#000000" />,
                        }}
                    />

                </Tab.Navigator>


            </NavigationContainer>

        );
    }
}

export default Dashboard;
