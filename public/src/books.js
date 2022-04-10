function findAuthorById(authors, id) {
let result = authors.find((author) => author.id === id)
return result;
}

function findBookById(books, id) {
let result = books.find((book) => book.id === id)

return result;
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter((book) => book.borrows.some(borrow => !borrow.returned));
  const returnedBooks = books.filter((book) => book.borrows.every(borrow => borrow.returned));
  return [borrowedBooks, returnedBooks];;
}

function getBorrowersForBook(book, accounts) {
  const borrows = book.borrows.map(borrow => borrow);
  const borrowedAccounts = accounts.filter(account => !!borrows.find(borrow => borrow.id === account.id));

  const borrowersForBooks = borrowedAccounts.map(account => { 
    const borrowObj = borrows.find(borrow => borrow.id === account.id);
    return {...account, returned: borrowObj.returned} 
  });

  return borrowersForBooks;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
