import React from 'react'
import { create } from 'react-test-renderer'
import CommentItem from './CommentItem'

describe('Test CommentItem component', () => {
  it('Should match its snapshot', () => {
    const props = {
      title: 'title',
      body: 'body',
      author: '@john doe',
      postat: '31m',
    }

    const wrapper = create(<CommentItem {...props} />)
    expect(wrapper).toMatchInlineSnapshot(`
<div
  className="box"
>
  <div
    className="media-content"
  >
    <div
      className="content"
    >
      <p>
        <strong>
          title
        </strong>
         
        <small>
          @john doe
        </small>
         
        <small>
          31m
        </small>
        <br />
        body
      </p>
    </div>
  </div>
</div>
`)
  })
})
