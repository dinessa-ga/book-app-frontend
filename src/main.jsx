import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import BooksList from './components/BookList.jsx'
import store from './store/store.js'
import "./tailwind.css"; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}></Provider>
   <BooksList></BooksList>
  </React.StrictMode>,
)
