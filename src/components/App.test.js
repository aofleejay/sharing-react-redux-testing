import React from 'react'
import { create } from 'react-test-renderer'
import App from './App'

jest.mock('../containers/CommentList.js', () => 'CommentListContainer')

describe('Test App component', () => {
  it('Should match its snapshot', () => {
    const wrapper = create(<App />)

    expect(wrapper).toMatchSnapshot()
  })
})
