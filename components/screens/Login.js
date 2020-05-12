import {View} from "react-native";
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
                flex: 3,
                flexDirection: 'column',
                alignSelf: 'center',
                backgroundColor: 'white',
                width: '100%',
                height: '100%',
                alignContent: 'center',
                alignItems: 'center'}}>
                <View style={{flex: 2, flexDirection: 'row', marginTop: '80%'}}>
                    <Button
                        title="Login"
                        type="clear"
                        buttonStyle={{width:'100%'}}
                        onPress={() => this.props.navigation.navigate('Main')}
                    />
                </View>
            </View>
        );
    }
}

export default Login;
