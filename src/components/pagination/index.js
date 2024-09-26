import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useSearchParams } from 'react-router-dom';
import './style.css';
import { PaginationHandler } from './pagination-handler';

function Pagination(props) {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
    window.scrollTo(0, 0);
    props.onPageChange(page);
  }, [searchParams.get('page')]);

  const pagination = PaginationHandler(props.page, props.pages);

  return (
    <div className="Pagination">
      {pagination.map((page, index) =>
        page === '...' ? (
          <span key={page + index} className="Pagination-skipper">
            {page}
          </span>
        ) : (
          <Link
            to={`/?page=${page}`}
            key={page + index}
            className={page === props.page ? 'Pagination-item active' : 'Pagination-item'}
            onClick={() => props.onPageChange(page)}
          >
            {page}
          </Link>
        ),
      )}
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export { Pagination };
