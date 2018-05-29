import axios from 'axios'
import { GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILED } from '../constants/actiontypes'

const receiveComments = comments => ({
  type: GET_COMMENTS_SUCCESS,
  comments: comments,
})

const getComments = () => (
  dispatch => (
    axios.get('http://localhost:3000/comments')
    .then(response => response.data)
    .then(comments => (dispatch(receiveComments(comments))))
    .catch(() => (dispatch({ type: GET_COMMENTS_FAILED })))
  )
)

export {
  receiveComments,
  getComments,
}
