import { useEffect, useState } from "react";
// import { fetchReviews } from "../gamesAPI";
import axios from "axios";

function DisplayAllReviews() {
  
const [reviews,setReviews] = useState('')

 useEffect(()=>{
    axios.get('http://faisals-nc-games.onrender.com/api/reviews').then((res)=>{
        console.log(res.data.reviews)
        // setReviews(res.data.reviews)
    }).catch((err)=>{
        console.log('err --->',err)
    })
 },[])

//   return <div>
//     {reviews.map((review)=>{
//         return <p>{review.owner}</p>
//     })}
//   </div>;
}

export default DisplayAllReviews;
