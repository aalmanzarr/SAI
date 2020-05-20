import React, {Component} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {JSONSampleSubject} from "../../sampledata/json_sample_subjects";
import { ListItem } from 'react-native-elements';
import {SaiActions} from "../../_actions/sai.actions";

export default class Groups extends Component {

    constructor(props) {
        super(props);
        this.state={
            Groups: []
        };
    }

    componentDidMount() {
        let Groups = this.props.route.params.groups;

        this.setState({
            Groups: Groups
        })
    }

    getEval(semestre, grupo){
        if(semestre, grupo){
            SaiActions.getEvaluation(semestre, this.props.route.params.subjectCode , grupo).then(data => {
                if(data.error || !data){
                    alert("Error accediendo a los datos del grupo");
                }else{
                    console.log("data retreived", data);
                    this.props.navigation.navigate('Evaluations', { screen: 'Evaluations',  evaluations: data})
                }
            });
        }
    }

    render() {
        const {Groups} = this.state;

        let activeGroupStyle = {marginTop:'3%', marginLeft: 3, borderLeftWidth: 5,
            borderLeftColor: 'green',
            borderStyle: 'dashed'};

        let disabledGroupStyle = {marginTop:'3%', marginLeft: 3, borderLeftWidth: 5,
            borderLeftColor: 'red',
            borderStyle: 'dashed'};

        let groupsArray = [];
        for(let key in Groups){
            groupsArray.push(
                <ListItem
                    key={key}
                    style={Groups[key].vigente === 'S' ? activeGroupStyle : disabledGroupStyle}
                    title={Groups[key].semestre + " - " + Groups[key].gruCodigo}
                    titleStyle={{fontSize: 25 }}
                    chevron = {{ color: 'black', size: 20 }}
                    bottomDivider
                    onPress={() => this.getEval(Groups[key].semestre, Groups[key].gruCodigo)}
                />
            );
        }

        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, width:'100%', height:'100%'}}>
                    <ScrollView style={{flex:1}}>
                        {groupsArray}
                    </ScrollView>

                </View>
            </View>
        );
    }
}
