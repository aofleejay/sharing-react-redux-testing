import React from 'react'
import { shallow } from 'enzyme'
import CommentList from './CommentList'

describe('<CommentList />', () => {
  const props = {
    comments: [
      { title: 'title1', body: 'body1', author: 'author1', postat: '1m ago' },
      { title: 'title2', body: 'body2', author: 'author2', postat: '2m ago' }
    ],
    loadMore: jest.fn(),
  }
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<CommentList {...props} />)
  })

  it('render correct ids', () => {
    expect(wrapper.find('#comment-list')).toHaveLength(1)
    expect(wrapper.find('#load-more')).toHaveLength(1)
  })

  it('render comments correctly', () => {
    expect(wrapper.find('CommentItem')).toHaveLength(2)
  })

  it('match its snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('call loadMore function when click loadmore button', () => {
    wrapper.find('#load-more').simulate('click')
    expect(props.loadMore).toHaveBeenCalledTimes(1)
  })
})
