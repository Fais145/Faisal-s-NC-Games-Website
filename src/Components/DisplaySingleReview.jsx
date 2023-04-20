import { useEffect, useState } from "react";
import {
  // fetchAllUsers,
  fetchCommentsForReview,
  fetchReview,
} from "../utils/gamesAPI";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import ReviewCard from "./ReviewCard";
import CommentCard from "./CommentCard";
function DisplaySingleReview({users}) {
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  // const [users, setUsers] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    const fetchAll = async () => {
      const fulfilledReview = await fetchReview(review_id);
      const fulfilledComments = await fetchCommentsForReview(review_id);
      // const fulfilledUsers = await fetchAllUsers();

      setReview(fulfilledReview);
      setIsLoading(false);
      setComments(fulfilledComments);
      // setUsers(fulfilledUsers);
    };

    fetchAll()
  }, []);

  if (isLoading) return <Loading />;

  const getUserByUsername = (username) => {
    return users.find((user) => user.username === username);
  };

  return (
    <div>
      <ReviewCard review={review} />
      <h3>Comments:</h3>
      { comments.length !== 0 ? 
      comments.map((comment) => {
        const user = getUserByUsername(comment.author);
        return (
          <CommentCard key={comment.comment_id} comment={comment} user={user} />
        );
      }) : 
      <p>No comments yet! Be the first to make one...</p>}
    </div>
  );
}

export default DisplaySingleReview;
