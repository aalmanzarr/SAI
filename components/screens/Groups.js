import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
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
        let subjectId = this.props.route.params.subjectId;
        SaiActions.getAllGroupsBySubject(subjectId).then(data => {
            this.setState({
                Groups: data
            })
        });
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
                />
            );
        }

        return (
            <View style={{flex: 2, flexDirection: 'row'}}>
                <View style={{width:'100%', height:'100%'}}>
                    <View>
                        {groupsArray}
                    </View>
                </View>
            </View>
        );
    }
}
