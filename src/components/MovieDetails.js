import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import LightSpeed from 'react-reveal/LightSpeed';


function MovieDetails() {

    const param = useParams()

    const [movieDetails, setMovieDetails] = useState([])

    const getMovieDetails = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=dc467b40f93f59199517aa00b0c8f2e2&language=ar`)
        setMovieDetails(res.data)
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

  return (
    <>
        <Row className='justify-content-center bg-light mt-4 fs-3'>
            <Col md='12' xs='12' sm='12' className='mt-4'>
                <LightSpeed left>
                    <div className='d-flex align-items-center'>
                        <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} className='w-25' alt='poster' />
                        <div className='justify-content-center text-end mx-5 fw-bold'>
                            <p className='border-bottom'>اسم الفيلم : {movieDetails.original_title}</p>
                            <p className='border-bottom my-4'>تاريخ الاصدار : {movieDetails.release_date}</p>
                            <p className='border-bottom mb-4'>عدد المقيمين : {movieDetails.vote_count}</p>
                            <p className='border-bottom'>التقييم : {movieDetails.vote_average}</p>
                        </div>
                    </div>
                </LightSpeed>
            </Col>
        </Row>

        <Row className='justify-content-center bg-light fs-4 mt-3'>
            <Col md='12' xs='12' sm='12' className='mt-2'>
                <div className='d-flex flex-column align-items-start'>
                    <div className='text-end p-4'>
                        <p className='border-bottom fw-bold fs-2'>القصة</p>
                        <div className='text-end px-2'>
                            <p>{movieDetails.overview}</p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>

        <Row className='justify-content-center text-center fs-3'>
            <Col md='12' xs='12' sm='12' className='my-5'>
                <Link to={'/'}>
                    <button
                        style={{backgroundColor: '#149088', color: '#fff', border: 'none'}}
                        className='btn btn-primary fs-5 fw-bold w-25 ms-3'>
                        العودة الى الرئيسية
                    </button>
                </Link>
                <a href={movieDetails.homepage}>
                    <button
                        style={{backgroundColor: '#149088', color: '#fff', border: 'none'}}
                        className='btn btn-primary fs-5 fw-bold w-25'> 
                        مشاهدة الفيلم
                    </button>
                </a>
            </Col>
        </Row>
    </>
  )
}

export default MovieDetails