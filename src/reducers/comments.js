import { GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILED } from '../constants/actiontypes'

const comments = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS_SUCCESS:
      return [...state].concat(action.comments)

    case GET_COMMENTS_FAILED:
      return []
  
    default:
      return state
  }
}

export {
  comments,
}
