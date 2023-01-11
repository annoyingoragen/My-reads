import { Link } from 'react-router-dom';
import Shelf from './Shelf';
const BookShelf=({bookslist,onChangeBookshelf})=>{
  const wanttoreadbooks = bookslist.filter((b)=>b.shelf==='wantToRead')
  const readbooks=bookslist.filter((b)=>b.shelf==='read')
  const reading=bookslist.filter((b)=>b.shelf==='currentlyReading')
return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
               <Shelf books={reading} ChangeBookshelf= {onChangeBookshelf} />
         
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            <Shelf books={wanttoreadbooks} ChangeBookshelf= {onChangeBookshelf} />
            </ol>
          </div>
        </div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            <Shelf books={readbooks} ChangeBookshelf= {onChangeBookshelf} />
            </ol>
          </div>
        </div>

       
      </div>
    </div>
    <div className="open-search">
                <Link to="/search" >
                            Add a book
                </Link>
      {/* <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a> */}
    </div>
  </div>
)
};

export default BookShelf;