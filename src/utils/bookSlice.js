import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState:{ 
    books: [
    // Fiction Books
      { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', description: 'A novel set in the 1920s.', rating: 4.5 },
      { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', description: 'A story of racial injustice in the American South.', rating: 4.9 },
      { id: 3, title: '1984', author: 'George Orwell', category: 'Fiction', description: 'A dystopian novel about totalitarian government surveillance.', rating: 4.7 },
  
    // Non-Fiction Books
      { id: 4, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Non-Fiction', description: 'A history of humankind.', rating: 4.8 },
      { id: 5, title: 'Educated', author: 'Tara Westover', category: 'Non-Fiction', description: 'A memoir about growing up in a strict and isolated family.', rating: 4.6 },
      { id: 6, title: 'The Immortal Life of Henrietta Lacks', author: 'Rebecca Skloot', category: 'Non-Fiction', description: 'The story of a woman whose cells were used in groundbreaking medical research.', rating: 4.7 },
  
    // Sci-Fi Books
      { id: 7, title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi', description: 'A sci-fi adventure on a desert planet.', rating: 4.7 },
      { id: 8, title: 'Neuromancer', author: 'William Gibson', category: 'Sci-Fi', description: 'A cyberpunk novel about hackers and artificial intelligence.', rating: 4.6 },
      { id: 9, title: 'The Martian', author: 'Andy Weir', category: 'Sci-Fi', description: 'A stranded astronaut must survive on Mars.', rating: 4.8 }
  ]},

  reducers:{
    addBook(state, action) {
      state.books.push(action.payload);
    }
  }
});

export const{addBook} = booksSlice.actions;

export default booksSlice.reducer;