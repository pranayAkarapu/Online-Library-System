import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./bookdetails.css"

function BookDetails(){
    const { id } = useParams()
    const books = useSelector((state)=> state.books.books);

    const book = books.find((book)=> book.id == id);

    if(!book){
        return <p>Book Not Found!</p>
    }
    return(
        <>
            <nav className="navbar">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/browse" className="nav-link">Browse Books</Link>
                <Link to="/add" className="nav-link">Add Book</Link>
            </nav>
            <div className="book-details">
                <h2 className="details-header">Book Details</h2>
                <div className="details-card">
                    <h3>Title: {book.title}</h3>
                    <p>Author: {book.author}</p>
                    <p>Category: {book.category}</p>
                    <p>Description: {book.description}</p>
                    <p>Rating: {book.rating}</p>
                </div>
            </div>
        </>
       
    )
}

export default BookDetails