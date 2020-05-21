import React, {Component} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';


export default class Notas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detalle: [],
            evaluacionesCambiadas: []
        }

    }

    componentDidMount() {
        let detalle = this.props.route.params.detalle;

        this.setState({
            detalle: detalle,
        })
    }

    changeGrade(text, puedeMod, key, diasAntes, diasDespues){
        if(puedeMod === '1'){

            let AAAAMMDDda = diasAntes.split("-"); //año mes dia - dias antes
            let AAAAMMDDdd = diasDespues.split("-"); //año mes dia - dias despues
            let today = new Date();
            let antes = new Date(AAAAMMDDda[0],AAAAMMDDda[1],AAAAMMDDda[2]);
            let despues = new Date(AAAAMMDDdd[0],AAAAMMDDdd[1],AAAAMMDDdd[2]);

            if(today > despues || today < antes){
                alert("La fecha para el ingreso de esta nota no es vigente");
            }else {
                let {detalle} = this.state;
                detalle[key].valorEvaluacion = text;
                this.setState({
                    detalle: detalle
                })
            }
        }
    }

    render() {
        const {detalle}= this.state;
        let evalArray = [];

        let notaMax = this.props.route.params.notaMax;
        let notaMin = this.props.route.params.notaMin;
        let notaApru = this.props.route.params.notaApru;

        let vaGanando = {backgroundColor: "rgba(12,249,0,0.45)", width: "50%"};
        let vaPerdiendo = {backgroundColor: "rgba(249,0,0,0.45)", width: "50%"};
        let vaRegular = {backgroundColor: "rgba(249,241,0,0.45)", width: "50%"};


        for(let key in detalle){
            let inputStyleAux = "";
            if(detalle[key].valorEvaluacion === ''){

            }else{
                if(detalle[key].valorEvaluacion > notaApru){
                    inputStyleAux = vaGanando;
                }else{
                    if(detalle[key].valorEvaluacion === notaApru){
                        inputStyleAux = vaRegular;
                    }else {
                        inputStyleAux = vaPerdiendo;
                    }
                }
            }

            evalArray.push(
                <ListItem
                    key={key}
                    title={detalle[key].nombreEvaluacion}
                    titleStyle={{fontSize: 25 }}
                    chevron = {{ color: 'blue', size: 20 }}
                    bottomDivider
                    input={{
                        placeholder: '-',
                        inputStyle: inputStyleAux,
                        value: detalle[key].valorEvaluacion,
                        onChangeText: text => {
                            this.changeGrade(text, detalle[key].puedeModificar, key, detalle[key].diasAntes, detalle[key].diasDespues);
                        },
                    }}

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


                    </View>
                    <Button
                        title="basck"
                        buttonStyle={{
                            width:'50%',


                        }}
                        onPress={() => this.props.navigation.pop()}

                    />
                </View>
            </View>

        );
    }
}
