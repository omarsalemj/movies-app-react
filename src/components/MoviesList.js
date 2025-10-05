import React, {useState, useEffect} from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMoviesAction } from '../redux/actions/moviesAction'
import CardMovie from './CardMovie'
import Pagination from './Pagination'

function MoviesList({getPage, pageCount}) {

    const [movies, setMovies] = useState([])
  
    const dispatch = useDispatch()
  
    useEffect(() =>{
      dispatch(getAllMoviesAction())
    }, [])
  
    const dataMovies = useSelector((state) => state.movies)
  
    useEffect(() => {
      setMovies(dataMovies)
    }, [dataMovies])


  return (
    <>
        <Row className='mt-3'>
            {
                movies.length >= 1 ? (movies.map((movie)=>{
                    return(
                        <CardMovie key={movie.id} movie={movie} />
                    )
                })) : <h1 className='text-center my-3'> لا يوجد افلام....</h1>
            }
            <Pagination getPage={getPage} pageCount={pageCount} />
        </Row>
    </>
  )
}

export default MoviesList