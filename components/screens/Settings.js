import React, {Component} from 'react';
import {View, Text, Button, Image,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Settings extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  }}>
                <Text >AJUSTES</Text>
                <Image source={{uri: 'https://i.imgur.com/0Uxn98O.png'}}
                       style={{width: 200, height: 60}} />
            </View>
        );
    }
}
