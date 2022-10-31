function add() {
  const books = [];
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  const book = {
    bookTitle: title,
    bookAuthor: author,
  };

  books.push(book);
  const bookList = document.querySelector('.book_list');
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.innerHTML = `${books[books.length - 1].bookTitle}<br>${books[books.length - 1].bookAuthor}
    <br><button type="button" class="${books.length - 1}" id="remove">Remove</button><hr>`;
  li.appendChild(p);
  bookList.appendChild(li);

  // storing in local storage
  // converting all array data into string
  const json = JSON.stringify(books[books.length - 1]);
  localStorage.setItem('formData', json);

  // retrieving from local storage
  const stored = localStorage.getItem('formData');
  const prsd = JSON.parse(stored);
  console.log(prsd);
}

const addBtn = document.getElementById('add');
addBtn.addEventListener('click', add);