import { searchController } from "../controllers/searchController";
import { createElement } from "../utils/createElement";

export const search = createElement('div', {
  className: 'search',
});

export const searchToggle = () => {
  if (search.classList.contains('search--show')) {
    search.classList.remove('search--show');
    form.reset();
  } else {
    search.classList.add('search--show');
  }
};

const container = createElement('div', {
  className: 'container',
}, {
  parent: search,
});

const form = createElement('form', {
  className: 'search__form',
}, {
  parent: container, cb: searchController,
});

const inputSearch = createElement('input', {
  className: 'search__input',
  type: 'search',
  name: 'search',
  placeholder: 'Найти...',
}, {
  parent: form,
});

createElement('button', {
  className: 'search__btn',
  type: 'submit',
  textContent: 'Искать'
}, {
  parent: form,
});

const searchError = createElement('p', {
  className: 'search__error',
  textContent: 'Введите строку для поиска',
  _show: true,
}, {
  parent: form,
});

export const showSearchError = () => {
  searchError.classList.add('search__error--show');
  inputSearch.classList.add('search__input--error');

  clearTimeout(searchError._showTimer);

  searchError._showTimer = setTimeout(() => {
    searchError.classList.remove('search__error--show');
    inputSearch.classList.remove('search__input--error');
  }, 3000);
}