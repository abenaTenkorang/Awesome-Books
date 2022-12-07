/* eslint-disable max-classes-per-file */

const booklist = document.querySelector('.books-list');
const title = document.querySelector('#Title');
const author = document.querySelector('#Author');
const addBtn = document.querySelector('#add-Button');

let booksArr = [];

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
  }
}

window.onload = () => {
  if (localStorage.getItem('booksArr')) {
    booksArr = JSON.parse(localStorage.getItem('booksArr'));
  }
  UI.addBooks();
};

addBtn.addEventListener('click', () => {
  const theBook = {
    title: title.value,
    author: author.value,
  };

  booksArr.push(theBook);
  UI.addBooks();
  localStorage.setItem('booksArr', JSON.stringify(booksArr));
});

ListMenu.addEventListener('click', () => {

  document.querySelector('.booksdata').style.display = 'block';
  document.querySelector('.addbooks').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';

})
AddMenu.addEventListener('click', () => {

  document.querySelector('.booksdata').style.display = 'none';
  document.querySelector('.addbooks').style.display = 'block';
  document.querySelector('.contact').style.display = 'none';

})

ContactMenu.addEventListener('click', () => {

  document.querySelector('.booksdata').style.display = 'none';
  document.querySelector('.addbooks').style.display = 'none';
  document.querySelector('.contact').style.display = 'block';

})
