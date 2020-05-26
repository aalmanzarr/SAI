import React, {Component} from "react";
import {Icon, Input, ListItem, Text} from "react-native-elements";
import {BackHandler, View} from 'react-native';
import{ScrollView} from "react-native";
import {Button} from "react-native-elements";
import {SaiActions} from "../../_actions/sai.actions";


class Evaluations extends Component{
    constructor(props) {
        super(props);
        this.state = {
            detalle: [],
            Evaluation: [],
            evaluacionesCambiadas: [],
            sortDir: "asc",
            canChange: true
        };

        this.compare1 = this.compare1.bind(this);
        this.compare2 = this.compare2.bind(this);
        this.sort = this.sort.bind(this);
        this.saveNotas = this.saveNotas.bind(this);
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
    componentDidUpdate(prevProps, prevState, snapshot) {
        let {canChange, evaluacionesCambiadas} = this.state;
        let add = true;
        if(this.props.route.params.canChange) {
            if (evaluacionesCambiadas && evaluacionesCambiadas !== undefined && evaluacionesCambiadas !== null && evaluacionesCambiadas !== [undefined] && this.props.route.params.changedEvaluations) {
                for (let key in evaluacionesCambiadas) {
                    if (evaluacionesCambiadas[key].codigoEstudiante === this.props.route.params.lastModified) {
                        evaluacionesCambiadas[key] = this.props.route.params.changedEvaluations;
                        this.setState({evaluacionesCambiadas: evaluacionesCambiadas});
                        add = false;
                    }
                }
                if (add) {
                    evaluacionesCambiadas.push(this.props.route.params.changedEvaluations);
                    this.setState({evaluacionesCambiadas: evaluacionesCambiadas});
                }
            } else {
                if (this.props.route.params.changedEvaluations) {
                    this.setState({evaluacionesCambiadas: [this.props.route.params.changedEvaluations]});
                }
            }
            this.props.route.params.canChange = false;
        }
    }

    componentDidMount() {
        let Eval = this.props.route.params.evaluations;
        let detalle = Eval.detalle;
        let notaMinima = Eval.escalaMinimo;
        let notaMaxima = Eval.escalaMaximo;
        let notaAprueba = Eval.escalaAprueba;

        this.setState({
            detalle: detalle,
            Evaluation: Eval,
            notaMinima: notaMinima,
            notaMaxima: notaMaxima,
            notaAprueba: notaAprueba
        });
    }

    compare1(a, b) {
        const bandA = a.nombreEstudiante.toUpperCase();
        const bandB = b.nombreEstudiante.toUpperCase();

        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        } else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    }

    compare2(a, b) {
        const bandA = a.nombreEstudiante.toUpperCase();
        const bandB = b.nombreEstudiante.toUpperCase();

        let comparison = 0;
        if (bandA > bandB) {
            comparison = -1;
        } else if (bandA < bandB) {
            comparison = 1;
        }
        return comparison;
    }

    sort(){
        let aux = this.state.detalle;
        let sortDir = this.state.sortDir;
        if(sortDir === 'desc'){
            aux.sort(this.compare1);
            sortDir = "asc";
        }else{
            aux.sort(this.compare2);
            sortDir = "desc";
        }

        this.setState({detalle: aux, sortDir: sortDir})
    }

    navigate(detalle, key, notaMaxima, notaMinima, notaAprueba){
        let evaluacionesCambiadas = this.state.evaluacionesCambiadas;
        let evaluacionesCambiadasToSend = {};
        for(let key2 in evaluacionesCambiadas){
            if(evaluacionesCambiadas[key2].codigoEstudiante) {
                if (evaluacionesCambiadas[key2].codigoEstudiante === detalle[key].codigoEstudiante) {
                    evaluacionesCambiadasToSend = evaluacionesCambiadas[key2].evaluaciones;
                }
            }
        }

        this.props.navigation.navigate('Notas', {
            screen: 'Notas',
            detalle: detalle[key].evaluaciones,
            notaMax: notaMaxima,
            notaMin: notaMinima,
            codigoEstudiante: detalle[key].codigoEstudiante,
            notaApru: notaAprueba,
            evaluacionesCambiadas: evaluacionesCambiadasToSend});
    }

    saveNotas(){
        let semestre = this.props.route.params.semestre;
        let materia = this.props.route.params.materia;
        let grupo = this.props.route.params.grupo;
        let notas = this.state.evaluacionesCambiadas;

        if(notas && notas.length > 0){
            SaiActions.saveNotas(semestre, materia, grupo, notas).then(data => {
                if(data.estado && data.estado === "1"){
                    this.setState({
                        evaluacionesCambiadas: [],
                        sortDir: "asc",
                        canChange: true
                    })
                }
                console.log("data data data ", data);
            })
        }
    }

    render() {
        const {detalle, notaMinima, notaMaxima, notaAprueba, evaluacionesCambiadas} = this.state;

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
                    chevron = {{ color: 'blue', size: 20 }}
                    onPress={() => this.navigate(detalle, key, notaMaxima, notaMinima, notaAprueba)}
                    bottomDivider

                />
            );
        }

        return (
            <View style={{flex: 2, flexDirection: 'row'}}>
                <View style={{width:'100%', height:'100%'}}>
                    <View>
                        <View>
                            <ScrollView>
                                <Input
                                    placeholder='Search'
                                    rightIcon={{ type: 'font-awesome', name: 'search'}}
                                    style={{marginBottom: 6, position: "relative", backgroundColor: "white"}}
                                />
                                <Icon
                                    name='sort'
                                    type='font-awesome'
                                    color='#000000'
                                    style={{position: "relative"}}
                                    onPress={this.sort}
                                    size={40}/>

                                {evaluacionesCambiadas && evaluacionesCambiadas.length > 0 ?
                                    <View style={{
                                        paddingVertical: 15,
                                        paddingHorizontal: 10,
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <Icon
                                            name='save'
                                            type='font-awesome'
                                            size={35}
                                            color='#000000'
                                            style={{
                                                width: 60,
                                                height: 60,
                                                zIndex: 9999,
                                                borderRadius: 30,
                                                position: 'absolute',
                                                margin: 8,
                                                bottom: 20,
                                                right: 20}}
                                            onPress={this.saveNotas}
                                        />
                                        <Text
                                            onPress={this.saveNotas}>
                                            {"   Guardar cambios"}
                                        </Text>
                                    </View>
                                    :
                                    null
                                }

                                {evalArray}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Evaluations;
