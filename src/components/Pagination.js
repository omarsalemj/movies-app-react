import React from 'react'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPagesAction } from '../redux/actions/moviesAction'

function Pagination() {


  const [pageCount, setPageCount] = useState(0)

  const dispatch = useDispatch()

  const pages = useSelector((state) => state.pageCount)

  useEffect(() => {
    setPageCount(pages)
  }, [])

  const handlePageClick = (data) => {
    dispatch(getPagesAction(data.selected + 1))
  }

  return (
    <>
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالي"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="السابق"
            containerClassName={'pagination justify-content-center p-5'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
        />
    </>
  )
}

export default Pagination