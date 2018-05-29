import React from 'react'
import { shallow } from 'enzyme'
import { CommentListContainer, mapDispatchToProps, mapStateToProps } from './CommentList'
import * as actions from '../redux/comment'

jest.mock('../components/CommentList', () => 'CommentList')
jest.mock('../redux/comment')

describe('Test CommentList container', () => {
  const props = {
    comments: [
      { id: 1, title: 'title1', body: 'body1', author: 'author1', postat: '1m ago' },
      { id: 2, title: 'title2', body: 'body2', author: 'author2', postat: '2m ago' },
    ],
    getComments: () => {},
  }

  it('Should match its snapshot', () => {
    const wrapper = shallow(<CommentListContainer {...props} />, { disableLifecycleMethods: true })

    expect(wrapper).toMatchSnapshot()
  })

  describe('Test componentDidMount', () => {
    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('Should call getComments once', () => {
      props.getComments = jest.fn()
      const instance = shallow(<CommentListContainer {...props} />, { disableLifecycleMethods: true }).instance()
  
      instance.componentDidMount()
    
      expect(props.getComments).toHaveBeenCalledTimes(1)
    })
  })
  
  describe('Test mapStateToProps function', () => {
    it('Should map comments state to prop', () => {
      const state = { 
        comments: [
          { title: 'title1', body: 'body1', author: 'author1', postat: '1m' },
          { title: 'title2', body: 'body2', author: 'author2', postat: '2m' },
        ],
      }

      const subscribeState = mapStateToProps(state)

      expect(subscribeState).toMatchSnapshot()
    })
  })
  
  describe('Test mapDispatchToProps function',() => {
    it('Shouldmap dispatch to props correctly', () => {
      const spyDispatch = jest.fn()
      const { getComments } = mapDispatchToProps(spyDispatch)
      
      getComments()

      expect(spyDispatch).toHaveBeenCalledTimes(1)
      expect(actions.getComments).toHaveBeenCalledTimes(1)
    })
  })
})