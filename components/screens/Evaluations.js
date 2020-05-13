import React, {Component} from "react";
import {ListItem} from "react-native-elements";
import {View} from "react-native";

class Evaluations extends Component{
    constructor(props) {
        super(props);
        this.state = {
            detalle: [],
            Evaluation: []
        }

    }

    componentDidMount() {
        let Eval = this.props.route.params.evaluations;

        let detalle = Eval.detalle;
        let notaMinima = Eval.escalaMinimo;
        let notaMaxima = Eval.escalaMaximo;
        let notaAprueba = sEval.escalaAprueba;

        this.setState({
            detalle: detalle,
            Evaluation: Eval,
            notaMinima: notaMinima,
            notaMaxima: notaMaxima,
            notaAprueba: notaAprueba
        });
    }


    render() {
        const {detalle, notaMinima, notaMaxima, notaAprueba} = this.state;

        let greaterThanSuccess = {marginLeft: 3, borderLeftWidth: 5,
            borderLeftColor: 'green',
            borderStyle: 'dashed'};

        let lowerThanSuccess = {marginLeft: 3, borderLeftWidth: 5,
            borderLeftColor: 'red',
            borderStyle: 'dashed'};

        let mediumSuccess = {marginLeft: 3, borderLeftWidth: 5,
            borderLeftColor: 'yellow',
            borderStyle: 'dashed'};

        let evalArray = [];
        for(let key in detalle){
            evalArray.push(
                <ListItem
                    key={key}
                    title={detalle[key].nombreEstudiante + " - " + detalle[key].codigoEstudiante}
                    style={detalle[key].notaAcumulada > notaAprueba ? greaterThanSuccess : detalle[key].notaAcumulada === notaAprueba ? mediumSuccess : lowerThanSuccess}
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
                        {evalArray}
                    </View>
                </View>
            </View>
        );
    }
}

export default Evaluations;