import axios from "axios"
import { ALLMOVIES, moviesAPI } from "../types/moviesType"


export const getAllMoviesAction = () => {

    return async (dispatch) => {
        const res = await axios.get(moviesAPI)
        dispatch ({type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages})
    }

}


export const getMoviesSearchAction = (word) => {

    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=dc467b40f93f59199517aa00b0c8f2e2&query=${word}&language=ar`)
        dispatch ({type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages})
    }

}


export const getPagesAction = (page) => {

    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=dc467b40f93f59199517aa00b0c8f2e2&language=ar&page=${page}`)
        dispatch ({type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages})
    }

}