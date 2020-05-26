import React, {Component} from 'react';
import {View, Text, Button, BackHandler} from 'react-native';
import {JSONSampleSubject} from "../../sampledata/json_sample_subjects";
import { ListItem } from 'react-native-elements';
import {SaiActions} from "../../_actions/sai.actions";

export default class Subjects extends Component {

    constructor(props) {
        super(props);
        this.state={
            Subjects: []
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }



    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {

        this.props.navigation.pop();

        return true;
    }


    componentDidMount() {
        let subjects = this.props.route.params.subjects;
        this.setState({Subjects: subjects});
    }

    render() {
        const {Subjects} = this.state;

        let subjectArray = [];
        for(let key in Subjects){
            subjectArray.push(
                <ListItem
                    key={key}
                    style={{marginTop:'3%', marginLeft: 3, borderLeftWidth: 3,
                        borderLeftColor: 'red',
                        borderStyle: 'dashed'}}
                    title={Subjects[key].titulo}
                    subtitle={Subjects[key].codigo}
                    titleStyle={{fontSize: 25 }}
                    subtitleStyle={{ fontWeight: 'bold', fontSize: 18}}
                    chevron = {{ color: 'black', size: 20 }}
                    onPress={() => this.props.navigation.navigate('Groups', { screen: 'Groups',  groups: Subjects[key].grupos, subjectCode: Subjects[key].codigo})}
                    bottomDivider
                />
            );
        }

        return (
            <View style={{flex: 2, flexDirection: 'row'}}>
                <View style={{width:'100%', height:'100%'}}>
                    <View>
                        {
                            subjectArray.length > 0 ?
                                subjectArray
                            :
                                <Text style={{
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    marginTop: "49%",
                                    fontSize: 25
                                }}>0 Materias Encontradas !!</Text>
                        }
                    </View>
                </View>
            </View>
        );
    }
}
