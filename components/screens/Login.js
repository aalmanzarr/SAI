import {TextInput,text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Grades from "./Groups";
import {Button} from "react-native-elements";
import React, {Component} from "react";

class Login extends Component{
    constructor(props) {
        super(props);
        this.state={};

    }

    render() {
        return(
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignSelf: 'center',
                backgroundColor: 'white',
                width: '100%',
                height: '100%',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <View style={{flex: 1,  marginTop: '90%'}}>
                    <TextInput
                        style={
                            {
                                borderWidth:1,
                                BorderColor: "#000068",
                                width: "90%",

                                padding:8,
                                margin:10,

                            }}
                        placeholder="Usuario"

                        defaultValue={text}
                    />
                    <TextInput
                        style={
                            {
                                borderWidth:1,
                                BorderColor: "#000068",
                                width: "90%",

                                padding:8,
                                margin:10,

                            }}
                        placeholder="Password"
                        secureTextEntry
                        defaultValue={text}
                    />

                    <Button
                        title="Login"
                        type="clear"
                        buttonStyle={{width:'100%'}}
                        onPress={() => this.props.navigation.navigate('Main')}
                    />
                    <Button
                        title="Salir"
                        type="clear"
                        buttonStyle={{width:'100%'}}
                        onPress={() => alert("Isaias crack")}
                    />
                </View>
            </View>

        );

    }
}

export default Login;
