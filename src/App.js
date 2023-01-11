import "./App.css";

import BookShelf from "./BookShelf";
import SearchBooks from "./SearchBooks";
import { Route,Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as BooksApi from './BooksAPI'

function App() {
  
  const [books,setBooks]=useState([]);

  const updateBook = (book,shelf) => {
   
    BooksApi.update(book,shelf)
  
    let isoldbook=false;
    setBooks(books.map((b)=>
    {
      if (b.id===book.id)
      { 
        isoldbook=true
        book.shelf=shelf
         return book;

      }
       return b;
    }
  
    
    ));
    if (!isoldbook)
    {
      book.shelf=shelf
      setBooks(books.concat(book))
    }
    console.log(books)

  }
  
  
  useEffect(() => {
  
    const getBooks = async () => {
    
      const res = await BooksApi.getAll();
      console.log(res)
      
      setBooks(res);
    };
  
    getBooks();
    
  },[]);
  // console.log(books)
  return (
   
    <Routes>
      <Route exact path='/' 
      
      element={   
      
       <BookShelf
       bookslist={books}
       onChangeBookshelf={updateBook}  />
      }
      />

      <Route  path='/search' 
            
            element={   
              <SearchBooks 
              bookslist={books} 
              onChangeBookshelf={updateBook}
             />
            }
            />
      
      
    </Routes>
   
    // </div>
  );
}

export default App;
