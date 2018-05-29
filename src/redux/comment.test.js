import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import commentReducer, { receiveComments, getComments } from './comment'

describe('Test comment actions', () => {
  const fake = {
    comments: [
      { title: 'title1', body: 'body1', author: 'author1', postat: '1m' },
      { title: 'title2', body: 'body2', author: 'author2', postat: '2m' },
    ]
  }

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('receiveComments action creator return correct action', () => {  
    const actual = receiveComments(fake.comments)
  
    expect(actual).toMatchSnapshot()
  })

  it('getComments dispatch action correctly', () => {
    const mockStore = configureMockStore([thunk])
    const store = mockStore({ comments: [] })
    const mockGet = jest.spyOn(axios, 'get').mockResolvedValue({ data: fake.comments })

    store.dispatch(getComments()).then(() => {
      expect(store.getActions()).toMatchSnapshot()
    })
  })
})

describe('Test comment reducer', () => {
  const initialState = []

  it('Should return new comment list when action type is GET_COMMENTS_SUCCESS', () => {
    const action = {
      type: 'GET_COMMENTS_SUCCESS',
      comments: [
        { title: 'title1', body: 'body1' }
      ]
    }
    
    const actual = commentReducer(initialState, action)

    expect(actual).toMatchSnapshot()
  })

  it('Should return empty array when action type is GET_COMMENTS_FAILED', () => {
    const action = {
      type: 'GET_COMMENT_FAILED',
    }

    const actual = commentReducer(initialState, action)

    expect(actual).toMatchSnapshot()
  })

  it('Should return initial state when action type is OTHER_ACTION_TYPE', () => {
    const action = {
      type: 'OTHER_ACTION_TYPE',
    }

    const actual = commentReducer(initialState, action)

    expect(actual).toMatchSnapshot()
  })
})
