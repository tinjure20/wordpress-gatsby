//src/components/Pagination.js
import React from "react"
import { Link } from "gatsby"
import { blogURI } from "../../globals"

const Pagination = ({ pageNumber, hasNextPage }) => {

  if (pageNumber === 1 && !hasNextPage) return null

  return (
    <div style={{ margin: "60px auto 20px", textAlign: "center" }}>
      <div className="nav-links">
        {
          pageNumber > 1 && (
            <Link
              className="prev page-numbers"
              style={{
                padding: "8px 8px 5px 4px",
              }}
              to={pageNumber > 2 ? `${blogURI}/page/${pageNumber - 1}` : `${blogURI}/`}
            >
              ← <span> Previous</span>
            </Link>
          )
        }
        <span aria-current="page" className="page-numbers current" style={{ padding: "5px 10px" }}>
          <span className="meta-nav screen-reader-text"></span>
          {pageNumber}
        </span>

        {
          hasNextPage && (
            <Link
              style={{
                padding: "4px 8px 5px 8px",
              }}
              className="next page-numbers"
              to={`${blogURI}/page/${pageNumber + 1}`
              }
            >
              <span>Next </span> →
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default Pagination

