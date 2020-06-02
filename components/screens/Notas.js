import React, {Component} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {Input, ListItem} from 'react-native-elements';
import { BackHandler } from 'react-native';
import {Picker} from '@react-native-community/picker';


export default class Notas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detalle: [],
            evaluacionesCambiadas: []
        };

        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        if(this.state.evaluacionesCambiadas && this.state.evaluacionesCambiadas.length > 0) {
            let evaluacionesCambiadas = {
                codigoEstudiante: this.props.route.params.codigoEstudiante,
                evaluaciones: this.state.evaluacionesCambiadas
            };
            this.props.navigation.navigate('Evaluations', {
                changedEvaluations: evaluacionesCambiadas,
                lastModified: this.props.route.params.codigoEstudiante,
                canChange: true
            });
        }else{
            this.props.navigation.navigate('Evaluations');
        }
        return true;
    }

    componentDidMount() {
        let detalle = this.props.route.params.detalle;
        let ev = this.props.route.params.evaluacionesCambiadas;
        let isCualitative= this.props.route.params.isCualitative;
        console.log("here in the comp", isCualitative);
        this.setState({
            detalle: detalle,
            evaluacionesCambiadas: ev,
            isCualitative: isCualitative
        })
    }

    changeGrade(text, puedeMod, key, diasAntes, diasDespues, onlyNumber){
        let notaMax = this.props.route.params.notaMax;
        let notaMin = this.props.route.params.notaMin;
        let notaApru = this.props.route.params.notaApru;
        if(puedeMod === '1'){
            var reg = /^\d+$/;
            if(onlyNumber) {
                if ((reg.test(text) && parseInt(text) <= parseInt(notaMax) && parseInt(text) >= parseInt(notaMin)) || text === '') {
                    let AAAAMMDDda = diasAntes.split("-"); //año mes dia - dias antes
                    let AAAAMMDDdd = diasDespues.split("-"); //año mes dia - dias despues
                    let today = new Date();
                    let antes = new Date(AAAAMMDDda[0], AAAAMMDDda[1], AAAAMMDDda[2]);
                    let despues = new Date(AAAAMMDDdd[0], AAAAMMDDdd[1], AAAAMMDDdd[2]);

                    if (today > despues || today < antes) {
                        alert("La fecha para el ingreso de esta nota no es vigente");
                    } else {
                        let {detalle} = this.state;
                        detalle[key].valorEvaluacion = text;

                        let evaluacionesCambiadas = this.state.evaluacionesCambiadas;
                        let newEvalCambiadas = [];
                        let add = true;
                        for (let key2 in evaluacionesCambiadas) {
                            if (evaluacionesCambiadas[key2].idEvaluacion === detalle[key].idEvaluacion) {
                                if (text !== "") {
                                    evaluacionesCambiadas[key2].valorEvaluacion = text;
                                    newEvalCambiadas.push(evaluacionesCambiadas[key2]);
                                }
                                add = false;
                            }
                        }

                        if (add) {
                            let dateNow = new Date();
                            let dateStr = dateNow.getFullYear() + "-" + (dateNow.getMonth() + 1) + "-" + dateNow.getDate() + " " + dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds() + ".0";
                            let objectToSave = {
                                idEvaluacion: detalle[key].idEvaluacion,
                                valorEvaluacion: text,
                                valorAnterior: "-1",
                                fecha: dateStr
                            };
                            newEvalCambiadas.push(objectToSave)
                        }

                        this.setState({
                            detalle: detalle,
                            evaluacionesCambiadas: newEvalCambiadas
                        })
                    }
                }
            }else{
                if (text === "A" || text === "R" || text === '') {
                    let AAAAMMDDda = diasAntes.split("-"); //año mes dia - dias antes
                    let AAAAMMDDdd = diasDespues.split("-"); //año mes dia - dias despues
                    let today = new Date();
                    let antes = new Date(AAAAMMDDda[0], AAAAMMDDda[1], AAAAMMDDda[2]);
                    let despues = new Date(AAAAMMDDdd[0], AAAAMMDDdd[1], AAAAMMDDdd[2]);

                    if (today > despues || today < antes) {
                        alert("La fecha para el ingreso de esta nota no es vigente");
                    } else {
                        let {detalle} = this.state;
                        detalle[key].valorEvaluacion = text;

                        let evaluacionesCambiadas = this.state.evaluacionesCambiadas;
                        let newEvalCambiadas = [];
                        let add = true;
                        for (let key2 in evaluacionesCambiadas) {
                            if (evaluacionesCambiadas[key2].idEvaluacion === detalle[key].idEvaluacion) {
                                if (text !== "") {
                                    evaluacionesCambiadas[key2].valorEvaluacion = text;
                                    newEvalCambiadas.push(evaluacionesCambiadas[key2]);
                                }
                                add = false;
                            }
                        }

                        if (add) {
                            let dateNow = new Date();
                            let dateStr = dateNow.getFullYear() + "-" + (dateNow.getMonth() + 1) + "-" + dateNow.getDate() + " " + dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds() + ".0";
                            let objectToSave = {
                                idEvaluacion: detalle[key].idEvaluacion,
                                valorEvaluacion: text,
                                valorAnterior: "-1",
                                fecha: dateStr
                            };
                            newEvalCambiadas.push(objectToSave)
                        }

                        this.setState({
                            detalle: detalle,
                            evaluacionesCambiadas: newEvalCambiadas
                        })
                    }
                }
            }
        }
    }

    render() {
        const {detalle}= this.state;
        let evalArray = [];

        let notaMax = parseInt(this.props.route.params.notaMax);
        let notaMin = parseInt(this.props.route.params.notaMin);
        let notaApru = parseInt(this.props.route.params.notaApru);

        let vaGanando = {backgroundColor: "rgba(12,249,0,0.45)", width: "50%"};
        let vaPerdiendo = {backgroundColor: "rgba(249,0,0,0.45)", width: "50%"};
        let vaRegular = {backgroundColor: "rgba(249,241,0,0.45)", width: "50%"};
        let message = null;

        let dropdownData = [];

        for(let key in detalle){
            if(detalle[key].listaCualitativa){
                let forLoop = detalle[key].listaCualitativa;
                for(let key2 in forLoop){
                    let value = {
                        value: forLoop[key2]
                    }
                    dropdownData.push(value);
                }
            }
        }


        for(let key in detalle){
            let inputStyleAux = "";
            let nota = parseInt(detalle[key].valorEvaluacion);
            if(!nota){

            }else{
                if(nota > notaApru){
                    inputStyleAux = vaGanando;
                }else{
                    if(nota === notaApru){
                        inputStyleAux = vaRegular;
                    }else {
                        inputStyleAux = vaPerdiendo;
                    }
                }
            }

            if(this.state.isCualitative){
                message = <Text style={{fontSize: 20, textAlign: "center", margin: 10}}>La escala permite ingresar valores: A y R</Text>
            }else{
                message = <Text style={{fontSize: 20, textAlign: "center", margin: 10}}>La escala permite ingresar valores: de {notaMin} hasta {notaMax}</Text>
            }

            evalArray.push(
                <ListItem
                    key={key}
                    title={detalle[key].nombreEvaluacion}
                    titleStyle={{fontSize: 25}}
                    chevron={{color: 'blue', size: 20}}
                    bottomDivider
                    input={{
                        placeholder: '-',
                        inputStyle: inputStyleAux,
                        value: detalle[key].valorEvaluacion,
                        onChangeText: text => {
                            this.changeGrade(text, detalle[key].puedeModificar, key, detalle[key].diasAntes, detalle[key].diasDespues, !this.state.isCualitative);
                        },
                    }}

                />
            );
        }
        return (
            <View style={{flex: 2, flexDirection: 'row'}}>
                <View style={{width:'100%', height:'100%'}}>
                    <View>
                        {message}
                        <ScrollView>
                            {evalArray}
                        </ScrollView>
                    </View>
                </View>
            </View>

        );
    }
}
