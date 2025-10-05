import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import logo from '../images/mm.gif'
import { getAllMoviesAction, getMoviesSearchAction } from '../redux/actions/moviesAction';
import SwitchTheme from './SwitchTheme';

function NavBar({setIsDarkMode, isDarkMode}) {

    const onSearch = (word) => {
        search(word)
    }


    const dispatch = useDispatch()

    const search = async (word)=>{
        if(word === ""){
          dispatch(getAllMoviesAction())
        }else{
          dispatch(getMoviesSearchAction(word))
        }
    }

  return (
    <>
        <div className="nav-style w-100 pt-2 fixed-top">
            <Container>
                <Row>
                    <Col xs="2" lg="2">
                        <a href='/'>
                            <img className='logo' src={logo} alt='logo' />
                        </a>
                    </Col>
                    <Col xs="8" lg="8" className='d-flex align-items-center text-center'>
                        <div className='search w-100'>
                            <i className='fa fa-search' color='primary'></i>
                            <input bgcolor="background.body" onChange={(e) => onSearch(e.target.value)} type="text" className='form-control w-100' placeholder='ابحث' />
                        </div>
                    </Col>
                    <Col xs="2" lg="2" className='d-flex align-items-center text-center'>
                        <SwitchTheme value={isDarkMode} setValue={setIsDarkMode} />
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default NavBar