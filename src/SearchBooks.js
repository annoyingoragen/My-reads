import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import * as BooksApi from './BooksAPI'
import Shelf from './Shelf';

const SearchBooks=({bookslist,onChangeBookshelf})=>{
const [searchtext,setSearchText]= useState('');
const [searchedbooks,setSearchedBooks]= useState([]);
 
      
  useEffect(() => {
    console.log(searchtext)
    if (searchtext === "") {
      console.log('empty')
      setSearchedBooks([])
       return}
    const getBooks = async () => {
          
      const res = await BooksApi.search(searchtext,10);
      // console.log(res)
      
      setSearchedBooks(res);
    };
    getBooks(); // fecthPosts is called each time space changed
  }, [searchtext]);

  const updateSearchQuery = (searchtext) => {
    setSearchText(searchtext);
    };
    // console.log(searchedbooks)

  //   useEffect(() => {
  //     const getBooks = async (searchtext) => {
  //     const res = await BooksApi.search(searchtext,10);
  //     console.log(res)
      
  //     setSearchedBooks(res);
  //   };
  //   getBooks();
  // }, []);

    // const showingbooks = searchtext === '' ? []:bookslist.filter((b)=>b.title.toLowerCase().includes(searchtext.toLowerCase()))
    // console.log(showingbooks)
    let showingbooks = searchedbooks === undefined || searchtext===''? []:searchedbooks
    // console.log(showingbooks)
    if (Array.isArray(showingbooks)===true)
    {
      showingbooks=showingbooks.filter((book)=>{
        // console.log(book)
        let c=bookslist.filter((b)=>{
          if (b.id===book.id){
            console.log(book.title)
            console.log(b.shelf)
            book.shelf=b.shelf
            return book

          }
          // return book
        })
        
        if (c[0]) book=c[0]
        // console.log(book.id)
        if (book.authors!==undefined && book.imageLinks!==undefined)
        {
          return book
        }
      })
    }
   
 
    return(
      
        <div className="search-books">
        <div className="search-books-bar">
        <Link className="close-search" to="/" >
          Close
        </Link>
       
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={searchtext}
              onChange={(event)=>updateSearchQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
        {  Array.isArray(showingbooks)===true &&showingbooks.length!==0 &&(
          <Shelf books={showingbooks  }  ChangeBookshelf= {onChangeBookshelf}/>)}
        </div>
      </div>
    );
}

export default SearchBooks;