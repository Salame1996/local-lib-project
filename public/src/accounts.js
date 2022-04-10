const { getTotalAccountsCount } = require("./home");

function findAccountById(accounts, id) {

  let result = accounts.find((account) => account.id === id)
 
  return result;

}

function sortAccountsByLastName(accounts) {

let result = accounts.sort((accountA,accountB) => accountA.name.last.toLowerCase () > accountB.name.last.toLowerCase () ? 1 : -1)

return result;
}

function getTotalNumberOfBorrows(account, books) {
  //check if account.id is in books.borowed.id?? id is a array of objects 
  let counter = 0;
  //let compare = account.reduce((account,book) => if account.id === book.borrows.id {count+=1};
  // const total = books.reduce((result, book) => {
  //   result[book.borrows.id] = account.id;
  //   console.log(result);
  //   return result
  // }, {});
 // let total = compare.length;
for(let i = 0; i<books.length;i++){

for(let j = 0;j <books[i].borrows.length;j++){

  if(account.id === books[i].borrows[j].id){
    counter += 1;

}


}


}
return counter;
}


function getBooksPossessedByAccount(account, books, authors) {
  let possesedBooks = [];

  for(let i = 0; i<books.length;i++){
    //   console.log(i)
    for(let j = 0;j <books[i].borrows.length;j++){
      if(account.id === books[i].borrows[j].id){
        if(!books[i].borrows[j].returned){
            for (let k = 0 ; k < authors.length; k++){
              if(authors[k].id === books[i].authorId){
                books[i].author = authors[k]
                possesedBooks.push(books[i])
              }
            }
        }
    }
    }}

return possesedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
