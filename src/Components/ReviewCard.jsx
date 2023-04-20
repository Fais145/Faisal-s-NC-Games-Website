import { useState} from "react";
import { Link } from "react-router-dom";
import { patchReview } from "../utils/gamesAPI";

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
    review_id,
  } = review;

  const body = review.review_body ? review.review_body : null;
  // this checks if we are rendering all reviews on main page or a single review id with a review body

  const [votesForReview, setVotesForReview] = useState(votes);
  const [err, setErr] = useState(null);
  const [liked, setLiked] = useState(localStorage.getItem(`liked:${review_id}`) === 'true');
  const [disliked, setDisliked] = useState(localStorage.getItem(`disliked:${review_id}`) === 'true');

  const handleUpvote = () => {
    if (disliked) {
      setVotesForReview((previousVotes) => previousVotes + 2);
      setDisliked(false);
      setLiked(true);
      localStorage.setItem(`liked:${review_id}`, true);
      localStorage.removeItem(`disliked:${review_id}`);
      
      patchReview(2, review_id).catch((err) => {
        setVotesForReview((previousVotes) => previousVotes - 2);
        setErr("Something went wrong, please try again!");
        setDisliked(true);
        setLiked(false);
        localStorage.setItem(`disliked:${review_id}`, true);
        localStorage.removeItem(`liked:${review_id}`);
      });
    } else if (!liked) {
      setVotesForReview((previousVotes) => previousVotes + 1);
      setLiked(true);
      localStorage.setItem(`liked:${review_id}`, true);
      patchReview(1, review_id).catch((err) => {
        setVotesForReview((previousVotes) => previousVotes - 1);
        setErr("Something went wrong, please try again!");
        setLiked(false);
        localStorage.removeItem(`liked:${review_id}`);
      });
    } else {
      // User already liked the review, so clicking the button again will undo their vote
      setVotesForReview((previousVotes) => previousVotes - 1);
      setLiked(false);
      localStorage.removeItem(`liked:${review_id}`);
      patchReview(-1, review_id).catch((err) => {
        setVotesForReview((previousVotes) => previousVotes + 1);
        setErr("Something went wrong, please try again!");
        setLiked(true);
        localStorage.setItem(`liked:${review_id}`, true);
      });
    }
  };

  const handleDownvote = () => {
    if (liked) {
      setVotesForReview((previousVotes) => previousVotes - 2);
      setLiked(false);
      setDisliked(true);
      localStorage.setItem(`disliked:${review_id}`, true);
      localStorage.removeItem(`liked:${review_id}`);
      patchReview(-2, review_id).catch((err) => {
        setVotesForReview((previousVotes) => previousVotes + 2);
        setErr("Something went wrong, please try again!");
        setLiked(true);
        setDisliked(false);
        localStorage.setItem(`liked:${review_id}`, true);
        localStorage.removeItem(`disliked:${review_id}`);
      });
    } else if (!disliked) {
      setVotesForReview((previousVotes) => previousVotes - 1);
      setDisliked(true);
      localStorage.setItem(`disliked:${review_id}`, true);
      patchReview(-1, review_id).catch((err) => {
        setVotesForReview((previousVotes) => previousVotes + 1);
        setErr("Something went wrong, please try again!");
        setDisliked(false);
        localStorage.removeItem(`disliked:${review_id}`);
      });
    }
    else {
      // User already liked the review, so clicking the button again will undo their vote
      setVotesForReview((previousVotes) => previousVotes + 1);
      setDisliked(false);
      localStorage.removeItem(`disliked:${review_id}`);
      patchReview(1, review_id).catch((err) => {
        setVotesForReview((previousVotes) => previousVotes - 1);
        setErr("Something went wrong, please try again!");
        setDisliked(true);
        localStorage.setItem(`disliked:${review_id}`, true);
      });
    }
  };

    return (
      <section>
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
                Votes: {votesForReview} | Comments: {comment_count}
              </p>
            </div>
          </div>
          <div className="vote-buttons">
            <button
              className={`upvote-button ${liked ? "liked" : ""}`}
              onClick={handleUpvote}
            >
              {liked ? <p>LIKED</p> : <p>like</p>}
            </button>
            <button
              className={`downvote-button ${
                disliked ? "disliked" : ""
              }`}
              onClick={handleDownvote}
            >
              {disliked ? <p>DISLIKED</p> : <p>dislike</p>}
            </button>
          </div>
          {err ? <p>{err}</p> : null}
          {body ? <p className="review-body">{body}</p> : null}
        </div>
      </section>
    );
  }

  export default ReviewCard;
