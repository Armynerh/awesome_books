const books = [];
// Function to display
function displayBooks() {
  const bookContainer = document.getElementById('bookContainer');
  bookContainer.innerHTML = '';

  // Code to remove from the index
  function removeBook(index) {
    books.splice(index, 1);
    displayBooks();
  }

  books.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';

    const titleElement = document.createElement('p');
    titleElement.className = 'title';
    titleElement.textContent = book.title;
    bookDiv.appendChild(titleElement);

    const authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${book.author}`;
    bookDiv.appendChild(authorElement);

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.textContent = 'Remove this Book';
    removeButton.addEventListener('click', () => {
      removeBook(index);
    });
    bookDiv.appendChild(removeButton);

    bookContainer.appendChild(bookDiv);

    const line = document.createElement('hr');
    bookContainer.appendChild(line);
  });
}

function bookadded() {
  const title = document.getElementById('titleInput').value;
  const author = document.getElementById('authorInput').value;

  const book = { title, author };
  books.push(book);

  displayBooks();

  // this is just oto clear the inputs after
  document.getElementById('titleInput').value = '';
  document.getElementById('authorInput').value = '';
}

displayBooks();
bookadded();
