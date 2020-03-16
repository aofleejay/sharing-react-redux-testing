import React from 'react'
import { Provider } from 'react-redux'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axios from 'axios'
import CommentList from '../containers/CommentList'
import store from '../redux/store'

jest.mock('axios', () => ({
  get: jest
    .fn()
    .mockImplementationOnce(() =>
      Promise.resolve({
        data: [
          {
            userId: 1,
            id: 1,
            title:
              'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body:
              'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
            author: '@johnsmith',
            postat: '31m',
          },
        ],
      }),
    )
    .mockImplementationOnce(() =>
      Promise.resolve({
        data: [
          {
            userId: 1,
            id: 2,
            title:
              'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body:
              'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
            author: '@johnsmith',
            postat: '31m',
          },
        ],
      }),
    ),
}))

afterEach(() => {
  jest.clearAllMocks()
})

describe('Test CommentList container', () => {
  it('Should render three item when click load more two times', async () => {
    const { getByText, getAllByText, debug, container } = render(
      <Provider store={store}>
        <CommentList />
      </Provider>,
    )

    const loadMoreButton = getByText(/load more/i)
    fireEvent.click(loadMoreButton)

    const commentItems = await waitForElement(() => getAllByText(/sunt/gi))
    expect(commentItems).toHaveLength(2)
    expect(axios.get).toHaveBeenCalledTimes(2)
  })
})
