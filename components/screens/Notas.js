import React, {Component} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';


export default class Notas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detalle: []
        }

    }
    componentDidMount() {
        let detalle = this.props.route.params.detalle;

        this.setState({
            detalle: detalle,
        })
    }
    render() {
        const {detalle}= this.state;
        let evalArray = [];
        for(let key in detalle){
            evalArray.push(
                <ListItem
                    key={key}
                    title={detalle[key].nombreEvaluacion}
                    titleStyle={{fontSize: 25 }}
                    chevron = {{ color: 'blue', size: 20 }}
                    bottomDivider

                />
            );
        }
        return (
            <View style={{flex: 2, flexDirection: 'row'}}>
                <View style={{width:'100%', height:'100%'}}>
                    <View>
                        <ScrollView>
                            {evalArray}
                        </ScrollView>
                        <Button
                            title="back"
                            buttonStyle={{
                                width:'50%',


                            }}
                            onPress={() => this.props.navigation.pop()}

                        />

                    </View>
                </View>
            </View>

        );
    }
}
