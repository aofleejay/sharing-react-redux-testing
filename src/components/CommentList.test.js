import React from 'react'
import { create } from 'react-test-renderer'
import CommentList from './CommentList'

jest.mock('../components/CommentItem', () => 'CommentItem')

describe('Test CommentList component', () => {
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
    loadMore: jest.fn(),
  }
  let wrapper

  beforeEach(() => {
    wrapper = create(<CommentList {...props} />)
  })

  it('Should match its snapshot', () => {
    expect(wrapper).toMatchInlineSnapshot(`
<div>
  <div>
    <CommentItem
      author="author1"
      body="body1"
      postat="1m ago"
      title="title1"
    />
    <CommentItem
      author="author2"
      body="body2"
      postat="2m ago"
      title="title2"
    />
  </div>
  <button
    className="button is-primary load-more"
    id="load-more"
    onClick={[MockFunction]}
  >
    Load More
  </button>
</div>
`)
  })

  it('Should call loadMore props when click load more button', () => {
    wrapper.root.findByProps({ id: 'load-more' }).props.onClick()
    expect(props.loadMore).toHaveBeenCalledTimes(1)
  })
})
