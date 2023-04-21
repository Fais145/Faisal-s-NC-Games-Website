import { useState } from "react"
import { fetchCommentsForReview, postCommentOnReview } from "../utils/gamesAPI"

function PostComment({loggedInUser,review_id,setComments}) {

    const [comment,setComment] = useState("")
    const {username} = loggedInUser
    const [err,setErr] = useState(null)
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setComment(e.target.value)
    }

    const handleSubmit = async () => {
        if (username && comment.length > 0) {
            setLoading(true);
            await postCommentOnReview(review_id,username,comment);
            const fulfilledComments = await fetchCommentsForReview(review_id);
            setComments(fulfilledComments);
            setComment('');
            setLoading(false);
            setErr(null);
        } else if (!username) {
            setErr('please log in to a demo user to comment!')
        } else {
            setErr('No comment detected..Please try again')
        }
    }

    return (
        <section className="comment-container">
            <h3> Leave a comment here:</h3>
            <textarea value={comment} onChange={handleChange}></textarea>
            <button onClick={handleSubmit} disabled={loading}> Submit </button>
            {loading && <p>Posting comment...</p>}
            {err ? <p> {err}</p>:null}
        </section>
    )
}

export default PostComment
