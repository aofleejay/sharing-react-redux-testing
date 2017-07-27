import React from 'react'

const CommentItem = (props) => (
  <div className="box">
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{props.title}</strong> <small>{props.author}</small> <small>{props.postat}</small>
          <br />
          {props.body}
        </p>
      </div>
    </div>
  </div>
)

export default CommentItem
