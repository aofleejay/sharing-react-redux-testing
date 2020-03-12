import React from 'react'
import { create } from 'react-test-renderer'
import {
  CommentListContainer,
  mapDispatchToProps,
  mapStateToProps,
} from './CommentList'
import * as actions from '../redux/comment'

jest.mock('../components/CommentList', () => 'CommentList')
jest.mock('../redux/comment')

describe('Test CommentList container', () => {
  const props = {
    comments: [
      {
        id: 1,
        title: 'title1',
        body: 'body1',
        author: 'author1',
        postat: '1m ago',
      },
      {
        id: 2,
        title: 'title2',
        body: 'body2',
        author: 'author2',
        postat: '2m ago',
      },
    ],
    getComments: () => {},
  }

  it('Should match its snapshot', () => {
    const wrapper = create(<CommentListContainer {...props} />)

    expect(wrapper).toMatchInlineSnapshot(`
<CommentList
  comments={
    Array [
      Object {
        "author": "author1",
        "body": "body1",
        "id": 1,
        "postat": "1m ago",
        "title": "title1",
      },
      Object {
        "author": "author2",
        "body": "body2",
        "id": 2,
        "postat": "2m ago",
        "title": "title2",
      },
    ]
  }
  loadMore={[Function]}
/>
`)
  })

  describe('Test mapStateToProps function', () => {
    it('Should map comments state to prop', () => {
      const state = {
        comments: [
          { title: 'title1', body: 'body1', author: 'author1', postat: '1m' },
          { title: 'title2', body: 'body2', author: 'author2', postat: '2m' },
        ],
      }

      const subscribeState = mapStateToProps(state)

      expect(subscribeState).toMatchInlineSnapshot(`
Object {
  "comments": Array [
    Object {
      "author": "author1",
      "body": "body1",
      "postat": "1m",
      "title": "title1",
    },
    Object {
      "author": "author2",
      "body": "body2",
      "postat": "2m",
      "title": "title2",
    },
  ],
}
`)
    })
  })

  describe('Test mapDispatchToProps function', () => {
    it('Shouldmap dispatch to props correctly', () => {
      const spyDispatch = jest.fn()
      const { getComments } = mapDispatchToProps(spyDispatch)

      getComments()

      expect(spyDispatch).toHaveBeenCalledTimes(1)
      expect(actions.getComments).toHaveBeenCalledTimes(1)
    })
  })
})
