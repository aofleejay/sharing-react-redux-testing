import fetch from 'isomorphic-fetch'
import { GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILED } from '../constants/actiontypes'

const receiveComments = comments => ({
  type: GET_COMMENTS_SUCCESS,
  comments: comments,
})

const getComments = () => (
  dispatch => (
    fetch('http://localhost:3000/comments')
    .then(res => res.json())
    .then(comments => (dispatch(receiveComments(comments))))
    .catch(() => (dispatch({ type: GET_COMMENTS_FAILED })))
  )
)

export {
  receiveComments,
  getComments,
}
