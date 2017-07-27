import React from 'react'
import CommentItem from './CommentItem'

const CommentList = props => (
  <div>
    <div id="comment-list">
      {
        props.comments.map((comment, index) => (
          <CommentItem
            key={`comment-${index}`}
            title={comment.title}
            body={comment.body}
            author={comment.author}
            postat={comment.postat}
          />
        ))
      }
    </div>
    <button id="load-more" className="button is-primary load-more" onClick={props.loadMore}>Load More</button>
  </div>
)

export default CommentList
