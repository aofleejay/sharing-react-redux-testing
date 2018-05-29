import React from 'react'
import { shallow } from 'enzyme'
import CommentList from './CommentList'

jest.mock('../components/CommentItem', () => 'CommentItem')

describe('Test CommentList component', () => {
  const props = {
    comments: [
      { id: 1, title: 'title1', body: 'body1', author: 'author1', postat: '1m ago' },
      { id: 2, title: 'title2', body: 'body2', author: 'author2', postat: '2m ago' },
    ],
    loadMore: jest.fn(),
  }
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<CommentList {...props} />)
  })

  it('Should match its snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should call loadMore props when click load more button', () => {
    wrapper.find('#load-more').simulate('click')
    expect(props.loadMore).toHaveBeenCalledTimes(1)
  })
})
