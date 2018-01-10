import React from 'react';

import './style.css'

const Pagination = props => (
  <ul className="pagination">
    {props.previous && (
      <li className="pagination__previous">
        <a href={props.previous} rel="prev">
          previous
        </a>
      </li>
    )}
    {props.next && (
      <li className="pagination__next">
        <a href={props.next} rel="next">
          next
        </a>
      </li>
    )}
  </ul>
);

export default Pagination;
