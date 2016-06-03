function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      // return the existing state plus the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      // we need to return the new state without the deleted comment
      // from the start to the one we want to delete
      let slice1 = state.slice(0, action.i);
      // after the deleted one, to the end
      let slice2 = state.slice(action.i + 1);
      return [...slice1, ...slice2];
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

export default comments;
