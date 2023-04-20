import axios from "axios";

const gamesAPI = axios.create({
    baseURL: 'https://faisals-nc-games.onrender.com/api'
})

export const fetchReviews = async () => {
    const response = await gamesAPI.get('/reviews')
    return response.data.reviews
}

export const fetchReview = async (reviewID) => {
    const response = await gamesAPI.get(`/reviews/${reviewID}`)
    return response.data.review
}

export const fetchCommentsForReview = async (reviewID) => {
    const response = await gamesAPI.get(`/reviews/${reviewID}/comments`)
    return response.data.comments
}

export const fetchAllUsers = async () => {
    const response = await gamesAPI.get('/users')
    return response.data.users
}