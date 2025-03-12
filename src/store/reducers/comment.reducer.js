export const SET_COMMENTS = "SET_COMMENTS";
export const SET_COMMENT = "SET_COMMENT";
export const ADD_COMMENT ="ADD_COMMENT"

const initialState = {
  comments: [],
  comment: null,
}

export function commentReducer(state = initialState, action) {
  var newState = state;
  var comments;
  switch (action.type) {
    case SET_COMMENTS:
      newState = { ...state, comments: action.comments }
      break;
    case ADD_COMMENT:
      newState = {...state, comments:[...state.comments, action.comment]}
      default:
        return state
  }
  return newState
}
