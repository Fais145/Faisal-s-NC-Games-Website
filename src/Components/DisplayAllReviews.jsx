import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { fetchReviews } from "../utils/gamesAPI";
import Loading from "./Loading";

function DisplayAllReviews() {

const [isLoading,setIsLoading] = useState(true)
const [reviews,setReviews] = useState([])

 useEffect(()=>{
    fetchReviews().then((res)=>{
        setReviews(res.reviews)
        setIsLoading(false)
    })
 },[])

 if (isLoading) return <Loading />

  return <div>
    {reviews.map((review)=>{
        return <ReviewCard key={review.review_id} review={review} />
    })}
  </div>;
}

export default DisplayAllReviews;
