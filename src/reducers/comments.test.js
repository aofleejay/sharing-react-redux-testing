import { comments } from './comments'

describe('comments reducer', () => {
  const initialState = []

  it('when action type is GET_COMMENTS_SUCCESS', () => {
    const action = {
      type: 'GET_COMMENTS_SUCCESS',
      comments: [
        { title: 'title1', body: 'body1' }
      ]
    }
    const expected = [
      { title: 'title1', body: 'body1' }
    ]
    
    const actual = comments(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('when action type is GET_COMMENTS_FAILED', () => {
    const action = {
      type: 'GET_COMMENT_FAILED',
    }
    const expected = []

    const actual = comments(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('when action type is OTHER_ACTION_TYPE', () => {
    const action = {
      type: 'OTHER_ACTION_TYPE',
    }

    const actual = comments(initialState, action)
    expect(actual).toEqual(initialState)
  })
})