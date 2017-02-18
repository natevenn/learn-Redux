function comments(state=[], action) {
  if(typeof action.postId !== 'undefined') {
    return Object.assign({}, state, {
      [action.postId]: postComment(state[action.postId], action)
    })
  }
  return state;
}

function postComment(state=[], action) {
  switch(action.type) {
    case "ADD_COMMENT":
      // return the new state with the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case "REMOVE_COMMENT":
      console.log("action", action.index);
      console.log('first', ...state.slice(0, action.i - 1));
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
      //return state;
    default:
      return state;
  }
  return state;
}

export default comments

