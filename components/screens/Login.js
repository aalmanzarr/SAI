import {TextInput, text, View, Text} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Grades from "./Groups";
import {Button} from "react-native-elements";
import React, {Component} from "react";
import {SaiActions} from "../../_actions/sai.actions";
import { AsyncStorage } from 'react-native';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
            error: false,
            user: "",
            pass: "",
        };

    }

    async login(){
        let {user, pass} = this.state;
        if(user && pass){
            SaiActions.login(user, pass).then(async data => {
                if(data.error){
                    alert("Usuario o contraseña invalidos");
                    this.setState({error: true});
                }else{
                    try {
                        await AsyncStorage.setItem(
                            'bearer',
                            data.Bearer
                        );
                        this.props.navigation.navigate('Main')
                    } catch (error) {
                        // Error saving data
                    }
                }
            })
        }else{
            alert("Todos los campos son requeridos");
        }
    }

    handleChangeUser(event) {
        const value = event.nativeEvent.text;
        this.setState({user: value});
    }

    handleChangePass(event) {
        const value = event.nativeEvent.text;
        this.setState({pass: value});
    }

    render() {
        const {error} = this.state;

        return(
            <View style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: 'white',
                width: '100%',
                height: '100%',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <View style={{flex: 1}}>
                    <TextInput
                        style={
                            {
                                marginLeft: "5%",
                                borderWidth:1,
                                borderColor: error ? "#FF0000" : "#000000",
                                borderRadius: 5,
                                width: "90%",
                                padding:8,
                                margin:10,

                            }}
                        placeholder="Usuario"
                        name="user"
                        value={this.state.user}
                        onChange={(e) => this.handleChangeUser(e)}
                        defaultValue={text}
                    />
                    <TextInput
                        onChange={(e) => this.handleChangePass(e)}
                        style={
                            {
                                marginLeft: "5%",
                                borderRadius: 5,
                                borderWidth:1,
                                borderColor: error ? "#FF0000" : "#000000",
                                width: "90%",
                                padding:8,
                                margin:10,

                            }}
                        placeholder="Password"
                        name="pass"
                        value={this.state.pass}
                        secureTextEntry
                        defaultValue={text}
                    />
                    {error ? <Text style={{alignSelf: "center"}}>Usuario o contraseña incorrectos</Text> : <Text></Text>}

                    <Button
                        title="Login"
                        buttonStyle={{
                            width:'50%',
                            marginTop: 10,
                            alignSelf: "center"
                        }}
                        onPress={() => this.login()}
                    />
                    <Button
                        title="Salir"
                        buttonStyle={{
                            width:'50%',
                            marginTop: 10,
                            alignSelf: "center"
                        }}
                    />
                </View>
            </View>

        );

    }
}

export default Login;
