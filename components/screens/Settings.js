import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Settings extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  }}>
                <Text >AJUSTES</Text>
            </View>
        );
    }
}
