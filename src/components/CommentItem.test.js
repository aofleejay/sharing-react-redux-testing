import React from 'react'
import { shallow } from 'enzyme'
import CommentItem from './CommentItem'

describe('Test CommentItem component', () => {
  it('Should match its snapshot', () => {
    const props = {
      title: 'title',
      body: 'body',
      author: '@john doe',
      postat: '31m',
    }

    const wrapper = shallow(<CommentItem {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
