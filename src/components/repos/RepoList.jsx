import { useState } from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'
import ReactPaginate from 'react-paginate'

function RepoList({ repos }) {
  const [pageNumber,setPageNumber] = useState(0)
  const repoPerPage = 5
  const reposVisited = pageNumber*repoPerPage

  const displayRepos = repos.slice(reposVisited,reposVisited + repoPerPage).map((repo) => (
    <RepoItem key={repo.id} repo={repo} />
  ))
  
  const pageCount=Math.ceil(repos.length/repoPerPage)
  const changePage = ({selected}) =>{
      setPageNumber(selected)
  }


  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className='card-body'>
        <h2 className='text-3xl my-4 font-bold card-title'>
          Latest Repositories
        </h2>
        {displayRepos}

        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtn"}
          previousClassName={"prevBtn"}
          nextLinkClassName={"nextBtn"}
          activeClassName={"activeBtn"}
        />
      </div>
    </div>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default RepoList
