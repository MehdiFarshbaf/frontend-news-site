import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bulma/css/bulma.css'
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css'
import {AuthContextProvider} from "./context/context";
import {ToastContainer} from "react-toastify";
import {BrowserRouter, unstable_HistoryRouter as HistoryRouter} from "react-router-dom";
import {history} from "./helper/myHistory";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter>
    <HistoryRouter history={history}>
        <AuthContextProvider>
            <App/>
            <ToastContainer position="top-right" rtl={true}/>
        </AuthContextProvider>
    </HistoryRouter>

    // </BrowserRouter>
);
