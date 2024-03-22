'use strict';

const TheFinalEmpire = new Book(
  'The Final Empire',
  'Brandon Sanderson',
  595,
  true
);
const Warbreaker = new Book('Warbreaker', 'Brandon Sanderson', 520, false);
const TheGraveyardBook = new Book(
  'The Graveyard Book',
  'Neil Gaiman',
  300,
  true
);

const books = [TheFinalEmpire, Warbreaker, TheGraveyardBook];

const libraryEl = document.querySelector('.library');

// MODAL
const addBtnEl = document.getElementById('addBtn');
const modalEl = document.querySelector('.book-modal');
const formEl = document.querySelector('form');
const closeBtn = document.querySelector('#closeBtn');
const confirmBtn = modalEl.querySelector('#confirmBtn');

const titleInput = document.querySelector('#book-title');
const authorInput = document.querySelector('#book-author');
const pagesInput = document.querySelector('#book-pages');
const readedInput = document.querySelector('#book-readed');

addBtnEl.addEventListener('click', () => {
  modalEl.showModal();
});

closeBtn.addEventListener('click', () => {
  modalEl.close();
});

confirmBtn.addEventListener('click', confirmBook);

displayBooks();

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? 'readed' : 'not yet readed'
    }`;
  };
}

function displayBooks() {
  libraryEl.innerHTML = '';
  let html = '';
  for (let book in books) {
    html += `<div class="grid-el book">
                <p class="book-title">Title: ${books[book].title}<p>
                <p class="book-author">Author: ${books[book].author}</p>
                <p class="book-pages"># Pages: ${books[book].pages}</p>
                <p class="book-readed">Readed: ${
                  books[book].read
                    ? '<span class="check">✔</span>'
                    : '<span class="uncheck">✖</span>'
                }</p>
                <div class="bookBtns">
                  <button data-index="${books.indexOf(
                    books[book]
                  )}" class="deleteBtn">Delete</button>
                  <button data-index="${books.indexOf(
                    books[book]
                  )}" class="readedBtn">${
      books[book].read ? 'Uncheck' : 'Check'
    }</button>
                </div>
            </div>
    `;
  }

  libraryEl.innerHTML += html;

  const deleteBtns = document.querySelectorAll('.deleteBtn');
  const readBtns = document.querySelectorAll('.readedBtn');

  deleteBtns.forEach(btn => btn.addEventListener('click', deleteBook));
  readBtns.forEach(btn => btn.addEventListener('click', toogleRead));
}

function addBook(title, author, pages, readed) {
  books.push(new Book(title, author, pages, readed));
  displayBooks();
}

function confirmBook() {
  if (formEl.checkValidity()) {
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readedInput.checked;

    addBook(title, author, pages, read);

    modalEl.close();
    formEl.reset();
  }
}

function deleteBook(e) {
  books.splice(e.target.dataset.index, 1);
  displayBooks();
}

function toogleRead(e) {
  books[e.target.dataset.index].read = !books[e.target.dataset.index].read;
  displayBooks();
}
