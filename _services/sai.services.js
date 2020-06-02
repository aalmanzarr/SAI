import { AsyncStorage } from 'react-native';

export const SaiServices = {
    getAllSubjects,
    getGroupsBySubject,
    getEvaluation,
    saveNotas,
    login
};

async function getAllSubjects(type) {
    if (type){
        let header = await authHeader();
        const requestOptions = {
            headers: header,
            method: 'POST',
        };

        return fetch(`http://daphne.eafit.edu.co/sirena-test/api/sirena?method=getGroups&eval=${type}`, requestOptions).then(handleResponse)
    }
}

async function getEvaluation(semestre, materia, grupo) {
    if (semestre && materia && grupo){
        let header = await authHeader();
        const requestOptions = {
            headers: header,
            method: 'POST',
        };
        let UrlPost = `http://daphne.eafit.edu.co/sirena-test/api/sirena?method=getEvaluations&semestre=${semestre}&materia=${materia}&grupo=${grupo}`;
        console.log("URL POST", UrlPost);
        return fetch(UrlPost, requestOptions).then(handleResponse)
    }
}

async function saveNotas(semestre, materia, grupo, notas) {
    if (semestre && materia && grupo){
        let header = await authHeader();

        const requestOptions = {
            headers: header,
            method: 'POST'
        };

        let UrlPost = `http://daphne.eafit.edu.co/sirena-test/api/sirena?method=saveEvaluations&semestre=${semestre}&materia=${materia}&grupo=${grupo}&notas=${JSON.stringify(notas)}`;
        console.log("URL POST", UrlPost);
        console.log("Object", JSON.stringify(notas));
        return fetch(UrlPost, requestOptions).then(handleResponse)
    }
}

function getGroupsBySubject(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch('http://192.168.100.3:8080/api/materia/'+ id +'/grupos' ,requestOptions).then(handleResponse)
}

function login(user, pass) {
    const requestOptions = {
        method: 'POST',
    };
    let UrlPost = `http://daphne.eafit.edu.co/sirena-test/api/sirena?method=login&user=${user}&pass=${pass}`;

    return fetch(UrlPost ,requestOptions).then(handleResponse)
}

function handleResponse(response) {
    if(response && response.status && response.status === 404) {
        return response;
    }
    return response.json();
}

async function authHeader(){
    try {
        const value = await AsyncStorage.getItem('bearer');
        if (value !== null) {
            return {'Authorization': "Bearer " + value,  "content-type": "application/json" };
        }else{
            return {'Authorization': "Bearer "};
        }
    } catch (error) {
    }
}