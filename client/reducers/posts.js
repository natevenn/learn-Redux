// a reducers takes in two things:
//
// 1. an action (info on what happens)
// 2. copy of current state

function posts(state=[], action) {
  console.log("the post will change");
  console.log(state, action)
  return state;
}

export default posts
