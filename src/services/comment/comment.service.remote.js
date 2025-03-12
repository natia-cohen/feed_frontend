import { httpService } from '../http.service'

export const commentService = {
    query,
    getById,
    save,
    remove,
    addComment
    // addItemMsg
}


async function query() {
    return httpService.get(`comment`) 
}

async function getById(commentId) {
    return httpService.get(`comment/${commentId}`);
}

async function save(comment) {
    if (comment._id) {
        return httpService.put(`comment/${comment._id}`, comment);
    } else {
        return httpService.post(`comment`, comment);
    }
}

async function remove(commentId) {
    return httpService.delete(`comment/${commentId}`);
}

async function addComment(comment) {
    return httpService.post(`comment`, comment);
}