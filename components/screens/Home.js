import {View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import Grades from "./Groups";
import {Button} from "react-native-elements";
import React, {Component} from "react";

class Home extends Component{
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
                <View style={{flex: 2, flexDirection: 'row', marginTop: '40%'}}>
                    <Button
                        icon={{type:'font-awesome',name:"list", size:50, color:"#000000"}}
                        iconContainerStyle={{marginRight: 20}}
                        title="Materias"
                        type="clear"
                        buttonStyle={{width:'100%'}}
                        onPress={() => this.props.navigation.navigate('Subjects')}
                    />
                </View>
                <View style={{flex: 3, flexDirection: 'row'}}>
                    <Button
                        icon={{type:'font-awesome',name:"user", size:50, color:"#000000"}}
                        iconContainerStyle={{marginRight: 20}}
                        title="Perfil"
                        type="clear"
                        buttonStyle={{width:'100%'}}
                        onPress={() => this.props.navigation.navigate('Profile')}
                    />
                </View>
            </View>
        );
    }
}

export default Home;