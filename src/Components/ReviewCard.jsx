function ReviewCard({ review }) {
    const { owner, title, designer, review_img_url, category, created_at, votes, comment_count } = review;
  
    return (
      <div className="review-card">
        <img src={review_img_url} alt={title} />
        <div>
          <h3 className="review-title">{title}</h3>
          <p>
            By {owner} on {new Date(created_at).toLocaleDateString()}
          </p>
          <p>
            Designer: {designer} | Category: {category}
          </p>
          <p>Votes: {votes} | Comments: {comment_count}</p>
        </div>
      </div>
    );
  }
  

export default ReviewCard;