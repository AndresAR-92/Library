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
            </div>
    `;
  }

  libraryEl.innerHTML += html;
}
