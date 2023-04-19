import { Link } from "react-router-dom";
function ReviewCard({ review }) {
  const {
    owner,
    title,
    designer,
    review_img_url,
    category,
    created_at,
    votes,
    comment_count,
  } = review;

  const body = review.review_body ? review.review_body : null;

  const handleUpvote = () => {};

  const handleDownvote = () => {};

  return (
    <>
      <div className="review">
        <div className="review-card">
          <img src={review_img_url} alt={title} />
          <div>
            <Link to={`/reviews/${review.review_id}`}>
              <h3 className="review-title">{title}</h3>
            </Link>
            <p>
              By {owner} on {new Date(created_at).toLocaleDateString()}
            </p>
            <p>
              Designer: {designer} | Category: {category}
            </p>
            <p>
              Votes: {votes} | Comments: {comment_count}
            </p>
          </div>
          <div className="vote-buttons">
            <button className="upvote-button" onClick={handleUpvote}>
              Upvote
            </button>
            <button className="downvote-button" onClick={handleDownvote}>
              Downvote
            </button>
          </div>
        </div>
          {body ? <p className="review-body">{body}</p> : null}
      </div>
    </>
  );
}

export default ReviewCard;
