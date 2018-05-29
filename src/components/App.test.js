import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

jest.mock('../containers/CommentList.js', () => 'CommentListContainer')

describe('Test App component', () => {
  it('Should match its snapshot', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot()
  })
})
