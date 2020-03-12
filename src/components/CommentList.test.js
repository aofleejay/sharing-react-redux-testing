import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CommentList from './CommentList'

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

  it('Should call loadMore props when click load more button', () => {
    const { getByText } = render(<CommentList {...props} />)
    const loadMoreButton = getByText(/load more/i)

    fireEvent.click(loadMoreButton)

    expect(props.loadMore).toHaveBeenCalledTimes(1)
  })
})
