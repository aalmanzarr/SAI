import React, {Component} from 'react';
import {Text, View, Image} from "react-native";
import { Card, ListItem, Button } from 'react-native-elements'
import {IconButton} from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from "@react-navigation/native";
import Grades from "./Grades";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./Home";
import Profile from "./Profile";

const Stack = createStackNavigator();

class Homepage extends Component{
    constructor(props) {
        super(props);
        this.state={}

        this.goToMaterias = this.goToMaterias.bind(this);
        this.goToProfile = this.goToProfile.bind(this);
    }

    goToMaterias(){

    }

    goToProfile(){

    }

    render() {
        return(
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name='home' component={Home}/>
                    <Stack.Screen name='grades' component={Grades} />
                    <Stack.Screen name='profile' component={Profile} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Homepage;