import React from 'react'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import axios from 'axios'
import thunk from 'redux-thunk'
import { CommentListContainer, mapDispatchToProps, mapStateToProps } from './CommentList'

describe('<CommentListContainer />', () => {
  it('contain CommentList component', () => {
    const wrapper = shallow(<CommentListContainer />, { disableLifecycleMethods: true })
    expect(wrapper.find('CommentList')).toHaveLength(1)
  })

  it('call getComments once after mount', () => {
    const props = {
      comments: [],
      getComments: jest.fn(),
    }
  
    const createStore = configureMockStore()
    const store = createStore({})
    const wrapper = mount(
      <Provider store={store}>
        <CommentListContainer {...props} />
      </Provider>
    )
  
    expect(props.getComments).toHaveBeenCalledTimes(1)
  })

  it('subscribe state correctly', () => {
    const state = { 
      comments: [
        { title: 'title1', body: 'body1', author: 'author1', postat: '1m' },
        { title: 'title2', body: 'body2', author: 'author2', postat: '2m' },
      ],
    }
    const subscribeState = mapStateToProps(state)
    expect(subscribeState).toEqual({ 
      comments: [
        { title: 'title1', body: 'body1', author: 'author1', postat: '1m' },
        { title: 'title2', body: 'body2', author: 'author2', postat: '2m' },
      ],
    })
  })

  it('map dispatch to props correctly', () => {
    const createStore = configureMockStore([thunk])
    const store = createStore({})
    const { getComments } = mapDispatchToProps(store.dispatch)
    const mockGet = jest.spyOn(axios, 'get').mockResolvedValue({ data: [] })
    const expectedActions = [{ comments: [], type: 'GET_COMMENTS_SUCCESS' }]
    
    getComments().then(() => { 
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})