import { store } from "../store";
import { SET_COMMENTS, SET_COMMENT,ADD_COMMENT } from "../reducers/comment.reducer";
import { commentService } from "../../services/comment";

export async function loadComments() {
  try {
    const comments = await commentService.query();
    store.dispatch(getCmdSetComments(comments));
  } catch (err) {
    console.log("cannot load comments");
    throw err;
  }
}

export async function addComment(comment) {
  try {
    const saveComment = await commentService.save(comment);
    store.dispatch(getCmdAddComment(saveComment));
    return saveComment;
  } catch (err) {
    console.log('Cannot add comment', err)
    throw err
  }
}

//commend creators:

function getCmdSetComments(comments) {
  return {
    type: SET_COMMENTS,
    comments,
  };
}

function getCmdAddComment(comment) {
    return {
      type: ADD_COMMENT,
      comment,
    };
  }


