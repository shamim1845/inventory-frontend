import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import "./index.css"
import {Provider} from "react-redux"
import { store } from './redux/store'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast } from "react-toastify";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App/>
<ToastContainer />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
