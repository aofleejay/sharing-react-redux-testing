import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

jest.mock('../containers/CommentList', () => 'comment-list')

describe('Test App component', () => {
  it('Should render correct header', () => {
    const { getByText } = render(<App />)

    expect(getByText(/comment list/i)).toBeInTheDocument()
  })
})
