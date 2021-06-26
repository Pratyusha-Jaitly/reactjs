import React from 'react';
 
function BooksList () {
   const [books, updateBooks] = React.useState([]);
 
   React.useEffect(function effectFunction() {
       fetch('https://the-fake-harry-potter-api.com/books')
           .then(response => response.json())
           .then(({ data: books }) => {
               updateBooks(books);
           });
   }, []);
   
   return (
   <ul>
      { books.map(book => (
        <li key={book.id}>{book.name}</li>  
       ))
      }
   </ul>
   );
}