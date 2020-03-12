import store from './store'

describe('Test redux store', () => {
  it('Should return initial state correctly', () => {
    const initialStates = store.getState()
    expect(initialStates).toEqual({ comments: [] })
  })
})
