class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }

  addFavoriteBook(bookName) {
    !this.favoriteBooks.includes(bookName) && this.favoriteBooks.push(bookName);
  }

  printFavoriteBook() {
    console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
    console.table(this.favoriteBooks);
  }
}

function loadBooks(theBookShelf) {
  fakeAjax(BOOK_API, function onBooks(bookNames) {
    bookNames.forEach((bookName) => {
      theBookShelf.addFavoriteBook(bookName);
    });
    theBookShelf.printFavoriteBook();
  });
}

var BOOK_API = "https://some.url/api";

function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Exprectations",
      "You Dont't Know JS",
    ]);
  }, 500);
}

var myBooks = new Bookshelf();
loadBooks(myBooks);
