import axios from "axios";

const gamesAPI = axios.create({
    baseURL: 'http://faisals-nc-games.onrender.com/api'
})

export const fetchReviews = async () => {
    const response = await gamesAPI.get('/reviews')
    return response.data
}