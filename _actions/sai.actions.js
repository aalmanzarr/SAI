import {SaiServices} from "../_services/sai.services";

export const SaiActions = {
    getAllSubjects,
    getAllGroupsBySubject
};

function getAllSubjects() {
    return SaiServices.getAllSubjects();
}

function getAllGroupsBySubject(id) {
    return SaiServices.getGroupsBySubject(id);
}