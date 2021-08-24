var favoriteBooks = [];

// const addFavoriteBook = (book) => {
//   const constainsGreat = book.toLowerCase().includes("great");
//   if (!constainsGreat) favoriteBooks.push(book);
// };

const printFavoritBooks = () => {
  console.log(`Favorites Books: ${favoriteBooks.length}`);
  favoriteBooks.forEach((book) => console.log(book));
};

const addFavoriteBook = (book) => {
  !book.toLowerCase().includes("great") && favoriteBooks.push(book);
};

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Dont't Know JS");

printFavoritBooks();
