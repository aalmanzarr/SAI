export const SaiServices = {
    getAllSubjects,
    getGroupsBySubject
};

function getAllSubjects() {
    const requestOptions = {
        method: 'GET',
    };
    return fetch('http://192.168.100.3:8080/api/materia/all' ,requestOptions).then(handleResponse)
}

function getGroupsBySubject(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch('http://192.168.100.3:8080/api/materia/'+ id +'/grupos' ,requestOptions).then(handleResponse)
}

function handleResponse(response) {
    console.log("response", response);
    if(response && response.status && response.status === 404) {
        return response;
    }
    return response.json();
}