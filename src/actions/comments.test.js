import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import { receiveComments, getComments } from './comments'

describe('comments action', () => {
  const comments = [
    { title: 'title1', body: 'body1', author: 'author1', postat: '1m' },
    { title: 'title2', body: 'body2', author: 'author2', postat: '2m' },
  ]

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('receiveComments action creator return correct action', () => {
    const expected = { type: 'GET_COMMENTS_SUCCESS', comments: comments }
  
    const actual = receiveComments(comments)
  
    expect(actual).toEqual(expected)
  })

  it('getComments dispatch action correctly', () => {
    const mockStore = configureMockStore([thunk])
    const store = mockStore({ comments: [] })
    const mockGet = jest.spyOn(axios, 'get').mockResolvedValue({ data: comments })

    store.dispatch(getComments()).then(() => {
      expect(store.getActions()).toEqual([{ type: 'GET_COMMENTS_SUCCESS', comments: comments }])
    })
  })
})