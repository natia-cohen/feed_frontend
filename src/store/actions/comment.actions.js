import { store } from "../store";
import { SET_COMMENTS, SET_COMMENT } from "../reducers/comment.reducer";

export async function loadComments(filterBy){
    try {
        // const comments = await commentService.query(filterBy)
        // store.dispatch(getCmdSetComments(comments))
    } catch (err){
        console.log('cannot load comments')
        throw err
    }
}


//commend creators:

function getCmdSetComments(comments) {
    return {
        type:SET_COMMENTS,
        comments
    }
}
