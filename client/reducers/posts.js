function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      const i = action.index;
      const target = Object.assign({}, state[i]);
      target.likes = target.likes + 1
      return [
        ...state.slice(0,i),
        target,
        ...state.slice(i + 1),
      ]
    default:
      return state;
  }
}

export default posts;
