var books = [];

// codes to preserve data in the browser
window.onload = function() {
    var storedBooks = localStorage.getItem('books');
    if (storedBooks) {
        books = JSON.parse(storedBooks);
        displayBooks();
    }
};

function Bookadded() {
    var title = document.getElementById("titleInput").value;
    var author = document.getElementById("authorInput").value;
    
    var book = { title: title, author: author };
    books.push(book);
    
    displayBooks();
    
    // this is just oto clear the inputs after
    document.getElementById("titleInput").value = "";
    document.getElementById("authorInput").value = "";

     // this wil be to Save books to localStorage
     localStorage.setItem('books', JSON.stringify(books));
    }

    // Code to remove from the index
function removeBook(index) {
        books.splice(index, 1);
        displayBooks();

         // this wil be to Save books to localStorage
     localStorage.setItem('books', JSON.stringify(books));
    }

    // Function to displauy
function displayBooks() {
        var bookContainer = document.getElementById("bookContainer");
        bookContainer.innerHTML = "";

        books.forEach(function(book, index) {
            var bookDiv = document.createElement("div");
            bookDiv.className = "book";

            var titleElement = document.createElement("p");
            titleElement.className = "title";
            titleElement.textContent = book.title;
            bookDiv.appendChild(titleElement);

            var authorElement = document.createElement("p");
            authorElement.textContent = "Author: " + book.author;
            bookDiv.appendChild(authorElement);

            var removeButton = document.createElement("button");
            removeButton.className = "remove-button";
            removeButton.textContent = "Remove this Book";
            removeButton.addEventListener("click", function() {
                removeBook(index);
            });
            bookDiv.appendChild(removeButton);

            bookContainer.appendChild(bookDiv);

            var line = document.createElement("hr");
            bookContainer.appendChild(line);
        });
    }

