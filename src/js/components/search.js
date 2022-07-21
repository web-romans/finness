const search = document.querySelector('[data-search]');
const searchClose = document.querySelector('[data-search-close]');

import { closeMenu } from '../functions/burger';

let isSearch = false;

export const checkSearch = () => {
  return isSearch;
}

if (search) {
  const searchInput = search.querySelector('[data-search-input]');
  const searchBtn = search.querySelector('[data-search-btn]');
  if (searchBtn) {
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      closeMenu();
      searchClose.classList.add('burger--active');
      search.classList.remove('disable');
      searchInput.focus();
      isSearch = true;
      if (searchClose) {
        searchClose.addEventListener("click", (e) => {
          e.preventDefault();
          searchClose.classList.remove('burger--active');
          search.classList.add('disable');
          isSearch = false;
        }, { once: true });
      }
    })
  }
}
