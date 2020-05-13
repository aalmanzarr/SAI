import React, {Component} from 'react';
import {Text, View, Image} from "react-native";
import { Card, ListItem, Button } from 'react-native-elements'
import {IconButton} from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from "@react-navigation/native";
import Grades from "./Groups";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./Home";
import Profile from "./Profile";
import Subjects from "./Subjects";
import Evaluations from "./Evaluations";

const Stack = createStackNavigator();

class Main extends Component{
    render() {
        return(
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name='Home' component={Home}/>
                    <Stack.Screen name='Grades' component={Grades} />
                    <Stack.Screen name='Profile' component={Profile} />
                    <Stack.Screen name='Subjects' component={Subjects} />
                    <Stack.Screen name='Groups' component={Grades} />
                    <Stack.Screen name='Evaluations' component={Evaluations} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Main;