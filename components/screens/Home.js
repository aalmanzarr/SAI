import {Modal, Text, TouchableHighlight, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import Grades from "./Groups";
import {Button} from "react-native-elements";
import React, {Component} from "react";
import {SaiActions} from "../../_actions/sai.actions";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state={
            modalVisible: false
        };
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    };

    getGroups(type){
        SaiActions.getAllSubjects(type).then(data => {
            console.log("data", data);
            if(data === 0 || data === 1 || data.error){
                alert("Error al tratar de consultar materias");
            }else{
                this.setModalVisible(false);
                this.props.navigation.navigate('Subjects', { screen: 'Subjects',  subjects: data});
            }
        })
    }

    render() {
        const { modalVisible } = this.state;

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
                        onPress={() => this.setModalVisible(true)}
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
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 22
                }}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                    >
                        <View style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 22
                        }}>
                            <View style={{
                                margin: 20,
                                backgroundColor: "white",
                                borderRadius: 20,
                                padding: 35,
                                alignItems: "center",
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2
                                }}}>
                                <Button
                                    icon={{type:'font-awesome',name:"user", size:50, color:"#000000"}}
                                    title="Titular"
                                    type="clear"
                                    buttonStyle={{width:400}}
                                    onPress={() => this.getGroups(1)}
                                />
                                <Button
                                    icon={{type:'font-awesome',name:"user", size:50, color:"#000000"}}
                                    title="Coordinador"
                                    type="clear"
                                    buttonStyle={{width:400}}
                                    onPress={() => this.getGroups(2)}
                                />
                                <Button
                                    icon={{type:'font-awesome',name:"user", size:50, color:"#000000"}}
                                    title="Autorizado"
                                    type="clear"
                                    buttonStyle={{width:400}}
                                    onPress={() => this.getGroups(3)}
                                />
                                <Button
                                    icon={{type:'font-awesome',name:"user", size:50, color:"#000000"}}
                                    title="Habilitado"
                                    type="clear"
                                    buttonStyle={{width:400}}
                                    onPress={() => this.getGroups(4)}
                                />

                                <TouchableHighlight
                                    style={{
                                        borderRadius: 20,
                                        padding: 10,
                                        marginTop: 20,
                                        elevation: 2, backgroundColor: "#2196F3" }}
                                    onPress={() => {
                                        this.setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text style={{
                                        color: "white",
                                        fontWeight: "bold",
                                        textAlign: "center"
                                    }}>Atras</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        );
    }
}
export default Home;