import {SaiServices} from "../_services/sai.services";

export const SaiActions = {
    getAllSubjects,
    getAllGroupsBySubject,
    getEvaluation,
    saveNotas,
    login,
};

function getAllSubjects(type) {
    return SaiServices.getAllSubjects(type);
}

function saveNotas(semestre, materia, grupo, notas) {
    return SaiServices.saveNotas(semestre, materia, grupo, notas);
}

function getEvaluation(semestre, materia, grupo) {
    return SaiServices.getEvaluation(semestre, materia, grupo);
}

function login(user, pass) {
    return SaiServices.login(user, pass);
}

function getAllGroupsBySubject(id) {
    return SaiServices.getGroupsBySubject(id);
}