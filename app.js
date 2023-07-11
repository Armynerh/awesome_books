let books = [];

// displaying books details
function displayBooks() {
  const bookContainer = document.getElementById('bookContainer');
  bookContainer.innerHTML = '';

  books.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';

    const titleElement = document.createElement('p');
    titleElement.className = 'book-details';
    titleElement.textContent = `Title: ${book.title}`;
    bookDiv.appendChild(titleElement);

    const authorElement = document.createElement('p');
    authorElement.className = 'book-details';
    authorElement.textContent = `Author: ${book.author}`;
    bookDiv.appendChild(authorElement);

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeBook(index); // eslint-disable-line
    });
    bookDiv.appendChild(removeButton);

    bookContainer.appendChild(bookDiv);

    const line = document.createElement('hr');
    bookContainer.appendChild(line);
  });
}

// this function is to add and is link with the hmtl button
function bookadded() { // eslint-disable-line
  const title = document.getElementById('titleInput').value;
  const author = document.getElementById('authorInput').value;

  const book = { title, author };
  books.push(book);

  displayBooks();

  document.getElementById('titleInput').value = '';
  document.getElementById('authorInput').value = '';

  localStorage.setItem('books', JSON.stringify(books));
}

// this function is here to remove
function removeBook(index) {
  books.splice(index, 1);
  displayBooks();
  localStorage.setItem('books', JSON.stringify(books));
}

// Load books from localStorage on page load
window.onload = function () { // eslint-disable-line
  const storedBooks = localStorage.getItem('books');
  if (storedBooks) {
    books = JSON.parse(storedBooks);
    displayBooks();
  }
};