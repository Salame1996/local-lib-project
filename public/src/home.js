function getTotalBooksCount(books) {
  let result = Object.keys(books).length;
  
  return result;
  }
  
  function getTotalAccountsCount(accounts) {
  let result = Object.keys(accounts).length
  
    return result;
  }
  
  function getBooksBorrowedCount(books) {
    const count = books.reduce((acc, book) => acc += book.borrows[0].returned ? 0 : 1, 0)
    return count;  
  }
  
  function getMostCommonGenres(books) {
    let genres = books.reduce((acc, book) => { 
      const genreObj = acc.find(genre => genre.name === book.genre);
      if (genreObj) {
        genreObj.count += 1;
      } else {
        acc.push({name: book.genre, count: 1});
      }
      return acc;
    } , [])
  
  
    genres.sort((a,b) => a.count < b.count ? 1 : -1);
    return genres.slice(0, 5);
    
  }
  
  
  
  
  function getMostPopularBooks(books) {
    let mostPopularBooks = books.reduce((acc, book) => {
      acc.push({name: book.title, count: book.borrows.length});
      return acc;
    }, []);
  
    
  
    mostPopularBooks.sort((a,b) => a.count < b.count ? 1 : -1);
    return mostPopularBooks.slice(0, 5);
  }
  
  function getMostPopularAuthors(books, authors) {
    //adding count to the objects
    const authorsWithCount = authors.map((author) => {return {...author, count: 0}})
  // looping 
  for (const i in books){
    const book = books[i];
  
  const authorObj = authorsWithCount.find((author) => author.id === book.authorId);
  authorObj.count += book.borrows.length;
  
  }
  
  authorsWithCount.sort((a,b) => a.count < b.count ? 1 : -1)
  
  const topFive = authorsWithCount.slice(0,5).map((author) => {return{name:`${author.name.first} ${author.name.last}`, count: author.count}})
  
  
  return topFive
  }
  
  module.exports = {
    getTotalBooksCount,
    getTotalAccountsCount,
    getBooksBorrowedCount,
    getMostCommonGenres,
    getMostPopularBooks,
    getMostPopularAuthors,
  };
