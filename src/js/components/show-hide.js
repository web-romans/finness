
import { on } from "../functions/on";

on('.page__body', 'click', '.filter__overlay', () => closeFilters());

on('.page__body', 'click', '[data-filter-close]', () => closeFilters());

on('.page__body', 'click', '[data-show-hide]', function (e) {
  const el = this;
  const content = el.querySelector('[data-hide-content]');
  const btn = el.querySelector('[data-hide-btn]');

  if (!btn) {
    if (checkDontClose(el)) closeAll(el);
    if (content) content.classList.toggle('hide');
  }

});

on('.page__body', 'click', '[data-hide-btn]', function (i) {
  const elem = this;
  const content = elem.parentNode.querySelector('[data-hide-content]') ? elem.parentNode.querySelector('[data-hide-content]') : elem.parentNode.parentNode.querySelector('[data-hide-content]');

  if (checkDontClose(elem)) closeAll(elem);
  if (content) content.classList.toggle('hide');
  elem.classList.toggle('open');

  if (content.getAttribute('data-hide-content') === 'filter') {
    const overlay = document.querySelector('.filter__overlay');
    if (overlay) overlay.classList.add('open');
    content.classList.remove('hide');
  }

});

function checkDontClose(el) {
  return el.getAttribute('data-show-hide') !== "dontCloseAll" ? true : false;
}

function closeAll(cur) {
  const btns = document.querySelectorAll('[data-show-hide]');

  btns.forEach(el => {
    if (el !== cur) {
      const content = el.querySelector('[data-hide-content]');
      if (content && checkDontClose(el)) content.classList.add('hide');
    }
  })
}

function closeFilters() {
  const filters = document.querySelectorAll('[data-hide-content]');
  const overlay = document.querySelector('.filter__overlay');

  if (filters) {
    filters.forEach((filterEl) => {
      if (filterEl.getAttribute('data-hide-content') === 'filter') {
        const filterBtn = filterEl.parentNode.querySelector('.filter__btn');
        filterEl.classList.add('hide');
        if (filterBtn) filterBtn.classList.remove('open');
      }
    })
  }

  if (overlay) overlay.classList.remove('open');
}
