import axios from 'axios'

const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS'
const GET_COMMENTS_FAILED = 'GET_COMMENTS_FAILED'

const initialState = []

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS_SUCCESS:
      return [...state, ...action.comments]

    case GET_COMMENTS_FAILED:
      return state

    default:
      return state
  }
}

const receiveComments = comments => ({
  type: GET_COMMENTS_SUCCESS,
  comments: comments,
})

const getComments = () => dispatch =>
  axios
    .get('http://localhost:3000/comments')
    .then(response => response.data)
    .then(comments => dispatch(receiveComments(comments)))
    .catch(() => dispatch({ type: GET_COMMENTS_FAILED }))

export { receiveComments, getComments }
export default commentReducer
