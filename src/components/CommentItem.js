import React from 'react'

const CommentItem = ({ title, author, body, postat }) => (
  <div className="box">
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{title}</strong> <small>{author}</small> <small>{postat}</small>
          <br />
          {body}
        </p>
      </div>
    </div>
  </div>
)

export default CommentItem
