/* eslint-disable max-classes-per-file */
const date = new Date();
const showDateAndTime = document.querySelector('.date-time');
const Title = document.querySelector('.title');
const ListMenu = document.querySelector('.list');
const AddMenu = document.querySelector('.add');
const ContactMenu = document.querySelector('.contactmenu');
const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

const booklist = document.querySelector('.books-list');
const title = document.querySelector('#Title');
const author = document.querySelector('#Author');
const addBtn = document.querySelector('#add-Button');

let booksArr = [];

showDateAndTime.innerHTML = `${date.toDateString()}, ${time}`;

// eslint-disable-next-line no-unused-vars
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// UI Class

class UI {
  static addBooks() {
    booklist.innerHTML = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < booksArr.length; i++) {
      booklist.innerHTML += `
      <div class="title-author"> 
        <p class="Title">"${booksArr[i].title}" by  ${booksArr[i].author}</p>
        <button class="button" onclick="UI.remove(${i})">remove</button>
      </div>
     `;
      title.value = '';
      author.value = '';
      title.focus();
    }
  }

  static remove(index) {
    booksArr.splice(index, 1);
    UI.addBooks();
    localStorage.setItem('booksArr', JSON.stringify(booksArr));
    if (booklist.innerHTML === '') {
      document.querySelector('.emptymsg').style.display = 'block';
      booklist.style.border = 'none';
    }
  }
}

window.onload = () => {
  if (booklist.innerHTML === '') {
    document.querySelector('.emptymsg').style.display = 'block';
    booklist.style.border = 'none';
  } else {
    document.querySelector('.emptymsg').style.display = 'none';
  }
  if (localStorage.getItem('booksArr')) {
    booksArr = JSON.parse(localStorage.getItem('booksArr'));
    booklist.style.border = '1px solid black';
    document.querySelector('.emptymsg').style.display = 'none';
  }
  UI.addBooks();
};

// add

addBtn.addEventListener('click', (e) => {
  if (Title.value === '' || author.value === '') {
    e.preventDefault();
  } else {
    const theBook = {
      title: title.value,
      author: author.value,
    };
    booksArr.push(theBook);
    UI.addBooks();
    localStorage.setItem('booksArr', JSON.stringify(booksArr));
    document.querySelector('.emptymsg').style.display = 'none';
    booklist.style.border = '1px solid black';
  }
});

ListMenu.addEventListener('click', () => {
  document.querySelector('.awesome-books').style.display = 'block';
  document.querySelector('.new-book').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
});
AddMenu.addEventListener('click', () => {
  document.querySelector('.awesome-books').style.display = 'none';
  document.querySelector('.new-book').style.display = 'block';
  document.querySelector('.contact').style.display = 'none';
});

ContactMenu.addEventListener('click', () => {
  document.querySelector('.awesome-books').style.display = 'none';
  document.querySelector('.new-book').style.display = 'none';
  document.querySelector('.contact').style.display = 'block';
});
