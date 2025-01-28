import { Link } from "react-router-dom"
import {useSelector} from "react-redux"
import appStore from "../utils/appStore";
import { Provider } from "react-redux";
import "./Home.css"

function HomePage(){

    const books = useSelector((state)=>state.books.books);

    const fictionBook = books.find((book)=>book.category == "Fiction");
    const nonFictionBook = books.find((book)=>book.category == "Non-Fiction");
    const scifiBook = books.find((book)=>book.category == "Sci-Fi");

    const popularBooks = [fictionBook, nonFictionBook, scifiBook]
    return(
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/browse">Browse Books</Link>
            <Link to="/add">Add Book</Link>
        </nav>
        <h2 className="wel-head">Welcome to the Book Library</h2>
        <div className="categories">
            <ul>
                <li><Link to="/browse">Fiction</Link></li>
                <li><Link to="/browse">Non-Fiction</Link></li>
                <li><Link to="/browse">Sci-Fi</Link></li>
            </ul>
        </div>
        <div className="pop-Books">
            <h2 className="pop-head">Popular Books</h2>
            <div className="books-container">
                {popularBooks.map((book)=>(
                    <div key={book.id} className="book-card">
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <p>Category: {book.category}</p>
                    </div>
                ))}
            </div>
            <div className="view-more">
                <Link to="/browse">View More</Link>
            </div>
        </div>
        </>
    )
}
export default HomePage