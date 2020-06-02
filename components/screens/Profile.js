import React, {Component} from 'react';
import {View, Text, Button, AsyncStorage} from 'react-native';
export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    async logout(){
        try {
            await AsyncStorage.setItem(
                'bearer',
                ""
            );
            this.props.navigation.pop();
        } catch (error) {
            // Error saving data
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{marginBottom: 18}} >PERFIL</Text>
                <Button
                    title="LOGOUT"
                    type="clear"
                    buttonStyle={{width:'100%'}}
                    onPress={this.logout}
                />
            </View>
        );
    }
}
