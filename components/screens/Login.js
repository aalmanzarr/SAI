<<<<<<< HEAD
import {TextInput,text, View} from 'react-native';
=======
import {View} from "react-native";
>>>>>>> 9b2cc7e3b4aa040489cb77ee3d67b28e4f4e3732
import {NavigationContainer} from "@react-navigation/native";
import Grades from "./Groups";
import {Button} from "react-native-elements";
import React, {Component} from "react";

class Login extends Component{
    constructor(props) {
        super(props);
        this.state={};
<<<<<<< HEAD

=======
>>>>>>> 9b2cc7e3b4aa040489cb77ee3d67b28e4f4e3732
    }

    render() {
        return(
            <View style={{
<<<<<<< HEAD
                flex: 1,
                flexDirection: 'row',
=======
                flex: 3,
                flexDirection: 'column',
>>>>>>> 9b2cc7e3b4aa040489cb77ee3d67b28e4f4e3732
                alignSelf: 'center',
                backgroundColor: 'white',
                width: '100%',
                height: '100%',
                alignContent: 'center',
<<<<<<< HEAD
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

=======
                alignItems: 'center'}}>
                <View style={{flex: 2, flexDirection: 'row', marginTop: '80%'}}>
>>>>>>> 9b2cc7e3b4aa040489cb77ee3d67b28e4f4e3732
                    <Button
                        title="Login"
                        type="clear"
                        buttonStyle={{width:'100%'}}
                        onPress={() => this.props.navigation.navigate('Main')}
                    />
<<<<<<< HEAD
                    <Button
                        title="Salir"
                        type="clear"
                        buttonStyle={{width:'100%'}}
                        onPress={() => alert("Isaias crack")}
                    />
                </View>
            </View>

        );

=======
                </View>
            </View>
        );
>>>>>>> 9b2cc7e3b4aa040489cb77ee3d67b28e4f4e3732
    }
}

export default Login;
