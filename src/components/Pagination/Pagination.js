/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { range } from "lodash";

const Pagination = ({ totalPros, currentPage, perPage, onPageChange }) => {
  const pageCount = Math.ceil(totalPros / perPage);
  if (pageCount === 1) return null;

  const pages = range(1, pageCount + 1);

  return (
    <nav style={{height:"100px"}} className="mb-5 mt-5" aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              style={{ cursor: "pointer" }}
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
