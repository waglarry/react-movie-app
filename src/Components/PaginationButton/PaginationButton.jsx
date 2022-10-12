import React from 'react'

const PaginationButton = ({previousPage, nextPage, currentPageNumber, isDisabled, movies, setDisabled}) => {
  return (
    <div className="paginationControl">
    <button
      type="button"
      className="downButton"
      disabled={currentPageNumber === 1 ? !isDisabled : isDisabled}
      onClick={previousPage}
    >
      Previous
    </button>
    <span className="CurrentPageNumber">{currentPageNumber}</span>
    <button
      type="button"
      className="downButton"
      disabled={
        currentPageNumber !== movies.total_pages ? isDisabled : setDisabled(!isDisabled)
      }
      onClick={nextPage}
    >
      Next
    </button>
  </div>
  )
}

export default PaginationButton