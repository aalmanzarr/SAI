import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {JSONSampleSubject} from "../../sampledata/json_sample_subjects";
import { ListItem } from 'react-native-elements';
import {SaiActions} from "../../_actions/sai.actions";

export default class Subjects extends Component {

    constructor(props) {
        super(props);
        this.state={
            Subjects: []
        };
    }

    componentDidMount() {
        SaiActions.getAllSubjects().then(data => {
            this.setState({
                Subjects: data
            })
        })
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
                    onPress={() => this.props.navigation.navigate('Groups', { screen: 'Groups',  subjectId: Subjects[key].id})}
                    bottomDivider
                />
            );
        }

        return (
            <View style={{flex: 2, flexDirection: 'row'}}>
                <View style={{width:'100%', height:'100%'}}>
                    <View>
                        {subjectArray}
                    </View>
                </View>
            </View>
        );
    }
}
