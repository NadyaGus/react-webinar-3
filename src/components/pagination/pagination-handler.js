function PaginationHandler(currentPage, pages) {
  const pagination = [];

  if (pages < 2) {
    return [1];
  } else if (currentPage === 3) {
    for (let i = 1; i < 5; i++) {
      pagination.push(i);
    }
    pagination.push('...');
    pagination.push(pages);
  } else if (currentPage < 4) {
    for (let i = 1; i < 4; i++) {
      pagination.push(i);
    }
    pagination.push('...');
    pagination.push(pages);
  } else if (4 <= currentPage && currentPage < pages - 2) {
    pagination.push(1);
    pagination.push('...');
    for (let i = currentPage - 1; i < currentPage + 2; i++) {
      pagination.push(i);
    }
    pagination.push('...');
    pagination.push(pages);
  } else if (currentPage === pages - 2) {
    pagination.push(1);
    pagination.push('...');
    for (let i = pages - 3; i <= pages; i++) {
      pagination.push(i);
    }
  } else if (currentPage > pages - 2) {
    pagination.push(1);
    pagination.push('...');
    for (let i = pages - 2; i <= pages; i++) {
      pagination.push(i);
    }
  }

  return pagination;
}

export { PaginationHandler };
