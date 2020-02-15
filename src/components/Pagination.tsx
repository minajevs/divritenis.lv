import React from 'react'
import { Link } from 'gatsby'

type Props = {
  pageContext: {
    currentPage: number,
    numPages: number
  },
  pathPrefix: string
}

const Pagination: React.FC<Props> = ({ pageContext, pathPrefix }: any) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <nav className="pagination" role="navigation">
      <div className="navbar navbar-menu">
        {previousPagePath && (
          <div className="navbar-item">
            <Link to={previousPagePath} rel="prev">
              Previous
            </Link>
          </div>
        )}
        {nextPagePath && (
          <div className="navbar-item">
            <Link to={nextPagePath} rel="next">
              Next
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Pagination
