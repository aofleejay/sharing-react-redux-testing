import React, { Component } from 'react'
import CommentList from '../containers/CommentList'

const App = () => (
  <div className="container">
    <h1 id="app-title" className="title">Comment List</h1>
    <hr/>
    <CommentList />
  </div>
)

export default App
