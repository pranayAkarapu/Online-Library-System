import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import BrowseBooks from './components/BrowseBooks.jsx'
import BookDetails from './components/BookDetails.jsx'
import AddBook from './components/AddBook.jsx'
import Error from './components/Error.jsx'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>
  },
  {
    path: '/browse',
    element: <BrowseBooks/>
  },
  {
    path:"/browse/:category",
    element: <BrowseBooks/>
  },
  {
    path: "/book/:id",
    element: <BookDetails/>
  },
  {
    path: "/add",
    element: <AddBook/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={routers}></RouterProvider>
    </Provider>
  </StrictMode>,
)
