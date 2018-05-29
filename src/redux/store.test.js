import store from './store'

describe('store', () => {
  it('get initial state correctly', () => {
    const actual = store.getState()
    expect(actual).toEqual({ comments: [] })
  })
})
