import React from 'react'
import CommentItem from './CommentItem'

const CommentList = ({ comments, loadMore }) => (
  <div>
    <div>
      {
        comments.map(({ id, title, body, author, postat }) => (
          <CommentItem
            key={id}
            title={title}
            body={body}
            author={author}
            postat={postat}
          />
        ))
      }
    </div>
    <button
      id="load-more"
      className="button is-primary load-more"
      onClick={loadMore}
    >
      Load More
    </button>
  </div>
)

export default CommentList
