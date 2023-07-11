javascript;
document.addEventListener('DOMContentLoaded', () => {
  // Check if books exist in local storage
  if (localStorage.getItem('books') === null) {
    // If not, initialize an empty array
    localStorage.setItem('books', JSON.stringify([]));
  } else {
    // If yes, retrieve the books array from local storage
    const books = JSON.parse(localStorage.getItem('books'));
    displayBooks(books);
  }

  // Handle book form submission
  document.getElementById('bookForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('titleInput').value;
    const author = document.getElementById('authorInput').value;
    addBook(title, author);
    document.getElementById('bookForm').reset();
  });

  // Function to add a book to the library
  function addBook(title, author) {
    const book = {
      title,
      author,
    };

    const books = JSON.parse(localStorage.getItem('books'));
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

    displayBooks(books);
  }

  // Function to remove a book from the library
  function removeBook(index) {
    const books = JSON.parse(localStorage.getItem('books'));
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));

    displayBooks(books);
  }

  // Function to display the books in HTML
  function displayBooks(books) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    for (let i = 0; i < books.length; i++) {
      const book = books[i];
      const li = document.createElement('li');
      li.textContent = `${book.title} by ${book.author}`;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.setAttribute('data-index', i);
      removeButton.addEventListener('click', function () {
        removeBook(this.getAttribute('data-index'));
      });

      li.appendChild(removeButton);
      bookList.appendChild(li);
    }
  }
});
