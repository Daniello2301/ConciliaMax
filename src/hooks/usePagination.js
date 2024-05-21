import { useMemo } from "react";

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    // Our implementation logic will go here

    const totalPageCount = Math.ceil(totalCount / pageSize);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
    Case 1:
    If the total page numbers are less than the page numbers we want to show in our
    pagination component, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
        return range(1, totalPageCount);
    }

    // Calculate left and right sibling index limits
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
        currentPage + siblingCount,
        totalPageCount
    );

    // We do not want to show dots if there is only one position left
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    // Case 2: We do not show the left dots

    if (!shouldShowLeftDots && shouldShowRightDots) {
        let leftItemCount = 3 + 2 * siblingCount;
        let leftRange = range(1, leftItemCount);
        return [...leftRange, "...", totalPageCount];
    }


    // Case 3: We do not show the right dots
    if (shouldShowLeftDots && !shouldShowRightDots) {
        let rightItemCount = 3 + 2 * siblingCount;
        let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
        return [firstPageIndex, "...", ...rightRange];
    }


    // Case 4: We show the full pagination range
    if (shouldShowLeftDots && shouldShowRightDots) {
        let middleRange = range(leftSiblingIndex, rightSiblingIndex);
        return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex];
    }

  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};

 // range
 const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
}
