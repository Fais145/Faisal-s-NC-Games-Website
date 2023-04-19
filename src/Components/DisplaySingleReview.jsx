import { useEffect, useState } from "react";
import { fetchReview } from "../utils/gamesAPI";
import {useParams} from 'react-router-dom'
import Loading from "./Loading";
import ReviewCard from "./ReviewCard";
function DisplaySingleReview() {
    const [isLoading,setIsLoading] = useState(true)
    const [review,setReview] = useState({})
    const {review_id} = useParams();

    useEffect(()=> {
        fetchReview(review_id).then((res)=>{
            setReview(res)
            setIsLoading(false)
        })
    },[])

    if (isLoading) return <Loading/>

  return (
    <div>
        <ReviewCard review = {review} />
    </div>
  )
}

export default DisplaySingleReview