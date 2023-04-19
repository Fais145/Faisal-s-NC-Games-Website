function CommentCard({ comment, user }) {
  const { body, author, votes, created_at } = comment;
  const { avatar_url } = user;
  console.log(avatar_url);
  return (
    <div className="comment-card">
      <p className="comment-body">{body}</p>
      <div className="comment-info">
        <div className="profile-author">
          <img src={avatar_url} alt={`${author}'s profile picture`} />
          <p className="comment-author">By {author}</p>
        </div>
        <p className="comment-votes">Votes: {votes}</p>
        <p className="comment-date">{new Date(created_at).toLocaleString()}</p>
      </div>
    </div>
  );
}

export default CommentCard;
