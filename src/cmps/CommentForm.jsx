import { useState } from "react";

export function CommentForm({onAddComment}) {
  const [comment, setComment] = useState({ email: "",message: "" });

  function handleChange(ev) {
    ev.stoppropagtion()
    const {name, value} = ev.taget
    setComment((prevComment)=> ({...prevComment,[name]:value}))
  }

  function handleSubmit(ev) {
    ev.preventDefult();
    if(!comment.email || !comment.message) return
    onAddComment(comment)
    setComment({ email: "",message: "" })
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
        name="massage"
        placeholder="Enter your comment"
        value={comment.message}
        onChange={handleChange}
        require
      />

      <button type="submit">Add Comment</button>
    </form>
  );
}
