export function CommentList({ comments }) {
  
  return (
    <div className="comment-feed">
      {comments.length === 0 ? (
        <p>No Coments yet</p>
      ) : (
        comments.map((comment) => (
          <div key={comment._id} className="comment">
            <p>
              <strong>{comment.email}</strong>
            </p>
            <p>{comment.message}</p>
          </div>
        ))
      )}
    </div>
  )
}
