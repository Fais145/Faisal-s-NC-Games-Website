import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { fetchReviews } from "../utils/gamesAPI";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

function DisplayAllReviews() {

const { category } = useParams();
const [isLoading,setIsLoading] = useState(true)
const [reviews,setReviews] = useState([])

 useEffect(()=>{
    fetchReviews(category).then((res)=>{
        setReviews(res)
        setIsLoading(false)
    })
 },[category])

 if (isLoading) return <Loading />

  return <div>
    {reviews.map((review)=>{
        return <ReviewCard key={review.review_id} review={review} />
    })}
  </div>;
}

export default DisplayAllReviews;
