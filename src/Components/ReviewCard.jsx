import { useState, useEffect } from "react";
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
  const [limitReached, setLimitReached] = useState(false);
  const [voted, setVoted] = useState(null);

  useEffect(() => {
    const storedVote = localStorage.getItem(`vote_${review_id}`);
    if (storedVote) {
      setVoted(storedVote);
    }
  }, []);

  const handleUpvote = () => {
    if (voted === "up") {
      setVotesForReview((previousVotes) => previousVotes - 1);
      setVoted(null);
      localStorage.removeItem(`vote_${review_id}`);
    } else if (voted === "down") {
      setVotesForReview((previousVotes) => previousVotes + 2);
      setVoted("up");
      localStorage.setItem(`vote_${review_id}`, "up");
    } else {
      setVotesForReview((previousVotes) => previousVotes + 1);
      setVoted("up");
      localStorage.setItem(`vote_${review_id}`, "up");
    }

    patchReview(voted === "up" ? -1 : 1, review_id).catch((err) => {
      if (voted === "up") {
        setVotesForReview((previousVotes) => previousVotes + 1);
      } else if (voted === "down") {
        setVotesForReview((previousVotes) => previousVotes - 1);
      }
      setErr("Something went wrong, please try again!");
      setVoted(null);
    });
  };

  const handleDownvote = () => {
    if (voted === "down") {
      setVotesForReview((previousVotes) => previousVotes + 1);
      setVoted(null);
      localStorage.removeItem(`vote_${review_id}`);
    } else if (voted === "up") {
      setVotesForReview((previousVotes) => previousVotes - 2);
      setVoted("down");
      localStorage.setItem(`vote_${review_id}`, "down");
    } else {
      setVotesForReview((previousVotes) => previousVotes - 1);
      setVoted("down");
      localStorage.setItem(`vote_${review_id}`, "down");
    }

    patchReview(voted === "down" ? 1 : -1, review_id).catch((err) => {
      if (voted === "up") {
        setVotesForReview((previousVotes) => previousVotes - 1);
      } else if (voted === "down") {
        setVotesForReview((previousVotes) => previousVotes + 1);
      }
      setErr("Something went wrong, please try again!");
      setVoted(null);
    });
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
            className={`upvote-button ${voted === "up" ? "voted-up" : ""}`}
            onClick={handleUpvote}
          >
            {voted === "up" ? <p>UPVOTED</p> : <p>upvote</p>}
          </button>
          <button
            className={`downvote-button ${
              voted === "down" ? "voted-down" : ""
            }`}
            onClick={handleDownvote}
          >
            {voted === "down" ? <p>DOWNVOTED</p> : <p>downvote</p>}
          </button>
        </div>
        {err ? <p>{err}</p> : null}
        {body ? <p className="review-body">{body}</p> : null}
      </div>
    </section>
  );
}

export default ReviewCard;
