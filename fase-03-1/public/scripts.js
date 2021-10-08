const currentPage = location.pathname;
const menuItems = document.querySelectorAll('header .links a');

for (item of menuItems) {
  if (currentPage.includes(item.getAttribute('href'))) {
    item.classList.add('active');
  }
}

// Paginação

let totalPages = 20,
  selectedPage = 15,
  pages = [];

for (let currentPage = 0; currentPage <= totalPages; currentPage++) {
  const firstAndLastPage = currentPage == 1 || currentPage == totalPages;
  const pagesAfterSelectedPage = currentPage <= selectedPage + 2;
  const pagesBeforeSelectedPage = currentPage >= selectedPage - 2;

  if (firstAndLastPage || (pagesBeforeSelectedPage && pagesAfterSelectedPage)) {
    pages.push(currentPage);
  }
}

console.log(pages);
