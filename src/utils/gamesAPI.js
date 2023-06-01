import axios from "axios";

const gamesAPI = axios.create({
    baseURL: 'https://faisals-nc-games.onrender.com/api'
})

export const fetchReviews = async (category, sort_by, order) => {
    let url = '/reviews'
  
    if (category) {
      url += url==='/reviews' ? `?category=${category}` : `&category=${category}`
    }
    
    if (sort_by) {
        url += url==='/reviews' ? `?sort_by=${sort_by}` : `&sort_by=${sort_by}`
      }
  
      if (order) {
        url += url==='/reviews' ? `?order=${order}` : `&order=${order}`
      }
    
    const response = await gamesAPI.get(url)
    return response.data.reviews
  }

export const fetchReview = async (reviewID) => {
    const response = await gamesAPI.get(`/reviews/${reviewID}`)
    return response.data.review
}

export const patchReview = async (vote,reviewID) => {
    const response = await gamesAPI.patch(`/reviews/${reviewID}`,{ inc_votes: vote })

    return response.data
}

export const fetchCommentsForReview = async (reviewID) => {
    const response = await gamesAPI.get(`/reviews/${reviewID}/comments`)
    return response.data.comments
}

export const fetchAllUsers = async () => {
    const response = await gamesAPI.get('/users')
    return response.data.users
}

export const postCommentOnReview = async (reviewID,username,comment) => {
    const response = await gamesAPI.post(`/reviews/${reviewID}/comments`,{"username": username, "body": comment})
    return response.data.comment
}

export const fetchCategories = async () => {
    const response = await gamesAPI.get('/categories')
    return response.data.categories
}

