import { useState } from "react";
import classNames from "classnames";
import { RangeArray } from "../helpers/RangeArray";

export const PageNumbers = ({ currentPage, total, limit, onPageChange }) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = RangeArray(pagesCount);

  //   const liClass = classNames({
  //     "page-item": true,
  //     active: page === currentPage,
  //   });
  return (
    <ul className="txt-cntr flex-row-perm">
      {pages.map((page) => (
        <li
          key={page}
          className="bg-green mg-sm sd-pd-sm brd-rnd shadow"
          onClick={() => onPageChange(page)}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};
