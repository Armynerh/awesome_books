let books = [];

/* Create function that runs when document loads to populate books array/collection with values from local storage
*/

  

// Function to display
function displayBooks() {
  const bookContainer = document.getElementById('bookContainer');
  bookContainer.innerHTML = '';

  // Code to remove from the index
  function removeBook(index) {
    // remove book from collection using filter by id
    books.splice(index, 1);
    // remove book from loclStorage using filter by id
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
  const id = `${books.length - 1}-${title}`;

  const book = { title, author, id };
  books.push(book);
  // Implement ME: Push to local storage
  savedFormData()
  displayBooks();
  

  // this is just oto clear the inputs after
  document.getElementById('titleInput').value = '';
  document.getElementById('authorInput').value = '';
}

displayBooks();
bookadded();
