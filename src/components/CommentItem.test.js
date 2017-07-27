import React from 'react'
import { shallow } from 'enzyme'
import CommentItem from './CommentItem'

describe('<CommentItem />', () => {
  it('render correctly', () => {
    const props = {
      title: 'title',
      body: 'body',
      author: '@john doe',
      postat: '31m',
    }

    const wrapper = shallow(<CommentItem {...props} />)
    expect(wrapper.html()).toMatchSnapshot()
  })
})