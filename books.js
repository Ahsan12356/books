const books = [];

function remove(button) {
  button.target.parentElement.parentElement.remove();
  delete books[button.target.className.substring(6)];
}

function add() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  const book = {
    bookTitle: title,
    bookAuthor: author,
    bookID: books.length,
  };

  books.push(book);
  const bookList = document.querySelector('.book_list');
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.innerHTML = `${books[books.length - 1].bookTitle}<br>${books[books.length - 1].bookAuthor}
    <br><button type="button" class="remove${books.length - 1}" id="remove">Remove</button><hr>`;
  li.appendChild(p);
  bookList.appendChild(li);

  // storing in local storage
  // converting all array data into string
  const json = JSON.stringify(books);
  localStorage.formData = json;

  // retrieving from local storage
  const stored = localStorage.getItem('formData');
  const prsd = JSON.parse(stored);

  const removeBtn = document.querySelector(`.remove${books.length - 1}`);
  removeBtn.addEventListener('click', remove);
}

const addBtn = document.getElementById('add');
addBtn.addEventListener('click', add);