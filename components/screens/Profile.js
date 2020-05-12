import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Login from './Login';
export default class Profile extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  }}>
                <Text >PERFIL</Text>
                <Button
                    title="no sirve aun jeje saludos (pa logout) "
                    type="clear"
                    buttonStyle={{width:'100%'}}

                />
            </View>
        );
    }
}
