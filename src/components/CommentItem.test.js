import React from 'react'
import { render } from '@testing-library/react'
import CommentItem from './CommentItem'

describe('Test CommentItem component', () => {
  it('Should match its snapshot', () => {
    const props = {
      title: 'title',
      body: 'body',
      author: '@john doe',
      postat: '31m',
    }

    const { container } = render(<CommentItem {...props} />)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="box"
        >
          <div
            class="media-content"
          >
            <div
              class="content"
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
      </div>
    `)
  })
})
