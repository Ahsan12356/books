const books = [];
const bookList = document.querySelector('.book_list');
function remove(button) {
  button.target.parentElement.parentElement.remove();
  books.splice(button.target.className.substring(6), 1);

  // again storing the array in local storage
  localStorage.setItem('booksData', JSON.stringify(books));
}

// function to get local storage
function populate() {
  // retrieving local storage
  const stored = localStorage.booksData;
  const prsd = JSON.parse(stored);
  if (stored) {
    for (let i = 0; i < prsd.length; i+=1) {
    // retrieving from local storage
      books.push(prsd[i]);
      const li = document.createElement('li');
      const p = document.createElement('p');
      p.innerHTML = `${books[i].bookTitle}<br>${books[i].bookAuthor}
    <br><button type="button" class="remove${i}" id="remove">Remove</button><hr>`;
      li.appendChild(p);
      bookList.appendChild(li);
      const removeBtn = document.querySelector(`.remove${books.length - 1}`);
      removeBtn.addEventListener('click', remove);
    }
  }
}
document.addEventListener('DOMContentLoaded', populate); // function to call on load


function add() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  const book = {
    bookTitle: title,
    bookAuthor: author,
    bookID: books.length,
  };

  books.push(book);
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.innerHTML = `${books[books.length - 1].bookTitle}<br>${books[books.length - 1].bookAuthor}
    <br><button type="button" class="remove${books.length - 1}" id="remove">Remove</button><hr>`;
  li.appendChild(p);
  bookList.appendChild(li);

  if (typeof (Storage) !== 'undefined') {
  // storing in local storage
  // converting all array data into string
    const json = JSON.stringify(books);
    localStorage.setItem('booksData', json);
  }

  const removeBtn = document.querySelector(`.remove${books.length - 1}`);
  removeBtn.addEventListener('click', remove);
}

const addBtn = document.getElementById('add');
addBtn.addEventListener('click', add);