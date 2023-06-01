import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { fetchCategories, fetchReviews } from "../utils/gamesAPI";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";  

function DisplayAllReviews() {
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sortOption, setSortOption] = useState("created_at");
  const [orderOption, setOrderOption] = useState("desc")

  useEffect(() => {
    Promise.all([fetchReviews(category,sortOption,orderOption), fetchCategories()]).then(
      ([reviewsRes, categoriesRes]) => {
        setReviews(reviewsRes);
        setCategories(categoriesRes);
        setIsLoading(false);
      }
    );
  }, [category, sortOption, orderOption]);

  if (isLoading) return <Loading />;

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrderOption(e.target.value);
  };

  return (
    <div>
      <div className="subheader">
        <div className="subheader-start">
        <h2>Check out some cool game reviews on...</h2> 
        </div>
        {category ? <h2 className="category" >
           {category.toUpperCase()} 
        </h2> : <h2 className="category"> EVERYTHING</h2>}
      </div>
      <div className="category-buttons">
        {categories.map((cat) => (
          <Link to={`/Home/${cat.slug}`} key={cat.slug}>
            <button className="category-button">
              {cat.slug}
              </button>
          </Link>
        ))}
      </div>
      <div className="query-container">
        <label htmlFor="sort-select">Sort by:</label>
        <select id="sort-select" value={sortOption} onChange={handleSortChange}>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
        <label htmlFor="order-select">Order by:</label>
        <select id="order-select" value={orderOption} onChange={handleOrderChange}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div> 
      {reviews.map((review) => (
        <ReviewCard key={review.review_id} review={review} />
      ))}
    </div>
  );
}

export default DisplayAllReviews;
