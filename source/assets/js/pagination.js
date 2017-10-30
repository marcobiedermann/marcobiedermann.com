function pagination() {
  const paginationPrevious = document.querySelector('.pagination__previous a');
  const paginationNext = document.querySelector('.pagination__next a');

  window.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
      case 37:
        if (paginationPrevious) {
          window.location = paginationPrevious.href;
        }
        break;
      case 39:
        if (paginationNext) {
          window.location = paginationNext.href;
        }
        break;
    }
  });
}

export default pagination;
