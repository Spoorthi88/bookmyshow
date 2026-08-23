
// import { createRoot } from 'react-dom/client'
// import {BrowsenrRouter} from 'react-router-dom'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <BrowsenrRouter>
//   <App />
//   </BrowsenrRouter>
  
  

// )

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
