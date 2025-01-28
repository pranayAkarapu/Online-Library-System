import { useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./browsebooks.css";

function BrowseBooks(){

    const {category} = useParams();
    const books = useSelector((state)=> state.books.books);

    const [searchInput, setSearchInput] = useState("");
    const [searched,  setSearched] = useState(false)

    const filteredBooks = category? books.filter((book) => book.category == category): books;

    const searchedBooks = filteredBooks.filter(
        (book) => book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        book.author.toLowerCase().includes(searchInput.toLowerCase())
    )

    const displayBooks = searched ? searchedBooks : filteredBooks;

    function handleSearch(){
        setSearched(searchInput)
    }

    return(
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/browse">Browse Books</Link>
                <Link to="/add">Add Book</Link>
            </nav>
            <h2 className="browse-head">Browse Books</h2>
            <div className="search-bar">
                <input type="text" placeholder="search by title or author" onChange={(e)=>setSearchInput(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="books-list">
                {displayBooks.map((book)=>(
                    <div key={book.id} className="book-card">
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <p>Category: {book.category}</p>
                        <Link to={`/book/${book.id}`} className="view-details">View Book</Link>
                    </div>
                ))}
            </div>
            {displayBooks.length==0 && <p>No books found</p>}
        </>
    )
}
export default BrowseBooks