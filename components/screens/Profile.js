import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
export default class Profile extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{marginBottom: 18}} >PERFIL</Text>
                <Button
                    title="LOGOUT"
                    type="clear"
                    buttonStyle={{width:'100%'}}

                />
            </View>
        );
    }
}
