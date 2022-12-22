import React from 'react'

function Pagination({itemsPerPage, records}) {

    const pageNumbers = []
    for (let i=1; i<Math.ceil(records / itemsPerPage); i++){
         pageNumbers.push(i)   
    }

  return (
    <nav className='pagination'>
        {pageNumbers.map(number=>(
            <li></li>
        ))}
    </nav>
  )
}

export default Pagination