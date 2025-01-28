import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import appStore from "../utils/appStore";
import { Link } from "react-router-dom";
import { addBook } from "../utils/bookSlice";
import "./addbook.css"

function AddBook(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setformData] = useState({
        title:"",
        author:"",
        category:"",
        description:"",
        rating:""
    });

    const [errors, seterrors] = useState({});

    const validateform = ()=>{
        const newErrors = {}
        if (!formData.title) newErrors.title = "Title is required.";
        if (!formData.author) newErrors.author = "Author is required.";
        if (!formData.category) newErrors.category = "Category is required.";
        if (!formData.description) newErrors.description = "Description is required.";
        if (!formData.rating || formData.rating < 1 || formData.rating > 5) {
            newErrors.rating = "Rating must be between 1 and 5.";
        }
        return newErrors;
    }


    function handlechange(event){
        const {name, value} = event.target
        setformData({...formData, [name]:value})
    }

    function handleSubmit(event){
        event.preventDefault();
        const validationErrors = validateform();
        if(Object.keys(validationErrors).length > 0){
            seterrors(validationErrors);
        }else{
            const newBook = {id: Date.now(), ...formData};
            dispatch(addBook(newBook));
            navigate("/browse")
        }
    }

    return(
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/browse">Browse Books</Link>
            <Link to="/add">Add Book</Link>
        </nav>
        <div className="add-book-container">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit} className="add-book-form">
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handlechange} />
                    {errors.title && <p className="error">{errors.title}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" name="author" value={formData.author} onChange={handlechange} />
                    {errors.author && <p className="error">{errors.author}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="category">category:</label>
                    <select id="category" onChange={handlechange} name="category" value={formData.category}>
                        <option value="">Select a Category</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                    </select>
                    {errors.category && <p className="error">{errors.category}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handlechange} ></textarea>
                    {errors.description && <p className="error>">{errors.description}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating (1-5):</label>
                    <input type="number" id="rating" name="rating" value={formData.rating} min="1" max="5" onChange={handlechange} />
                    {errors.rating && <p className="error">{errors.rating}</p>}
                </div>
                <button type="submit" className="sumbit-btn">Submit</button>
            </form>
        </div>
        </>
    )
}

export default AddBook;