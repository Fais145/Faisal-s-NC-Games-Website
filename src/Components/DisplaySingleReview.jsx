import { useEffect, useState } from "react";
import {
  fetchAllUsers,
  fetchCommentsForReview,
  fetchReview,
} from "../utils/gamesAPI";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import ReviewCard from "./ReviewCard";
import CommentCard from "./CommentCard";
function DisplaySingleReview() {
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    fetchReview(review_id).then((res) => {
      setReview(res);
      setIsLoading(false);
    });

    fetchCommentsForReview(review_id).then((res) => {
      setComments(res);
    });

    fetchAllUsers().then((res) => {
      setUsers(res);
    });
  }, []);

  if (isLoading) return <Loading />;

  const getUserByUsername = (username) => {
    return users.find((user) => user.username === username);
  };

  return (
    <div>
      <ReviewCard review={review} />
      <h3>Comments:</h3>
      {comments.map((comment) => {
        const user = getUserByUsername(comment.author);
        return <CommentCard key={comment.comment_id} comment={comment} user={user} />;
      })}
    </div>
  );
}

export default DisplaySingleReview;
