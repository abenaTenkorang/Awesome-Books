const booklist = document.querySelector('.books-list');
const title = document.querySelector('#Title');
const author = document.querySelector('#Author');
const addBtn = document.querySelector('#Add-Button');

let booksArr = [];

console.log(booksArr);
function booklister2() {
  booklist.innerHTML = '';
  for (let i = 0; i < booksArr.length; i++) {
    booklist.innerHTML += `
        <div class="book title">
        <p>${booksArr[i].title}</p>
        </div>
        <div class="book author">
        <p>${booksArr[i].author}</p>
        </div>
        <button class="button" onclick="remove(${i})">remove</button>
            <hr/>
        `;
    // title.value = '';
    // author.value = '';
  }
}
function remove(index) {
  booksArr.splice(index, 1);
  booklister2();
  localStorage.setItem('booksArr', JSON.stringify(booksArr));
}

window.onload = () => {
  if (localStorage.getItem('booksArr')) {
    booksArr = JSON.parse(localStorage.getItem('booksArr'));
  }
  booklister2();
};

addBtn.addEventListener('click', () => {
  const theBook = {
    title: title.value,
    author: author.value,
  };
  console.log(booksArr);
  booksArr.push(theBook);
  booklister2();
  localStorage.setItem('booksArr', JSON.stringify(booksArr));
});