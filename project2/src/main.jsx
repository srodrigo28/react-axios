import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './views/Home.jsx'
import { Cliente } from './views/Cliente'
import NewPost from './views/NewPost.jsx'
import { Produto } from './views/Produto/index.jsx'


const router = createBrowserRouter([
  {
    element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/new", element: <NewPost /> },
        { path: "/cliente", element: <Cliente /> },
        { path: "/produto", element: <Produto/> },
      ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
