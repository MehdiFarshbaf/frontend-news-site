import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bulma/css/bulma.css'
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css'
import {AuthContextProvider} from "./context/context";
import {ToastContainer} from "react-toastify";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AuthContextProvider>
            <App/>
            <ToastContainer position="top-right" rtl={true}/>
        </AuthContextProvider>
    </BrowserRouter>
);
