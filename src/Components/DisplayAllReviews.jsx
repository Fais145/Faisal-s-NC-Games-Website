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
  const [randomColor, setRandomColor] = useState('');

  useEffect(() => {
    Promise.all([fetchReviews(category), fetchCategories()]).then(
      ([reviewsRes, categoriesRes]) => {
        setReviews(reviewsRes);
        setCategories(categoriesRes);
        setIsLoading(false);
      }
    );
  }, [category]);

  if (isLoading) return <Loading />;

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
      <div class="category-buttons">
        {categories.map((cat) => (
          <Link to={`/Home/${cat.slug}`} key={cat.slug}>
            <button class="category-button">
              {cat.slug}
              </button>
          </Link>
        ))}
      </div> 
      {reviews.map((review) => (
        <ReviewCard key={review.review_id} review={review} />
      ))}
    </div>
  );
}

export default DisplayAllReviews;
