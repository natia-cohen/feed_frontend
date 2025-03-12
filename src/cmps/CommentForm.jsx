import { useState } from "react";
import { commentService } from '../services/comment'

export function CommentForm({onAddComment}) {
  const [comment, setComment] = useState(commentService.getEmptyComment());

  function handleChange(ev) {
    ev.stopPropagation()
    const {name, value} = ev.target
    setComment((prevComment)=> ({...prevComment,[name]:value}))
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    if(!comment.email || !comment.message) return
    onAddComment(comment)
    setComment(commentService.getEmptyComment())
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={comment.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Enter your comment"
        value={comment.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Add Comment</button>
    </form>
  );
}
