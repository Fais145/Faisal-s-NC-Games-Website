import { useEffect, useState } from "react";
// import { fetchReviews } from "../gamesAPI";
import axios from "axios";
import ReviewCard from "./ReviewCard";

function DisplayAllReviews() {
  
const [reviews,setReviews] = useState([])

 useEffect(()=>{
    axios.get('https://faisals-nc-games.onrender.com/api/reviews').then((res)=>{
        // console.log(res.data.reviews)
        setReviews(res.data.reviews)
    })
 },[])

  return <div>
    {reviews.map((review)=>{
        return <ReviewCard key={review.review_id} review={review} />
    })}
  </div>;
}

export default DisplayAllReviews;
